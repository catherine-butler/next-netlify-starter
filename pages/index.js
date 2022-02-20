import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Essential Wedding Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <h2> subtitle test</h2>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <h3>subtitle test</h3>
        <p className="description">this will be some additional text</p>
        <h4>subtitle test</h4>
        <p className="description">this will be some more text</p>
      </main>

      <Footer />
    </div>
  );
}
