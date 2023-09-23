import Image from "next/image";
import Trophy from "../../../public/trophy.png";
import Silver from "../../../public/silver.svg";
import Gold from "../../../public/gold.svg";
import Bronze from "../../../public/bronze.svg";
export default function Seventh() {
  return (
    <section className="py-12 flex flex-col justify-center items-center px-2 gap-y-16 row:items-end row:gap-y-36   row:px-13 ">
      <header className=" flex flex-col items-center row:items-start max-w-[18rem] row:text-center row:mr-[9%] row:max-w-max xl:mr-[15%] ">
        <h2 className="flex  flex-col font-clash text-xl w-max se:text-3xl row:text-start ">
          Prizes and <span className="text-getlink">Rewards</span>
        </h2>
        <p className="font-montsm text-xs text-center se:text-sm se_lg:text-base row:text-start row:text-sm">
          Highlight of the prizes or rewards for winners
          <br className="hidden se_lg:inline row:hidden" /> and{" "}
          <br className="hidden row:inline" />
          for participants.
        </p>
      </header>
      <div className="flex flex-col gap-y-32 row:flex-row  row:gap-x-8 row:items-end row:justify-end  row:self-center ">
        <Image
          src={Trophy}
          alt="trophy"
          className="min-h-[17rem] self-center row:self-start w-[90%] relative row:-translate-y-20 lg:min-w-[min(80%,_381px)]"
        />
        <section className="w-full flex items-center justify-center gap-x-2 self-center   row:items-end row:self-center row:inset-0 row:bottom-[80px] row:gap-x-3 se:gap-x-3 desk:gap-x-6">
          {/* Silver */}
          <div className="se_lg:min-w-[120px] px-1 max-w-[90px] relative bg-[#d434fe1f] border border-getlink basis-[100%] se_lg:max-w-[120px] se_lg:h-[140px] rounded-md flex flex-col item-center justify-center h-28  row:min-w-[9.7rem]  row:h-[10.5rem] self-end">
            <Image
              src={Silver}
              alt="silver"
              className="relative self-end inset-0 -top-[27%] h-[5.5rem] w-[4.5rem] se_lg:h-[7.5rem] se_lg:w-[6.5rem] mx-auto row:h-[6.1rem] row:min-w-[6.1rem] lg:min-w-[8.1rem] lg:h-[8.1rem] se_lg:-top-[44%] "
            />
            <article className=" relative bottom-[10%]  row:bottom-9 ">
              <h4 className="font-montsm text-center text-xs se:text-sm se_lg:font-mont row:font-mont row:text-xl">
                2nd
              </h4>
              <h3 className="font-montsm text-center text-xs se:text-ms se:font-semibold row:text-lg font-semibold">
                Runner
              </h3>
              <h2 className="font-mont text-center text-xs se:text-base text-[#9034FF] row:font-mont row:text-xl row:pt-5 lg:pt-0">
                N300,000
              </h2>
            </article>
          </div>
          {/* Gold */}
          <div className="relative max-w-[90px] bg-[rgba(144,_58,_255,_0.12)] border border-[#903AFF] basis-[100%] se_lg:max-w-[120px] se_lg:min-w-[120px] se_lg:w-[120px] se_lg:h-[160px] rounded-md flex flex-col item-center h-32 row:min-w-[9.7rem] row:h-[12rem] justify-between">
            <Image
              src={Gold}
              alt="gold"
              className=" relative se_lg:-top-[55%] inset-0 -top-[37%]  max-h-[4.85rem] max-w-[4.85rem] se_lg:min-w-[155px] se_lg:min-h-[155px]  se:min-w-[7.85rem] mx-auto se:left-[50%] se:translate-x-[-50%]  lg:min-w-[11.55rem] lg:min-h-[11.55rem] lg:-top-[54%]"
            />
            <article className=" absolute bottom-2 right-0 left-0">
              <h4 className="font-montsm text-center text-xs se:text-sm se_lg:font-mont row:font-mont row:text-xl">
                1st
              </h4>
              <h3 className="font-montsm text-center text-xs se:text-ms se:font-semibold row:text-lg font-semibold">
                Runner
              </h3>
              <h2 className="font-mont text-center text-xs se:text-base text-[#9034FF] row:font-mont row:text-xl row:pt-5 lg:pt-0">
                N400,000
              </h2>
            </article>
          </div>
          {/* Bronze */}
          <div className="px-1 max-w-[90px] se_lg:min-w-[120px] relative bg-[#d434fe1f] border border-getlink basis-[100%] self-end se_lg:max-w-[120px] se_lg:h-[140px]  rounded-md flex flex-col item-center justify-center h-28  row:min-w-[9.7rem]  row:h-[10.5rem] ">
            <Image
              src={Bronze}
              alt="bronze"
              className="relative se_lg:h-[7.5rem] se_lg:w-[6.5rem] inset-0 -top-[27%] h-[4.5rem] w-[4.5rem] se_lg:-top-[44%]  se:min-w-[4.85rem] mx-auto se:h-[4.85rem] row:h-[6.1rem] row:min-w-[6.1rem] lg:min-w-[8.1rem] lg:h-[8.1rem]"
            />
            <article className=" relative bottom-[10%] row:bottom-9">
              <h4 className="font-montsm text-center text-xs se:text-sm se_lg:font-mont row:font-mont row:text-xl">
                3rd
              </h4>
              <h3 className="font-montsm text-center text-xs se:text-ms se:font-semibold row:text-lg font-semibold">
                Runner
              </h3>
              <h2 className="font-mont text-center text-xs se:text-base text-[#9034FF] row:font-mont row:text-xl row:pt-5 lg:pt-0">
                N300,000
              </h2>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
