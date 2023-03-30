import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" w-full h-24 px-4 md:px-8 text-lg bg-[#111111]">
      <div className=" md:max-w-6xl mx-auto h-full text-white flex justify-between items-center ">
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
