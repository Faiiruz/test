import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import React from "react";
import { getSession } from "next-auth/react";
import { FaSearch } from "react-icons/fa";

export default function Email() {
  return (
    <>
      <SEO title="Exuberance" />
      <Layout>
        <div className="text-4xl font-popin font-semibold">Email Phising</div>
        <div className="relative rounded shadow-md mt-5">
          <input
            type="text"
            placeholder="Search Apps..."
            // value={searchQuery}
            // onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input py-2 w-full px-3 block pl-10 sm:text-sm sm:leading-5"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <table className="bg-white mt-5 w-full">
          <thead>
            <tr className="text-left text-md text-slate-700">
              <th className="py-2 px-4 border-b w-1/6">Date Email</th>
              <th className="py-2 px-4 border-b">Sender Email</th>
              <th className="py-2 px-4 border-b">Body Email</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm text-slate-700">
              <td className="py-2 px-4 border-b">7/Nov/2023</td>
              <td className="py-2 px-4 border-b">hotdaddy@yahoo.uk</td>
              <td className="py-2 px-4 border-b">lorem</td>
              <td className="py-2 px-4 border-b bg-red-500">Phishing Email</td>
            </tr>
            <tr className="text-sm text-slate-700">
              <td className="py-2 px-4 border-b">7/Nov/2023</td>
              <td className="py-2 px-4 border-b">hotdaddy@yahoo.uk</td>
              <td className="py-2 px-4 border-b">lorem ipsum</td>
              <td className="py-2 px-4 border-b bg-amber-500">Potentially Phishing</td>
            </tr>
            <tr className="text-sm text-slate-700">
              <td className="py-2 px-4 border-b">7/Nov/2023</td>
              <td className="py-2 px-4 border-b">hotdaddy@yahoo.uk</td>
              <td className="py-2 px-4 border-b">lorem ipsum dolor sit amet</td>
              <td className="py-2 px-4 border-b bg-lime-500">Safe Email</td>
            </tr>
          </tbody>
        </table>
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
