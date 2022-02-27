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
        <Header title="Emma & Ben's Wedding Fest!" />
        <h2>
          On Saturday 11th June 2022, we're getting married and we want you to
          help us celebrate! I've pulled a website together to store all
          essential info and hopefully answer any questions about the day.
        </h2>
        <h2>
          A festival wedding, we hear you ask? Think a mini Glastonbury, without
          the ticket drama! Picture a bloody great tent in a field by the sea,
          throw in a band, some great food and drink, a fire pit, garden games
          and singing and dancing our way into the night!
        </h2>
        <h3> Where is it?</h3>
        <p className="description">
          A few miles outside Plymouth, on a clifftop looking out to sea,
          Carswell Farm is the staging point for our little festival wedding.
        </p>
        <h3>When is it?</h3>
        <p className="description">
          The big day is Saturday 11th June, but we’re in a beautiful part of
          the world, and we want people to make the most of it. Feel free to
          come on down for a long weekend!
        </p>
        <h2>Friday Night - The Night Before</h2>
        <p className="description">
          The bride and groom will be onsite all day, but from{" "}
          <b>1630hrs onwards</b>, let’s all get together and have a mingle.
          Bring some BBQ bits and a few drinks. Not a late one - we’ll be
          needing our beauty sleep for the big day!
        </p>
        <h2>Saturday Night - The Big Day!</h2>
        <h3>Ceremony</h3>
        <p className="description">
          We’d love to have you all present for the official “I do”, but space
          is limited. We're having a small ceremony, with just immediate family.
          This will take place at{" "}
          <b>1430hrs at No. 3 Elliot Terrace, Plymouth</b> Hoe before we move on
          to…
        </p>

        <h3>The Reception</h3>
        <p className="description">
          The bride, groom and the rest of the crew will be arriving back on
          site around 1630hrs, now the party starts!
        </p>

        <h4>Schedule</h4>
        <p className="description">
          Timing on the day will be fairly loose but the rough schedule we'll be
          keeping to is:
        </p>
        <ul className="description">
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
        <p className="description">
          The postcode for the nearest <i>property</i> to the Wedding Field is{" "}
          <b>PL8 1HG</b>{" "}
          <u>
            BUT WE STRONGLY ADVISE NOT TO FOLLOW A SATNAV AS THEY DON’T LIKE
            SMALL DEVON ROADS!
          </u>
        </p>

        <h4>Approaching From Exeter/M5</h4>
        <ol className="description">
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
            which is signposted to Stoke Beach.
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
        <ol className="description">
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
        <h4>Camping & Accomodation</h4>
        <p className="description">
          There’s space to camp onsite, feel free to pitch your tent for a long
          weekend, or maybe just the night. Compost loos and showers are
          available! For those who don’t fancy camping and are in search of
          luxury accomodation options check out:{" "}
          <a
            href="http://www.carswellcottages.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carswell Cottages.
          </a>
        </p>
        <p className="description">
          Otherwise feel free to investigate hotels, B’n’b and other options in
          the surrounding area but bear in mind this might mean a taxi ride
          home!
        </p>

        <h4>Food & Drink</h4>
        <p className="description">
          We’ll be serving up a top notch hog roast with all the trimmings.{" "}
          <b>
            <u>
              If you have any special dietary requirements, please let us know
              using the form a bit further down.
            </u>
          </b>{" "}
          There won’t be an overpriced bar, so Bring Your Own Beer! (We know
          you’d all do it anyway, even if there was a bar!).
        </p>

        <h4>Dress code</h4>
        <p className="description">
          Colours and lots of them. Glitter is actively encouraged. Appropriate
          footwear - you’ll be partying in a field! Think flats, chunky heels,
          or even wellies - weather dependent!
        </p>

        <h4>Gifts</h4>
        <p className="description">
          We don’t need gifts, your presence on our special day is a gift! If
          you wish to give us something, contributions towards our honeymoon
          would be greatly appreciated. If you wish to contribute, please visit:{" "}
          <a
            href="https://www.trailfinders.com/wishlist#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trailfinders Wishlist.
          </a>
        </p>

        <p className="description">
          <code>
            Wishlist Reference: <b>5BL3BN</b>
          </code>
        </p>
        <p className="description">
          <code>
            Closing Date: <b>26/06/2022</b>
          </code>
        </p>

        <h3>Don't Forget!</h3>
        <p className="description">
          As mentioned, food will be a top notch hog roast. Tunes will be
          banging. Please fill out the form below to tell us your dietary
          requirements and song suggestions for the playlist.
        </p>
        <p className="description">
          <b>
            <u>
              *Please note: if you are filling out the form on behalf of someone
              else, please put their name and individual dietary requirements.
            </u>
          </b>
        </p>
        <p className="description">
          <a
            href="https://forms.gle/tnbFnw6ftSMGACiU8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>Click here to tell us your dietary and music requests!</code>
          </a>
        </p>

        <h2>We really hope you can make it - please RVSP to </h2>
        <h2>emmaperry20@hotmail.com by April 30th 2022.</h2>
      </main>
    </div>
  );
}
