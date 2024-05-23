import React from "react";
import { IoMdAlarm } from "react-icons/io";
import { BsPersonCheck } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { SiFsecure } from "react-icons/si";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { IoServer } from "react-icons/io5";
import Link from "next/link";

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
      <div className="pt-44">
        <p className="text-3xl font-montserrat text-center font-semibold">
          Trade. Anywhere
        </p>
        <p className="text-slate-500 text-lg text-center font-montserrat pt-3 px-7">
          All of our products are ready to go, easy to use and offer great{" "}
          <br className="hidden md:block" /> value to any kind of business
        </p>

        {/* mobile, desktop, api */}

        <div className="grid lg:grid-cols-3 px-14 lg:px-24 gap-x-6 pt-6">
          <div className="w-full pt-10">
            <BsPhone className="h-11 w-11 flex ml-2 text-blue-800" />
            <p className="text-xl font-semibold font-montserrat pt-7">Mobile</p>
            <p className="pt-5 text-lg text-slate-500 font-montserrat">
              All the power of Swapp&apos;s cryptocurrency exchange, in the palm
              of your hand. Download the Swapp mobile crypto trading app today
            </p>
            <Link
              href={""}
              className="border-b-2 border-blue-800 text-blue-800 inline-block pt-6"
            >
              read more
            </Link>
          </div>
          <div className="w-full pt-10">
            <RiComputerLine className="h-11 w-11 flex ml-2 text-blue-800" />
            <p className="text-xl font-semibold font-montserrat pt-7">
              Desktop
            </p>
            <p className="pt-5 text-lg text-slate-500 font-montserrat">
              Powerful crypto trading platform for those who mean business. The
              Swapp crypto trading experience, tailor-made for your Windows or
              MacOS device.
            </p>
            <Link
              href={""}
              className="border-b-2 border-blue-800 text-blue-800 inline-block pt-6"
            >
              read more
            </Link>
          </div>
          <div className="w-full pt-10">
            <IoServer className="h-11 w-11 flex ml-2 text-blue-800" />
            <p className="text-xl font-semibold font-montserrat pt-7">API</p>
            <p className="pt-5 text-lg text-slate-500 font-montserrat">
              The Swapp API is designed to provide an easy and efficient way to
              integrate your trading application into our platform.
            </p>
            <Link
              href={""}
              className="border-b-2 border-blue-800 text-blue-800 inline-block pt-6"
            >
              read more
            </Link>

            {/* get started */}
          </div>
        </div>
        <div className="pt-8">
          <p className="flex text-3xl justify-center pt-8 md:pt-16 font-semibold">
            Trusted by over 100,000 users
          </p>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
