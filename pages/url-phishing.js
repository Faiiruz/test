import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import React, { useState } from "react";
import { getSession } from "next-auth/react";
import { urlPhising } from "@/components/data/data";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Swal from "sweetalert2";

export default function Url() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const getStatusTextColor = (status) => {
    if (status === "Phising") {
      return "text-red-500";
    } else if (status === "Safe") {
      return "text-lime-500";
    }
  };

  const totalPages = Math.ceil(urlPhising.length / itemsPerPage);

  const displayedApps = urlPhising.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const checkUrl = () => {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "URL checked successfully!",
    });
  };

  return (
    <>
      <SEO title="Exuberance" />
      <Layout>
        <div className="text-2xl md:text-4xl font-popin font-semibold">
          Url Phising
        </div>
        <div className="mt-7">
          <input
            className="px-2 w-full py-2 text-sm md:text-base md:px-5 md:py-5 border-slate-950 border bg-gray-200"
            // name="url-bar"
            // cols={125}
            // rows={1}
            // autoFocus={true}
            type="text"
            placeholder="Enter your URL here"
          />
        </div>
        <div className="flex items-end justify-end mt-5">
          <button
            onClick={checkUrl}
            className="flex flex-row items-center justify-center px-10 md:px-12 py-2 text-sm md:text-base mb-5 bg-gradient-to-t from-[#172882]  to-sky-400  text-white hover:bg-[#172882] mt-2"
          >
            Check URL
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-2xl md:text-4xl font-popin font-semibold">
            Checked URLs
          </div>
        </div>
        <div className="flex text-sm md:text-base mt-4 justify-end">
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
        <div className="flex text-sm md:text-base justify-center items-center">
          <table className="bg-white mt-5 w-full">
            <thead>
              <tr className="text-left text-md text-slate-700">
                <th className="py-2 px-4 border-b">URL</th>
                <th className="py-2 px-4 border-b w-1/6">Status</th>
              </tr>
            </thead>
            <tbody>
              {displayedApps.map((app) => (
                <tr key={app.id}>
                  <td className="py-2 px-4 border-b">{app.url}</td>
                  <td className="py-2 px-4 border-b ">
                    <i className={`${getStatusTextColor(app.status)}`}>
                      {app.status}
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
