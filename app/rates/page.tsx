"use client";
import { useEffect, useState } from "react";
import Header from "@/components/home/header";
import { getData } from "@/api/fetchrates";

export default function Page() {
  const [data, setData] = useState<any[]>([]);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-8 pt-32 font-montserrat pl-1 border-b border-slate-500 pb-3 text-sm md:text-base">
        <p className=" col-span-2 pl-5 md:pl-12">Coin</p>
        <p className=" pl-1">Price</p>
        <p className=" pl-1">24h</p>
        <p className=" pl-1 hidden md:block">High {"(24 hr)"}</p>
        <p className=" pl-1 hidden md:block">Low{"(24 hr)"}</p>
        <p className="hidden md:block pl-1">Total Volume</p>
        <p className="pl-1">Market Cap</p>
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-8 font-montserrat pl-1 text-sm md:text-base border-b border-slate-400 py-5"
        >
          <p className=" col-span-2 pl-5 md:pl-12 flex items-center">
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
          <p className=" pl-1 hidden md:block">
            ${item.high_24h.toLocaleString()}
          </p>
          <p className=" pl-1 hidden md:block">
            ${item.low_24h.toLocaleString()}
          </p>
          <p className="hidden md:block pl-1">
            ${item.total_volume.toLocaleString()}
          </p>
          <p className="pl-1">${item.market_cap.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
