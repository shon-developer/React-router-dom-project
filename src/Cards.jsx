import React from "react";
import { cardData } from "./data";

const Cards = () => {
  return (
    <div className="w-full bg-[#252525]">
      <div className="max-w-6xl mx-auto grid grid-cols-3 py-10">
        {cardData.map((item) => (
          <div key={item.id}>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 dark:text-gray-50">
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
