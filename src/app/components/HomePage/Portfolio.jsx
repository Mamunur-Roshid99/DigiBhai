import Image from "next/image";

const projects = [
  {
    image: "/Images/protfolio.png",
    name: "UI UX Designer",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    image: "/Images/protfolio.png",
    name: "UI UX Designer",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    image: "/Images/protfolio.png",
    name: "UI UX Designer",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    image: "/Images/protfolio.png",
    name: "UI UX Designer",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    image: "/Images/protfolio.png",
    name: "UI UX Designer",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    image: "/Images/protfolio.png",
    name: "UI UX Designer",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-[#0c1c2f] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        <div className="space-y-8">
          {/* top */}
          <div>
            <h5 className="dm_sans text-3xl font-semibold mb-2 lg:text-4xl">
              Portfolio
            </h5>
            <p className="text-[#DFDFDF] text-sm lg:text-base lg:w-1/2">
              Learn about the vision and expertise behind CogniSync. We are
              committed to driving AI innovation, making it accessible to
              businesses of all sizes.
            </p>
          </div>
          {/* bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden">
                <Image
                  src={project.image}
                  width={450}
                  height={450}
                  className="w-full h-auto"
                />

                <div className="bg-gradient-to-r from-orange-500/70 via-yellow-400/70 to-blue-500/70 p-4 rounded-lg absolute bottom-0 left-0 w-full h-[100px] group-hover:h-full duration-500 cursor-pointer">
                  <h5 className="font-semibold text-xl mb-1">{project.name}</h5>
                  <p className="text-sm">{project.desc}</p>

                  <button className="bg-black text-white mt-4 opacity-0 group-hover:opacity-100 transition duration-500 px-4 py-2 rounded-lg cursor-pointer">
                    See Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
