import Eighth from "./components/Eighth";
import FifthSection from "./components/FifthSection";
import FirstSection from "./components/FirstSection";
import Footer from "./components/Footer";
import FourthSection from "./components/FourthSection";
import Ninth from "./components/Ninth";
import SecondSection from "./components/SecondSection";
import Seventh from "./components/Seventh";
import SixthSection from "./components/SixthSection";
import ThirdSection from "./components/ThirdSection";

export default function Hackton() {
  return (
    <main className="h-fill bg-main overflow-auto overflow-x-hidden text-white ">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Seventh />
      <Eighth />
      <Ninth />
      <Footer />
    </main>
  );
}
