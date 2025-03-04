"use client";
import Image from "next/image";
import Link from "next/link";

const SocialIcons = [
  { src: "svgs/x.svg", href: "https://x.com/styloza", color: "#FFFFFF" },
  {
    src: "svgs/instagram.svg",
    href: "https://instagram.com/styloza",
    color: "#FFFFFF",
  },
  {
    src: "svgs/linkedin.svg",
    href: "https://linkedin.com/company/styloza",
    color: "#FFFFFF",
  },
  {
    src: "svgs/facebook.svg",
    href: "https://facebook.com/styloza",
    color: "#FFFFFF",
  },
  {
    src: "svgs/tiktok.svg",
    href: "https://tiktok.com/@styloza",
    color: "#FFFFFF",
  },
];

const FooterSection = () => {
  return (
    <footer
      className="bg-[#0B2A4A] text-white py-8 "
      style={{
        backgroundImage: "linear-gradient(to right, #0B2A4A 0%, #0B2A4A 100%)",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container mx-auto px-4 py-5 flex flex-col gap-10">
        <div className="container mx-auto px-4 grid grid-cols-4">
          {/* Styloza Logo Column */}
          <div className="pr-4">
            <Image
              src="svgs/logo1.svg"
              width={130}
              height={60}
              className="cursor-pointer"
              alt="Styloza Logo"
            />
          </div>

          <div>
            <h3 className="text-[20px] font-bold mb-4">Partner with Styloza</h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link
                  href="/bespoke"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  Bespoke
                </Link>
              </li>
              <li>
                <Link
                  href="/ready-made"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  Ready Made
                </Link>
              </li>
              <li>
                <Link
                  href="/textile"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  Textile
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="pr-4">
            <h3 className="text-[20px] font-bold mb-4">Partner with Styloza</h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link
                  href="/partner/designer"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  Register as a Fashion Designer
                </Link>
              </li>
              <li>
                <Link
                  href="/partner/textlist"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  Register as a Textlist
                </Link>
              </li>
              <li>
                <Link
                  href="/partner/courier"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  Register as a Courier
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="pr-4">
            <h3 className="text-[20px] font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-[14px]">
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  News Desk
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-white hover:text-[#F89C36] transition"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* App Download and Social Icons Column */}
        <div className="flex items-center justify-between">
          {/* App Download Buttons */}
          <div className="flex gap-5">
            <Link
              href="https://play.google.com/store/apps/details?id=com.styloza.app"
              className="bg-[#F89C36] text-[#0B2A4A] px-5 py-2 rounded-[4px] text-[18px] flex items-center space-x-2 hover:opacity-90 transition"
            >
              <span>Get it on</span>
              <span className="font-bold">Google Play</span>
            </Link>
            <Link
              href="https://apps.apple.com/app/styloza"
              className="bg-[#F89C36] text-[#0B2A4A] px-5 py-2 rounded-[4px] text-[18px] flex items-center space-x-2 hover:opacity-90 transition"
            >
              <span>Get it on</span>
              <span className="font-bold">Apple Store</span>
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-5 mr-10">
            {SocialIcons.map(({ src, href }, i) => (
              <div
                key={i}
                onClick={() => {
                  console.log(href);
                }}
              >
                <Image
                  src={src}
                  width={30}
                  height={30}
                  alt="Social Icons"
                  className="text-white hover:text-[#F89C36] transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto  mt-6 text-center text-[12px] text-white/60">
        All Rights Reserved © {new Date().getFullYear()} Styloza Technologies
        Limited
      </div>
    </footer>
  );
};

export default FooterSection;
