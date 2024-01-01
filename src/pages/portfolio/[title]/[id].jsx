import React from "react";
import ColorNavbar from "@/components/common/ColorNavbar";
import ConnectUs from "@/components/common/ConnectUs";
import Footer from "@/components/common/Footer";
import PortfolioDetail from "@/components/portfoliodetails/PortfolioDetail";

export default function PortfolioDetails() {
  return (
    <>
      <ColorNavbar />
      <PortfolioDetail />
      <ConnectUs />
      <Footer />
    </>
  );
}
