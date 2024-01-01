import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Newsletter } from "../../redux/newsletter/NewsletterSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ConnectUs() {
  const { isLoading } = useSelector((state) => state.newsletter);
  const [letter, setLetter] = useState({ email: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLetter({ ...letter, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(Newsletter(letter));
    setLetter({ email: "" });
  };

  if (isLoading) {
    toast("Newsletter Send Successfully");
  }

  return (
    <div className="connect-us-background color-gray position-relative py-1 ">
      <div className="w-80 mx-auto">
        <div className="container-fluid">
          <div className="row bg-white rounded align-items-center connect-us mx-auto wow animate__animated animate__fadeInUp">
            <div className="col-lg-6 mt-3 py-lg-4  pt-3 pt-lg-0 px-lg-5 wow animate__animated animate__fadeInUp">
              <h2 className="fw-bolder fs-lg-3 fs-5  lh-base  text-center mb-0">
                Connect with us, Let&apos;s craft solutions together!
              </h2>
            </div>

            <div className="col-lg-6 text-center my-3 py-lg-4  pb-3 wow animate__animated animate__fadeInUp">
              <form onSubmit={handleSubmit}>
                <div className="input-group input-group-lg w-75 mx-auto telegram rounded">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={letter.email}
                    required
                    className="form-control shadow-none fs-6"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    placeholder="Enter Your Email"
                  />
                  <button
                    type="submit"
                    className="input-group-text color-blue "
                    id="inputGroup-sizing-lg"
                  >
                    <img
                      src="/images/telegram 1.png"
                      className="w-100 h-100"
                      alt=""
                      title="newsletter"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
