import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ColorNavbar() {
  const router = useRouter();
  const [isOpen, setIsopen] = useState(true);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      {/* -------------------------------------mobile-nav------------------------------------------------ */}

      <div
        className={`d-lg-none d-block mobile-nav-parent ${
          isOpen === true ? "close" : ""
        }`}
      >
        <div className="ms-5  py-4 text-white" onClick={ToggleSidebar}>
          <AiOutlineClose className="mobile-nav-cross" size={35} />
        </div>
        <div className="mobile-nav">
          <Link
            href="/"
            className={`text-decoration-none my-3 ${
              router.pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/our-talent-showcase"
            className={`text-decoration-none my-3 ${
              router.pathname.startsWith("/our-talent-showcase") ? "active" : ""
            }`}
          >
            Our Talent Showcase
          </Link>
          <Link
            href="/services"
            className={`text-decoration-none services-drop-down-mbl position-relative py-3 ${
              router.pathname.startsWith("/services") ? "active" : ""
            }`}
          >
            Services
            <RiArrowDropDownLine size={25} />
          </Link>
          <div className="rounded text-end drop-down-mbl">
            <Link
              href="/services/web-design-and-development/1"
              className="drop-down-item w-100"
            >
              <p className="">Web Design and Development</p>
            </Link>
            <Link
              href="/services/mobile-app-development/2"
              className="drop-down-item w-100"
            >
              <p className="">Mobile App Development</p>
            </Link>
            <Link
              href="/services/wordpress-development/3"
              className="drop-down-item w-100"
            >
              <p className="">Wordpress Development</p>
            </Link>

            <Link
              href="/services/search-engine-optimization/4"
              className="drop-down-item w-100"
            >
              <p className="">Search Engine Optimization</p>
            </Link>
            <Link
              href="/services/social-media-marketing/5"
              className="drop-down-item w-100"
            >
              <p className="">Social Media Marketing</p>
            </Link>
            <Link
              href="/services/softwate-design-and-development/6"
              className="drop-down-item  w-100"
            >
              <p className="">Software Design and Development</p>
            </Link>
          </div>
          <Link
            href="/portfolio"
            className={`text-decoration-none my-3 ${
              router.pathname.startsWith("/portfolio") ? "active" : ""
            }`}
          >
            Portfolio
          </Link>
          <Link
            href="/podcast"
            className={`text-decoration-none my-3 podcast ${
              router.pathname.startsWith("/podcast") ? "active" : ""
            }`}
          >
            Podcast
          </Link>
          <Link
            href="/contact-us"
            className={`text-decoration-none my-3 ${
              router.pathname === "/contact-us" ? "active" : ""
            }`}
          >
            Contact us
          </Link>
          <Link
            href="/about-us"
            className={`text-decoration-none my-3 ${
              router.pathname === "/about-us" ? "active" : ""
            }`}
          >
            About us
          </Link>
        </div>
      </div>

      {/* -----------------------------------------navbar----------------------------------------------------------- */}
      <div className="color-gray text-dark py-3">
        <nav className="navbar navbar-expand-lg w-80">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <img
                className="logo"
                src="/images/alburraq-logo320.webp"
                alt=""
                title="Al-Burraq"
              />
            </Link>
            <button
              onClick={ToggleSidebar}
              className="navbar-toggler border-0 rounded-circle color-blue"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#fff"
                className="bi bi-list mx-auto"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-lg-auto ">
                <li className="nav-item mx-lg-auto">
                  <Link
                    href="/"
                    className={`text-decoration-none color-nav-li ${
                      router.pathname === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-lg-auto">
                  <Link
                    href="/our-talent-showcase"
                    className={`text-decoration-none color-nav-li ${
                      router.pathname.startsWith("/our-talent-showcase")
                        ? "active"
                        : ""
                    }`}
                  >
                    Our Talent Showcase
                  </Link>
                </li>
                <li className="nav-item mx-lg-auto position-relative ">
                  <Link
                    href="/services"
                    className={`text-decoration-none   services-drop-down color-nav-li ${
                      router.pathname.startsWith("/services") ? "active" : ""
                    }`}
                  >
                    Services
                    <RiArrowDropDownLine size={25} />
                  </Link>
                  <div className="drop-down position-absolute rounded">
                    <Link
                      href="/services/web-design-and-development/1"
                      className="drop-down-item w-100"
                    >
                      <p className="mb-0">Web Design and Development</p>
                    </Link>
                    <Link
                      href="/services/mobile-app-development/2"
                      className="drop-down-item w-100"
                    >
                      <p className="mb-0">Mobile App Development</p>
                    </Link>
                    <Link
                      href="/services/wordpress-development/3"
                      className="drop-down-item w-100"
                    >
                      <p className="mb-0">Wordpress Development</p>
                    </Link>

                    <Link
                      href="/services/search-engine-optimization/4"
                      className="drop-down-item w-100"
                    >
                      <p className="mb-0">Search Engine Optimization</p>
                    </Link>
                    <Link
                      href="/services/social-media-marketing/5"
                      className="drop-down-item w-100"
                    >
                      <p className="mb-0">Social Media Marketing</p>
                    </Link>
                    <Link
                      href="/services/softwate-design-and-development/6"
                      className="drop-down-item  w-100"
                    >
                      <p className="mb-0">Software Design and Development</p>
                    </Link>
                  </div>
                </li>
                <li className="nav-item mx-lg-auto color-nav-li">
                  <Link
                    href="/portfolio"
                    className={`text-decoration-none color-nav-li ${
                      router.pathname.startsWith("/portfolio") ? "active" : ""
                    }`}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item mx-lg-auto color-nav-li">
                  <Link
                    href="/podcast"
                    className={`text-decoration-none color-nav-li podcast ${
                      router.pathname.startsWith("/podcast") ? "active" : ""
                    }`}
                  >
                    Podcast
                  </Link>
                </li>

                <li className="nav-item mx-lg-auto ">
                  <Link
                    href="/contact-us"
                    className={`text-decoration-none color-nav-li ${
                      router.pathname === "/contact-us" ? "active" : ""
                    }`}
                  >
                    Contact us
                  </Link>
                </li>
                <li className="nav-item mx-lg-auto ">
                  <Link
                    href="/about-us"
                    className={`text-decoration-none color-nav-li ${
                      router.pathname === "/about-us" ? "active" : ""
                    }`}
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
