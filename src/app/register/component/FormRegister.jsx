"use state";
import React, { useState } from "react";
import CreateTitle from "./CreateTitle";
import Modal from "./Modal";

export default function FormRegister({ setter }) {
  const [input, setInput] = useState({
    team: "",
    phone: "",
    topic: "",
    email: "",
    category: 1,
    size: 2,
    agree: false,
  });
  const handleChange = (event) => {
    const { type, name, value } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: type == "checkbox" ? !prev : value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const inputData = new FormData();
    inputData.append("email", input.email);
    inputData.append("phone_number", input.phone);
    inputData.append("team_name", input.team);
    inputData.append(" group_size", input.size);
    inputData.append("project_topic", input.topic);
    inputData.append("category", input.category);
    inputData.append("privacy_policy_accepted", input.agree);
    try {
      const res = await fetch(
        "https://backend.getlinked.ai/hackthon/registration",
        {
          method: "POST",
          body: inputData,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const getResponse = await res.json();
      console.log(getResponse);
    } catch (error) {
      console.log(error.statusText);
      alert("error with connection");
    } finally {
      setter(true);
    }
  };
  return (
    <section className="w-full flex flex-col gap-y-3  desk:bg-[rgba(255,_255,_255,_0.03)]  py-4 px-2 max-w-[437px] mx-auto desk:shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] desk:backdrop-blur-[25px] desk:max-w-xl items-center desk:py-10 desk:rounded-lg sm:rounded-2xl row:min-w-max row:max-w-full row:px-6 lg:px-10 ">
      <h2 className="text-getlink font-clash text-xl se_lg:text-2xl sm:text-3xl py-2  w-full">
        Register
      </h2>
      <CreateTitle />
      <form className="flex flex-col gap-y-3 pb-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-3 row:flex-row row:gap-y-0 row:gap-x-4">
          <label>
            <p className="font-montsm text-[13px]/relaxed ">Team's Name</p>
            <input
              onChange={handleChange}
              value={input.team}
              required
              maxLength={20}
              name="team"
              className="relative h-12 border border-solid bg-[rgba(255,_255,_255,_0.03)]  shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-blur-[25px] rounded-md placeholder:text-white   w-full px-2 text-lg font-montsm outline-none placeholder:text-base placeholder:font-montsm    focus:outline-none"
              type="text"
              placeholder="Enter the name of your group"
            />
          </label>
          <label>
            <p className="font-montsm text-[13px]/relaxed ">Phone</p>
            <input
              onChange={handleChange}
              value={input.phone}
              name="phone"
              required
              maxLength={20}
              className="relative h-12 border border-solid bg-[rgba(255,_255,_255,_0.03)]  shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-blur-[25px] rounded-md placeholder:text-white   w-full px-2 text-lg font-montsm outline-none placeholder:text-base placeholder:font-montsm    focus:outline-none"
              type="phone"
              placeholder="Enter your phone number"
            />
          </label>
        </div>
        <div className="flex flex-col gap-y-3 row:flex-row row:gap-y-0 row:gap-x-4">
          <label>
            <p className="font-montsm text-[13px]/relaxed ">Email</p>
            <input
              onChange={handleChange}
              value={input.email}
              required
              name="email"
              maxLength={30}
              className="relative h-12 border border-solid bg-[rgba(255,_255,_255,_0.03)]  shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-blur-[25px] rounded-md placeholder:text-white   w-full px-2 text-lg font-montsm outline-none placeholder:text-base placeholder:font-montsm    focus:outline-none"
              type="email"
              placeholder="Enter your email address"
            />
          </label>
          <label>
            <p className="font-montsm text-[13px]/relaxed ">Project Topic</p>
            <input
              onChange={handleChange}
              value={input.topic}
              required
              name="topic"
              maxLength={150}
              className="relative h-12 border border-solid bg-[rgba(255,_255,_255,_0.03)]  shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-blur-[25px] rounded-md placeholder:text-white   w-full px-2 text-lg font-montsm outline-none placeholder:text-base placeholder:font-montsm    focus:outline-none"
              type="text"
              placeholder="What is your group project topic"
            />
          </label>
        </div>
        <div className="flex flex-col gap-y-3 row:flex-row row:gap-y-0 row:gap-x-4">
          <label className="row:basis-full">
            <p className="font-montsm text-[13px]/relaxed ">Category</p>
            <select
              onChange={handleChange}
              value={input.category}
              name="category"
              required
              className="relative h-12 border border-solid bg-[rgba(255,_255,_255,_0.03)]  shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-blur-[25px] rounded-md placeholder:text-white   w-full px-2 text-lg font-montsm outline-none placeholder:text-base placeholder:font-montsm    focus:outline-none "
              placeholder="Select your category"
            >
              <option className="text-black " value="1">
                Mobile
              </option>
              <option className="text-black" value="2">
                Web
              </option>
              <option className="text-black" value="3">
                Backend
              </option>
            </select>
          </label>
          <label className="row:basis-full">
            <p className="font-montsm text-[13px]/relaxed ">Group Size</p>
            <select
              onChange={handleChange}
              value={input.size}
              name="size"
              required
              className="relative h-12 border border-solid bg-[rgba(255,_255,_255,_0.03)]  shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] backdrop-blur-[25px] rounded-md placeholder:text-white   w-full px-2 text-lg font-montsm outline-none placeholder:text-base placeholder:font-montsm    focus:outline-none"
              placeholder="Select"
            >
              <option className="text-black " value="2">
                2
              </option>
              <option className="text-black " value="3">
                3
              </option>
              <option className="text-black " value="4">
                4
              </option>
              <option className="text-black " value="5">
                5
              </option>
              <option className="text-black " value="6">
                6
              </option>
            </select>
          </label>
        </div>
        <p className="text-[#FF26B9] text-[10px] font-montsm se:text-xs">
          Please review your registration details before submitting
        </p>
        <label className="flex gap-x-2">
          <input
            type="checkbox"
            onChange={handleChange}
            value={input.agree}
            type="checkbox"
            name="agree"
          />
          <p className=" text-[10px] font-montsm">
            I agreed with the event terms and conditions and privacy policy
          </p>
        </label>
        <button
          disabled={input.agree}
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-mont text-sm se:text-base py-2 px-8 w-max rounded self-center mt-3 se_lg:px-12 se_lg:py-4 se_lg:text-xl"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
