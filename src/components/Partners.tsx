'use client';

import Image from 'next/image';
import { prefix } from '../lib/prefix';

export default function Partners() {
  return (
    <footer className="w-full border-t border-[#D9E1DC] bg-transparent md:px-10 sticky bottom-0 flex justify-center items-center gap-6">
      <p className="text-sm tracking-[2px] uppercase font-[300] text-center">
        Trusted by
      </p>

      <div className="flex flex-wrap gap-x-4">
        <Image
          src={`${prefix}/partners/logo_anne_and_max.png`}
          alt="Anne and Max logo"
          height={24}
          width={100}
          className="h-18 w-auto object-contain"
        />
        <Image
          src={`${prefix}/partners/logo_moco.png`}
          alt="Moco logo"
          height={24}
          width={100}
          className="h-18 w-auto object-contain"
        />
        <Image
          src={`${prefix}/partners/logo_flink.png`}
          alt="Flink logo"
          height={24}
          width={100}
          className="h-18 w-auto object-contain"
        />
        <Image
          src={`${prefix}/partners/logo_louene.png`}
          alt="Louène logo"
          height={24}
          width={100}
          className="h-18 w-auto object-contain"
        />
        <Image
          src={`${prefix}/partners/logo_miniso.png`}
          alt="Miniso logo"
          height={24}
          width={100}
          className="h-18 w-auto object-contain"
        />
        <Image
          src={`${prefix}/partners/logo_statiegeld.png`}
          alt="Statiegeld Nederland logo"
          height={24}
          width={100}
          className="h-18 w-auto object-contain"
        />
      </div>
    </footer>
  );
}