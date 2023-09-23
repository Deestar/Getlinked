import Image from "next/image";
import ManKey from "../../../public/mankey.svg";
import Lock from "../../../public/lock.svg";
import Check from "../../../public/check.svg";
export default function Ninth() {
  return (
    <div className="flex flex-col py-10 gap-y-40 row:flex-row row:items-center row:justify-center row:px-20">
      <section className="flex flex-col gap-y-10 px-1 items-center row:items-start">
        <header className="flex flex-col gap-y-8 text-center items-center max-w-[295px] row:items-start">
          <h1 className="flex flex-col font-clash text-lg w-max se:text-2xl row:text-start ">
            Privacy Policy and <span className="text-getlink">Terms</span>
            <span className="font-montsm text-[11px] text-[rgba(255,_255,_255,_0.75)] row:text-sm">
              Last updated on September 12, 2023
            </span>
          </h1>
          <h3 className="text-xs font-montsm text-center row:text-start row:text-sm">
            Below are our privacy & policy, which outline a lot of goodies. it's
            our aim to always take of our participant
          </h3>
        </header>
        <article className=" py-10 px-2 flex flex-col gap-y-8 border border-[#D434FE] bg-[rgba(217,_217,_217,_0.03)] max-w-[295px] row:max-w-[569px]  se:px-3 rounded-md ">
          <p className="font-montsm text-center  text-xs/relaxed se:text-xs/loose row:text-sm/relaxed row:text-start">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <header className="">
            <h2 className="font-mont text-getlink text-[13px]/loose row:text-sm">
              Licensing Policy
            </h2>
            <h3 className="font-montsm text-xs row:text-sm">
              Here are terms of our Standard License:
            </h3>
          </header>
          <ul className="flex flex-col">
            <li className="flex gap-x-2  pb-4  justify-start items-start ">
              <Image className="min-w-6 h-6" alt="check" src={Check} />
              <p className="text-xs/relaxed font-montsm row:text-sm">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
            </li>
            <li className="flex  justify-start items-start gap-x-2">
              <Image className="min-w-6 h-6" alt="check" src={Check} />
              <p className="text-xs/relaxed font-montsm row:text-sm">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </li>
            <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-mont text-sm py-2 px-7 w-max rounded mt-3 self-center">
              Read More
            </button>
          </ul>
        </article>
      </section>
      {/* Image */}
      <section className=" flex justify-center relative">
        <Image
          className="w-[18.5rem] h-[19.1rem] se_lg:w-[28rem] se_lg:h-[24rem]  row:w-[30rem] row:h-[30rem] lg:w-[34rem]  xl:w-[38rem] z-20"
          src={ManKey}
          alt="mankey"
        />
        <Image
          src={Lock}
          className="absolute inset-0 left-6 se_lg:left-10 mx-auto -top-[25%]  w-[14.5rem] h-[14.1rem] se_lg:w-[20rem] se_lg:h-[20rem]  row:w-[26rem] row:h-[26rem] lg:w-[30rem]  xl:w-[330em]"
          alt="lock"
        />
      </section>
    </div>
  );
}
