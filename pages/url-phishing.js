import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import React from "react";
import { getSession, signOut, useSession } from "next-auth/react";

export default function Url() {
  return (
    <>
      <SEO title="Exuberance" />
      <Layout>
        <div className="text-4xl font-popin font-semibold">Url Phising</div>
        <div className="mt-7">
          <textarea 
            className="px-5 py-5 border-slate-950 border bg-gray-200"
            name="url-bar"
            cols={125}
            rows={1}
            autoFocus={true}
            placeholder="Enter your URL here"
          />
        </div>
        <div className="flex flex-row-reverse mx-12 my-3">
          <button
            className="flex flex-row items-center justify-center px-12 py-2 mb-5 bg-[#172882]/[.9] text-white hover:bg-[#172882] mt-2"
          >
            Check URL
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="text-4xl font-popin font-semibold">
            Checked URLs
          </div>
        </div>
        <div className="flex justify-center items-center">
        <table className="bg-white mt-5 w-full overflow-scroll" >
          <thead>
            <tr className="text-left text-md text-slate-700">
              <th className="py-2 px-4 border-b">URL</th>
              <th className="py-2 px-4 border-b w-1/3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm text-slate-700">
              <td className="py-2 px-4 border-b">https://youtube.com</td>
              <td className="py-2 px-4 border-b text-lime-500">Safe</td>
            </tr>
            <tr className="text-sm text-slate-700">
              <td className="py-2 px-4 border-b">http://hotdaddy.com.uk</td>
              <td className="py-2 px-4 border-b text-red-500">Phishing</td>
            </tr>
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
