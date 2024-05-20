import React from "react";

const hero = () => {
  return (
    <div className="px-10 h-[65vh] flex flex-col justify-center">
      <p className="text-5xl w-1/2 font-bold">
        Pay with <span className="text-blue-500"> Swapp</span>. Make all your
        payments in Swapp!
      </p>
      <p className="text-2xl text-gray-500 mt-2">
        {" "}
        Fast and secure way to purchase or exchange 150+ cryptocurrencies
      </p>
    </div>
  );
};

export default hero;
