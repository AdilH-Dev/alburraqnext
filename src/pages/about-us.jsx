import React from "react";
import ColorNavbar from "../components/common/ColorNavbar";
import Header from "../components/common/Header";
import WeAre from "../components/aboutus/WeAre";
import OurServices from "../components/services/OurServices";
import ConnectUs from "../components/common/ConnectUs";
import Footer from "../components/common/Footer";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About US</title>
        <meta name="description" content="About us page description" />
        <link rel="canonical" href="/about-us"></link>
      </Head>
      <ColorNavbar />
      <Header
        HeaderText={{
          heading: "About Us",
          detail:
            "Let us help your business thrive in this digital age. Want to discuss how we can impact your sales? Contact us.",
        }}
      />
      <WeAre />
      <OurServices />
      <ConnectUs />
      <Footer />
    </>
  );
}
