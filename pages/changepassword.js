import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import React, { useState } from "react";
import { getSession } from "next-auth/react";
import { BsArrowLeftShort } from "react-icons/bs";
import Link from "next/link";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      alert("New password and confirmation do not match.");
      return;
    }
  };

  return (
    <>
      <SEO title="Exuberance" />
      <Layout>
        <Link href="/" className="font-popin text-sm flex items-center">
          <BsArrowLeftShort size={20} />
          <span>Back</span>
        </Link>
        <div className="text-2xl md:text-4xl font-popin font-semibold mt-5 md:mt-10">
          Change Password
        </div>
        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Old Password:
              <input
                type="password"
                className="mt-1 p-2 w-full border rounded-md"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              New Password:
              <input
                type="password"
                className="mt-1 p-2 w-full border rounded-md"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm New Password:
              <input
                type="password"
                className="mt-1 p-2 w-full border rounded-md"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-popin"
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>
        </form>
      </Layout>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }

  return {
    props: { session },
  };
};
