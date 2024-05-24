"use client";
import React, { useState, useEffect } from "react";
import { getData } from "@/api/fetchrates";
import Link from "next/link";

const Hero = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="lg:flex min-h-screen pb-7 pt-[17vh] px-8 md:px-16 items-center space-y-6">
      <div className=" items-center gap-8 lg:w-1/2 flex">
        <div>
          <p className="text-4xl sm:text-5xl md:w-4/5 font-bold leading-[50px]">
            Pay with <span className="text-blue-500"> Swapp</span>. Make all
            your payments in Swapp!
          </p>
          <p className="text-xl sm:text-2xl text-gray-500 mt-2 md:w-3/4">
            {" "}
            Fast and secure way to purchase or exchange 150+ cryptocurrencies
          </p>
          <div className="flex gap-x-5 pt-8 font-montserrat justify-center md:justify-normal">
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-md hover:bg-blue-500">
              Get Started
            </button>
            <Link
              href="/rates"
              className="border border-blue-500 px-5 rounded-md hover:bg-slate-700 hover:text-white flex items-center"
            >
              Browse Now
            </Link>
          </div>
        </div>
      </div>
      <div className=" md:w-2/3 flex items-center pb-12">
        <div className=" mx-auto">
          <div className="grid grid-cols-4 font-montserrat pl-1 text-sm md:text-base border-b border-slate-400 py-4 gap-x-3">
            <p className="col-span-2">coin</p>
            <p>price</p>
            <p className="ml-2">24h</p>
          </div>
          {/* @ts-ignore */}
          {data &&
            // @ts-ignore
            data.slice(0, 5).map((item: any, index: number) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-x-3 font-montserrat pl-1 text-sm md:text-base border-b border-slate-400 py-4"
              >
                <p className=" col-span-2 flex items-center">
                  <img src={item.image} className="h-5 w-5 mr-2" alt="" />
                  {item.name}{" "}
                  <span className="text-slate-500 ml-2">{item.symbol}</span>
                </p>
                <p className=" pl-1">${item.current_price.toLocaleString()}</p>
                <p
                  className={`pl-1 ${
                    item.price_change_percentage_24h < 0
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  {item.price_change_percentage_24h}%
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
