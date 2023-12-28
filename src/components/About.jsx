import React from "react";
import cv from "/cv.jpg";
const About = () => {
  return (
    <div className="lg:mx-12 mx-4" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2 shadow-2xl">
          <img src={cv} alt="" className="w-full sm:w-11/12" />
        </div>
        <div className="sm:w-1/2">
          {/* <p className="text-xl text-headingcolor font-semibold mb-5">
            My Skills
          </p> */}
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            ABOUT
          </h2>
          <p className="mt-8 md:pr-8 mb-8">
            Started programming in college, learned basics like C and OOPs.
            Realized I knew nothing about web development, so I explored HTML,
            CSS, and Bootstrap. After the fourth semester, got interested in web
            development.
            <br /> <br />
            Started with React.js for interactive UIs, then delved into PHP and
            Laravel for server-side development. Explored Next.js for optimized
            React applications. Now, I'm comfortable with a range of
            technologies, from front-end to back-end, and excited to keep
            learning.
          </p>
          <button className="btn-primary">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
