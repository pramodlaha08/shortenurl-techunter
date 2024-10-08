import axios from "axios";
import React from "react";

const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.elements[0].value;
    geturl(url);
  };

  const geturl = async (url) => {
   //need to do find api 
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center">
      <h1 className="mb-10 font-poppins text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center text-primary">
        URL Shortener
      </h1>
      <div className="w-full">
        <form className="flex gap-3" onSubmit={handleSubmit}>
          <input
            className="w-full border b border-zinc-500 focus:border-primary px-4 py-3 rounded-lg placeholder:font-poppins font-poppins"
            type="text"
            placeholder="Enter your URL"
          />
          <input
            className="px-3 py-1 bg-background text-dark rounded-lg text-center text-base font-medium"
            type="submit"
            value="Get URL"
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
