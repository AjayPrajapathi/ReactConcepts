import react, { useState } from "react";
import Child from "./Childr.js";


export default function Parent() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState([]);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);

const fun=()=>{
    console.group("hello world")
}

  };
  return (
    <div>
      <Child  counterTwo={counterTwo}/>
      <button onClick={IncrementOne}>button1-{counterOne}</button>
    </div>
  );
}
