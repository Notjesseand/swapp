import React from "react";
import { TiTick } from "react-icons/ti";

const app = () => {
  return (
    <div className="px-10 md:px-24 lg:flex justify-between">
      <div className="font-montserrat space-y-3">
        <p className="text-2xl  font-montserrat font-bold text-blue-900 pt-10 pb-4">
          The secure app to store crypto yourself
        </p>
        <p className="flex gap-x-4 items-center text-lg">
          <TiTick className="text-blue-600" /> All your digital assets in one
          place
        </p>
        <p className="flex gap-x-4 items-center text-lg">
          <TiTick className="text-blue-600" /> Use Decentralized Apps
        </p>
        <p className="flex gap-x-4 items-center text-lg">
          <TiTick className="text-blue-600" /> Pay friends, not addresses
        </p>
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716452355/Screenshot_2024-05-23_031755_rl3ruu.png"
          alt=""
          className="flex mx-auto"
        />
      </div>

      <img
        src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716451322/app_pnpyxr.png"
        className="md:max-w-[30%]"
      />
    </div>
  );
};

export default app;
