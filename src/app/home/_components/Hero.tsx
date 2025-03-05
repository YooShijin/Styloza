import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-auto flex flex-col overflow-hidden pb-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner1.jpg"
          alt="Fashion Design Workspace"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="brightness-80"
        />
      </div>

      {/* Vertical Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B2A4A]/70 to-[#0B2A4A]/30"></div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/svgs/logo1.svg"
            alt="Styloza Logo"
            width={120}
            height={40}
          />
        </div>
        <div className="text-white cursor-pointer">
          <Image
            src="/svgs/menu.svg"
            alt="Menu Button"
            width={120}
            height={40}
          />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 h-full mt-40">
        <div className="text-center text-white max-w-2xl px-4 flex flex-col justify-start">
          <h1 className="text-5xl font-bold mb-4 text-left">
            <span className="text-[#F89C36] ">Fashion at the Speed of Now</span>
          </h1>
          <p className="text-2xl mb-8 text-left">
            Styloza, your go-to fashion app. Whether it’s a bespoke wear or
            premium fabrics, you can’t afford delays. Get through the hurdles of
            bespoke fashion with leading designers.
          </p>

          {/* Download Buttons */}
          <div className="flex justify-start gap-5">
            <Link href="https://play.google.com/store/apps/details?id=com.styloza.app">
              <Image
                src="/misc/playStoreButton1.svg"
                alt="Google Play"
                width={200}
                height={60}
              />
            </Link>

            <Link href="https://apps.apple.com/app/styloza">
              <Image
                src="/misc/appStoreButton1.svg"
                alt="Apple Store"
                width={200}
                height={60}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
