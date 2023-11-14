import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import React, { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { FaSearch } from "react-icons/fa";
import { emailPhising } from "@/components/data/data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Email() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [displayedChars, setDisplayedChars] = useState(40);
  const [selectedApp, setSelectedApp] = useState(null);

  const handleRowClick = (app) => {
    setSelectedApp(app);
  };

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

  const getStatusMobileColor = (status) => {
    if (status === "Phising Email") {
      return "text-red-500";
    } else if (status === "Safe Email") {
      return "text-lime-500";
    } else if (status === "Potentially Phishing") {
      return "text-amber-500";
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setItemsPerPage(6);
        setDisplayedChars(15);
      } else {
        setItemsPerPage(6);
        setDisplayedChars(40);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <SEO title="Exuberance" />
      <Layout>
        <div className="text-2xl md:text-4xl font-popin font-semibold">
          Email Phising
        </div>
        <div className="relative mt-5">
          <input
            type="text"
            placeholder="Search Apps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 pl-10 text-sm md:text-base md:w-full"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-4 w-4 md:h-5 md:w-5 text-gray-400" />
          </div>
        </div>
        <div className="flex mt-4 text-xs md:text-base justify-start md:justify-end">
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
        <div className="flex justify-center items-center overflow-x-auto">
          <table className="bg-white mt-5 w-full">
            <thead>
              <tr className="text-left text-sm md:text-base text-slate-700">
                <th className="py-2 px-4 border-b w-[10%] md:w-[12%] hidden md:table-cell">
                  Date Email
                </th>
                <th className="py-2 px-4 border-b w-[20%]">Sender Email</th>
                <th className="py-2 px-4 border-b">Body Email</th>
                <th className="py-2 px-4 border-b w-[15%] text-center hidden md:table-cell">
                  Persentase
                </th>
                <th className="py-2 px-4 border-b w-1/6 text-center hidden md:table-cell">
                  Status
                </th>
                <th className="py-2 px-4 border-b w-1/6 text-center table-cell  md:hidden"></th>
              </tr>
            </thead>
            <tbody>
              {displayedApps.map((app) => (
                <tr key={app.id} className="text-sm md:text-sm">
                  <td className="py-2 px-4 border-b hidden md:table-cell">
                    {app.date}
                  </td>
                  <td className="py-2 px-4 border-b">{app.email}</td>
                  <td className="py-2 px-4 border-b line-clamp">
                    {app.body.length > displayedChars
                      ? `${app.body.substring(0, displayedChars)}...`
                      : app.body}
                  </td>
                  <td className="py-2 px-4 border-b text-center hidden md:table-cell">
                    {app.persen}
                  </td>
                  <td className={`py-2 px-4 border-b hidden md:table-cell`}>
                    <div
                      className={` text-white text-center ${getStatusTextColor(
                        app.status
                      )} `}
                    >
                      {app.status}
                    </div>
                  </td>
                  <td
                    onClick={() => handleRowClick(app)}
                    className="py-2 px-4 border-b w-1/6 text-center table-cell  md:hidden cursor-pointer"
                  >
                    View Detail
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
      {selectedApp && (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md p-4 overflow-x-auto rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Email Details</h2>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">
                Date: {selectedApp.date}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">
                Sender Email: {selectedApp.email}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">
                Body Email: {selectedApp.body}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600">
                Percentage: {selectedApp.persen}
              </p>
            </div>
            <div className="mb-4">
              <p>
                <a className="text-sm font-medium text-gray-600">Status:</a>{" "}
                <span
                  className={`text-sm font-medium ${getStatusMobileColor(
                    selectedApp.status
                  )}`}
                >
                  {selectedApp.status}
                </span>
              </p>
            </div>
            <button onClick={() => setSelectedApp(null)}>Close</button>
          </div>
        </div>
      )}
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
