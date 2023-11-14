import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const user = {
    name: "John Doe",
    avatar: "/image/pp.png",
  };

  return (
    <nav className="bg-blue-500 p-1 md:p-2">
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center">
          <div className="relative" ref={dropdownRef}>
            <div
              className="flex justify-center items-center cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="h-10 md:h-12 rounded-full md:mr-2"
              />
            </div>
            {showDropdown && (
              <div className="absolute right-0 md:mt-2 w-40 md:w-48 text-xs md:text-base bg-white border border-gray-300 rounded shadow-lg">
                <ul className="py-1 md:py-2">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/changepassword" className="font-popin">
                      Change Password
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
