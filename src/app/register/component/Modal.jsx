import Image from "next/image";
import Man from "../../../../public/success.svg";
import Link from "next/link";
export default function Modal() {
  return (
    <section className="fixed inset-0 w-100vw h-100vh z-[900]  bg-[rgba(21,_14,_40,_0.93)] grid place-content-center ">
      <div className="flex flex-col gap-y-3 items-center border border-getlink  p-10 se_lg:p-14 desk:p-20 row:p-22">
        <Image
          src={Man}
          alt="man"
          className="w-[184px] h-[184px] row:w-[427px] row:h-[321px]"
        />
        <h4 className="text-center font-montsm font-semibold text-lg se_lg:text-xl row:text-2xl">
          Congratulations<br></br> you have successfully Registered!
        </h4>
        <Link href="/">
          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-mont text-sm se:text-base py-2 px-8 w-max rounded self-center mt-3 se_lg:px-12 se_lg:py-4 se_lg:text-xl">
            Back
          </button>
        </Link>
      </div>
    </section>
  );
}
