import React from "react";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto w-full px-4 flex-grow">
        <div className="mt-[10rem] flex justify-center items-center">
          <Hero />
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mb-4 text-gray-600">
        <p className="text-sm">Made with ❤️ by Pramod</p>
      </div>
    </div>
  );
};

export default App;
