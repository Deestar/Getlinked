import Link from "next/link";

export default function LgNav({ iscontact, isregister }) {
  return (
    <section className="hidden row:flex  items-center  gap-x-16">
      <ul className="font-montsm flex gap-x-7">
        <li className="hover:bg-line-grad hover:rounded-sm hover:bg-clip-text hover:text-transparent">
          <Link href="#">Timeline</Link>
        </li>
        <li className="hover:bg-line-grad hover:rounded-sm hover:bg-clip-text hover:text-transparent">
          <Link href="#">Overview</Link>
        </li>
        <li className="hover:bg-line-grad hover:rounded-sm hover:bg-clip-text hover:text-transparent">
          <Link href="#">FAQs</Link>
        </li>
        <li className="hover:bg-line-grad hover:rounded-sm hover:bg-clip-text hover:text-transparent">
          <Link
            href="/contact"
            className={`${
              iscontact && "text-transparent bg-connect-grad bg-clip-text"
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>
      {isregister ? (
        <div className="bg-gradient-to-r rounded from-pink-500 via-purple-500 to-indigo-500 p-[2px]">
          <Link href="/register">
            <button className="bg-main font-montsm text-sm py-2 px-7 w-max rounded z-20">
              Register
            </button>
          </Link>
        </div>
      ) : (
        <Link href="/register">
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-montsm text-sm py-2 px-7 w-max rounded z-20">
            Register
          </button>
        </Link>
      )}
    </section>
  );
}
