import Footer from "./Footer";

export default function DeskContent() {
  return (
    <section className="hidden  row:flex flex-col pt-9 min-w-max h-max gap-y-3">
      <h2 className="text-getlink font-clash text-3xl">Get in touch</h2>
      <ul className="flex flex-col gap-y-4">
        <li className="font-montsm text-white ">
          Contact <br />
          Information
        </li>
        <li className="font-montsm text-white ">
          27, Alara Street <br />
          Yaba 100012 <br />
          Lagos State
        </li>
        <li className="font-montsm text-white ">Call Us : 07067981819</li>
        <li className="font-montsm text-white ">
          we are open from Monday-Friday
          <br /> 08:00am - 05:00pm
        </li>
      </ul>
      <Footer />
    </section>
  );
}
