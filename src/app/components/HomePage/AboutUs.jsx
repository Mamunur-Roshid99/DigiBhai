import Image from "next/image";

import { FaArrowRightLong } from "react-icons/fa6";

import about from "../../../../public/Images/about1.png"

const AboutUs = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/Images/about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl px-4 md:px-6 lg:px-12 mx-auto overflow-x-hidden py-20 lg:py-16">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          {/* left */}
          <div className="flex flex-col gap-4 items-center justify-center text-center lg:items-start lg:text-start lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl dm_sans font-bold bg-gradient-to-r from-[#FF9800] via-10% lg:via-50% via-[#5891A2] to-[#008DF8] text-transparent bg-clip-text">
              About Us
            </h1>
            <p className="text-white/80 text-sm lg:text-base">
              At Delhivery Shipping Services, we specialize in delivering
              tailored shipping solutions that go beyond expectations. With over
              30 years of industry expertise, we're your trusted partner for
              chartering ships and transporting cargo efficiently, reliably, and
              with utmost care.
            </p>
            <button className="flex items-center gap-5 px-5 py-3 text-white font-medium rounded-md bg-gradient-to-r from-[#008DF8] to-[#FF9800] hover:opacity-90 transition w-fit text-sm mt-2 cursor-pointer">
              <span>Read More</span>
              <FaArrowRightLong className="text-lg" />
            </button>
          </div>
          {/* right */}
          <div className="flex items-center justify-center lg:w-1/2">
            <Image src={about} className="w-[70%] md:w-[50%] lg:w-[60%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs
