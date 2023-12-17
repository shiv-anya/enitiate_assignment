"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
            <motion.button
              className="w-[30px] h-[30px] mx-1 text-gray-800 bg-gray-200 hover:bg-[#2563eb] hover:text-white focus:outline-none rounded-[50%]"
              onClick={() => handlePageChange(index + 1)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {index + 1}
            </motion.button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
