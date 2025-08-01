"use client"

import AboutUs from "./components/HomePage/AboutUs";
import HeroSection from "./components/HomePage/HeroSection";
import OutClinet from "./components/HomePage/OutClinet";
import Portfolio from "./components/HomePage/Portfolio";
import Reveiew from "./components/HomePage/Reveiew";
import Service from "./components/HomePage/Service";
import WhoWeAre from "./components/HomePage/WhoWeAre";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <AboutUs />
      <Service />
      <OutClinet />
      <Reveiew />
      <Portfolio />
    </div>
  );
}
