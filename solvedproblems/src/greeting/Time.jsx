import React, { useEffect, useState } from "react";
import Greeting from "./greeting";

const Time = () => {
  const [greeting, setGreeting] = useState("");
  const [date, setDate] = useState(new Date());
  //   const date = new Date();

  useEffect(() => {
    let interval = setInterval(() => {
      const time = new Date();
      setDate(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let hours = date.getHours();
    if (hours <= 12 && hours >= 6) {
      setGreeting("Good Morning");
    } else if (hours > 12 && hours < 16) {
      setGreeting("Good Afternoon");
    } else if (hours >= 16 && hours <= 20) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }
  }, [date]);

  return (
    <div className="flex flex-col bg-orange-200 text-center font-semibold text-green-900 rounded-lg  ">
      <Greeting name="Ajay" />
      <h1>{greeting}</h1>
      <h1 className="bg-zinc-50 self-stretch p-7">
        {/* {date.getHours().toString().padStart(2, "0")} :
        {date.getMinutes().toString().padStart(2, "0")} :
        {date.getSeconds().toString().padStart(2, "0")} */}
        <span className="text-blue-600">
          {date.getHours().toString().padStart(2, "0")}
        </span>
        :
        <span className="text-red-600">
          {date.getMinutes().toString().padStart(2, "0")}
        </span>
        :
        <span className="text-yellow-600">
          {date.getSeconds().toString().padStart(2, "0")}
        </span>
      </h1>
    </div>
  );
};
export default Time;
