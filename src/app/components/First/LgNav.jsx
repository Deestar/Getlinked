import Link from "next/link";

export default function LgNav() {
  return (
    <section className="hidden row:flex  items-center  gap-x-16">
      <ul className="font-montsm flex gap-x-7">
        <li>
          <Link href="#">Timeline</Link>
        </li>
        <li>
          <Link href="#">Overview</Link>
        </li>
        <li>
          <Link href="#">FAQs</Link>
        </li>
        <li>
          <Link href="#">Connect</Link>
        </li>
      </ul>
      <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-montsm text-sm py-2 px-7 w-max rounded z-20">
        Register
      </button>
    </section>
  );
}
