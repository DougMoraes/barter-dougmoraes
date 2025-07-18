import Image from "next/image";
import { prefix } from "../lib/prefix";

export default function Testimonial() {
  return (
    <div className="relative py-4 text-white">
      <Image
        src={`${prefix}/quote.png`}
        alt=""
        width={40}
        height={40}
        className="absolute top-0 left-0 z-10"
      />

      <p className="relative z-11 text-left font-semibold text-lg pl-6 pr-20 leading[1.5] tracking-wide">
        Barter is a fantastic way to connect with influencers at scale. We’ve
        been using it from the very beginning and have already established many
        valuable collaborations through Barter. We still receive daily requests
        from influencers who want to try our products, which we’re very happy
        about, and now that the new interface is live, the platform works
        excellently!
      </p>

      <Image
        src={`${prefix}/quote.png`}
        alt=""
        width={40}
        height={40}
        className="absolute bottom-0 right-0 rotate-180 z-10"
      />
    </div>
  );
}