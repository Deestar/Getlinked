import Image from "next/image";
import Cloud from "../../../public/cloud.png";
import Q1 from "../../../public/q1.png";
import Q2 from "../../../public/q2.png";
import Q3 from "../../../public/q3.png";
import Shine from "../../../public/bg2.svg";
import Star from "../../../public/star.svg";
import Star2 from "../../../public/star2.svg";
import Star3 from "../../../public/star3.svg";
export default function FifthSection() {
  return (
    <section className="justify-center pt-8 flex flex-col py-16 items-center gap-y-4 row:flex-row row:center gap-x-2 xl:gap-x-6 relative row:px-12">
      <aside className="flex flex-col gap-y-11 max-w-xs">
        <article className="text-center relative">
          <h2 className="font-clash flex flex-col text-lg se_lg:text-xl">
            <span>Frequently Ask </span>
            <span className="text-getlink">Question</span>
          </h2>
          <h3 className="font-montsm text-xs se_lg:text-sm">
            We got answers to the questions that you might to ask about
            getlinked Hackathon 1.0
          </h3>
        </article>
        <ul className="font-montsm flex flex-col gap-y-3 px-1">
          <li className="flex  justify-between border-b border-getlink ">
            <p className="text-xs/loose se_lg:text-sm/loose">
              Can I work on a project I started before the hackathon?
            </p>
            <h2 className="self-end text-xl/[27.4px] text-getlink ">+</h2>
          </li>
          <li className="flex  justify-between border-b border-getlink">
            <p className="text-xs/loose se_lg:text-sm/loose">
              What happens if I need help during the
              <br className="hidden se:inline" />
              hackathon?
            </p>
            <h2 className="self-end text-xl/[27.4px] text-getlink ">+</h2>
          </li>
          <li className="flex  justify-between border-b border-getlink">
            <p className="text-xs/loose se_lg:text-sm/loose">
              What happens if I don't have an idea for
              <br className="hidden se:inline" />a project?
            </p>
            <h2 className="self-end text-xl/[27.4px] text-getlink ">+</h2>
          </li>
          <li className="flex  justify-between border-b border-getlink">
            <p className="text-xs/loose se_lg:text-sm/loose">
              Can I join a team or do I have to come
              <br className="hidden se:inline" />
              with one?
            </p>
            <h2 className="self-end text-xl/[27.4px] text-getlink ">+</h2>
          </li>
          <li className="flex  justify-between border-b border-getlink">
            <p className="text-xs/loose se_lg:text-sm/loose">
              What happens after the hackathon
              <br className="hidden se:inline" />
              ends
            </p>
            <h2 className="self-end text-xl/[27.4px] text-getlink ">+</h2>
          </li>
          <li className="flex  justify-between border-b border-getlink">
            <p className="text-xs/loose se_lg:text-sm/loose">
              Can I work on a project I started before the{" "}
              <br className="hidden se:inline" />
              hackathon?
            </p>
            <h2 className="self-end text-xl/[27.4px] text-getlink ">+</h2>
          </li>
        </ul>
        <Image
          src={Star3}
          className="w-4 h-4 absolute top-[2%] inset-0 left-3 se:left-[19%] desk:left-[20%] row:left-[10%] row:top-5 xl:left-[15%]"
          alt="star"
        />
      </aside>
      <aside className=" relative pt-16 z-10">
        <Image
          src={Q1}
          className="w-7 h-[2.7rem] self-end  absolute inset-0  top-[13%] left-[10%]"
          alt="q1"
        />
        <Image
          src={Q2}
          className="row:w-11 w-8 h-[3.5rem] row:h-[4.7rem] top-5 absolute inset-0 left-[30%]"
          alt="q2"
        />
        <Image
          src={Q3}
          className="w-7 h-[2.8rem] absolute inset-0 left-[60%] top-[14%] -z-10 se:top-[12%]"
          alt="q3"
        />
        <Image
          className="w-[18.5rem] h-[19.1rem] se_lg:w-[28rem] se_lg:h-[24rem]  row:w-[30rem] row:h-[30rem] lg:w-[34rem]  xl:w-[38rem] z-20"
          src={Cloud}
          alt="cloud"
        />
        {/* Stars */}
        <Image
          src={Star2}
          className="w-4 h-4 absolute top-[10%] inset-0 left-[55%] -z-10 desk:left-[45%]"
          alt="star"
        />
        <Image
          src={Star2}
          className="w-4 h-4 absolute top-[13%] inset-0 left-[24%]  -z-10 "
          alt="star"
        />
        <Image
          src={Star}
          className="w-4 h-4 absolute top-[97%] inset-0 left-[76%]  -z-10 "
          alt="star"
        />
        <Image
          src={Star}
          className="w-4 h-4 absolute top-[55%] inset-0 left-[12%]  -z-10"
          alt="star"
        />
      </aside>
      <Image
        className="absolute  -top-[15%] left-[55%] min-w-[20rem] h-[19rem]  mask mix-blend-hard-light xl:left-[62%]"
        src={Shine}
        alt="shine"
      />
    </section>
  );
}
