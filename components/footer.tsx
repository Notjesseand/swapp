import React from "react";

const footer = () => {
  return (
    <div className="bg-[#1F2544] text-white pt-8 md:pt-12 lg:pt-16 px-7 md:px-16 pb-8 mt-14">
      <div className=" lg:flex justify-between space-y-3">
        <div className=" lg:w-2/5 ">
          <p className="text-slate-300 text-xl font-semibold">Swapp</p>
          <p className="text-slate-300 font-montserrat text-lg mt-1">
            Swapp is a unique and beautiful collection of UI elements that are
            all flexible and modular. A complete and customizable solution to
            building the website of your dreams.
          </p>
        </div>

        <div className="font-montserrat inline-block justify-start">
          <p className="text-slate-300 font-montserrat text-xl font-semibold py-2">
            Company
          </p>
          <p className="text-slate-300 font-montserrat text-lg py-1">About</p>
          <p className="text-slate-300 font-montserrat text-lg py-1">Career</p>
          <p className="text-slate-300 py-1 font-montserrat">Our Partner</p>
          <p className="text-slate-300 font-montserrat text-lg py-1">
            Affiliate
          </p>
        </div>
        {/*  */}
        <div className="font-montserrat">
          <p className="text-slate-300 font-montserrat text-xl font-semibold py-2">
            Support
          </p>
          <p className="text-slate-300 font-montserrat text-lg py-1">Ticket</p>
          <p className="text-slate-300 py-1 font-montserrat">FAQ</p>
          <p className="text-slate-300 font-montserrat text-lg py-1">Blog</p>
          <p className="text-slate-300 font-montserrat text-lg py-1">
            Helpdesk
          </p>
        </div>
        {/*  */}
        <div className="font-montserrat">
          <p className="text-slate-300 font-montserrat text-xl font-semibold py-2">
            Exchange Pair
          </p>
          <p className="text-slate-300 font-montserrat text-lg py-1">
            ETH to BTC
          </p>
          <p className="text-slate-300 font-montserrat text-lg py-1">
            {" "}
            BTC to ETH
          </p>
          <p className="text-slate-300 py-1 font-montserrat"> LTC to ETH</p>
          <p className="text-slate-300 font-montserrat text-lg py-1">
            USDT to BTC
          </p>
        </div>
      </div>
      <div className="pt-12 flex">
        <p className="text-lg font-montserrat text-slate-300 pt-">
          © Copyright 2024 Swapp. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default footer;
