import React from "react";

function BookList({ books }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {books.length > 0 ? (
        books.map((book, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 text-center font-semibold text-purple-700"
          >
            {book}
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-400 text-lg font-medium">
          No books found.
        </div>
      )}
    </div>
  );
}

export default BookList;

/* Explanation:

books is the filtered list from App.js.

map iterates over the array and renders each book in a card.

Tailwind classes:

bg-white, rounded-2xl, shadow-lg → card styling

hover:shadow-2xl → shadow increases on hover

transition duration-300 → smooth hover animation

grid-cols-1 sm:grid-cols-2 → 1 column on mobile, 2 on small+ screens.

If no books match, shows a “No books found” message.*/