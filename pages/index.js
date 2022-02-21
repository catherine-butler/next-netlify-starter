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
        <Header title="Emma + Ben's Wedding Fest!" />
        <h2> subtitle test para 1</h2>
        <h2> subtitle test para 2</h2>
        <h2> subtitle test para 3</h2>
        <h3> Where is it?</h3>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <h3>When is it?</h3>
        <p className="description">this will be some additional text</p>
        <h2>Friday Night</h2>
        <p className="description">
          {" "}
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <h2>Saturday Night</h2>
        <h3>Ceremony</h3>
        <p className="description">
          {" "}
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <h3>The Reception</h3>
        <p className="description">this will be some additional text</p>
        <h4>Schedule</h4>
        <p className="description">this will be some additional text</p>
        <ul>
          <li>
            <b>1630hrs</b> Arrival
          </li>
          <li>
            <b>1730hrs</b> Speeches
          </li>
          <li>
            <b>1900hrs</b> Grubs up!
          </li>
          <li>
            <b>2100hrs</b> First dance
          </li>
          <li>
            <b>0030hrs</b> Carriages/Tents
          </li>
        </ul>
        <h4>Getting There!</h4>
        <p className="description">this will be some additional text</p>
        <h4>Approaching From Exeter/M5</h4>
        <p className="description">this will be some additional text</p>
        <h4>Approaching From Plymouth</h4>
        <p className="description">this will be some additional text</p>
        <h4>Food + Drink</h4>
        <p className="description">this will be some additional text</p>
        <h4>Dress code</h4>
        <p className="description">this will be some additional text</p>
        <h4>Gifts</h4>
        <p className="description">this will be some additional text</p>
        <h3>Don't Forget!</h3>
        <p className="description">this will be some additional text</p>
      </main>

      <Footer />
    </div>
  );
}
