import Navbar from "@/app/components/First/Navbar";
import Image from "next/image";
import React from "react";
import Back from "../../../../public/backnav.svg";
import Link from "next/link";
export default function Nav() {
  return (
    <>
      <Navbar iscontact isregister className="hidden row:flex " />
      <header className="w-full row:hidden  py-2 se_lg:py-4 max-w-[437px] desk:max-w-xl mx-auto">
        <h2 className="text-getlink font-clash text-xl se_lg:text-2xl sm:text-3xl ">
          Register
        </h2>
      </header>
    </>
  );
}
