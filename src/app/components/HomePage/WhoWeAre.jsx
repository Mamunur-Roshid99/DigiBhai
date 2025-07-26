"use client";
import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

export default function WhoWeAre() {
  return (
    <section className="bg-[#12141d] py-24 lg:py-36">
      <div className="relative max-w-7xl px-4 md:px-6 lg:px-12 mx-auto">
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] lg:w-[80%] min-h-[90vh] lg:min-h-[80vh] bg-[#FF9800] blur-3xl opacity-10 lg:opacity-5 rounded-full z-0"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center flex-col">
            <p className="text-[#FF9800] text-sm mb-2 dm_sans lg:text-base">
              Who We Are
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-white dm_sans">
              Driving AI Innovation
            </h2>
            <p className="text-[#DFDFDF] text-xs lg:w-1/2 lg:text-base text-center">
              Learn about the vision and expertise behind CogniSync. We are
              committed to driving AI innovation, making it accessible to
              businesses of all sizes.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-20">
            {/* Mission Card */}
            <div className="bg-[#0e121d] rounded-xl p-6 text-left shadow-xs pb-12 lg:pb-20">
              <div className="bg-[#FF9800] w-10 h-10 flex items-center justify-center rounded-md mb-6">
                <FaBullseye className="text-white" />
              </div>
              <h3 className="mb-2 text-white dm_sans lg:text-xl">
                Our Mission
              </h3>
              <p className="text-[#A9B1C5] text-xs lg:text-base">
                At CogniSync, our mission is to seamlessly integrate
                cutting-edge artificial intelligence into everyday life,
                revolutionizing how individuals and businesses engage with
                technology.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-[#0e121d] rounded-xl p-6 text-left shadow-xs pb-12 lg:pb-20">
              <div className="bg-[#008DF8] w-10 h-10 flex items-center justify-center rounded-md mb-6">
                <FaEye className="text-white" />
              </div>
              <h3 className="mb-2 text-white dm_sans lg:text-xl">Our Vision</h3>
              <p className="text-[#A9B1C5] text-xs lg:text-base">
                Our vision is to revolutionize the AI subscription landscape,
                fostering a future where intelligent solutions seamlessly
                integrate into everyday life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
