import React from "react";
import Form from "./Form";
import DeskContent from "./DeskContent";
export default function MainContent() {
  return (
    <section className="flex justify-between gap-x-7 px-14">
      <DeskContent />
      <Form />
    </section>
  );
}
