"use client";
import React, { useState } from "react";

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex justify-center mb-10">
      <ul className="flex">
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <button
              className="px-4 py-2 mx-1 font-semibold text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
