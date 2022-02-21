import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Essential Wedding Info</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Zeyada&display=swap"
          rel="stylesheet"
        />
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
        <ol>
          <li>
            When the M5 ends at Exeter, take the A38 for Plymouth. Stay put on
            this road for around 26 miles.
          </li>
          <li>
            One mile west of South Brent (shortly after passing the Shell garage
            on your right), turn left at the WRANGATON intersection signed to{" "}
            <b>Ermington A3121 and Yealmpton A379</b>. Turn left at the give way
            at the top of the intersection.
          </li>
          <li>
            Continue for 1 mile to crossroads with a give way sign and turn
            right onto A3121. Keep on this road for several miles past Ugborough
            and Ermington.
          </li>
          <li>
            Half a mile past Ermington, stop at a halt sign and turn right onto
            the A379 towards Plymouth (BE CAREFUL - DANGEROUS TURNING). After
            about half a mile, as you come to the top of a gentle hill, turn
            left following signs for Holbeton and Mothecombe.
          </li>
          <li>
            Continue along this road. You will see signs to Holbeton village off
            to the left but DO NOT follow these. Continue along the same road
            which is signposted to Stoke Beach.{" "}
          </li>
          <li>
            Still following signs for Stoke, go straight through the hamlet of
            Battisborough Cross. You keep going along this road for about half a
            mile. You will pass the entrance to Carswell Farm on your left and
            the entrances to Poole Farm and then Lambside Farm on your right.
            Keep going straight on past Eastern Lodge (with the wonky chimneys!)
            and past a turning on your right signposted to Membland. Very soon
            after this you will see the wooden gates into the wedding field on
            your left hand side!
          </li>
        </ol>
        <h4>Approaching From Plymouth</h4>
        <ol>
          <li>Leave Plymouth on the A379 for Kingsbridge.</li>
          <li>
            Stay on the A379 for around 6 miles, through Brixton and Yealmpton.
          </li>
          <li>
            Around 2 miles past Yealmpton, take the RIGHT hand turning
            signposted Holbeton then continue as per above instructions from
            point 5 above.
          </li>
        </ol>
        <h4>Food + Drink</h4>
        <p className="description">this will be some additional text</p>
        <h4>Dress code</h4>
        <p className="description">this will be some additional text</p>
        <h4>Gifts</h4>
        <p className="description">this will be some additional text</p>
        <h3>Don't Forget!</h3>
        <p className="description">
          <a
            href="https://www.trailfinders.com/wishlist#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trailfinders Wishlist.
          </a>
        </p>
        <a
          href="https://forms.gle/tnbFnw6ftSMGACiU8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <code>Click here to tell us your dietary and music requests!</code>
        </a>
      </main>

      <Footer />
    </div>
  );
}
