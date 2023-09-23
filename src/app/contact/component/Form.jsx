"use client";
import { useState } from "react";
import ContactInfo from "./ContactInfo";
export default function Form() {
  const [input, setInput] = useState({
    team: "",
    topic: "",
    email: "",
    email2: "",
    message: "",
  });
  const handleChange = (event) => {
    const { type, name, value } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };
  return (
    <section className="w-full flex flex-col gap-y-5  desk:bg-[rgba(255,_255,_255,_0.03)]  py-4 px-2 max-w-[437px] mx-auto desk:shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] desk:backdrop-blur-[25px] desk:max-w-xl items-center desk:py-10 desk:rounded-lg sm:rounded-2xl">
      <ContactInfo />
      <form
        className="flex flex-col w-full gap-y-8  pb-4 pt-7 max-w-[437px] "
        onSubmit={handleSubmit}
      >
        <label className="relative h-12 border border-solid bg-[rgba(255,_255,_255,_0.03)]  shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-blur-[25px] rounded-md">
          <input
            onChange={handleChange}
            value={input.team}
            name="team"
            max={40}
            className="placeholder:text-white  bg-transparent h-full w-full px-2 text-lg font-montsm outline-none placeholder:text-base placeholder:font-montsm  focus:border-none focus:border-transparent focus:outline-none"
            placeholder="Team's Name"
            type="text"
          />
        </label>
        <label className="relative h-12 border border-solid bg-[rgba(255,_255,_255,_0.03)]  shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-blur-[25px] rounded-md row:hidden">
          <input
            onChange={handleChange}
            value={input.topic}
            name="topic"
            maxLength={100}
            className=" bg-transparent h-full w-full px-2 text-lg font-montsm outline-none placeholder:text-base placeholder:text-white placeholder:font-montsm  focus:border-none focus:border-transparent focus:outline-none"
            placeholder="Topic"
            type="text"
          />
        </label>
        <label className=" relative h-12 border border-solid bg-[rgba(255,_255,_255,_0.03)]  shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-blur-[25px] rounded-md row:hidden">
          <input
            onChange={handleChange}
            value={input.email}
            name="email"
            className="placeholder:text-white  bg-transparent h-full w-full px-2 text-lg font-montsm outline-none placeholder:text-base placeholder:font-montsm  focus:border-none focus:border-transparent focus:outline-none "
            placeholder="Email"
            type="email"
          />
        </label>
        <label className=" relative h-12 border border-solid bg-[rgba(255,_255,_255,_0.03)]  shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-blur-[25px] rounded-md  hidden row:block">
          <input
            onChange={handleChange}
            value={input.email2}
            name="email2"
            maxLength={30}
            className="placeholder:text-white  bg-transparent h-full w-full px-2 text-lg font-montsm outline-none placeholder:text-base placeholder:font-montsm  focus:border-none focus:border-transparent focus:outline-none "
            placeholder="Mail"
            type="email"
          />
        </label>
        <label className=" py-5 relative h-[10rem] border border-solid bg-[rgba(255,_255,_255,_0.03)] shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-blur-[25px] rounded-md se_lg:h-[13rem]">
          <textarea
            onChange={handleChange}
            value={input.message}
            name="message"
            maxLength={200}
            className="placeholder:text-white  bg-transparent h-full w-full px-2 text-lg font-montsm outline-none placeholder:text-base placeholder:font-montsm  focus:border-none focus:border-transparent focus:outline-none resize-none"
            placeholder="Message"
            type="text"
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-mont text-sm se:text-base py-2 px-8 w-max rounded self-center mt-3 se_lg:px-12 se_lg:py-4 se_lg:text-xl"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
