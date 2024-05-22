import React from "react";
import { IoMdAlarm } from "react-icons/io";
import { BsPersonCheck } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { SiFsecure } from "react-icons/si";
import { MdOutlinePhoneIphone } from "react-icons/md";

const portfolio = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-12 md:pt-20  px-5">
        <p className="text-2xl lg:text-4xl text-center font-montserrat font-semibold">
          Create your cryptocurrency portfolio{" "}
          <br className="hidden md:block" /> today
        </p>

        <p className="text-xl text-center pt-7 text-gray-500 font-montserrat     ">
          Swapp has a variety of features that make it the best place to start
          trading
        </p>
        <IoMdAlarm className="text-2xl my-6 flex mx-auto text-slate-500" />
      </div>
      {/* marketing */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-8 justify-between px-4 md:px-12 lg:px-14 gap-x-5 pt-1 md:pt-8">
        <div>
          <div className="md:py-3 py-6 w-full p-3 flex gap-4">
            <BsPersonCheck className="text-blue-500 h-16 w-16 " />
            <div className="">
              <p className="text-2xl font-semibold text-blue-900">
                Manage your portfolio
              </p>
              <p className="font-montserrat text-slate-400 text-lg mt-3">
                Buy and sell popular digital currencies, keep track of them in
                the one place.
              </p>
            </div>
          </div>
          {/* recurring buys */}
          <div className="md:py-3 py-6 w-full p-3 flex gap-4">
            <CiLock className="text-blue-500 h-16 w-16" />
            <div className="">
              <p className="text-2xl font-semibold text-blue-900">
                Manage your portfolio
              </p>
              <p className="font-montserrat text-slate-400 text-lg mt-3">
                Invest in cryptocurrency slowly over time by scheduling buys
                daily, weekly, or monthly.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="h-10 w-full bg-pink-400"></div> */}
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716404093/portfolio_lvfaqw.jpg"
          className=""
        />
        <div>
          <div className="md:py-3 py-6 w-full p-3 flex gap-4">
            <SiFsecure className="text-blue-500 h-12 w-12" />
            <div className="">
              <p className="text-2xl font-semibold text-blue-900">
                Vault protection
              </p>
              <p className="font-montserrat text-slate-400 text-lg mt-3">
                For added security, store your funds in a vault with time
                delayed withdrawals.
              </p>
            </div>
          </div>
          {/* recurring buys */}
          <div className="md:py-3 py-6 w-full p-3 flex gap-4">
            <MdOutlinePhoneIphone className="text-blue-500 h-16 w-16" />
            <div className="">
              <p className="text-2xl font-semibold text-blue-900">
                Mobile apps
              </p>
              <p className="font-montserrat text-slate-400 text-lg mt-3">
                Stay on top of the markets with the Tendex app for Android or
                iOS.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Trade. Anywhere */}
      <div className="pt-44  ">
        <p className="text-3xl font-montserrat text-center font-semibold">
          Trade. Anywhere
        </p>
        <p className="text-slate-500 text-lg text-center font-montserrat pt-3">
          All of our products are ready to go, easy to use and offer great value
          to any kind of business
        </p>
      </div>
    </div>
  );
};

export default portfolio;
