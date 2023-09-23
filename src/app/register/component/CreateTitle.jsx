import Man from "../../../../public/walkman.svg";
import Girl from "../../../../public/walkgirl.svg";
import Line from "../../../../public/line.svg";
import Image from "next/image";
export default function CreateTitle() {
  return (
    <article className="pb-6">
      <div className="flex flex-col se:flex-row se:items-start gap-x-1 se:gap-x-2">
        <h4 className="font-montsm text-xs se:text-[15px]  se:h-[25px] se:flex se:items-end ">
          Be part of this movement!
        </h4>
        <aside className="flex se:w-fit flex-col  se:-translate-y-[6px]">
          <div className="flex se:self-center">
            <Image src={Man} className="w-6 h-6" alt="man" />
            <Image src={Girl} className="w-6 h-6" alt="girl" />
          </div>
          <Image src={Line} className="w-full max-w-[89px]" alt="line" />
        </aside>
      </div>
      {/* End */}
      <h2 className="text-lg font-montsm">CREATE YOUR ACCOUNT</h2>
    </article>
  );
}
