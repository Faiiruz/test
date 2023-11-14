import Image from "next/image";
import Link from "next/link";
import { RxDashboard } from "react-icons/rx";
import { TbWorldSearch } from "react-icons/tb";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleLogout = async () => {
    destroyCookie(null, "token");
    router.push("/login");
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    handleResize(); // Set initial state based on window width
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`${
        open ? "w-68" : "w-20"
      }  min-h-screen bg-[#172882] duration-300 relative`}
    >
      <div className="p-4 text-white flex flex-col h-full">
        <IoIosArrowBack
          size={30}
          className={`text-3xl bg-black rounded-full absolute -right-3 top-6 md:top-9 cursor-pointer duration-300 ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center justify-center mb-7">
          <Image src="/image/OIG1.png" width={100} height={100} />
        </div>
        <ul className="space-y-2 flex-grow">
          <li>
            <Link
              href="/"
              className={`flex gap-3 font-popin items-center p-2 rounded ${
                !open && "mr-4"
              } ${router.pathname === "/" ? "bg-white text-black" : ""}`}
            >
              <RxDashboard />
              <span className={`flex-1 ${!open && "hidden"}`}>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/email-phishing"
              className={`flex gap-3 font-popin items-center p-2 rounded ${
                !open && "mr-4"
              } ${
                router.pathname === "/email-phishing"
                  ? "bg-white text-black"
                  : ""
              }`}
            >
              <MdOutlineMarkunreadMailbox />
              <span className={`flex-1 ${!open && "hidden"}`}>
                Gmail Phishing Detector
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="/url-phishing"
              className={`flex gap-3 font-popin items-center p-2 rounded ${
                !open && "mr-4"
              } ${
                router.pathname === "/url-phishing" ? "bg-white text-black" : ""
              }`}
            >
              <TbWorldSearch />
              <span className={`flex-1 ${!open && "hidden"}`}>
                URL Phishing Detector
              </span>
            </Link>
          </li>
        </ul>
        <div>
          <Link
            onClick={handleLogout}
            href="/login"
            className={`flex gap-3 font-popin items-center p-2 rounded ${
              !open && "mr-4 "
            } `}
          >
            <BiLogOut />
            <span className={`flex-1 ${!open && "hidden"}`}>Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
