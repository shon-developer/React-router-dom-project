import React from "react";
import { cardData } from "./data";

const Cards = () => {
  return (
    <div className="w-full bg-[#252525]">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center justify-center px-4 md:px-10 gap-6 xl:gap-10  py-10">
        {cardData.map((item) => (
          <div key={item.id} className="grid place-content-center">
            <div className=" p-6 rounded-md shadow-md bg-gray-900 dark:text-gray-50 ">
              <img
                src={item.image}
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide">
                  {item.title}
                </h2>
              </div>
              <p className="dark:text-gray-100">{item.description}</p>
              <button className="flex items-center justify-center w-full p-3 mt-6 font-semibold tracking-wide rounded-md dark:bg-violet-400 text-gray-900">
                {item.btn}
              </button>
            </div>
            ;
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
