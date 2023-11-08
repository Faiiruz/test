import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import React from "react";
import { getSession, signOut, useSession } from "next-auth/react";

export default function Email() {
  return (
    <>
      <SEO title="Exuberance" />
      <Layout>
        <div className="text-4xl font-popin font-semibold">Email Phising</div>
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
