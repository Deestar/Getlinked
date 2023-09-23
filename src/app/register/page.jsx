import MainRegister from "./component/MainRegister";
import Nav from "./component/Nav";

export default function Register() {
  return (
    <main className="h-fill bg-[#140D27] desk:gap-y-7 overflow-auto overflow-x-hidden text-white px-3 flex flex-col ">
      <Nav />
      <MainRegister />
    </main>
  );
}
