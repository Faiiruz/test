import { useState } from "react";
import SEO from "@/components/SEO";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: session } = useSession();

  if (session) {
    router.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:9000/connection/exuberance/register",
        data
      );

      console.log("Registration response:", response.data);

      if (response.data.response.status_code === 200) {
        const { id, token } = response.data.response.data;
        localStorage.setItem("id", id);
        localStorage.setItem("token", token);
        router.push(`/verification?id=${id}`);
      } else {
        console.error("Registration failed:", response.data.response.message);
      }
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  return (
    <>
      <SEO title="Exuberance" />
      <div
        className="flex justify-center items-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url("/image/background.jpeg")` }}
      >
        <div className="w-72 md:w-96 container px-5 md:py-5 md:px-10 bg-white rounded-[25px] shadow-md relative">
          <div className="flex items-center justify-center">
            <img src="/image/OIG1.png" alt="Sanur" width={150} height={100} />
          </div>
          <div className="mb-5">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold mb-1">Exuberance</h2>
            </div>
            <p className="text-xs md:text-sm mb-8 text-center font-5 font-popin">
              Create Your Account
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="font-popin font-thin text-black-600 text-xs md:text-sm mb-2 ml-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-transparent mt-1 mb-1 text-xs md:text-sm opacity-70 font-thin font-popin bg-[#F3F3F3] p-2 rounded-2xl focus:outline outline-2 focus:shadow-md"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2 md:mb-4">
                <label
                  htmlFor="password"
                  className="font-popin font-thin text-black-600 text-xs md:text-sm mb-2 ml-2"
                >
                  Password
                </label>
                <input
                  autoComplete="off"
                  type="password"
                  id="password"
                  className="w-full border-transparent mt-1 text-xs md:text-sm opacity-70 font-thin font-popin bg-[#F3F3F3] p-2 rounded-2xl focus:outline outline-2 focus:shadow-md"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white border text-xs md:text-base border-black text-black p-2 rounded-full mt-5 font-popin hover:bg-gray-100 hover:border-transparent transition duration-300"
              >
                Register
              </button>
            </form>
            <div className="flex flex-col">
              <button
                // onClick={handleGoogleLogin}
                className="flex flex-row items-center text-xs md:text-base justify-center rounded-full px-12 py-2 mb-5 bg-gradient-to-t from-[#172882] to-sky-400 text-white mt-2"
              >
                <FaGoogle className="mr-2" />
                Register with Google
              </button>
              <div className="text-center text-xs md:text-base font-5 font-popin">
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
