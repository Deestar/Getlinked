import Image from "next/image";
import Curve from "../../../../public/curve.svg";
import Star from "../../../../public/star.svg";
import Spark from "../../../../public/spark.svg";
import Bulb from "../../../../public/bulb.svg";
import Chain from "../../../../public/chain.svg";
import Globe from "../../../../public/globe.png";
import BgShine from "../../../../public/bg2.svg";
import Man from "../../../../public/warn.png";
import Link from "next/link";
export default function MainPage() {
  return (
    <section className="pt-7 px-1 flex flex-col gap-y-9 overflow-x-hidden row:gap-y-15 overflow-y-hidden">
      <h4 className="italic justify-center font-mont text-[10.5px] flex gap-1 se:text-sm se_lg:text-base z-40 sm:text-lg md:text-xl text-white  row:pr-9  row:text-2xl row:justify-end ">
        Igniting a Revolution in
        <span className="inline-block  relative z-20 text-white">
          HR Innovation
          <Image
            className="absolute w-[100%] bottom-[-10px] desk:bottom-[-15px]"
            alt="curve"
            src={Curve}
          />
        </span>
      </h4>
      <div className="flex flex-col gap-y-7 items-center row:flex-row  row:justify-between row:px-5 lg:px-7">
        <article className="relative flex flex-col items-center gap-y-2 w-max  row:items-start pl-8">
          <header className="text-[1.7rem]/tight font-clash se:text-3xl se_lg:text-4xl desk:text-5xl lg:text-6xl xl:text-7xl">
            {/* Absolute Images */}
            <Image
              src={BgShine}
              className="absolute inset-0 min-w-[450px] left-[-30%] top-[-35%] desk:left-[-200px] desk:top-[-160px] desk:min-w-[600px] z-[1] row:top-[-120%] row:left-[-80px] row:h-[700px] row:min-w-[770px] lg:top-[-90%] mix-blend-hard-light"
              style={{
                objectPosition: "center",
              }}
              alt="shiners"
            />
            <Image
              src={Star}
              className="absolute inset-0 w-[10px] mx-[22%] top-[-6%]"
              style={{
                objectPosition: "center",
              }}
              alt="shiners"
            />
            <Image
              src={Star}
              className="absolute bottom-[5rem] w-[6px] right-[12%] se:right-[8%] [filter:contrast(70%)] row:w-3 row:right-[15vw] lg:right-[18vw] row:bottom-[3.5rem]"
              style={{
                objectPosition: "center",
              }}
              alt="shiners"
            />
            <Image
              src={Star}
              className="absolute top-[-3%] w-[4px] right-[0]  [filter:contrast(70%)]"
              style={{
                objectPosition: "center",
              }}
              alt="shiners"
            />
            {/* End... */}
            <h1 className="text-end pr-6 relative z-20 text-white row:text-start">
              getlinkedTech
              <Image
                className="absolute top-[-10px] right-[16%] w-5 h-5 row:w-9 row:h-9 row:top-[-28px] row:right-[20%]"
                src={Bulb}
                alt="spark"
              />
            </h1>
            <h1 className="flex gap-1 text-white z-30">
              <span className="z-40">Hackthon</span>
              <span className="flex text-getlink h-fit items-center row:items-start">
                1.0
                <Image
                  className="w-5 h-5 sm:h-8 sm:w-8 se_lg:w-7 se_lg:h-7 row:w-12 row:h-12  lg:mt-3"
                  alt="chain"
                  src={Chain}
                />
                <Image
                  className=" w-6 h-6 row:w-12 row:h-12 se_lg:w-7 se_lg:h-7 sm:h-8 sm:w-8 lg:mt-3"
                  alt="spark"
                  src={Spark}
                />
              </span>
            </h1>
          </header>
          <p className="z-20  text-white max-w-[16rem] w-[12rem] se:w-auto  se:px-1 font-montsm text-[0.68rem]/loose text-center flex items-center se:text-sm/relaxed  row:items-start row:text-start row:max-w-[21.5rem]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <footer className="flex flex-col gap-y-5 pt-5">
            <Link
              href="/register"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-montsm text-sm py-3 px-10 w-max self-center row:self-start rounded z-20"
            >
              Register
            </Link>

            <div className="flex font-unica justify-center text-4xl gap-x-4 row:gap-x-6 row:text-5xl">
              <h4>
                00<sub className="font-montsm text-sm">H</sub>
              </h4>
              <h4>
                00<sub className="font-montsm text-sm">M</sub>
              </h4>
              <h4>
                00<sub className="font-montsm text-sm">S</sub>
              </h4>
            </div>
          </footer>
        </article>
        {/* Man and stars */}
        <div className="relative  flex justify-center">
          <Image
            src={BgShine}
            className="hidden row:block absolute inset-0 min-w-[510px] h-[510px] z-30 top-[-15%] left-[14%] mix-blend-hard-light"
            style={{
              objectPosition: "center",
            }}
            alt="shiners"
          />
          <Image
            alt="man"
            className="h-[350px]  min-w-[310px]  desk:h-[400px]
            desk:min-w-[380px] sm:min-w-[480px] row:sm:min-w-[54vw] row:sm:h-[530px] lg:sm:min-w-[590px] lg:sm:h-[570px] mix-blend-luminosity"
            src={Man}
          />
          <Image
            alt="globe"
            className="absolute  mx-auto mt-2 min-w-[310px] h-[310px] mr-7 desk:min-w-[350px] desk:h-[350px]  sm:h-[400px] shine sm:min-w-[400px] row:min-w-[500px] row:h-[500px] z-30 mix-blend-hard-light"
            src={Globe}
          />
        </div>
      </div>
    </section>
  );
}
