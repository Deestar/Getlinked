"use client";
import Image from "next/image";
import Techie from "../../../../public/techie.svg";
import FormRegister from "./FormRegister";
import Modal from "./Modal";
import { useState } from "react";
export default function MainRegister() {
  const [isModal, setIsModal] = useState(false);
  return (
    <div className="flex flex-col row:grid row:grid-cols-[1fr_auto] lg:mx-auto pb-8">
      <Image
        src={Techie}
        className="self-center w-[18.5rem] h-[19.1rem] se_lg:w-[28rem] se_lg:h-[24rem] lg:w-[34rem] lg:h-[30rem] z-20 "
        alt="techie"
      />
      <FormRegister setter={setIsModal} />
      {isModal && <Modal />}
    </div>
  );
}
