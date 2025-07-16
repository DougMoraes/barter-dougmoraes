'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#D9E1DC] bg-transparent px-4 md:px-10 sticky bottom-0">
      <div className="mx-auto py-6 flex justify-center items-center gap-6">
        <p className="text-[14px] leading-none tracking-[2px] uppercase font-[400] font-outfit text-center">
          Trusted by
        </p>

        <div className="flex flex-wrap gap-x-4">
          <Image
            src="/partners/logo_anne_and_max.png"
            alt="Anne and Max logo"
            height={24}
            width={100}
            className="h-24 w-auto object-contain"
          />
          <Image
            src="/partners/logo_moco.png"
            alt="Moco logo"
            height={24}
            width={100}
            className="h-24 w-auto object-contain"
          />
          <Image
            src="/partners/logo_flink.png"
            alt="Flink logo"
            height={24}
            width={100}
            className="h-24 w-auto object-contain"
          />
          <Image
            src="/partners/logo_louene.png"
            alt="Louène logo"
            height={24}
            width={100}
            className="h-24 w-auto object-contain"
          />
          <Image
            src="/partners/logo_miniso.png"
            alt="Miniso logo"
            height={24}
            width={100}
            className="h-24 w-auto object-contain"
          />
          <Image
            src="/partners/logo_statiegeld.png"
            alt="Statiegeld Nederland logo"
            height={24}
            width={100}
            className="h-24 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}