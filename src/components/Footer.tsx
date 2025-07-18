import Image from "next/image";
import { prefix } from "../lib/prefix";

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-between pt-8">
      <div className="flex items-center gap-2 text-white">
        <div className="w-10 h-11 relative">
          <Image
            src={`${prefix}/logo_zippit.png`}
            alt="Zippit logo"
            width={48}
            height={52}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col ml-2">
          <span className="text-md font-bold flex">Zippit</span>
          <span className="text-sm font-normal text-[#7A9799]">
            E-commerce
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button aria-label="Previous">
          <Image
            src={`${prefix}/arrow.png`}
            alt="Previous"
            width={48}
            height={48}
            className="hover:opacity-80 transition"
          />
        </button>
        <button aria-label="Next">
          <Image
            src={`${prefix}/arrow.png`}
            alt="Next"
            width={48}
            height={48}
            className="hover:opacity-80 transition rotate-180"
          />
        </button>
      </div>
    </div>
  );
}