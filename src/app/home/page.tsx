import AppAwaits from "./_components/AppAwaits";
import CardHolder from "./_components/CardHolder";
import EarningOpportunities from "./_components/EarningOpportunity";
import HeroSection from "./_components/Hero";
import Image from "next/image";
import NewsletterSignup from "./_components/NewsLetter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CardHolder>
        <div className="relative w-full h-full rounded overflow-hidden">
          <Image
            src={"/images/cardH1.png"}
            alt="Card Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[#F89C36] text-4xl">Better with the app</h3>
          <p className="text-2xl mb-8 text-left text-[#362a1c]">
            Whether you&apos;re looking for bespoke creations, ready-to-wear
            styles, or premium fabrics. Dive into a world where your fashion
            fantasies become reality—fast, effortless, and uniquely yours.
          </p>
          <button
            className={`flex flex-row items-center px-2.5 gap-2.5 w-[150px] h-[43px] bg-[#FBBC04] rounded-[10px] `}
          >
            Download the App
          </button>
        </div>
      </CardHolder>
      <CardHolder>
        <div className="flex flex-col gap-4">
          <h3 className="text-[#F89C36] text-4xl">One Stop</h3>
          <p className="text-2xl mb-8 text-left text-[#362a1c]">
            Effortlessly manage requests, mark progress and take full control of
            your finances—all while simplifying your sales process for easy
            understanding. Stay organized, boost your earnings, and watch your
            business thrive.
          </p>
          <button
            className={`flex flex-row items-center px-2.5 gap-2.5 w-[150px] h-[43px] bg-[#FBBC04] rounded-[10px] `}
          >
            Download the App
          </button>
        </div>
        <div className="relative w-full h-full rounded overflow-hidden">
          <Image
            src={"/images/cardH2.png"}
            alt="Card Image"
            fill
            className="object-cover"
          />
        </div>
      </CardHolder>
      <CardHolder>
        <div className="relative w-full h-full rounded overflow-hidden">
          <Image
            src={"/images/cardH3.png"}
            alt="Card Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[#F89C36] text-4xl">Delivering Fantasies</h3>
          <p className="text-2xl mb-8 text-left text-[#362a1c]">
            Expand your delivery reach and handle more products and services
            without the hassle of managing operations or finances. Become a
            delivery expert, fulfilling dreams while earning effortlessly.
          </p>
          <button
            className={`flex flex-row items-center px-2.5 gap-2.5 w-[150px] h-[43px] bg-[#FBBC04] rounded-[10px] `}
          >
            Join Our Waitlist
          </button>
        </div>
      </CardHolder>
      <EarningOpportunities />
      <AppAwaits />
      <NewsletterSignup />
    </>
  );
}
