import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import { getSession, signOut, useSession } from "next-auth/react";

export default function Home() {
  return (
    <>
      <SEO title="Exuberance" />
      <Layout>
        <div className="text-4xl font-popin font-semibold">Dashboard</div>
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
