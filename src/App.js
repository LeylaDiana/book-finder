import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import "./index.css";

function App() {
  // 1. This is the main array of books
  const [books] = useState([
    "Jodoh Pasti Bertemu",
    "Psikiatri Ward",
    "Vape got me Beg 2 Back",
    "Epilim Chrono",
    "Doctor Follow Ups",
    "Seizures",
    "Bipolar Disorder",
    "I only wanted to Help!"
  ]);

  // 2. This state stores the user's search input
  const [searchTerm, setSearchTerm] = useState("");

  // 3. Filter books based on searchTerm (case-insensitive)
  const filteredBooks = books.filter((book) =>
    book.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white py-10">
      <div className="max-w-3xl mx-auto px-5">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8">
          📚 Book Finder
        </h1>

        {/* 4. Search bar component */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* 5. Book list component */}
        <BookList books={filteredBooks} />
      </div>
    </div>
  );
}

export default App;

/*Explanation:

useState stores books and search term.

filteredBooks updates automatically when searchTerm changes.

SearchBar passes search term and setter so user input updates the state.

BookList receives the filtered array and renders it.

Tailwind classes like min-h-screen, bg-gradient-to-br, max-w-3xl, etc., style the layout.
*/