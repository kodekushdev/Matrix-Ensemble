import { useEffect, useState } from "react";
function SearchBar({
  filteredUsers,
  setCurrentPage,
  searchQuery,
  setSearchQuery,
}) {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };
  useEffect(() => {
    filteredUsers;
  }, [searchQuery]);

  return (
    <div className="py-3 px-4">
      <div className="relative max-w-xs">
        <label className="sr-only">Search</label>
        <input
          type="text"
          name="hs-table-with-pagination-search"
          id="hs-table-with-pagination-search"
          value={searchQuery}
          onChange={handleSearchChange}
          className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
          placeholder="Search for users"
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
