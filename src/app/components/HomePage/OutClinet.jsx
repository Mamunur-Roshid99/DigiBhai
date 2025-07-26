import Image from "next/image"

import image1 from "../../../../public/Images/company1.png"
import image2 from "../../../../public/Images/company2.png"
import image3 from "../../../../public/Images/company3.png"
import image4 from "../../../../public/Images/company4.png"
import image5 from "../../../../public/Images/company5.png"
import image6 from "../../../../public/Images/company6.png";

const OutClinet = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/Images/service.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="py-20 lg:py-28"
    >
      <div className="max-w-7xl px-4 md:px-6 lg:px-12 mx-auto">
        <div className="flex flex-col gap-12">
          {/* top */}
          <div className="flex items-center justify-between gap-12">
            {/*  */}
            <div className="flex flex-col gap-4">
              <h1 className="dm_sans font-bold text-white text-3xl lg:text-5xl">
                Our Client
              </h1>
              <p className="text-[#DFDFDF] text-sm lg:text-base lg:w-1/2">
                Learn about the vision and expertise behind CogniSync. We are
                committed to driving AI innovation, making it accessible to
                businesses of all sizes.
              </p>
            </div>
            {/*  */}
            <div className="bg-[#FF9800] h-10 w-1"></div>
          </div>
          {/* bottom */}
          <div className="grid grid-cols-2 gap-10 place-items-center md:grid-cols-4 lg:grid-cols-6">
            <div className="w-32 flex items-center justify-center">
              <Image src={image1} />
            </div>
            <div className="w-32 flex items-center justify-center">
              <Image src={image2} />
            </div>
            <div className="w-28 flex items-center justify-center">
              <Image src={image3} />
            </div>
            <div className="w-28 flex items-center justify-center">
              <Image src={image4} />
            </div>
            <div className="w-24 flex items-center justify-center">
              <Image src={image5} />
            </div>
            <div className="w-28 flex items-center justify-center">
              <Image src={image6} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OutClinet
