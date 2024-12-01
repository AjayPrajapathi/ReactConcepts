import React, { useEffect, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "TOGGLE":
      return { ...state, isRunning: !state.isRunning };
    // case "STOP":
    //   return { count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      throw new Error("unknown action type");
  }
};

export const Counter = () => {
  let initialState = { count: 0, isRunning: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let start;
    if (state.isRunning) {
      start = setInterval(() => {
        dispatch({ type: "INCREMENT" });
      }, 1000);

      // dispatch({ type: "START" });
      return () => clearInterval(start);
    }
  }, [state]);

  return (
    <div className=" flex flex-col h-full w-full bg-amber-100 rounded-lg items-center justify-center ">
      <h1 className="text-[2rem] text-blue-900 font-extrabold">Counter</h1>
      <h2 className="text-[5rem] text-pink-800">{state.count}</h2>
      <div className="flex space-x-6">
        <button onClick={() => dispatch({ type: "TOGGLE" })} className="border-2 border-gray-800 bg-slate-500 rounded-lg px-4">
          {state.isRunning ? "STOP" : "START"}
        </button>
        {/* <button onClick={() => dispatch({ type: "STOP" })}>Stop</button> */}
        <button onClick={() => dispatch({ type: "RESET" })}  className="border-2 border-gray-800 bg-slate-500 rounded-lg px-4">Reset</button>
      </div>
    </div>
  );
};
