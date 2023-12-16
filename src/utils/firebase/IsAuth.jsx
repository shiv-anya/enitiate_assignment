"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
const IsAuth = ({ children }) => {
  const ctx = useContext(AuthContext);
  const user = ctx.user;
  const router = useRouter();
  return (
    <div>
      {!user ? <h1>Only logged in users can view this page</h1> : children}
    </div>
  );
};

export default IsAuth;
