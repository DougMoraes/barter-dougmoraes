import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-between p-8">
      <div className="flex items-center gap-2 text-white">
        <div className="w-10 h-11 relative">
          <Image
            src="/logo_zippit.png"
            alt="Zippit logo"
            width={48}
            height={52}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col">
          <span className="text-md font-bold flex font-outfit">Zippit</span>
          <span className="text-base font-normal text-[#7A9799] font-outfit">
            E-commerce
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button aria-label="Previous">
          <Image
            src="/arrow.png"
            alt="Previous"
            width={48}
            height={48}
            className="hover:opacity-80 transition"
          />
        </button>
        <button aria-label="Next">
          <Image
            src="/arrow.png"
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