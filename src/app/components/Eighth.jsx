import Vuzual from "../../../public/vuzual.svg";
import Liberty from "../../../public/liberty.svg";
import Winwise from "../../../public/winwise.svg";
import Wisper from "../../../public/wisper.svg";
import Paybox from "../../../public/paybox.svg";
import Assured from "../../../public/assured.svg";
import Image from "next/image";
export default function Eighth() {
  return (
    <section className="bg-[#150E28] flex flex-col py-12 gap-y-10 justify-center items-center ">
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
      <section className=" p-1 h-max w-full flex justify-center ">
        <div className="grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto_auto] gap-y-3 gap-x-5 border border-getlink py-12 px-1 se:px-10 desk:px-16 sm:px-20 lg:px-28 row:gap-y-6 row:gap-x-[5.25rem]">
          <div className=" relative ">
            <span className="absolute  border-2 h-0 border-getlink -bottom-2 w-full row:-left-[3.825rem] row:w-[calc(100%_+_58px)]"></span>
            <span className="absolute  border-2 w-0 border-getlink -right-3 h-full "></span>
            <Image
              src={Assured}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.9125rem] "
              alt="assured"
            />
          </div>
          <div className="relative">
            <span className="absolute border-2 h-0 border-getlink  -bottom-2  w-full  row:-left-[3.725rem] row:w-[calc(100%_+_60px)]"></span>
            <span className="absolute  border-2 w-0 border-getlink  -right-3 h-full "></span>
            <Image
              src={Liberty}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.8625rem] "
              alt="liberty"
            />
          </div>
          <div className="relative">
            <span className="absolute border-2 h-0 border-getlink   -bottom-2 w-full row:-left-[3.725rem] row:w-[calc(100%_+_60px)]"></span>
            <Image
              src={Winwise}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.8625rem] "
              alt="vuzual"
            />
          </div>
          <div className="relative">
            <span className="absolute  border-2 w-0 border-getlink  -right-3 h-full"></span>
            <Image
              src={Wisper}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.8625rem] "
              alt="wisper"
            />
          </div>
          <div className=" relative">
            <span className="absolute  border-2 w-0 border-getlink  -right-3 h-full"></span>
            <Image
              src={Paybox}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.8625rem] "
              alt="paybox"
            />
          </div>
          <div className="relative">
            <Image
              src={Vuzual}
              className=" w-14 h-14 se:w-20 se:h-20 se_lg:w-24 se_lg:h-24 desk:w-28 desk:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 row:h-40 row:w-40 lg:h-44 lg:w-44 row:-translate-x-[1.9125rem] "
              alt="vuzual"
            />
          </div>
        </div>
      </section>
    </section>
  );
}
