import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import Sidebar from "../sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    // <div className=" bg-pink-300">
    <div className="flex py-5 justify-between fixed w-full px-8 md:px-16 bg-white">
      <div className="w-1/5 h-8 bg-slate-600 flex"></div>

      <div className="flex lg:hidden items-center justify-center">
        <Sidebar />
      </div>

      <div className="hidden lg:flex lg:gap-x-7 md:gap-x-5 sm:gap-x-4 gap-x-1 px-4 md:px-6 lg:px-10 text-lg md:text-xl items-center font-poppins w-full justify-end">
        <Link href="flex">Home</Link>
        <Link href="flex">Price</Link>
        <Link href="flex">App</Link>
        <Link href="flex">Company</Link>
        <Link href="flex">Support</Link>
        <Link href="flex">Dashboard</Link>

        <button className="w-28 py-2 bg-blue-600 rounded text-white flex items-center">
          <Link href="" className="w-full">
            Sign in
          </Link>
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Header;
