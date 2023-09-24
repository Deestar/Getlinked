import Link from "next/link";
import { motion } from "framer-motion";
export default function LgNav({ iscontact, isregister }) {
  const navVariants = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="hidden row:flex  items-center  gap-x-16">
      <ul className="font-montsm flex gap-x-7">
        <motion.li
          variants={navVariants}
          initial="initial"
          animate="animate"
          custom={1}
          className="hover:bg-line-grad hover:rounded-sm hover:bg-clip-text hover:text-transparent"
        >
          <Link href="#">Timeline</Link>
        </motion.li>
        <motion.li
          variants={navVariants}
          initial="initial"
          animate="animate"
          custom={2}
          className="hover:bg-line-grad hover:rounded-sm hover:bg-clip-text hover:text-transparent"
        >
          <Link href="#">Overview</Link>
        </motion.li>
        <motion.li
          variants={navVariants}
          initial="initial"
          animate="animate"
          custom={3}
          className="hover:bg-line-grad hover:rounded-sm hover:bg-clip-text hover:text-transparent"
        >
          <Link href="#">FAQs</Link>
        </motion.li>
        <motion.li
          variants={navVariants}
          initial="initial"
          animate="animate"
          custom={4}
          className="hover:bg-line-grad hover:rounded-sm hover:bg-clip-text hover:text-transparent"
        >
          <Link
            href="/contact"
            className={`${
              iscontact && "text-transparent bg-connect-grad bg-clip-text"
            }`}
          >
            Contact
          </Link>
        </motion.li>
      </ul>
      {isregister ? (
        <div className="bg-gradient-to-r rounded from-pink-500 via-purple-500 to-indigo-500 p-[2px]">
          <Link href="/register">
            <motion.button
              variants={navVariants}
              custom={5}
              animate="animate"
              initial="initial"
              className="bg-main font-montsm text-sm py-2 px-7 w-max rounded z-20"
            >
              Register
            </motion.button>
          </Link>
        </div>
      ) : (
        <Link href="/register">
          <motion.button
            variants={navVariants}
            custom={5}
            animate="animate"
            initial="initial"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-montsm text-sm py-2 px-7 w-max rounded z-20"
          >
            Register
          </motion.button>
        </Link>
      )}
    </section>
  );
}
