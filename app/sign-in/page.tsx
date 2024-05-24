import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className=" w-full md:w-1/2 py-8  rounded pt-8">
        <form action="">
          <div className="w-4/5 md:px-10 mx-auto">
            {/* <p>Email</p> */}
            <input
              type="email"
              placeholder="email@outlook.com"
              className=" flex py-2 w-full border-b-2 border-slate-600 mt-1 outline-none px-2"
            />
            <input
              type="password"
              placeholder="password"
              className=" flex py-2 w-full border-b-2 border-slate-600 mt-8 outline-none px-2"
            />
            <p className="text-blue-800 cursor-pointer">forgot password?</p>

            <button className="w-full bg-black text-white py-4 rounded mt-16 hover:bg-blue-950">
              Sign In
            </button>
            <Link href="" className="mt-4 flex text-blue-800">
              Don&apos;t have an account?{" "}
              <span className="underline pl-1"> sign up</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
