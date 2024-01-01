import React from "react";
import Header from "../components/common/Header";
import TalentShowCaseCard from "../components/common/TalentShowCaseCard";
import ColorNavbar from "../components/common/ColorNavbar";
import ConnectUs from "../components/common/ConnectUs";
import Footer from "../components/common/Footer";
import Head from "next/head";

export default function TalentShowCase() {
  return (
    <>
      <Head>
        <title>Our Talent Showcase</title>
        <meta name="description" content="TalentShowCase discription" />
        <link rel="canonical" href="/our-talent-showcase"></link>
      </Head>
      <ColorNavbar />
      <Header
        HeaderText={{
          heading: "Our Talent Showcase",
          detail:
            "Our talented team is the heart and soul of Al-Burraq Technologies. We have a diverse range of skill set to help clients belonging to different niches.",
        }}
      />
      <TalentShowCaseCard />
      <ConnectUs />
      <Footer />
    </>
  );
}
