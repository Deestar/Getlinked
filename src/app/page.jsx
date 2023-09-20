import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

export default function Hackton() {
  return (
    <main className="h-fill bg-main overflow-auto overflow-x-hidden text-white ">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}
