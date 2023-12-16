"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
const ParaToShow = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-3xl">Only logged in users can view this page</h1>
      <Link href="/login" className="text-blue-600 text-bold">
        Login
      </Link>
    </div>
  );
};
const IsAuth = ({ children }) => {
  const ctx = useContext(AuthContext);
  const user = ctx.user;
  const router = useRouter();
  return <div>{!user ? <ParaToShow /> : children}</div>;
};

export default IsAuth;
