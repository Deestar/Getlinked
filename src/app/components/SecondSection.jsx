"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Idea from "../../../public/idea.png";
import Arrow from "../../../public/arrow.png";
import Star from "../../../public/star2.svg";
import Star2 from "../../../public/star3.svg";
export default function SecondSection() {
  const slideIn = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        delay: custom * 0.4,
      },
    }),
  };
  const fadeIn = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.2,
        ease: "easeOut",
      },
    }),
  };
  return (
    <section className="bd pt-10 flex flex-col gap-y-14 row:flex-row row:justify-around row:items-center pb-7 overflow-hidden">
      <motion.div
        variants={slideIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        custom={1}
        className=" flex justify-center relative"
      >
        <Image
          src={Idea}
          className="w-[16.5rem] h-[16.1rem] row:w-[20rem] row:h-[20rem] lg:w-[30rem] lg:h-[28rem]"
          alt="light bulb"
        />

        <h2 className="absolute font-mont inset-0 w-max h-max  m-auto text-center text-sm se:text-base row:text-xl">
          The Big <br />
          Idea!
        </h2>
        <Image
          src={Arrow}
          className="absolute inset-0 top-[103%] mx-auto w-11 h-8 row:top-[95%] row:mx-0 row:left-[95%]"
          alt="Arrow"
        />
        <Image
          src={Star}
          className="absolute inset-0 w-4 h-4 top-[34%] left-[5%] se_lg:top-[33%] se_lg:left-[20%] row:left-0 row:top-[35%]"
          alt="Star"
        />
      </motion.div>
      <article className="flex flex-col items-center px-1 se:px-2 relative">
        <Image
          src={Star2}
          className="absolute inset-0 w-5 h-5 top-[7%] left-[93%] se_lg:top-[8%] se_lg:left-[80%]  row:top-[8%] row:left-[103%]"
          alt="Star"
        />
        <motion.h2
          variants={fadeIn}
          custom={1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="font-clash text-lg se:text-xl text-center flex flex-col sm:text-2xl md:text-3xl row:text-start row:text-3xl lg:text-3xl/[1.4]"
        >
          Introduction to getlinked
          <span className="text-getlink">techHackathon 1.0</span>
        </motion.h2>
        <motion.p
          variants={fadeIn}
          custom={2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: "some" }}
          className="text-center max-w-xs font-montsm text-xs/loose se:text-sm/loose sm:text-base desk:max-w-sm row:text-start row:text-sm "
        >
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day to shape the future. Whether you're a coding genius, a
          design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </motion.p>
      </article>
    </section>
  );
}
