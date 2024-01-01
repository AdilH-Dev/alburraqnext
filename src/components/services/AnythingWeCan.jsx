import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function AnythingWeCan() {
  return (
    <>
      <div className="color-blue text-white py-5 testing">
        <div className="container-fluid w-80 mx-auto">
          <div className="row">
            <div className="col-xl-4   col-md-6 col-sm-8 col-10 mx-auto">
              <h2 className="text-center fw-bolder fs-1  mx-auto wow animate__animated animate__fadeInLeft">
                Anything we can help you with?
              </h2>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-6 col-md-8 col-sm-10 col-12  mx-auto p-0 ">
              <div className="wow animate__animated animate__fadeInUp">
                <div
                  className="anything d-flex justify-content-between border-bottom"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <h3 className="text-center fw-normal fs-5">
                    How does Alburraq work?
                  </h3>
                  <div className="text-white fs-5">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="py-3 fw-light">
                  <p className="collapse mb-0" id="collapseExample">
                    Our work process ensures quality, timely delivery and
                    requirement fulfillment.
                  </p>
                </div>
              </div>

              <div className="wow animate__animated animate__fadeInUp">
                <div
                  className="anything d-flex justify-content-between border-bottom"
                  data-bs-toggle="collapse"
                  href="#collapseExample1"
                  aria-expanded="false"
                  aria-controls="collapseExample1"
                >
                  <h3 className="text-center fw-normal fs-5">
                    Proven Track Record
                  </h3>
                  <div className="text-white fs-5">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="py-3 fw-light">
                  <p className="collapse mb-0" id="collapseExample1">
                    We scheme up new ways to help you in completing projects on
                    time, cutting costs on delays, better UI/UX and an amazing
                    output of work overall.
                  </p>
                </div>
              </div>

              <div className="wow animate__animated animate__fadeInUp">
                <div
                  className="anything d-flex justify-content-between border-bottom"
                  data-bs-toggle="collapse"
                  href="#collapseExample2"
                  aria-expanded="false"
                  aria-controls="collapseExample2"
                >
                  <h3 className="text-center fw-normal fs-5">
                    Domain Expertise
                  </h3>
                  <div className="text-white fs-5">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="py-3 fw-light">
                  <p className="collapse mb-0" id="collapseExample2">
                    We are consistent in our work and you can expect the best
                    from our side when we work. We offer services sectors
                    including media, healthcare, retail, finance, technology,
                    and education.
                  </p>
                </div>
              </div>
              <div className="wow animate__animated animate__fadeInUp">
                <div
                  className="anything d-flex justify-content-between border-bottom"
                  data-bs-toggle="collapse"
                  href="#collapseExample4"
                  aria-expanded="false"
                  aria-controls="collapseExample4"
                >
                  <h3 className="text-center fw-normal fs-5">
                    Ensured Service Levels
                  </h3>
                  <div className="text-white fs-5">
                    <AiOutlinePlus />
                  </div>
                </div>
                <div className="py-3 fw-light">
                  <p className="collapse mb-0" id="collapseExample4">
                    We are consistent in our work and you can expect the best
                    from our side when we work. We offer services in all sectors
                    including media, healthcare, retail, finance, technology,
                    and education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
