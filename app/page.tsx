"use client";
import React from "react";
import Hero from "./components/landing/Hero";
import AppBar from "./components/landing/AppBar";
import Features from "./components/landing/Features";
import CallToAction from "./components/landing/CallToAction";
import Testimonials from "./components/landing/Testimonials";
import { appBarData } from "./constants/types/appBarData";
import { defaultHeroData } from "./constants/types/hero";
import { defaultCallToAction } from "./constants/types/callToAction";
import Footer from "./components/landing/Footer";
import { defaultFooterData } from "./constants/types/footer";
import "./styles/globals.css";

function page() {
  return (
    <main className="relative main-layout">
      <AppBar {...appBarData} />
      <Hero hero={defaultHeroData} />
      <Features />
      <Testimonials />
      <CallToAction cta={defaultCallToAction}/>
      <Footer footer={defaultFooterData}/>
    </main>
  );
}

export default page;
