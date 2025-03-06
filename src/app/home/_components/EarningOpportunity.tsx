import React from "react";
import Image from "next/image";

const EarningOpportunities = () => {
  const opportunityItems = [
    {
      icon: "🧵",
      title: "Turn every stitch to cash",
      description:
        "Transform your fashion design passion into profit and earn with every design.",
    },
    {
      icon: "🧶",
      title: "From yards to profit",
      description: "List your textiles on styloza and turn fabric into income.",
    },
    {
      icon: "🚚",
      title: "Income in wheels",
      description:
        "Join Styloza, choose your deliveries and for every wheel that turns, you earn.",
    },
    {
      icon: "💰",
      title: "Money vault",
      description:
        "Own a collection? Turn your fleet of designers or textilists into a cash mine.",
    },
  ];

  return (
    <div className="relative w-full max-w-[1117px] mx-auto my-12 p-6 border border-[#C59815] rounded-[20px]">
      {/* Section Header */}
      <div className="flex justify-center mb-8">
        <Image
          src={"/svgs/clientServer.svg"}
          alt="Hue Hue Hue"
          height={110}
          width={300}
        />
      </div>

      {/* Subtitle */}
      <div className="text-center text-[#083248] mb-8 flex justify-center">
        <p className="text-xl w-xl">
          Become a Profit Powerhouse- time&apos;s ticking. Get started with
          Styloza today and watch your earnings grow.
        </p>
      </div>

      {/* Content Container */}
      <div className="flex items-center justify-center gap-5">
        {/* Image Section */}
        <div className="w-[564px] h-[488px] relative bg-gray-200 rounded-[50px] mr-8">
          <Image
            src="/images/tailorWorking1.png"
            alt="Earning Opportunities"
            fill
            className="rounded-[50px] object-cover"
          />
        </div>

        {/* Opportunities List */}
        <div className="flex-grow">
          {opportunityItems.map((item, index) => (
            <div key={index} className="flex items-start mb-6 relative">
              <div className="absolute left-[-36px] top-0 w-6 h-6 bg-[#FBBC04] rounded-full"></div>
              <div>
                <h3 className="text-[22px] font-bold text-[#083248] mb-2">
                  {item.title}
                </h3>
                <p className="text-[20px] font-light text-[#083248]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EarningOpportunities;
