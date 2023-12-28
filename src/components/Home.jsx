import React from "react";

const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
        <div className="md:w-1/2 w-full h-96 shadow-2xl bg-bgShade">
          <img
            src="https://scontent.fktm8-1.fna.fbcdn.net/v/t1.6435-9/45647088_1154165451410445_7394430071496245248_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7a1959&_nc_ohc=FMOG3sA3SUYAX_c8ej-&_nc_ht=scontent.fktm8-1.fna&oh=00_AfC28xE53Yt_ktXzXmJsZ73QEpuHe9XiC0yG-0GOoErKLg&oe=65B0D8F4"
            alt=""
            className="w-full h-full object-cover rounded"
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
