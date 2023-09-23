import Link from "next/link";
import Facebook from "../../../../public/facebook.svg";
import Instagram from "../../../../public/instagram.svg";
import Linkdn from "../../../../public/linkdn.svg";
import Twitter from "../../../../public/twitter.svg";
import Image from "next/image";
export default function Footer({ className }) {
  return (
    <footer
      className={`flex flex-col ${className}  py-6 items-center max-w-xl mx-auto gap-y-2`}
    >
      <h3 className="font-mont text-sm text-getlink">Share on</h3>
      <div className="flex gap-x-2">
        <Link href="#">
          <Image
            className="w-2 h-2 se:w-3 se:h-3 "
            src={Facebook}
            alt="facebook"
          />
        </Link>
        <Link href="#">
          <Image
            className="w-2 h-2 se:w-3 se:h-3 "
            src={Instagram}
            alt="Instagram"
          />
        </Link>
        <Link href="#">
          <Image className="w-2 h-2 se:w-3 se:h-3 " src={Linkdn} alt="Linkdn" />
        </Link>
        <Link href="#">
          <Image
            className="w-2 h-2 se:w-3 se:h-3 "
            src={Twitter}
            alt="Twitter"
          />
        </Link>
      </div>
    </footer>
  );
}
