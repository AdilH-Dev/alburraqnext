import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServicesDetailList } from "../../redux/services/ServicesDetailSlice";
import {
  ResetContactUsSlice,
  addMessage,
} from "../../redux/contactus/ContactUsSlice";
import { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Spinner from "../common/Spinner";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { useRouter } from "next/router";

export default function WebDesign() {
  const dispatch = useDispatch();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const router = useRouter();
  const { id } = router.query;
  const { ServicesDetailList, isLoading } = useSelector(
    (state) => state.servicesDetail
  );
  const { FormMessage, isLoading: Loading } = useSelector(
    (state) => state.contactus
  );
  const [contactUs, setcontactUs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setcontactUs({ ...contactUs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
    } else {
      executeRecaptcha().then((gReCaptchaToken) => {
        dispatch(
          addMessage({ ...contactUs, recaptcha_token: gReCaptchaToken })
        );
      });
    }
    setcontactUs({ name: "", email: "", subject: "", message: "" });
  };

  useEffect(() => {
    dispatch(getServicesDetailList(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  useEffect(() => {
    if (FormMessage?.message) {
      toast(FormMessage?.message);
    }
    return () => {
      // Reset the FormMessage state when component unmounts
      dispatch(ResetContactUsSlice());
    };
  }, [FormMessage]);

  let design;
  let headingDesign;
  let development;
  let services;
  if (!isLoading && ServicesDetailList?.service?.id === 4) {
    design = [
      "Rankings",
      "Visibility",
      "Performance",
      "Traffic",
      "Keywords",
      "Analytics",
    ];
    headingDesign = "SEO";
  } else if (!isLoading && ServicesDetailList?.service?.id === 5) {
    design = [
      "Brand Awareness",
      "Targeted Audience",
      "Metrics",
      "Engagement",
      "Advertisements",
    ];
    headingDesign = "SMM";
  } else if (!isLoading) {
    design = ServicesDetailList?.service?.design.split("\r\n");
    development = ServicesDetailList?.service?.development.split("\r\n");
  }

  if (!isLoading && ServicesDetailList?.service?.services) {
    services = ServicesDetailList?.service?.services.split("\r\n");
    console.log(services, "testing services");
  }

  return (
    <>
      {isLoading && (
        <Spinner background="color-gray" color="spinner-color-blue" />
      )}
      {!isLoading && (
        <>
          <Head>
            <title>Services Details</title>
            <meta
              name="description"
              content="services Detail page discription"
            />
            <link
              rel="canonical"
              href={`/services/${ServicesDetailList?.service?.title
                .toLowerCase()
                .replace(/\s+/g, "-")}/${id}`}
            ></link>
          </Head>
          <div className="container-fluid color-gray py-5">
            <div className="row w-80 mx-auto services-details-web ">
              <h2 className="col-12 text-center px-0 fw-bolder text-uppercase">
                {ServicesDetailList?.service?.title}
              </h2>
              <p className="text-center col-xl-7 col-lg-8  px-0 col-12 mx-auto">
                {ServicesDetailList?.service?.short_description}
              </p>
            </div>
            <div className="row w-80 mx-auto">
              <div className="col-lg-7  text-lg-start text-center ">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 p-4 text-center ">
                      <img
                        className="img-fluid card-effect"
                        alt=""
                        src={`${ServicesDetailList?.service?.image_url}`}
                        title={`${ServicesDetailList?.service?.title}`}
                      />
                    </div>
                    <div className="col-12 px-0 pt-4 services-details-web">
                      <h2 className="fw-bolder">Overview</h2>
                      <p className="mb-0">
                        {ServicesDetailList?.service?.overview}
                      </p>
                    </div>

                    <div className="col-12 px-0 pt-4 services-details-web">
                      <h2 className="fw-bolder">Our Strategy</h2>
                      <p className="mb-0">
                        {ServicesDetailList?.service?.strategy}
                      </p>
                    </div>

                    <div className="container-fluid pt-4">
                      <div className="row mt-lg-5 pt-xl-0 pt-lg-3 ">
                        <div className="col-lg-6 services-details-web ps-0 text-lg-start">
                          <h2 className="fw-bolder">
                            {headingDesign ? headingDesign : "Design"}{" "}
                          </h2>
                          <ul className="services-details-web-p ps-lg-2 ps-0">
                            {design?.map((e, i) => {
                              return (
                                <li key={i} className="mb-2">
                                  &bull; {e}
                                </li>
                              );
                            })}
                          </ul>
                        </div>

                        <div className="col-lg-6 services-details-web ps-0 pe-0 pt-lg-0 pt-4 text-center">
                          <h2 className="fw-bolder">
                            {development ? "Development" : null}
                          </h2>
                          <ul className="services-details-web-p ps-xl-2 ps-lg-5 ms-xl-0 ms-lg-2 ms-0 ps-0">
                            {development?.map((e, i) => {
                              return (
                                <li key={i} className="mb-2">
                                  &bull; {e}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* ------------------------------ */}
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-lg-12 py-lg-4 py-3 px-0 px-lg-4">
                      <div className="ms-lg-5 bg-white services-details-web p-4 card-effect ">
                        <h2 className="fw-bolder">Services</h2>
                        {services?.map((e, i) => {
                          return (
                            <h3 key={i} className="border-bottom py-2 fw-bold">
                              {e}
                            </h3>
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-lg-12 py-lg-4 py-3 px-0 px-lg-4">
                      {Loading && (
                        <Spinner
                          background="color-gray"
                          color="spinner-color-blue"
                        />
                      )}
                      {!Loading && (
                        <div className="ms-lg-5 bg-white services-details-web p-4">
                          <form onSubmit={handleSubmit}>
                            <h2 className="fw-bolder">Get a Quote</h2>
                            <input
                              type="text"
                              name="name"
                              onChange={handleChange}
                              value={contactUs.name}
                              required
                              className="mb-4 form-control  shadow-none get-quote-input fw-light"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-lg"
                              placeholder="Your Name"
                            />
                            <input
                              type="email"
                              name="email"
                              onChange={handleChange}
                              value={contactUs.email}
                              required
                              className="mb-4 form-control  shadow-none get-quote-input fw-light"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-lg"
                              placeholder="Your Email Address"
                            />
                            <input
                              type="text"
                              name="subject"
                              onChange={handleChange}
                              value={contactUs.subject}
                              required
                              className="mb-4 form-control  shadow-none get-quote-input fw-light"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-lg"
                              placeholder="Subject"
                            />
                            <input
                              type="text"
                              name="message"
                              onChange={handleChange}
                              value={contactUs.message}
                              required
                              className="mb-4 form-control  shadow-none get-quote-input fw-light"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-lg"
                              placeholder="Message"
                            />
                            <div className="text-center">
                              <button
                                type="submit"
                                className="color-blue text-white px-5 py-2 border-0"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      )}
                    </div>
                    <div className="col-lg-12 py-lg-4 py-3 px-0 px-lg-4 position-relative">
                      <div className="ms-lg-5 services-details-web text-center">
                        <img
                          className="img-fluid w-100"
                          alt=""
                          src="/images/Rectangle 20278.webp"
                          title="office"
                        />
                        <div className="services-details-text px-4 ">
                          <h2 className="text-white text-start mt-3">
                            Find Us
                          </h2>

                          <a
                            href="mailto:info@al-burraq.com"
                            className="text-decoration-none text-white"
                          >
                            <div className="d-flex py-3">
                              <span className="me-2">
                                <img
                                  src="/images/envelope.png"
                                  className="img-fluid  detail-icon"
                                  alt=""
                                  title="mail"
                                />
                              </span>
                              ali@al-burraq.com
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </>
  );
}
