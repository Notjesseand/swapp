import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdNewspaper } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";

const getInTouch = () => {
  return (
    <div className="pt-44 min-h-screen">
      <p className="text-2xl font-montserrat font-semibold text-center text-blue-900 py-12">
        Get In Touch. Stay in touch.
      </p>

      <div className="grid md:grid-cols-3 px-20 gap-6"></div>

      <div className="grid lg:grid-cols-3 px-14 lg:px-24 gap-x-6 pt-6">
        <div className="w-full pt-10">
          <TfiHeadphoneAlt className="h-11 w-11 flex ml-2 text-blue-800" />
          <p className="text-xl font-semibold font-montserrat pt-7">
            24/7 support
          </p>
          <p className="pt-5 text-lg text-slate-500 font-montserrat">
            Got a problem? Just get in touch. Our support team is available
            24/7.
          </p>
        </div>
        <div className="w-full pt-10">
          <MdNewspaper className="h-10 w-10  ml-2 text-blue-800" />
          <p className="text-xl font-semibold font-montserrat pt-7">
            Tendex Blog
          </p>
          <p className="pt-5 text-lg text-slate-500 font-montserrat">
            News and updates from the world&apos;s leading cryptocurrency
            exchange.
          </p>
        </div>
        <div className="w-full pt-10">
          <IoBriefcaseOutline className="h-11 w-11 flex ml-2 text-blue-800" />
          <p className="text-xl font-semibold font-montserrat pt-7">
            Industry best practices
          </p>
          <p className="pt-5 text-lg text-slate-500 font-montserrat">
            Help build the future of technology. Start your new career at Swapp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default getInTouch;
