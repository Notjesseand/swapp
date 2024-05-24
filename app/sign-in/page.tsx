import React from "react";

const Page = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-5/6 md:w-1/2 h-96  rounded pt-8 border-slate-600 border">
        <form action="">
          <div className="w-4/5 px-10 mx-auto">
            <p>Email</p>
            <input
              type="email"
              className=" flex -auto rounded py-2 w-full border border-slate-600 mt-1 outline-none px-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
