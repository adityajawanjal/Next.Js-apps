"use client";
import Link from "next/link";
import React, { useState } from "react";
import { loginUser } from "../utils/api";

const login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      identifier: email,
      password: password,
    };
    const res = await loginUser(data);
    if (!res.jwt) {
      alert(res);
    }
    console.log(res);
  };

  return (
    <div className="flex justify-center my-10">
      <form className="flex flex-col w-72 sm:w-96" onSubmit={handleLogin}>
        <h2 className="text-center text-4xl my-5">Login</h2>
        <input
          type="email"
          placeholder="Enter your Email..."
          className=" outline-none py-2 px-3 text-lg w-full border-2 border-gray-600 h-14 my-5 "
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password..."
          className=" outline-none py-2 px-3 text-lg w-full border-2 border-gray-600 h-14 my-5 "
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="border-2 rounded-full my-5 py-3 px-6 bg-green-300 hover:bg-gray-300 text-xl ">
          Submit
        </button>
        <p className=" text-center text-xl">
          Don`t` have an account ?
          <Link href={"/signup"}>
            <span className=" text-red-600 pb-2 border-b-2"> Sign Up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default login;
