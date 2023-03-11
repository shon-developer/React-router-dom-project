import React from "react";
import image from "./images/aboutimg.jpg";

const About = () => {
  return (
    <div className="w-full relative">
      <img className="w-full h-[400px]" src={image} alt="" />
      <p className="absolute top-36 left-[30%] text-4xl font-bold">About Us</p>
    </div>
  );
};

export default About;
