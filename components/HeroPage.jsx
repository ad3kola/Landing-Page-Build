import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import React from "react";

function HeroPage() {
  return (
    <>
      <div className="h-[500px] relative mt-7 w-full">
        <div className="absolute h-72 w-72 -top-5 left-4 blur-xl rounded-full border-none outline-none opacity-20 z-10 bg-green-400"></div>
        <div className="absolute h-72 w-72 -bottom-10 right-4 blur-xl rounded-full border-none outline-none opacity-25 z-10 bg-green-500"></div>
        <div className="grid grid-cols-1 z-20 md:grid-cols-2 place-items-center h-full w-full">
          <div className="text-white w-full h-full flex flex-col items-center md:pl-10 justify-center">
            <h1 className="text-[46px] lg:text-6xl px-3 font-bold text-center">
              This is the{" "}
              <span className="text-green-500 capitalize">
                {`Website Landing Page `}
              <RocketLaunchIcon className="inline h-8" />
              </span>
            </h1>
            <h2 className="mt-2 text-white px-7 text-center">
              Some random context for the website. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Amet, ducimus!{" "}
            </h2>
            <div className="fl w-ex text-center ml-4 md:ml-7 lg:ml-10 justify-around items-center space-x-5 md:space-x-8">
              <button
                className="whitespace-nowrap mx-3 p-2 capitalize tracking-wider text-green-500 border-b mt-5 hover:border-t cursor-pointer border-white bg-black/90 hover:duration-200
            ui0"
              >
                Learn More...
              </button>
              <button
                className="whitespace-nowrap mx-3 p-2 capitalize tracking-wider text-green-500 border-b mt-5 hover:border-t cursor-pointer border-white bg-black/90 hover:duration-200
            ui0"
              >
                Learn More...
              </button>
              <button
                className="whitespace-nowrap mx-3 p-2 capitalize tracking-wider text-green-500 border-b mt-5 hover:border-t cursor-pointer border-white bg-black/90 hover:duration-200
            ui0"
              >
                Learn More...
              </button>
            </div>
          </div>
          <div className="flex gap-5 md:flex-col items-center justify-center">
            <div className="w-48 h-40 cursor-pointer hover:-translate-y-3 hover:duration-500 md:w-80 md:h-56 border border-white rounded-md"></div>
            <div className="w-48 h-40 cursor-pointer hover:-translate-y-3 hover:duration-500 md:w-80 md:h-56 border border-white rounded-md"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
