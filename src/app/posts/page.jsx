"use client";

import React, { useState, useEffect, useContext } from "react";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import IsAuth from "@/utils/firebase/IsAuth";
import { AuthContext } from "@/context/AuthContext";

const Posts = () => {
  const ctx = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const user = ctx.user;
  console.log(currentItems);
  console.log(user);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!res.ok) {
        setError("Failed to fetch data");
      }

      const data = await res.json();
      setData(data);
      setIsLoading(false);
    };
    getData();
  }, [user]);
  return (
    <>
      <IsAuth>
        <div className="container h-auto">
          {currentItems.map((post) => (
            <Post
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
              id={post.id}
            />
          ))}
        </div>
        <div>
          <Pagination
            totalItems={data.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </IsAuth>
    </>
  );
};

export default Posts;
