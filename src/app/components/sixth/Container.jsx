"use client";
import { motion } from "framer-motion";
export default function Container({ num, title, p, date, br, col, ind }) {
  const whileInView = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        delay: ind * 0.2,
      },
    },
  };
  const LeftIn = {
    initial: {
      x: 60,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        delay: 0.5,
        type: "spring",
        stiffness: 120,
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      variants={whileInView}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-[auto_1fr] grid-rows-[auto_auto]  gap-x-1  row:grid-cols-[1fr_auto_1fr] row:grid-rows-[auto] row:gap-x-12 min-h-max"
    >
      <aside className="w-[max] gap-y-1 grid row-[1/_span_2] grid-rows-[1fr_1.3rem] grid-cols-[1fr] row:col-[2] justify-center row:justify-start  row:grid-rows-[1fr] row:content-start row:h-[min(167px,100%)]">
        <div className="w-1 justify-self-center  bg-getlink "></div>
        <h5 className="justify-self-center w-[1.3rem] rounded-full bg-line-grad text-white grid place-content-center row:text-sm font-mont text-xs row:h-[2rem] row:w-[2rem] ">
          {num}
        </h5>
      </aside>
      <motion.article
        variants={LeftIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className={`flex ${
          col == 1 ? "row:col-[1]" : "row:col-[3]"
        } flex-col gap-y-2 row:h-[11.5rem] row:gap-y-3  ${
          col == 1 ? "row:text-end" : "row:text-start"
        } row:justify-end `}
      >
        <h3 className="font-mont text-xs text-getlink se:text-sm row:text-lg">
          {title}
        </h3>
        <p className="font-montsm text-xs/loose se:text-sm/relaxed row:text-base/snug">
          {p} {br && <br className="hidden row:inline" />} {br && br}
        </p>
      </motion.article>
      {/* seperatw */}
      <motion.h2
        variants={LeftIn}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        className={`col-[2] row-[2] text-getlink text-xs font-mont ml-1 sm:text-sm pt-2 self-end ${
          col == 1 ? "row:col-[3]" : "row:col-[1]"
        } row:row-[1] row:self-start row:h-[min(167px,100%)] row:flex row:items-end ${
          col == 1 ? "row:justify-start" : "row:justify-end"
        } row:text-lg`}
      >
        {date}
      </motion.h2>
    </motion.div>
  );
}
