import Link from "next/link";
import React from "react";
import { BsYinYang } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";
import { RxGrid } from "react-icons/rx";

const customers = () => {
  return (
    <div className="pb-20">
      <p className="text-3xl text-center mt-7">What our customers say </p>
      <div className="w-4/5 lg:w-3/5 grid md:grid-cols-2 mx-auto mt-8">
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716446328/man_h1xfye.jpg"
          alt=""
          className="w-full"
        />
        <div className="p-5 flex flex-col justify-center shadow-lg border-t border-[#e9e9e97b]">
          <p className="text-lg font-montserrat text-slate-500">
            Genuinely, one of the best cryptocurrency transfer platforms I ever
            used and that&apos;s high praise
          </p>
          <p className="font-semibold text-xl mt-2 text-blue-900">
            Dayvon Bennet
          </p>
          <p className="text-slate-500 font-montserrat text-lg">CEO, O-Block</p>
        </div>
      </div>

      {/* most trusted */}
      <div className="text-center pt-40">
        <p className="text-3xl text-blue-950 font-montserrat font-semibold">
          The most trusted cryptocurrency platform
        </p>
        <p className="text-lg text-slate-500 mt-2">
          Here are a few reasons why you should choose Swapp
        </p>
      </div>
      <div className="grid lg:grid-cols-3 px-14 lg:px-24 gap-x-6 pt-6">
        <div className="w-full pt-10">
          <GoShieldCheck className="h-11 w-11 flex ml-2 text-blue-800" />
          <p className="text-xl font-semibold font-montserrat pt-7">
            Secure storage
          </p>
          <p className="pt-5 text-lg text-slate-500 font-montserrat">
            We store the vast majority of the digital assets in secure offline
            storage.
          </p>
          <Link
            href={""}
            className="items-center gap-1 text-blue-800 flex pt-6 "
          >
            Explore <FaArrowRightLong />
          </Link>
        </div>
        <div className="w-full pt-10">
          <RxGrid className="h-9 w-9  ml-2 text-blue-800 rotate-45" />
          <p className="text-xl font-semibold font-montserrat pt-7">
            Protected by insurance
          </p>
          <p className="pt-5 text-lg text-slate-500 font-montserrat">
            Cryptocurrency stored on our servers is covered by our insurance
            policy.
          </p>
          <Link
            href={""}
            className="items-center gap-1 text-blue-800 flex pt-6 "
          >
            Explore <FaArrowRightLong />
          </Link>
        </div>
        <div className="w-full pt-10">
          <BsYinYang className="h-11 w-11 flex ml-2 text-blue-800" />
          <p className="text-xl font-semibold font-montserrat pt-7">
            Industry best practices
          </p>
          <p className="pt-5 text-lg text-slate-500 font-montserrat">
            Swapp supports a variety of the most popular digital currencies.
          </p>
          <Link
            href={""}
            className="items-center gap-1 text-blue-800 flex pt-6 "
          >
            Explore <FaArrowRightLong />
          </Link>

          {/* get started */}
        </div>
      </div>
    </div>
  );
};

export default customers;
