import React from "react";
import ColorNavbar from "../components/common/ColorNavbar";
import Header from "../components/common/Header";
import ServicesMain from "../components/services/ServicesMain";
import AnythingWeCan from "../components/services/AnythingWeCan";
import OurServices from "../components/services/OurServices";
import HappyClient from "../components/home/HappyClient";
import ConnectUs from "../components/common/ConnectUs";
import Footer from "../components/common/Footer";
import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
        <title>Web Application development Services | Al-Burraq</title>
        <meta
          name="description"
          content="Experience business growth with Al-Burraq as we offer custom web application development designed to solve your most pressing digitization concerns."
        />
        <link rel="canonical" href="/services"></link>
      </Head>
      <ColorNavbar />
      <Header
        HeaderText={{
          heading: "Services",
          detail:
            "Al-Burraq Technologies offers a comprehensive suite of services designed to meet the requirements of different business sectors. From web and mobile development to blockchain and AI, we have got you covered.",
        }}
      />
      <ServicesMain />
      <AnythingWeCan />
      <OurServices />
      <HappyClient />
      <ConnectUs />
      <Footer />
    </>
  );
}
