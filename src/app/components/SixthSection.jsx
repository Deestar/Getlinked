import React from "react";
import Container from "./sixth/Container";
import Star from "../../../public/star.svg";
import Star2 from "../../../public/star2.svg";
import Star3 from "../../../public/star4.svg";
import Image from "next/image";

export default function SixthSection() {
  return (
    <section className="relative py-14 flex flex-col items-center justify-center gap-y-10 px-2 bd">
      <header className="text-center max-w-sm">
        <h1 className="font-clash text-xl pb-2 sm:text-2xl md:text-3xl">
          Timeline
        </h1>
        <h3 className="font-montsm text-sm">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </h3>
      </header>
      <section className="flex px-2 flex-col gap-y-6 max-w-sm self-center row:max-w-4xl  row:gap-y-1">
        <Container
          ind={1}
          num="1"
          date="November 18, 2023"
          p="The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register"
          title="Hackathon Announcement"
          col={1}
        />
        <Container
          ind={2}
          num="2"
          date="November 18, 2023"
          p="Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register"
          title="Teams Registration begins"
          col={3}
        />
        <Container
          ind={3}
          num="3"
          date="November 18, 2023"
          p="Interested Participants are no longer Allowed
          to "
          br="register"
          title="Teams Registration ends"
          col={1}
        />
        <Container
          ind={4}
          num="4"
          date="November 18, 2023"
          p="All teams whom idea has been accepted into
          getlinked tech hackathon 1.0 2023 are formally
          announced"
          title="Announcement of the accepted teams and ideas"
          col={3}
        />
        <Container
          ind={5}
          num="5"
          date="November 18, 2023"
          p="Accepted teams can now proceed to build
          their ground breaking skill driven solutions"
          title="Getlinked Hackathon 1.0 Offically Begins"
          col={1}
        />
        <Container
          ind={6}
          num="6"
          date="November 18, 2023"
          p="Teams get the opportunity to pitch their
            projects to judges. The winner of the
           hackathon will also be announced on this day"
          title="Demo Day"
          col={3}
        />
      </section>
      {/* Stars */}
      <Image
        src={Star2}
        alt="star"
        className="w-4 h-4 absolute inset-0 top-[14%] left-[25%]"
      />
      <Image
        src={Star3}
        alt="star"
        className="w-4 h-4 absolute inset-0 top-[97%] left-[10%]"
      />
      <Image
        src={Star}
        alt="star"
        className="w-4 h-4 absolute inset-0 top-[50%] left-[86%]"
      />
    </section>
  );
}
