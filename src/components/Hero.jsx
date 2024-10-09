import axios from "axios";
import React, { useState } from "react";
import { IoClipboardOutline } from "react-icons/io5";

const Hero = () => {
  const [shortenUrl, setShortenUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUrl, setIsUrl] = useState(false);
  const [copied, setCopied] = useState(false); 
  const apiToken = "Jly8ftEs0kbLgrvzsoQkZMI6HD88FkpXy7ngKNtu30MuBkoQqtgz8lQhB339";
  const baseUrl = "https://api.tinyurl.com/create";
  const headers = {
    "Accept": "application/json",
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
        setIsLoading(false); 
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
    <div className="w-full px-4 lg:w-1/2 flex flex-col justify-center items-center">
      <h1 className="mb-10 font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-primary">
        URL Shortener
      </h1>
      
      {/* Input form */}
      <div className="w-full">
        <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
          <input
            className="w-full sm:w-[75%] border border-gray-300 outline-zinc-500 focus:outline-primary px-4 py-3 rounded-lg placeholder:font-poppins font-poppins"
            type="text"
            placeholder="Enter your URL"
          />
          <button
            disabled={isLoading}
            className={`px-5 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg text-base font-medium transition-all ease-in-out ${isLoading && 'opacity-50 cursor-not-allowed'}`}
          >
            {isLoading ? 'Shortening...' : 'Get URL'}
          </button>
        </form>
      </div>

      <div
        className={`${
          isUrl ? "block" : "hidden"
        } bg-gray-50 mt-8 p-4 w-full max-w-[70%] shadow-md rounded-lg transition-all ease-linear duration-300`}
      >
        <div className="flex h-full w-full text-dark justify-between items-center">
          <a target='_blank' href={shortenUrl} className="underline font-semibold text-base truncate">{shortenUrl}</a>

          <div className="self-start flex gap-2 items-center cursor-pointer" onClick={handleCopy}>
            <p className={`text-primary text-xs ${copied ? 'block' : 'hidden'}`}>Copied</p>
            <IoClipboardOutline className="text-primary hover:text-primary-dark transition-colors" size={24} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
