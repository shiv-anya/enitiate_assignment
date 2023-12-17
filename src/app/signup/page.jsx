"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import classes from "./page.module.css";
import signUp from "@/utils/firebase/signup";
import { useRouter } from "next/navigation";
import Link from "next/link";
import StatusMessage from "@/components/StatusMessage";
import Loader from "@/components/Loader";

const SignUp = (e) => {
  const [statusType, setStatusType] = useState("error");
  const [status, setStatus] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isLogging, setIsLogging] = useState(false);
  const router = useRouter();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLogging(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (password.length <= 6) {
      setIsLogging(false);
      setStatus(true);
      setStatusType("warning");
      setStatusMessage("Password should be greater than 6 characters");
      return;
    }
    signUp(email, password).then((data) => {
      console.log(data);
      if (data.result) {
        setIsLogging(false);
        router.push("/posts");
      } else {
        setIsLogging(false);
        setStatus(true);
        setStatusType("error");
        setStatusMessage(data.error.message);
      }
    });
    setStatus(false);
  };
  return (
    <>
      {status && (
        <StatusMessage
          status={status}
          message={statusMessage}
          type={statusType}
        />
      )}
      <div className="flex h-[87vh] max-sm:h-[80vh]">
        <div className="flex-1 flex justify-evenly items-center max-lg:hidden max-lg:justify-center">
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
          <h3 className="text-[26px] mb-12">Sign Up to your account</h3>
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
                required
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
                required
              />
            </div>
            <div>
              <input type="checkbox" className="mr-2" id="terms" />
              <label htmlFor="terms">I agree to the Terms & Conditions</label>
            </div>
            <button className="h-[44px] w-[274px] rounded-[6px] bg-blue-600 mt-12">
              {isLogging && <Loader color="white" />}
              {!isLogging && <p>Sign Up</p>}
            </button>
          </form>
          <p className="mt-5">
            Already Registered!{" "}
            <Link href="/login" className=" text-blue-600">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
