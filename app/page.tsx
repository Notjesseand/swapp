"use client";
import React from "react";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import GetStarted from "@/components/home/getStarted";
import Portfolio from "@/components/home/portfolio";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="my-0 py-0 font-custom ">
      <div className="min-h-screen">
        <Header />
        <Hero />
      </div>
      <GetStarted />
      <Portfolio />,
      <Footer />
    </div>
  );
}
