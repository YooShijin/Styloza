import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Fashion Design Workspace"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="brightness-50"
        />
      </div>

      {/* Vertical Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B2A4A]/70 to-[#0B2A4A]/30"></div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/styloza-logo.svg"
            alt="Styloza Logo"
            width={120}
            height={40}
          />
        </div>
        <div className="text-white">
          <button className="px-4 py-2 bg-[#F89C36] text-[#0B2A4A] rounded-md hover:opacity-90 transition">
            Menu
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-2xl px-4">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-[#F89C36]">Styloza</span>
          </h1>
          <p className="text-2xl mb-8">A more better way to design</p>

          {/* Download Buttons */}
          <div className="flex justify-center space-x-4">
            <Link
              href="https://play.google.com/store/apps/details?id=com.styloza.app"
              className="flex items-center space-x-2 bg-[#F89C36] text-[#0B2A4A] px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              <Image
                src="/playstore-icon.png"
                alt="Google Play"
                width={24}
                height={24}
              />
              <span className="font-semibold">Download on Playstore</span>
            </Link>

            <Link
              href="https://apps.apple.com/app/styloza"
              className="flex items-center space-x-2 bg-[#F89C36] text-[#0B2A4A] px-6 py-3 rounded-lg hover:opacity-90 transition"
            >
              <Image
                src="/applestore-icon.png"
                alt="Apple Store"
                width={24}
                height={24}
              />
              <span className="font-semibold">Download on Apple Store</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
