import React from "react";
import ColorNavbar from "../components/common/ColorNavbar";
import Header from "../components/common/Header";
import PortfolioCard from "../components/common/PortfolioCard";
import ConnectUs from "../components/common/ConnectUs";
import Footer from "../components/common/Footer";
import Head from "next/head";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio page discription" />
        <link rel="canonical" href="/portfolio"></link>
      </Head>
      <ColorNavbar />
      <Header
        HeaderText={{
          heading: "Portfolio",
          detail:
            "Our portfolio is the testament of the exceptional work that we have delivered to our worthy clients. These projects span a range of industries and solutions, and show the quality, commitment, and expertise of our team.",
        }}
      />
      <PortfolioCard />
      <ConnectUs />
      <Footer />
    </>
  );
}
