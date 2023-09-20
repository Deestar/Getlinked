"use client";
import Image from "next/image";
import Cancel from "../../../../public/cancel.svg";
import Link from "next/link";
import { motion } from "framer-motion";
export default function SubNav({ setter }) {
  const wrapdown = {
    initial: {
      height: 0,
    },
    animate: {
      height: 224,
    },
    exit: {
      height: 0,
      transition: {
        delay: 0.8,
      },
    },
  };
  const slideLeft = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        delay: custom * 0.3,
      },
    }),
    exit: (custom) => ({
      x: -150,
      transition: {
        type: "spring",
        stiffness: 150,
        delay: 0.7 / custom,
      },
    }),
  };
  const hide = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.7,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.section
      initial="initial"
      animate="animate"
      exit="exit"
      variants={wrapdown}
      className=" row:hidden bg-main z-50 absolute   inset-0 right-0 top-[98%] "
    >
      <header className="flex justify-end pr-4 ">
        <motion.div
          onClick={() => setter(false)}
          animate="animate"
          variants={hide}
          exit="exit"
          initial="initial"
          className="cursor-pointer rounded-full [background:_radial-gradient(at_top,#580158_50%,_pink)]"
        >
          <div className="m-[1px] se:p-2 p-1 bg-main inset-0 rounded-full  z-10 grid place-content-center">
            <Image
              src={Cancel}
              alt="nav-cancel"
              className="w-2 h-2 z-[300] se:w-3 se:h-3"
            />
          </div>
        </motion.div>
      </header>
      <ul className="py-4 pl-3 pb-4 ">
        <motion.li
          custom={1}
          animate="animate"
          variants={slideLeft}
          initial="initial"
          exit="exit"
          className="font-inter text-lg"
        >
          <Link href="#">Timeline</Link>
        </motion.li>
        <motion.li
          custom={2}
          animate="animate"
          variants={slideLeft}
          initial="initial"
          exit="exit"
          className="font-inter text-lg"
        >
          <Link href="#">Overview</Link>
        </motion.li>
        <motion.li
          custom={3}
          animate="animate"
          variants={slideLeft}
          initial="initial"
          exit="exit"
          className="font-inter text-lg"
        >
          <Link href="#">FAQs</Link>
        </motion.li>
        <motion.li
          custom={4}
          animate="animate"
          variants={slideLeft}
          initial="initial"
          exit="exit"
          className="font-inter text-lg"
        >
          <Link href="#">Contact</Link>
        </motion.li>
      </ul>
      <motion.button
        custom={5}
        animate="animate"
        variants={hide}
        initial="initial"
        exit="exit"
        className="ml-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-montsm text-sm py-2 px-7 w-max self-center row:self-start rounded z-20"
      >
        Register
      </motion.button>
    </motion.section>
  );
}
