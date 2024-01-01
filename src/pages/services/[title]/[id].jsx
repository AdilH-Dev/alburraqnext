import React from "react";
import ColorNavbar from "@/components/common/ColorNavbar";
import Header from "@/components/common/Header";
import WebDesign from "@/components/servicesdetails/WebDesign";
import ConnectUs from "@/components/common/ConnectUs";
import Footer from "@/components/common/Footer";

export default function ServicesDetails() {
  return (
    <>
      <ColorNavbar />
      <Header
        HeaderText={{
          heading: "Services Details",
          detail: "",
        }}
      />
      <WebDesign />
      <ConnectUs />
      <Footer />
    </>
  );
}
