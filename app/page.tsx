"use client";
import React from "react";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import GetStarted from "@/components/home/getStarted";
import Portfolio from "@/components/home/portfolio";
import Customers from "@/components/home/customers";
import App from "@/components/home/app";
import Blog from "@/components/home/blog";
import GetInTouch from "@/components/home/getInTouch";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="my-0 py-0 font-custom ">
      <div className="min-h-screen">
        <Header />
        <Hero />
      </div>
      <GetStarted />
      <Portfolio />
      <Customers />
      <App />
      <Blog />
      <GetInTouch />
      <Footer />
    </div>
  );
}
