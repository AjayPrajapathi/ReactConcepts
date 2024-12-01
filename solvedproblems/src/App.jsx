import { useState } from "react";
import { Routes, Route, Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import { Counter } from "./counter/counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100vh] w-[100vw] p-4 flex">
      <div className="w-[30%] bg-neutral-700 text-[1.5rem] text-white p-2 border-4 border-black shadow-green-600 shadow-2xl rounded-lg">
        <NavBar />
      </div>
      <div className="flex-1 p-4 border-green-600 border-4 rounded-lg ml-3 shadow-lg shadow-black">
        <Routes>
          <Route path="/" element={<Counter />}>
            Counter
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
