import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        className="w-full p-4 rounded-xl border-2 border-purple-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-300 shadow-md transition duration-300"
        placeholder="Search for your favorite book..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

/*Explanation:

searchTerm and setSearchTerm are props from App.js.

value={searchTerm} binds the input box to the state (controlled component).

onChange updates the state as the user types.

Tailwind classes style the input: rounded edges, focus effect, shadow, padding, full width.*/