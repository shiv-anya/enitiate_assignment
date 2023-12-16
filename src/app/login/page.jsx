"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import classes from "./page.module.css";
import login from "@/utils/firebase/login";
import { useRouter } from "next/navigation";

const Login = (e) => {
  const router = useRouter();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const { result, error } = login(email, password);
    if (error) {
      alert("Error");
    }
    router.push("/posts");
  };
  return (
    <>
      <div className="flex h-[87vh]">
        <div className="flex-1 flex justify-evenly items-center">
          <Image
            src="/home-pic.png"
            height={400}
            width={400}
            alt="home-pic"
            className="ml-44 animate-bounce"
          />
          <Image
            src="/Ellipse.png"
            height={250}
            width={250}
            alt="ellipse"
            className={classes.ellipse}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center">
          <h3 className="text-[26px] mb-12">Login to your account</h3>
          <form className="flex flex-col" onSubmit={submitHandler}>
            <div className={`${classes.input} + mb-5`}>
              <div className="w-[50px] flex justify-center items-center">
                <Image src="/mail.png" width={21} height={18} alt="mail icon" />
              </div>
              <input
                type="email"
                name="email"
                className="bg-transparent w-full focus:outline-none focus:border-transparent focus:ring-1 focus:ring-transparent text-[13px]"
                placeholder="jade.smith@gmail.com"
                ref={emailRef}
              />
            </div>
            <div className={`${classes.input} + mb-5`}>
              <div className="w-[50px] flex justify-center items-center">
                <Image
                  src="/password.png"
                  width={21}
                  height={18}
                  alt="mail icon"
                />
              </div>
              <input
                type="password"
                name="password"
                className="bg-transparent w-full focus:outline-none focus:border-transparent focus:ring-1 focus:ring-transparent text-[13px]"
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                ref={passwordRef}
              />
            </div>
            <button className="h-[44px] w-[274px] rounded-[6px] bg-blue-600 mt-12">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
