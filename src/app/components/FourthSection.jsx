import Image from "next/image";
import Workers from "../../../public/workers.png";
import Shine from "../../../public/bg2.svg";
import Star from "../../../public/star.svg";
import Star2 from "../../../public/star2.svg";
import Star3 from "../../../public/star4.svg";
export default function FourthSection() {
  return (
    <section className="flex flex-col py-2 pt-7 row:flex-row row:justify-around row:items-center  row:py-5 overflow-hidden relative">
      <div className="flex justify-center relative">
        <Image
          src={Workers}
          alt="workers"
          className="w-[18.5rem] h-[19.1rem] row:w-[30rem] row:h-[30rem] lg:w-[34rem]  xl:w-[38rem] z-20"
        />
        <Image
          alt="shine"
          src={Shine}
          className="absolute z-10 inset-0 top-[4rem] -left-[8.5rem] mask min-w-[450px] se:top-[5rem] se:-left-[7.5rem] se_lg:-left-[4rem] desk:top-[3rem] desk:-left-[2.4rem] sm:top-0 md:-top-4 mix-blend-hard-light row:min-w-[600px] row:min-h-[600px] row:top-[5rem] row:-left-[8rem]"
        />
        <Image
          src={Star2}
          alt="star dia"
          className="absolute inset-0 mx-auto w-4 h-4 row:-top-10 -top-6"
        />
        <Image
          src={Star3}
          alt="star dia"
          className="absolute inset-0 m-auto w-4 h-4 left-7 top-6"
        />
      </div>
      <article className="py-2 text-center px-2 flex flex-col gap-y-3 items-center se_lg:gap-y-5 row:text-start row:items-start row:gap-y-2 ">
        <header className="font-clash text-xl sm:text-2xl md:text-3xl row:text-start row:text-3xl lg:text-3xl/[1.4]">
          <h2>Judging Criteria</h2>
          <h2 className="text-getlink font-mont">Key attributes</h2>
        </header>
        <ul className="flex flex-col gap-y-3 font-montsm text-xs/relaxed max-w-xs se_lg:gap-y-5 se_lg:text-sm/relaxed desk:text-base/relaxed row:gap-y-2 row:text-base/tight relative">
          <li>
            <span className="text-getlink font-mont">
              {" "}
              Innovation and Creativity:{" "}
            </span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </li>
          <li>
            <span className="text-getlink font-mont">Functionality: </span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </li>
          <li>
            <span className="text-getlink font-mont">
              Technical Complexity:{" "}
            </span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </li>
          <li>
            <span className="text-getlink font-mont">
              Adherence to Hackathon Rules:
            </span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </li>
          <Image
            alt="shine"
            src={Shine}
            className="absolute z-10 inset-0 top-[25%] left-[30%] mask min-w-[450px] min-h-[850px] se:-top-8 se:left-[40%] se_lg:left-[45%] se_lg:top-[40%]  sm:left-[90%]  mix-blend-hard-light row:min-w-[600px] row:min-h-[600px] row:-left-4 row:top-[55%] lg:left-[40%]"
          />
          <Image
            alt="shine"
            src={Star}
            className="absolute w-4 h-4 z-20 inset-0 top-[105%] left-[94%] row:-left-10 "
          />
        </ul>
        <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-mont text-sm py-2 px-7 w-max rounded self-center mt-3">
          Read More
        </button>
      </article>
      {/* Stars */}
    </section>
  );
}
