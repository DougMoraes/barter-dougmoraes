import Image from "next/image";
import Footer from "./Footer";
import Testimonial from "./Testimonial";

export default function Section() {
  return (
    <section className="hidden lg:flex w-1/3 bg-[var(--color-dark-background)] flex-col text-white">
      <div className="w-full h-full flex justify-center px-12">
        <div className="relative w-full h-full">
          <Image
            src="/hero.png"
            alt="Zipit Promo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-full h-full text-center flex flex-col items-center flex-grow justify-center gap-4 px-12">
        <Testimonial />
        <Footer />
      </div>
    </section>
  );
}
