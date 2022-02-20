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
        <p className="description">
          {" "}
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing
        </p>
      </main>

      <Footer />
    </div>
  );
}
