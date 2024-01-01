import Head from "next/head";
import ColorNavbar from "../components/common/ColorNavbar";
import ConnectUs from "../components/common/ConnectUs";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import ContactUsForm from "../components/contactus/ContactUsForm";
import GoogleMap from "../components/contactus/GoogleMap";
import React from "react";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact US</title>
        <meta name="description" content="Contactus page description" />
        <link rel="canonical" href="/contact-us"></link>
      </Head>
      <ColorNavbar />
      <Header
        HeaderText={{
          heading: "Contact Us",
          detail:
            "Looking for a talented Development team? let's join hands, we are the ones behind many giants, we are the ones you can rely for your amazing products development.",
        }}
      />
      <ContactUsForm />
      <GoogleMap />
      <ConnectUs />
      <Footer />
    </>
  );
}
