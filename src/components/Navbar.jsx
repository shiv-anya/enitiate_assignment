"use client";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const ctx = useContext(AuthContext);
  const user = ctx.user;
  const logout = ctx.logout;
  let show = false;
  if (pathname === "/login" || pathname === "/signup" || pathname === "/")
    show = false;
  else show = true;
  const logoutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        logout();
        router.push("/login");
      })
      .catch((error) => {
        alert("Error");
      });
  };
  return (
    <header>
      <nav className="h-[15vh] bg-transparent text-white flex justify-between items-center p-5 pt-8 pl-[40px]">
        <div className="flex">
          <div className="h-[35.25px] w-[49.5px] relative mr-3">
            <Image src={"/Logo.png"} alt="company logo" fill={true} />
          </div>
          <p className="text-[24px]">Logo</p>
        </div>
        {show && user && (
          <button
            className="h-[44px] w-[150px] rounded-[6px] bg-blue-600 mr-[40px]"
            onClick={logoutHandler}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
