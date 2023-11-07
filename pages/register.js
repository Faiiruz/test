import Image from "next/image";
import React, { useState } from "react";
import SEO from "@/components/SEO";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SEO title="Exuberance" />
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url("/image/background.jpeg")` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="w-96 container py-5 px-10 bg-white rounded-[25px] shadow-md relative">
          <div className="flex items-center justify-center">
            <Image
              src="/image/OIG1.png"
              alt="Sanur"
              width={150}
              height={100}
              // className="mb-5"
            />
          </div>
          <div className="mb-5">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-1">Exuberance</h2>
            </div>
            <p className="text-sm mb-8 text-center font-5 font-popin">
              Create Your Account
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="font-popin font-thin text-black-600 text-sm mb-2 ml-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-transparent mt-1 mb-1 text-sm opacity-70 font-thin font-popin bg-[#F3F3F3] p-2 rounded-2xl focus:outline outline-2 focus:shadow-md"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="font-popin font-thin text-black-600 text-sm mb-2 ml-2"
                >
                  Password
                </label>
                <input
                  autoComplete="off"
                  type="password"
                  id="password"
                  className="w-full border-transparent mt-1 text-sm opacity-70 font-thin font-popin bg-[#F3F3F3] p-2 rounded-2xl focus:outline outline-2 focus:shadow-md"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white border border-black text-black p-2 rounded-full mt-5 font-popin hover:bg-gray-100 hover:border-transparent transition duration-300"
              >
                Register
              </button>
            </form>
            <div className="flex flex-col">
              <button className="flex flex-row  items-center justify-center rounded-full px-12 py-2 mb-5 bg-red-500 text-white hover:bg-red-600 mt-2">
                <FaGoogle className="mr-2" />
                Register with Google
              </button>
              <div className="text-sm text-center font-5 font-popin">
                Have an Account?{" "}
                <Link
                  className="font-bold underline decoration-solid"
                  href="/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
