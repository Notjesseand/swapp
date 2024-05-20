import React from "react";

const hero = () => {
  return (
    <div className="lg:flex h-[80vh] pt-12">
      <div className=" items-center gap-8 lg:w-1/2 flex">
        <div>
          <p className="text-5xl w-4/5 font-bold leading-[50px]">
            Pay with <span className="text-blue-500"> Swapp</span>. Make all
            your payments in Swapp!
          </p>
          <p className="text-2xl text-gray-500 mt-2 w-3/4">
            {" "}
            Fast and secure way to purchase or exchange 150+ cryptocurrencies
          </p>
          <div className="flex gap-x-5 pt-8 font-montserrat font-bold">
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-500">
              Get Started
            </button>
            <button className="border border-blue-500 px-5 rounded-md hover:bg-slate-700 hover:text-white">
              Browse Now
            </button>
          </div>
        </div>
      </div>
      <div className=" md:w-1/2 flex items-center">
        <div className="w-96 h-96 bg-purple-400 mx-auto flex items-center"></div>
      </div>
    </div>
  );
};

export default hero;
