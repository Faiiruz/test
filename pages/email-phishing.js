import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import React, { useState } from "react";
import { getSession } from "next-auth/react";
import { FaSearch } from "react-icons/fa";
import { emailPhising } from "@/components/data/data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Email() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredApps = emailPhising.filter((app) =>
    app.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusTextColor = (status) => {
    if (status === "Phising Email") {
      return "bg-red-500";
    } else if (status === "Safe Email") {
      return "bg-lime-500";
    } else if (status === "Potentially Phishing") {
      return "bg-amber-500";
    }
  };

  const totalPages = Math.ceil(filteredApps.length / itemsPerPage);

  const displayedApps = filteredApps.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SEO title="Exuberance" />
      <Layout>
        <div className="text-4xl font-popin font-semibold">Email Phising</div>
        <div className="relative rounded shadow-md mt-5">
          <input
            type="text"
            placeholder="Search Apps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input py-2 w-full px-3 block pl-10 sm:text-sm sm:leading-5"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex mt-4 justify-end">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="mr-2"
          >
            <AiOutlineLeft />
          </button>
          <div>
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="ml-2"
          >
            <AiOutlineRight />
          </button>
        </div>
        <table className="bg-white mt-5 w-full">
          <thead>
            <tr className="text-left text-md text-slate-700">
              <th className="py-2 px-4 border-b w-1/6">Date Email</th>
              <th className="py-2 px-4 border-b w-1/5">Sender Email</th>
              <th className="py-2 px-4 border-b">Body Email</th>
              <th className="py-2 px-4 border-b w-1/6">Persentase</th>
              <th className="py-2 px-4 border-b w-1/6">Status</th>
            </tr>
          </thead>
          <tbody>
            {displayedApps.map((app) => (
              <tr key={app.id} className="text-sm">
                <td className="py-2 px-4 border-b">{app.date}</td>
                <td className="py-2 px-4 border-b">{app.email}</td>
                <td className="py-2 px-4 border-b">{app.body}</td>
                <td className="py-2 px-4 border-b">{app.persen}</td>
                <td className={`py-2 px-4 border-b`}>
                  <div
                    className={` text-white text-center ${getStatusTextColor(
                      app.status
                    )} `}
                  >
                    {app.status}
                  </div>
                </td>
              </tr>
            ))}
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
