"use client";
import NavBar from "../../../../public/vector.svg";
import Image from "next/image";
import SubNav from "./SubNav";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LgNav from "./LgNav";
export default function Navbar() {
  const [subnav, setSubnav] = useState(false);
  return (
    <nav className="flex justify-between  py-6 px-5 row:pl-20 border-b border-[#f1f1f157] relative ">
      <h1 className="text-white  text-[0.9375rem] se_lg:text-base sm:text-lg font-clash  row:text-xl">
        get<span className="text-getlink">linked</span>
      </h1>

      {/* Small screen Nav */}
      <Image
        src={NavBar}
        onClick={() => setSubnav(true)}
        className={`cursor-pointer row:hidden ${subnav ? "hidden" : "block"}`}
        alt="navigation bar"
      />
      <AnimatePresence>
        {subnav && <SubNav setter={setSubnav} />}
      </AnimatePresence>
      {/* Large screen Nav */}
      <LgNav />
    </nav>
  );
}
