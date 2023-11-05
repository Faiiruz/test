import Image from "next/image";
import React, { useState } from "react";
import SEO from "@/components/SEO";
import { FaGoogle } from "react-icons/fa"

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <SEO title="Exuberance"/>
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url("/image/background.jpeg")` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="w-96 container py-5 px-10 bg-white rounded-lg shadow-md relative">
          <div className="flex items-center justify-center">
            <Image
              src="/image/OIG1.png"
              alt="Sanur"
              width={150}
              height={100}
              className="mb-5"
            />
          </div>
          <div className="mb-5">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2 ">
              Exuberance
              </h2>
            </div>
            <p className="text-black/50 mb-4 text-center ">
            Please login to your account
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="text-gray-600 font-popin mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border text-sm font-popin border-gray-300 p-2 rounded"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="font-popin text-gray-600 mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border text-sm font-popin border-gray-300 p-2 rounded"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded font-popin hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
            </form>
            <h2 className="font-semibold text-xl text-center">
                or
            </h2>
            <div className="flex flex-col">
              <button
                className="flex flex-row  items-center justify-center rounded-full px-12 py-2 bg-red-500 text-white hover:bg-red-600 mt-2"
              >
                <FaGoogle className="mr-2" /> Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}