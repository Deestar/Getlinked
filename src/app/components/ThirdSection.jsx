import Image from "next/image";
import Lego from "../../../public/rego.png";
import Star from "../../../public/star4.png";
import Star2 from "../../../public/star4.svg";
import Shine from "../../../public/bg2.svg";
export default function ThirdSection() {
  return (
    <section className="bd pt-10 flex flex-col gap-y-14 row:flex-row row:justify-around row:items-center pb-7 overflow-hidden z-[1]">
      <div className=" flex justify-center relative z-30 row:order-2">
        <Image
          src={Lego}
          className="w-[18.5rem] h-[19.1rem] row:w-[20rem] row:h-[20rem] lg:w-[30rem] lg:h-[28rem]"
          alt="lego"
        />
        <Image
          src={Star}
          className="absolute inset-0 w-4 h-4 top-[38%] left-[5%] se_lg:top-[38%]  row:left-0 row:top-[35%]"
          alt="Star"
        />
      </div>
      <article className="flex flex-col items-center px-1 se:px-2 relative  row:order-1 ">
        <Image
          src={Star2}
          className="absolute inset-0 w-5 h-5 top-[7%] left-[93%] se_lg:top-[8%] se_lg:left-[80%]  row:top-[8%] row:left-[103%]"
          alt="Star"
        />
        <div className="absolute inset-0  w-[535px] h-[468px] -top-[50%] left-[40%] se_lg:left-[50%] se_lg:-top-[60%] sm:h-[850px] sm:-top-[90%] sm:w-[150px] overflow-hidden mix-blend-hard-light z-[1] ">
          <Image
            src={Shine}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            alt="Star"
          />
        </div>

        <h2 className="font-clash text-lg se:text-xl text-center flex flex-col sm:text-2xl md:text-3xl row:text-start row:text-3xl lg:text-3xl/[1.4] z-[2]">
          Rules and
          <span className="text-getlink">Guidelines</span>
        </h2>
        <p className="text-center max-w-xs font-montsm text-xs/loose se:text-sm/loose sm:text-base desk:max-w-sm row:text-start row:text-sm z-[2]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </article>
    </section>
  );
}
