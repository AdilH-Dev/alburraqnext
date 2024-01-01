import React from "react";
import Navbar from "../common/Navbar";
import Buttons from "../common/Buttons";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="color-gray position-relative pb-5">
      <div className="container-fluid">
        <Navbar />
        <div className="row hero ">
          <div className="col-lg-5 text-lg-start text-center  web-design wow animate__animated animate__fadeInLeft">
            <h1 className="fw-bolder lh-base">
              Providing Web and Mobile Solutions: Your Idea, Our Expertise
            </h1>
            <p className="py-4 lh-lg fs-md-5 fs-6">
              Welcome to Al-Burraq Technologies, where a team of experienced
              developers and designers provide custom digital solutions for your
              business. From software and enterprise solutions to AI and
              blockchain based systems, we have got you covered.
            </p>
            <Link href="/contact-us" className="text-decoration-none">
              <Buttons text={"GET STARTED"} />
            </Link>

            <div className="container-fluid">
              <div className="row text-center fw-md-bolder fw-bold mt-5 wow animate__animated animate__fadeInUp">
                <div className="col-4 ">
                  <h2>547</h2>
                  <h3 className="fs-16">Happy Customers</h3>
                </div>
                <div className="col-4 ">
                  <h2>54,589</h2>
                  <h3 className="fs-16">Online Hours</h3>
                </div>

                <div className="col-4 ">
                  <h2>382</h2>
                  <h3 className="fs-16">Completed Projects</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 d-lg-block d-none"></div>
          <div className="col-6 d-lg-block d-none color-blue p-0  column-background">
            <img
              className=" img-fluid "
              src="/images/hero.webp"
              alt=""
              title="office"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
