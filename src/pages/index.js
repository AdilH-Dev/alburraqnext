import React from "react";
import Hero from "../components/home/Hero";
import RecentProject from "../components/home/RecentProject";
import DemandStaffing from "../components/home/DemandStaffing";
import TeamLeads from "../components/home/TeamLeads";
import WorkProcess from "../components/home/WorkProcess";
import HappyClient from "../components/home/HappyClient";
import ConnectUs from "../components/common/ConnectUs";
import Footer from "../components/common/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Custom Application development Services | Al-Burraq</title>
        <meta
          name="description"
          content="Al-Burraq offers cross platform, scalable custom application development services and solutions to digitally transform your business for the next level."
        />
        <meta
          name="keywords"
          content="custom application development services, custom software development services, custom software application development services, custom software development services company"
        />
        <link rel="canonical" href="/"></link>
      </Head>
      <Hero />
      <RecentProject />
      <DemandStaffing />
      <TeamLeads />
      <WorkProcess />
      <HappyClient />
      <ConnectUs />
      <Footer />
    </>
  );
}
