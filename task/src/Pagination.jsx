import React from "react";

function Pagination({ pageNumbers, currentPage, setCurrentPage }) {
  return (
    <div className="mt-4">
      {Array.from({ length: pageNumbers }, (_, index) => index + 1).map(
        (number) => (
          <span
            key={number}
            className={`px-3 py-1 cursor-pointer ${
              number === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
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
