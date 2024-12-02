import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, list: [...state.list, action.payload] };

    case "DELETE":
      return {
        ...state,
        list: state.list.filter((item, index) => index !== action.payload),
      };

    case "TOGGLE":
      return {
        ...state,
        list: state.list.map((item, index) =>
          index === action.payload
            ? { ...item, iscompleted: !item.iscompleted }
            : item
        ),
      };

    default:
      return state;
  }
};

const initialState = {
  list: [],
};

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      dispatch({ type: "ADD", payload: { text: todo, iscompleted: false } });
      setTodo("");
    }
  };

  return (
    <div className="h-max flex flex-col items-center  bg-gray-100 py-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Todo List
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 mb-4"
        >
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Add
          </button>
        </form>
        {state.list.length > 0 ? (
          <div className="space-y-3">
            {state.list.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-md bg-gray-50 shadow-sm"
              >
                <h3
                  className={`flex-1 ${
                    item.iscompleted
                      ? "line-through text-gray-500"
                      : "text-gray-800"
                  }`}
                >
                  {item.text}
                </h3>
                <button
                  onClick={() => dispatch({ type: "TOGGLE", payload: index })}
                  className={`px-3 py-1 text-sm font-semibold rounded-md ${
                    item.iscompleted
                      ? "bg-green-500 text-white hover:bg-green-600"
                      : "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
                  }`}
                >
                  {item.iscompleted ? "Completed" : "Pending"}
                </button>
                <button
                  onClick={() => dispatch({ type: "DELETE", payload: index })}
                  className="ml-2 px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No tasks added yet!</p>
        )}
      </div>
    </div>
  );
};

export default TodoList;
