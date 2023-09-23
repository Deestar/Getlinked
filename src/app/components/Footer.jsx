import Image from "next/image";
import Instagram from "../../../public/instagram.svg";
import Linkdn from "../../../public/linkdn.svg";
import Twitter from "../../../public/twitter.svg";
import Call from "../../../public/call.svg";
import Facebook from "../../../public/facebook.svg";
import Map from "../../../public/map.svg";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#100B20]  pt-14 ">
      <div className="flex flex-col gap-y-12 px-3  se:px-5 se_lg:px-7 row:flex-row row:justify-around">
        <section className="flex flex-col gap-y-6 ">
          <article className="">
            <h1 className="text-white pb-4  text-xl  font-clash se:text-2xl se_lg:text-3xl">
              get<span className="text-getlink">linked</span>
            </h1>
            <p className="text-xs/relaxed font-montsm  se:text-sm se_lg:[word-spacing:2px] row:max-w-[300px]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </article>
          <footer className="font-montsm text-xs se_lg:text-sm">
            <h3>
              Terms of Use <span className="text-getlink">|</span> Privacy
              Policy
            </h3>
            <h3></h3>
          </footer>
        </section>
        <section className="flex flex-col gap-y-6 ">
          <h2 className="font-montsm font-semibold text-sm text-getlink se:font-mont">
            Useful Links
          </h2>
          <ul className="flex flex-col gap-y-4 text-xs font-montsm se:text-sm">
            <Link href="#">Overview</Link>
            <Link href="#">Timeline</Link>
            <Link href="#">FAQs</Link>
            <Link href="#">Register</Link>
          </ul>
          <footer className="flex gap-x-3 items-center">
            <h4 className="text-xs se:text-sm text-getlink font-montsm se:font-mont">
              Follow us
            </h4>
            <Image className="w-6 h-12" src={Instagram} alt="instagram" />
            <Image src={Twitter} alt="linkdn" />
            <Image src={Facebook} alt="phone" />
            <Image src={Linkdn} alt="facebook" />
          </footer>
        </section>
        <section>
          <h2 className="text-getlink text-sm font-montsm font-semibold pb-3 se:font-mont se:text-sm">
            Contact Us
          </h2>
          <ul className="flex flex-col gap-y-3">
            <li className="flex gap-x-2 items-center">
              <Image className="w-3 h-3" src={Call} alt="Phone" />{" "}
              <h4 className="text-xs/relaxed font-montsm  se:text-sm">
                +239 679 81819
              </h4>
            </li>
            <li className="flex gap-x-2 items-start">
              <Image className="w-3 h-3" src={Map} alt="Map" />
              <h4 className="text-xs/relaxed font-montsm flex flex-col se:text-sm">
                <span>27,Alara Street </span>
                <span>Yaba 100012</span>
                <span>Lagos State</span>
              </h4>
            </li>
          </ul>
        </section>
      </div>

      <h5 className="py-8  text-xs font-montsm se:text-center se:text-sm mx-auto w-full">
        All rights reserved. © getlinked Ltd.
      </h5>
    </footer>
  );
}
