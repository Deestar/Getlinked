import Navbar from "@/app/components/First/Navbar";
import Image from "next/image";
import React from "react";
import Back from "../../../../public/backnav.svg";
import Link from "next/link";
export default function Nav() {
  return (
    <>
      <Navbar className="hidden row:flex " iscontact />
      <header className="w-full row:hidden  py-2 se_lg:py-4 max-w-[437px] desk:max-w-xl mx-auto">
        <Link href="/">
          <Image
            className="w-6 h-6 se_lg:w-8 se_lg:h-8 desk:w-10 desk:h-10"
            src={Back}
            alt="navback"
          />
        </Link>
      </header>
    </>
  );
}
