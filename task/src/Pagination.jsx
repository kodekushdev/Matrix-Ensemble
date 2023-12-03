import React from "react";

function Pagination({ pageNumbers, currentPage, setCurrentPage }) {
  return (
    <div className="mt-4 flex items-center justify-center space-x-2">
      {Array.from({ length: pageNumbers }, (_, index) => index + 1).map(
        (number) => (
          <span
            key={number}
            className={`px-3 py-1 cursor-pointer rounded ${
              number === currentPage
                ? "bg-blue-500 text-white"
                : "bg-gray-300 hover:bg-gray-400 text-gray-700 transition duration-300 ease-in-out"
            }`}
            onClick={() => setCurrentPage(number)}>
            {number}
          </span>
        )
      )}
    </div>
  );
}

export default Pagination;
