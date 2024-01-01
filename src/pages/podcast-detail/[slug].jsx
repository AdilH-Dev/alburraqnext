import React from "react";
import ColorNavbar from "../../components/common/ColorNavbar";
import Details from "../../components/podcastdetails/Details";
import ConnectUs from "../../components/common/ConnectUs";
import Footer from "../../components/common/Footer";

export default function PodcastDetails() {
  return (
    <>
      <ColorNavbar />
      <Details />
      <ConnectUs />
      <Footer />
    </>
  );
}
