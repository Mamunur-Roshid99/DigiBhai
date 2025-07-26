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
      className="flex items-center py-48 lg:py-8"
    >
      <div className="w-full lg:max-w-7xl px-4 md:px-6 lg:px-12 mx-auto overflow-x-hidden">
        <SwiperSlider slides={slides} />
      </div>
    </section>
  );
};

export default HeroSection;
