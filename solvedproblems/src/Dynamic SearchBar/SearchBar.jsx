// import React, { useEffect, useState } from "react";

// const items = [
//     "React",
//     "Redux",
//     "JavaScript",
//     "TypeScript",
//     "Node.js",
//     "Express",
//     "MongoDB",
//     "GraphQL",
//     "HTML",
//     "CSS",
//     "Tailwind CSS",
//   ];

// const SearchBar = () => {
//   const [input, setInput] = useState("");
//   const [searchedValue, setSearchedvalue] = useState("");

//   useEffect(() => {
//     let time = setTimeout(() => {
//       setSearchedvalue(input);
//     }, 1000);
//     return ()=>clearTimeout(time)
//   }, [input]);

// const output=items.filter((value)=>value.toLowerCase().includes(searchedValue.toLowerCase()))

//   return (
//     <div className="">
//       <input
//         type="text"
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Search..."
//         className=" w-full focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg px-2 py-2"
//       />
//       <div className="bg-white">
//         {searchedValue&&output.map((item,index)=>(<h1 key={index}>{item}</h1>))}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
import React, { useEffect, useState } from "react";

const items = [
  "React",
  "Redux",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
];

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchedValue(input);
    }, 1000);

    return () => clearTimeout(timeout); // Cleanup previous timeout
  }, [input]);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.toLowerCase().includes(searchedValue.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchedValue]);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <div className="bg-white mt-2 p-2 rounded-lg shadow">
        {searchedValue && filteredItems.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {filteredItems.map((item, index) => (
              <li key={index} onClick={()=>setInput(item)} className="py-2 px-2 hover:bg-gray-100">
                {item}
              </li>
            ))}
          </ul>
        ) : searchedValue ? (
          <p className="text-gray-500 text-center">No results found</p>
        ) : (
          <p className="text-gray-400 text-center">Start typing to search...</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
