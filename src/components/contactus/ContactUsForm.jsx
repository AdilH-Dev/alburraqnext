import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ResetContactUsSlice,
  addMessage,
} from "../../redux/contactus/ContactUsSlice";
import Spinner from "../common/Spinner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function ContactUsForm() {
  const { FormMessage, isLoading } = useSelector((state) => state.contactus);
  const [contactUs, setcontactUs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const dispatch = useDispatch();

  const { executeRecaptcha } = useGoogleReCaptcha();
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
    if (FormMessage?.message) {
      toast(FormMessage?.message);
    }
    return () => {
      // Reset the FormMessage state when component unmounts
      dispatch(ResetContactUsSlice());
    };
  }, [FormMessage]);

  return (
    <>
      <div className="">
        <div className="container p-lg-5 mx-auto">
          <div className="row w-80 mx-auto pt-lg-0 pt-3">
            <div className="col-lg-5 p-lg-3 p-0 my-3 wow animate__animated animate__fadeInLeft">
              <h2 className="text-blue fs-5 text-lg-start text-center">
                Contact Form
              </h2>

              <h3 className="fw-bolder text-lg-start text-center fs-3">
                Send Us a Message
              </h3>
              {isLoading && (
                <Spinner background="bg-white" color="spinner-color-blue" />
              )}
              {!isLoading && (
                <form onSubmit={handleSubmit}>
                  <div className="input-group mb-3 mt-5">
                    <input
                      type="text"
                      name="name"
                      onChange={handleChange}
                      value={contactUs.name}
                      required
                      className="form-control bg-blue"
                      aria-label=""
                      placeholder="Name"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      value={contactUs.email}
                      required
                      className="form-control bg-blue"
                      aria-label=""
                      placeholder="Email"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      value={contactUs.subject}
                      required
                      className="form-control bg-blue"
                      aria-label=""
                      placeholder="Subject"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <textarea
                      type="text"
                      name="message"
                      onChange={handleChange}
                      value={contactUs.message}
                      required
                      className="form-control bg-blue text-area-h"
                      aria-label=""
                      placeholder="Your Message"
                    />
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100">
                      submit
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="col-lg-6 mx-auto p-lg-3 ps-lg-5  p-0 my-3 wow animate__animated animate__fadeInRight">
              <div className=" ps-lg-5 m-0 ms-lg-5">
                <h2 className="text-blue text-lg-start text-center fs-5">
                  Contact Info
                </h2>
                <h3 className="fw-bolder text-lg-start text-center fs-3">
                  Contact With Us
                </h3>

                <ul className="fw-lighter lh-lg pe-3 list-unstyled mt-5 pt-lg-4">
                  <a
                    href="mailto:info@al-burraq.com"
                    className="text-decoration-none text-dark"
                  >
                    <li className="my-2 d-flex">
                      <span className="footer-icon me-3">
                        <img src="/images/envelope 1.png" alt="" title="mail" />
                      </span>
                      ali@al-burraq.com
                    </li>
                  </a>
                  <Link href="/" className="text-decoration-none text-dark">
                    <li className="my-2 d-flex">
                      <span className="footer-icon me-3">
                        <img
                          src="/images/envelope 2.png"
                          alt=""
                          title="website"
                        />
                      </span>
                      www.al-burraq.com
                    </li>
                  </Link>
                  <a
                    href="skype:/http:/alihassan869?chat"
                    className="text-decoration-none text-dark"
                  >
                    <li className="my-2 d-flex">
                      <span className="footer-icon me-3">
                        <img
                          src="/images/envelope 3.png"
                          alt=""
                          title="skype"
                        />
                      </span>
                      alihassan869
                    </li>
                  </a>
                  <li className="my-2 d-flex">
                    <span className="footer-icon me-3">
                      <img
                        src="/images/envelope 4.png"
                        alt=""
                        title="address"
                      />
                    </span>
                    49-C, Commercial Area Cavalry Ground, Lahore, Punjab
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
