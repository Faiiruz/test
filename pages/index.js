import SEO from "@/components/SEO";
import Layout from "@/components/Layout";

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
