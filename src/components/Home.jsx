import React from "react";
import YourImage from "/bishwa.jpg";

const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        <div className="md:w-1/2 h-auto shadow-2xl bg-bgShade">
          <img
            src={YourImage}
            alt="YourImage"
            className="w-80 h-102 object-cover rounded"
          />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            I AM BASED IN KATHMANDU, NEPAL
          </p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            <span className="text-primary">Fullstack Developer</span>
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">
            Hi, my name is Bishwa Mishra. I create beautiful, fast and
            functional web applications.
          </p>
          <button className="btn-primary">Get In Touch</button>
        </div>
        {/* right side */}
      </div>
    </div>
  );
};

export default Home;
