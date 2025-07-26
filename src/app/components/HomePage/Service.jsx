import React from "react";

import { MdDeveloperMode } from "react-icons/md";
import { FaBug } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";
import { FaEyeDropper } from "react-icons/fa";

const services = [
  {
    icon: <MdDeveloperMode />,
    title: "Custom SoftwareDevelopment",
    desc: "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
  },
  {
    icon: <FaBug />,
    title: "QA and Testing",
    desc: "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
  },
  {
    icon: <FaBrain />,
    title: "AI and Data Science",
    desc: "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
  },
  {
    icon: <FaEyeDropper />,
    title: "Custom SoftwareDevelopment",
    desc: "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
  },
  {
    icon: <FaBug />,
    title: "QA and Testing",
    desc: "Create custom software tailored for your unique needs, including front-end, and core back-end technology.",
  },
  {
    icon: <FaBrain />,
    title: "AI and Data Science",
    desc: "Use leading AI, machine learning, and data engineering technologies to unlock business value.",
  },
];

const Service = () => {
  return (
    <section className="bg-[#151b25] py-20 lg:py-32 relative">
      <div className="absolute top-[20%] lg:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] lg:w-[80%] min-h-screen lg:min-h-[110vh] bg-[#FF9800] blur-3xl opacity-10 rounded-full z-0"></div>
      <div className="max-w-7xl px-4 md:px-6 lg:px-12 mx-auto overflow-x-hidden ">
        <div className="flex flex-col gap-10 relative z-10">
          {/* top */}
          <div className="text-center space-y-4 flex items-center justify-center flex-col">
            <h1 className="dm_sans font-bold text-white text-3xl lg:text-4xl">
              Our Service
            </h1>
            <p className="text-[#DFDFDF] text-sm lg:w-1/2">
              Learn about the vision and expertise behind CogniSync. We are
              committed to driving AI innovation, making it accessible to
              businesses of all sizes.
            </p>
          </div>
          {/* bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#0c1d31]/50 text-white p-6 rounded-xl"
              >
                <div className="text-4xl mb-5 text-[#FF9800]">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-medium mb-3">{service.title}</h2>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-[20%] lg:bottom-[20%] left-1/2 -translate-x-1/2 translate-y-1/2 w-[60%] lg:w-[80%] min-h-screen lg:min-h-[110vh] bg-[#008DF8]/60 blur-3xl opacity-10 lg:opacity-10 rounded-full z-0"></div>
    </section>
  );
};

export default Service;
