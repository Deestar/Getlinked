"use client";
import { motion } from "framer-motion";
import Vuzual from "../../../public/vuzual.svg";
import Liberty from "../../../public/liberty.svg";
import Winwise from "../../../public/winwise.svg";
import Wisper from "../../../public/wisper.svg";
import Paybox from "../../../public/paybox.svg";
import Assured from "../../../public/assured.svg";
import Shine from "../../../public/bg2.svg";
import Image from "next/image";
export default function Eighth() {
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    animate: (custom) => ({
      opacity: 1,
      transition: {
        delay: custom * 0.1,
      },
    }),
  };

  return (
    <section className="bg-[#150E28] flex flex-col py-12 gap-y-10 justify-center items-center bd">
      <header className="text-center">
        <h1 className="font-clash text-xl pb-2 sm:text-2xl md:text-3xl">
          Partners and Sponsors
        </h1>
        <h3 className="font-montsm text-sm">
          Getlinked Hackathon 1.0 is honored to have the{" "}
          <br className="se_lg:hidden" /> following major{" "}
          <br className="hidden se_lg:inline" />
          companies as its partners and sponsors
        </h3>
      </header>
      <section className=" p-1 h-max w-full flex justify-center relative">
        <Image
          src={Shine}
          alt="shine"
          className="absolute inse-0 w-[500px] h-[500px] mask  -top-[75%] -left-[40%]  se_lg:-top-[30%] desk:-left-[20%]  z-10 row:-left-[10%] lg:-left-[8%] xl:left-0 2xl:left-32"
        />
        <Image
          src={Shine}
          alt="shine"
          className="absolute inse-0 w-[500px] h-[500px] mask -right-[40%] top-[30%] desk:-right-[20%] z-10 row:-right-[30%] row:top-[50%] lg:-right-[20%] xl:-right-[4%]"
        />
        <div className="grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] gap-y-3 gap-x-5 border border-getlink py-12 px-1 se:px-10 desk:px-16 sm:px-20 lg:px-28 row:gap-y-6 row:gap-x-[5.25rem] z-30">
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
            className=" relative "
          >
            <span className="absolute  border-2 h-0 border-getlink -bottom-2 w-full row:-left-[3.825rem] row:w-[calc(100%_+_58px)]"></span>
            <span className="absolute  border-2 w-0 border-getlink -right-3 h-full "></span>
            <Image
              src={Assured}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.9125rem] "
              alt="assured"
            />
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            className="relative"
          >
            <span className="absolute border-2 h-0 border-getlink  -bottom-2  w-full  row:-left-[3.725rem] row:w-[calc(100%_+_60px)]"></span>
            <span className="absolute  border-2 w-0 border-getlink  -right-3 h-full "></span>
            <Image
              src={Liberty}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.8625rem] "
              alt="liberty"
            />
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
            className="relative"
          >
            <span className="absolute border-2 h-0 border-getlink   -bottom-2 w-full row:-left-[3.725rem] row:w-[calc(100%_+_60px)]"></span>
            <Image
              src={Winwise}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.8625rem] "
              alt="vuzual"
            />
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            custom={4}
            className="relative"
          >
            <span className="absolute  border-2 w-0 border-getlink  -right-3 h-full"></span>
            <Image
              src={Wisper}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.8625rem] "
              alt="wisper"
            />
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            custom={5}
            className=" relative"
          >
            <span className="absolute  border-2 w-0 border-getlink  -right-3 h-full"></span>
            <Image
              src={Paybox}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.8625rem] "
              alt="paybox"
            />
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            custom={6}
            className="relative"
          >
            <Image
              src={Vuzual}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.9125rem] "
              alt="vuzual"
            />
          </motion.div>
        </div>
      </section>
    </section>
  );
}
