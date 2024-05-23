import React from "react";
import Link from "next/link";

const blog = () => {
  return (
    <div className="pt-28 md:pt-44">
      <p className="text-3xl text-center font-semibold font-montserrat text-blue-900">
        Blog
      </p>
      <div className="grid md:grid-cols-3 px-5 md:px-16 lg:px-28 gap-6 pt-9 text-center md:text-left">
        <div>
          <img
            src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716453422/2_ryviea.jpg"
            alt=""
            className="rounded-md w-3/4 md:w-full mx-auto"
          />
          <p className="mt-2 text-lg ">Why does Litecoin need MimbleWimble?</p>
          <Link
            href=""
            className="font-montserrat border-b border-blue-500 inline-block"
          >
            Read More
          </Link>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716453383/1_ajvpwg.jpg"
            alt=""
            className="rounded-md w-3/4 md:w-full mx-auto"
          />
          <p className="mt-2 text-lg "> How to securely store wallet seeds?</p>
          <Link
            href=""
            className="font-montserrat border-b border-blue-500 inline-block"
          >
            Read More
          </Link>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716453781/3_qfnwlb.jpg"
            alt=""
            className="rounded-md w-3/4 md:w-full mx-auto"
          />
          <p className="mt-2 text-lg "> Exclusive Interview With Of Litecoin</p>
          <Link
            href=""
            className="font-montserrat border-b border-blue-500 inline-block"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default blog;
