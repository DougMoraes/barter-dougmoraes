'use client';

import Image from 'next/image';
import { prefix } from '../../prefix';

export default function Header() {
  return (
    <header className="w-full md:px-12 py-12 sticky top-0 z-50 bg-transparent flex items-center gap-4">
      <div className="bg-[var(--color-dark-text)] rounded-md w-10 h-10 flex items-center justify-center">
        <Image
          src={`${prefix}/letter.png`}
          alt="Barter icon"
          height={24}
          width={24}
          className="h-6 w-6 object-contain"
        />
      </div>
      <Image
        src={`${prefix}/Barter.png`}
        alt="Barter text logo"
        height={24}
        width={100}
        className="h-6 w-auto object-contain"
      />
    </header>
  );
}
