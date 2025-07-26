"use client"

import AboutUs from "./components/HomePage/AboutUs";
import HeroSection from "./components/HomePage/HeroSection";
import WhoWeAre from "./components/HomePage/WhoWeAre";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <AboutUs />
    </div>
  );
}
