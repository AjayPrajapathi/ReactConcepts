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

const KeyDown = () => {
  const [input, setInput] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

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

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prevIndex) =>
        prevIndex < filteredItems.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex(
        (prevIndex) => (prevIndex > 0 ? prevIndex - 1 : filteredItems.length - 1)
      );
    } else if (e.key === "Enter" && highlightedIndex >= 0) {
      setInput(filteredItems[highlightedIndex]);
      setSearchedValue(filteredItems[highlightedIndex]);
      setFilteredItems(items); // Reset filtered items if needed
    }
  };

  const handleSuggestionClick = (item) => {
    setInput(item);
    setSearchedValue(item);
    setFilteredItems(items); // Reset filtered items
  };

  return (
    <div className="w-full bg-orange-400 max-w-md mx-auto p-4">
        <h1>KEY DOWN SEARCH</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
      <div className="bg-white mt-2 p-2 rounded-lg shadow">
        {searchedValue && filteredItems.length > 0 ? (
          <ul className="divide-y divide-gray-200">
            {filteredItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(item)}
                className={`py-2 px-2 cursor-pointer hover:bg-gray-100 ${
                  index === highlightedIndex ? "bg-blue-100" : ""
                }`}
              >
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

export default KeyDown;
