import React from "react";

const Hero = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center">
      <h1 className="mb-10 font-poppins text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center text-primary">
        URL Shortener
      </h1>
      <div className="w-full">
        <form action="">
          <input
            className="w-full border b border-zinc-500 focus:border-primary px-4 py-3 rounded-lg placeholder:font-poppins font-poppins"
            type="text"
            placeholder="Enter your URL"
          />
        </form>
          </div>
          <div className="mt-8 text-dark flex justify-between items-center result h-16 rounded-lg p-3 w-[70%] bg-background">
              <div className="font-semibold text-xl">shorten url</div>
              <div className="self-start">icon</div>
          </div>
    </div>
  );
};

export default Hero;
