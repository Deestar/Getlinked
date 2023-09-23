import Navbar from "../components/First/Navbar";
import Footer from "./component/Footer";
import MainContent from "./component/MainContent";
import Nav from "./component/Nav";
export default function Contact() {
  return (
    <main className="h-fill bg-[#140D27] desk:gap-y-7 overflow-auto overflow-x-hidden text-white px-3 flex flex-col ">
      <Nav />
      <MainContent />
      <Footer className="row:hidden" />
    </main>
  );
}
