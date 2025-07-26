import React from "react";
import SwiperSlider from "../SwiperSlider";

const HeroSection = () => {

      const slides = [
        {
          id: 1,
          title: "TECH SERVICES",
          content: "TechSynergy: Innovate, Create, Elevate",
          button: "See projects",
        },
        {
          id: 2,
          title: "TECH SERVICES",
          content: "TechSynergy: Innovate, Create, Elevate",
          button: "See projects",
        },
        {
          id: 3,
          title: "TECH SERVICES",
          content: "TechSynergy: Innovate, Create, Elevate",
          button: "See projects",
        },
      ];

  return (
    <section
      style={{
        backgroundImage: "url('/Images/Hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex items-center py-48 lg:py-20 relative"
    >
      <div className="w-full lg:max-w-7xl px-4 md:px-6 lg:px-12 mx-auto overflow-x-hidden">
        <SwiperSlider slides={slides} />
      </div>
      <div className="flex items-center justify-center gap-3 lg:gap-5 absolute -bottom-7 lg:-bottom-10 w-full z-10">
        <div
          className="bg-[#0C111D] text-center px-4 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 rounded-sm 
"
        >
          <h1 className="text-[#FF9800] font-semibold text-lg lg:text-3xl">
            500+
          </h1>
          <p className="text-[#008DF8] text-[10px] lg:text-sm">
            Completed Project
          </p>
        </div>
        <div
          className="bg-[#0C111D] text-center px-4 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 rounded-sm 
"
        >
          <h1 className="text-[#FF9800] font-semibold text-lg lg:text-3xl">
            200+
          </h1>
          <p className="text-[#008DF8] text-[10px] lg:text-sm">
            Regular Client
          </p>
        </div>
        <div
          className="bg-[#0C111D] text-center px-4 md:px-8 lg:px-12 py-3 md:py-4 lg:py-6 rounded-sm "
        >
          <h1 className="text-[#FF9800] font-semibold text-lg lg:text-3xl">
            100+
          </h1>
          <p className="text-[#008DF8] text-[10px] lg:text-sm">Our Employee</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
