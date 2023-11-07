import Link from "next/link";

const Navbar = () => {
  // Gantilah dengan informasi pengguna yang sesuai
  const user = {
    name: "John Doe",
    avatar: "/image/pp.png",
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-end items-center">
        <div className="flex items-center">
          <span  className="font-bold">{user.name}</span>
          <img
            src={user.avatar}
            alt={user.name}
            className="h-10 rounded-full mr-2"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
