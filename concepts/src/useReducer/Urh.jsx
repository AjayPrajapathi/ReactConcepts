import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.add;
    case "subtract":
      return state + action.sub;
    default:
      return state;
  }
};

export default function Urf() {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "add", add: 6 })}>To Add</button>
      <button onClick={() => dispatch({ type: "subtract", sub: -4 })}>
        To subtract
      </button>
    </div>
  );
}
