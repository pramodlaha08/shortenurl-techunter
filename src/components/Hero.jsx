import axios from "axios";
import React, { useState } from "react";
import { IoClipboardOutline } from "react-icons/io5";

const Hero = () => {
  const [shortenUrl, setShortenUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUrl, setIsUrl] = useState(false);
  const [copied, setCopied] = useState(false); 
  const apiToken =
    "Jly8ftEs0kbLgrvzsoQkZMI6HD88FkpXy7ngKNtu30MuBkoQqtgz8lQhB339";
  const baseUrl = "https://api.tinyurl.com/create";
  const headers = {
    Accept: "application/json", 
    "Content-Type": "application/json", 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); 
    const url = e.target.elements[0].value;
    geturl(url);
  };

  const geturl = async (url) => {
    const data = {
      url: url, 
      domain: "tinyurl.com", 
      description: "string", 
    };

    axios
      .post(`${baseUrl}?api_token=${apiToken}`, data, { headers })
      .then((response) => {
        setShortenUrl(response.data.data.tiny_url); 
      })
      .catch(() => {
        setShortenUrl("Try again with valid URL"); 
      })
      .finally(() => {
        setIsLoading(false); hat
        setIsUrl(true);
        setCopied(false); 
      });
  };

  
  const handleCopy = () => {
    if (shortenUrl) {
      navigator.clipboard.writeText(shortenUrl).then(() => {
        setCopied(true); 
        setTimeout(() => setCopied(false), 2000); 
      });
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
      <h1 className="mb-10 font-poppins text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center text-primary">
        URL Shortener
      </h1>
      <div className="w-full">
        <form className="flex gap-3" onSubmit={handleSubmit}>
          <input
            className="w-full border outline-zinc-500 focus:outline-primary px-4 py-3 rounded-lg placeholder:font-poppins font-poppins"
            type="text"
            placeholder="Enter your URL"
          />
          <button
            disabled={isLoading}
            className="px-2 py-1 bg-background text-dark rounded-lg whitespace-nowrap text-base font-medium w-fit"
          >
            Get URL
          </button>
        </form>
      </div>

      <div
        className={`${
          isUrl ? "block" : "hidden"
        } bg-background mt-8 h-16 rounded-lg p-3 w-[70%] transition-all ease-linear duration-300 `}
      >
        <div className="flex h-full w-full text-dark justify-between items-center">
          <div className="font-semibold text-base">{shortenUrl}</div>

          {/* Clipboard Icon with Copy Functionality */}
          <div className="self-start flex gap-2 items-center cursor-pointer" onClick={handleCopy}>
            <p className={`text-primary text-xs ${copied ? 'block' : 'hidden'}`}>Copied</p>
            <IoClipboardOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
