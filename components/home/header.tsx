import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import Sidebar from "../sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    // <div className=" bg-pink-300">
    <div className="flex py-1 sm:py-5 justify-between fixed w-full px-8 md:px-16 bg-white">
      <Link href="/" className="">
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716538239/Premium_Vector___Wolf_tech_modern_simple_logo_icon_ideas-removebg-preview_je6aex.png"
          alt=""
          className="w-20"
        />
      </Link>

      <div className="flex lg:hidden items-center justify-center">
        <Sidebar />
      </div>

      <div className="hidden lg:flex lg:gap-x-7 md:gap-x-5 sm:gap-x-4 gap-x-1 px-4 md:px-6 lg:px-10 text-base md:text-lg items-center font-poppins w-full justify-end">
        <Link href="/">Home</Link>
        <Link href="/rates">Currencies</Link>
        {/* <Link href="">App</Link> */}
        {/* <Link href="">Company</Link> */}
        <Link href="">Dashboard</Link>
        <Link href="">Support</Link>

        <button className="w-28 py-2 bg-blue-600 rounded text-white flex items-center">
          <Link href="/sign-in" className="w-full">
            Sign in
          </Link>
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Header;
