import React from "react";
import ColorNavbar from "../components/common/ColorNavbar";
import Header from "../components/common/Header";
import ConnectUs from "../components/common/ConnectUs";
import Footer from "../components/common/Footer";
import Head from "next/head";
import PodcastCard from "../components/common/PodcastCard";

export default function Podcast() {
  return (
    <>
      <Head>
        <title>Out Podcast</title>
        <meta name="description" content="Portfolio page discription" />
        <link rel="canonical" href="/portfolio"></link>
      </Head>
      <ColorNavbar />
      <Header
        HeaderText={{
          heading: "Our Podcast",
          detail:
            "Discover excellence in action with our 'Portfolio Spotlight Podcast.' Join us as we unveil the stories, challenges, and triumphs behind our diverse projects, showcasing the unmatched quality, commitment, and expertise of our team. It's more than a portfolio; it's a journey through innovation and success.",
        }}
      />
      <PodcastCard />
      <ConnectUs />
      <Footer />
    </>
  );
}
