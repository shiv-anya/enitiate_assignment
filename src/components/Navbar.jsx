"use client";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const user = ctx.user;
  const logout = ctx.logout;
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
      <nav className="h-[15vh] bg-transparent text-white flex justify-between p-5 pt-8 pl-[40px]">
        <div className="flex">
          <Image
            src={"/Logo.png"}
            alt="company logo"
            height={55}
            width={60}
            className="mr-2"
          />
          <p className="text-[24px]">Logo</p>
        </div>
        {user && (
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
