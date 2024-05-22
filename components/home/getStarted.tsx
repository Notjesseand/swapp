import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaLink } from "react-icons/fa6";
import { CiMoneyBill } from "react-icons/ci";
import Link from "next/link";

const getStarted = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center py-10 justify-center">
      <div>
        <p className="text-3xl font-semibold text-blue-900  font-montserrat text-center py-12 ">
          Get started in a few minutes
        </p>
        <div className="inline-block justify-center md:grid grid-cols-3 px-4 sm:px-8 lg:px-24 items-center space-y-5">
          <div className="w-11/12 py-10 px-5 rounded-md cursor-pointer bg-white  mx-auto ">
            <IoPersonOutline className="text-3xl text-blue-800" />
            <p className="text-xl font-semibold text-blue-950 pt-3">
              Create an account
            </p>
            <p className="mt-2">
              Sign up to gain access to a plethora of services we provide
            </p>
            <Link
              href=""
              className="text-blue-600 font-montserrat flex items-center pt-5 text-lg"
            >
              Explore <IoIosArrowRoundForward className="text-2xl" />
            </Link>
          </div>
          <div className="w-11/12 py-10 px-5 rounded-md cursor-pointer bg-white mx-auto">
            <FaLink className="text-3xl text-blue-800" />
            <p className="text-xl font-semibold text-blue-950 pt-3">
              Link your bank account
            </p>
            <p className="mt-2">
              Link your accounts to transfer tokens seamlessly
            </p>
            <Link
              href=""
              className="text-blue-600 font-montserrat flex items-center pt-5 text-lg"
            >
              Explore <IoIosArrowRoundForward className="text-2xl" />
            </Link>
          </div>
          <div className="w-11/12 py-10 px-5 rounded-md cursor-pointer bg-white mx-auto">
            <CiMoneyBill className="text-3xl text-blue-800" />
            <p className="text-xl font-semibold text-blue-950 pt-3">
              Start buying and selling
            </p>
            <p className="mt-2">
              That&apos;s it. Start buying and selling, yes it&apos;s that easy
            </p>
            <Link
              href=""
              className="text-blue-600 font-montserrat flex items-center pt-5 text-lg"
            >
              Explore <IoIosArrowRoundForward className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default getStarted;
