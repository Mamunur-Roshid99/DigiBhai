"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import Image from "next/image";

const testimonials = [
  {
    name: "MD ENAMUL HOSSEN",
    role: "Web And App Developer",
    text: "There are many variations of passages of Lorem Ipsum available...",
    image: "/Images/review.png",
  },
  {
    name: "SARA AHMED",
    role: "UI/UX Designer",
    text: "Lorem Ipsum has been the industry's standard dummy text...",
    image: "/Images/review1.png",
  },
  {
    name: "LINA SMITH",
    role: "Product Manager",
    text: "It is a long established fact that a reader will be distracted...",
    image: "/Images/review2.png",
  },
];

const Review = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-16 lg:py-28">
      {/* Background blur */}
      <div className="hidden lg:block absolute lg:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] lg:w-[85%] lg:min-h-[70vh] bg-[#FF9800] blur-3xl opacity-10 rounded-full z-0"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2 text-white">Review</h1>
          <p className="text-[#DFDFDF] text-sm max-w-xl mx-auto">
            Learn about the vision and expertise behind CogniSync. We are
            committed to driving AI innovation.
          </p>
        </div>

        {/* Slider Content */}
        <div className="relative flex items-start justify-between gap-6">
          {/* Left image */}
          <div className="hidden md:block h-66">
            <Image
              src={
                testimonials[
                  (current - 1 + testimonials.length) % testimonials.length
                ].image
              }
              alt="prev"
              width={180}
              height={120}
              className="h-66"
            />
          </div>

          {/* Main Card */}
          <div className="bg-[#0C111D] shadow-md max-w-xl w-full relative flex h-66 items-center gap-6">
            {/* Card image */}
            <Image
              src={testimonials[current].image}
              alt="main"
              width={80}
              height={80}
              className="h-full w-1/3"
            />

            <div className="flex flex-col">
              <div className="text-[#008DF8] text-4xl mb-5">
                <FaRegMessage className="" />
              </div>
              <p className="text-[#DFDFDF] mb-5 text-sm">
                {testimonials[current].text}
              </p>
              <h3 className="text- font-medium text-[#DFDFDF]">
                {testimonials[current].name}
              </h3>
              <p className="text-[#DFDFDF] text-xs">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="hidden md:block h-66">
            <Image
              src={testimonials[(current + 1) % testimonials.length].image}
              alt="next"
              width={180}
              height={120}
              className="h-66"
            />
          </div>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="text-white text-3xl cursor-pointer absolute top-1/2 left-10"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="text-white text-3xl cursor-pointer absolute top-1/2 right-10"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === current ? "bg-[#FF9800]" : "bg-gray-600"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
