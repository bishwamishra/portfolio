import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-bgShade py-28 md:px-12 px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
        <div className="text-white font-bold text-lg cursor-pointer">
          <a href="">
            <h2 className=" font-mono text-3xl text-primary">BISHWA MISHRA</h2>
          </a>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 flex-wrap">
          <a
            href="#"
            className="block text-primary hover:text-gray-400 py-2 px-4"
          >
            Home
          </a>
          <a href="#" className="block hover:text-gray-400 py-2 px-4">
            Portfolio
          </a>
          <a href="#" className="block  hover:text-gray-400 py-2 px-4">
            About me
          </a>
          <a href="#" className="block  hover:text-gray-400 py-2 px-4">
            Testimonials
          </a>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <a href="https://www.facebook.com/bishwa.mishra.33 " target="_blank">
            <FaFacebookF className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>
          <a href="https://www.instagram.com/bishwa_mishraa/">
            <FaInstagram className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>
          <a href="https://www.instagram.com/bishwa_mishraa/">
            <FaTwitter className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>
          <a href="https://www.linkedin.com/in/bishwa-mishra-73762a258/">
            <FaLinkedin className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>
          <a href="https://github.com/bishwamishra">
            <FaGithub className="cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary" />
          </a>
        </div>
      </div>
      <hr />
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-8">
        <p>Made with 💖 by BISHWA MISHRA</p>
        <div className="space-x-6">
          <a href="/" className="hover:text-slate-400">
            Privacy Policy
          </a>
          <a href="/" className="hover:text-slate-400">
            Terms of Service
          </a>
          <a href="/" className="hover:text-slate-400">
            Cookies Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
