// // "use client";
// import { useEffect, useState } from "react";

// async function getData() {
//   const res = await fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
//   );

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default function Page() {
//   const [data, setData] = useState<any[]>([]);
//   console.log(data);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getData();
//         setData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className="grid grid-cols-8">
//         <p className="bg-pink-300 col-span-2">Coin</p>
//         <p>Price</p>
//         <p>1h</p>
//         <p>24h</p>
//         <p>7d</p>
//         <p>24h Volume</p>
//         <p>Market Cap</p>
//       </div>
//       <div className=" grid-cols-5 grid gap-5">
//         {/* {data.map((item, index) => (
//           <div className="border-orange-600 border-2 bg-pink-300" key={index}>
//             <img className="w-14 h-14" src={item.image} />
//             <p className="text-4xl">{item.id} </p>
//           </div>
//         ))} */}
//       </div>
//     </div>
//   );
// }

export async function getData() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = res.json();
  return data;
}
