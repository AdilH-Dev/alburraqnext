import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPortfolioDetailList } from "../../redux/portfolio/PortfolioDetailSlice";
import Spinner from "../common/Spinner";
import FeatureCard from "./FeatureCard";
import Slider from "react-slick";
import { BACKEND_IMAGES } from "../../helper/helper";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PortfolioDetail() {
  const dispatch = useDispatch();
  const { PortfolioDetailList, isLoading } = useSelector(
    (state) => state.portfolioDetail
  );
  const router = useRouter();
  const { id } = router.query;

  const [imageloading, setimageloading] = useState(true);

  const handleImageLoad = () => {
    setimageloading(false);
  };

  useEffect(() => {
    setimageloading(true);
    dispatch(getPortfolioDetailList(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <>
      {isLoading && (
        <Spinner background="color-gray" color="spinner-color-blue" />
      )}
      {!isLoading && (
        <>
          <Head>
            <title>Portfolio Detail</title>
            <meta
              name="description"
              content="Portfolio details page discription"
            />
            <link
              rel="canonical"
              href={`/portfolio/${PortfolioDetailList?.portfolio?.title
                .toLowerCase()
                .replace(/\s+/g, "-")}/${id}`}
            ></link>
          </Head>
          <div className="container-fluid color-gray pb-5 pt-lg-5 pt-2">
            <div className="row w-80 mx-auto">
              <div className="col-lg-6 d-flex flex-column justify-content-center  px-0">
                <h1 className="fw-bold text-center text-lg-start">
                  <span style={{ color: "#25A246" }}>
                    {PortfolioDetailList?.portfolio?.title}
                  </span>
                  <br />
                  {PortfolioDetailList?.portfolio?.portfolio_heading}
                </h1>
                <div className="container-fluid mt-4">
                  <div className="row text-lg-start text-center">
                    <div className="col-6 px-0 pb-4">
                      <h2 className="fw-semibold fs-20">Client</h2>
                      <p className="fw-light">
                        {PortfolioDetailList?.portfolio?.client_name}
                      </p>
                      <h2 className="fw-semibold fs-20">Industry</h2>
                      <p className="fw-light">
                        {PortfolioDetailList?.portfolio?.industry}
                      </p>
                    </div>

                    <div className="col-6">
                      <h2 className="fw-semibold fs-20">Services</h2>
                      <p className="fw-light portfolio-services-p">
                        {PortfolioDetailList?.portfolio?.services}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 d-flex flex-column justify-content-center  mx-auto  text-center px-0">
                {imageloading && (
                  <Spinner background="color-gray" color="spinner-color-blue" />
                )}

                <div className={`green-border ${imageloading ? "d-none" : ""}`}>
                  {PortfolioDetailList?.portfolio?.featuredimage && (
                    <img
                      onLoad={handleImageLoad}
                      src={`${BACKEND_IMAGES}/portfolioimages/${PortfolioDetailList?.portfolio?.featuredimage}`}
                      alt=""
                      className="img-fluid w-100 shadow"
                      title={`${PortfolioDetailList?.portfolio?.title}`}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid pt-5">
            <div className="row w-80 mx-auto">
              <div className="col-lg-12  px-0 ">
                <h2 className="fw-bold text-lg-start text-center fs-1">
                  Overview
                </h2>
                <p
                  className="mb-0 fw-light"
                  dangerouslySetInnerHTML={{
                    __html: PortfolioDetailList?.portfolio?.description,
                  }}
                />
              </div>
            </div>
          </div>

          <div className="container-fluid py-5">
            <div className="row w-80 mx-auto">
              <div className="col-lg-7 px-0 mb-4 mb-lg-0">
                <h2 className="fw-bold text-center text-lg-start fs-1">
                  Problems and Solutions
                </h2>
                <h3 className="mt-lg-5">Problem:</h3>
                <p
                  className="mb-0 fw-light"
                  dangerouslySetInnerHTML={{
                    __html: PortfolioDetailList?.portfolio?.description_problem,
                  }}
                />

                <h3 className="mt-5">Solution:</h3>
                <p
                  className="mb-0 fw-light"
                  dangerouslySetInnerHTML={{
                    __html:
                      PortfolioDetailList?.portfolio?.description_solution,
                  }}
                />
              </div>
              <div className="col-lg-5 col-xxl-4 ms-auto px-0 my-auto">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-6 text-end my-auto">
                      {PortfolioDetailList?.portfolio?.images &&
                        PortfolioDetailList?.portfolio?.images.map((e, i) => {
                          return (
                            i === 0 && (
                              <img
                                key={1}
                                src={`${BACKEND_IMAGES}/portfolioimages/${e.image}`}
                                className="img-fluid shadow"
                                alt=""
                                title={`${PortfolioDetailList?.portfolio?.title}`}
                              />
                            )
                          );
                        })}
                    </div>

                    <div className="col-6  d-flex flex-column justify-content-between">
                      {PortfolioDetailList?.portfolio?.images &&
                        PortfolioDetailList?.portfolio?.images.map((e, i) => {
                          return (
                            i === 1 && (
                              <img
                                key={2}
                                src={`${BACKEND_IMAGES}/portfolioimages/${e.image}`}
                                className="img-fluid shadow  two-thumbnail"
                                alt=""
                                title={`${PortfolioDetailList?.portfolio?.title}`}
                              />
                            )
                          );
                        })}

                      {PortfolioDetailList?.portfolio?.images &&
                        PortfolioDetailList?.portfolio?.images.map((e, i) => {
                          return (
                            i === 2 && (
                              <img
                                key={3}
                                src={`${BACKEND_IMAGES}/portfolioimages/${e.image}`}
                                className="img-fluid shadow  two-thumbnail"
                                alt=""
                                title={`${PortfolioDetailList?.portfolio?.title}`}
                              />
                            )
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid color-gray py-5">
            <h2 className="w-80 mx-auto fw-bold text-lg-start text-center ps-2 fs-1">
              Features
            </h2>
            <FeatureCard Data={PortfolioDetailList?.features} />
          </div>

          <div className="container-fluid  pb-5 pt-lg-5 pt-0">
            <div className="row w-80 mx-auto">
              <div className="col-lg-6 mt-5 mb-5 ">
                <div className="green-border-bottom ms-md-5 d-flex flex-column justify-content-between my-auto align-items-center">
                  {PortfolioDetailList?.portfolio?.featuredimage2 && (
                    <img
                      src={`${BACKEND_IMAGES}/portfolioimages/${PortfolioDetailList?.portfolio?.featuredimage2}`}
                      alt=""
                      title={`${PortfolioDetailList?.portfolio?.title}`}
                      className="img-fluid w-100 shadow"
                    />
                  )}
                </div>
              </div>

              <div className="col-lg-6 mx-auto d-flex flex-column my-auto">
                <h3 className="fw-bold  text-center mb-3">Technology Stack</h3>
                <ul className=" text-center list-unstyled">
                  <li className="d-flex justify-content-between flex-wrap">
                    {PortfolioDetailList?.tags &&
                      PortfolioDetailList?.tags.map((e, i) => {
                        return (
                          <h4
                            key={i}
                            className="fw-semibold py-3 color-gray technology-stack my-3 ms-3 mx-auto rounded card-effect"
                          >
                            {e.name}
                          </h4>
                        );
                      })}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="container-fluid color-gray py-5">
            <div className="row w-80 mx-auto d-lg-flex d-none">
              <div className="col-lg-12  px-0 ">
                <h2 className="fw-bold fs-1  text-lg-start text-center ps-2">
                  More Case Studies
                </h2>
              </div>
              {/* <Slider {...settings}> */}
              {PortfolioDetailList?.more_case_studies &&
                PortfolioDetailList?.more_case_studies.map((e, i) => {
                  return (
                    <div
                      key={i}
                      className="col-xxl-4 col-lg-4 col-sm-6 col-12 px-0"
                    >
                      <Link
                        href={`/portfolio/${e.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/${e.id}`}
                        className="text-decoration-none text-dark"
                      >
                        <div className="card border-0 card-effect rounded-0  m-3 px-4 py-4 h-100  wow animate__animated animate__fadeInUp">
                          <div className="card-body px-0 py-0 text-center">
                            {e.featuredimage && (
                              <img
                                src={e?.thumbnail_url}
                                alt=""
                                className="img-fluid"
                                title={`${e?.title}`}
                              />
                            )}
                            <h3 className="card-title fs-20 mt-4 mb-0">
                              {e?.title}
                            </h3>
                            <p
                              className="mb-0 more-case-p fw-light"
                              dangerouslySetInnerHTML={{
                                __html: e?.description,
                              }}
                            />

                            <p className="text-success mt-4 mb-0 fw-semibold">
                              Read more
                              <span className="ms-2">
                                <svg
                                  width="8"
                                  height="7"
                                  viewBox="0 0 8 7"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.571428 2.91923H6.28571L4.40571 0.998682C4.35215 0.944414 4.30964 0.87985 4.28063 0.808715C4.25162 0.737579 4.23669 0.661279 4.23669 0.584216C4.23669 0.507154 4.25162 0.430854 4.28063 0.359718C4.30964 0.288582 4.35215 0.224019 4.40571 0.169751C4.51278 0.0610265 4.65761 0 4.80857 0C4.95953 0 5.10436 0.0610265 5.21143 0.169751L7.66286 2.67989C7.87748 2.89784 7.99872 3.19384 8 3.50299C7.99722 3.8101 7.87609 4.10373 7.66286 4.32024L5.21143 6.83038C5.15815 6.88443 5.09497 6.92722 5.0255 6.95633C4.95603 6.98543 4.88163 7.00027 4.80655 7C4.73147 6.99972 4.65717 6.98435 4.58791 6.95475C4.51864 6.92514 4.45576 6.88189 4.40286 6.82746C4.34995 6.77304 4.30806 6.70849 4.27957 6.63753C4.25109 6.56656 4.23656 6.49055 4.23682 6.41385C4.23709 6.33715 4.25214 6.26125 4.28112 6.19049C4.3101 6.11973 4.35243 6.0555 4.40571 6.00145L6.28571 4.08674H0.571428C0.419876 4.08674 0.27453 4.02524 0.167367 3.91576C0.0602031 3.80629 0 3.65781 0 3.50299C0 3.34816 0.0602031 3.19968 0.167367 3.09021C0.27453 2.98073 0.419876 2.91923 0.571428 2.91923Z"
                                    fill="#25A246"
                                  />
                                </svg>
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}

              {/* </Slider> */}
            </div>
            <div className="row w-80 mx-auto d-lg-none">
              <div className="col-lg-12  px-0 ">
                <h2 className="fw-bold fs-1  text-lg-start text-center">
                  More Case Studies
                </h2>
              </div>
              <Slider {...settings}>
                {PortfolioDetailList?.more_case_studies &&
                  PortfolioDetailList?.more_case_studies.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className="col-xxl-4 col-lg-4 col-sm-6 col-12 px-0"
                      >
                        <Link
                          href={`/portfolio/${e.title
                            .toLowerCase()
                            .replace(/\s+/g, "-")}/${e.id}`}
                          className="text-decoration-none text-dark"
                        >
                          <div className="card border-0 card-effect rounded-0  m-3 px-4 py-4 h-100  wow animate__animated animate__fadeInUp">
                            <div className="card-body px-0 py-0 text-center">
                              {e.featuredimage && (
                                <img
                                  src={e?.thumbnail_url}
                                  alt=""
                                  className="img-fluid"
                                  title={`${e?.title}`}
                                />
                              )}
                              <h3 className="card-title fs-20 mt-4 mb-0">
                                {e?.title}
                              </h3>
                              <p
                                className="mb-0 more-case-p fw-light"
                                dangerouslySetInnerHTML={{
                                  __html: e?.description,
                                }}
                              />

                              <p className="text-success mt-4 mb-0 fw-semibold">
                                Read more
                                <span className="ms-2">
                                  <svg
                                    width="8"
                                    height="7"
                                    viewBox="0 0 8 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.571428 2.91923H6.28571L4.40571 0.998682C4.35215 0.944414 4.30964 0.87985 4.28063 0.808715C4.25162 0.737579 4.23669 0.661279 4.23669 0.584216C4.23669 0.507154 4.25162 0.430854 4.28063 0.359718C4.30964 0.288582 4.35215 0.224019 4.40571 0.169751C4.51278 0.0610265 4.65761 0 4.80857 0C4.95953 0 5.10436 0.0610265 5.21143 0.169751L7.66286 2.67989C7.87748 2.89784 7.99872 3.19384 8 3.50299C7.99722 3.8101 7.87609 4.10373 7.66286 4.32024L5.21143 6.83038C5.15815 6.88443 5.09497 6.92722 5.0255 6.95633C4.95603 6.98543 4.88163 7.00027 4.80655 7C4.73147 6.99972 4.65717 6.98435 4.58791 6.95475C4.51864 6.92514 4.45576 6.88189 4.40286 6.82746C4.34995 6.77304 4.30806 6.70849 4.27957 6.63753C4.25109 6.56656 4.23656 6.49055 4.23682 6.41385C4.23709 6.33715 4.25214 6.26125 4.28112 6.19049C4.3101 6.11973 4.35243 6.0555 4.40571 6.00145L6.28571 4.08674H0.571428C0.419876 4.08674 0.27453 4.02524 0.167367 3.91576C0.0602031 3.80629 0 3.65781 0 3.50299C0 3.34816 0.0602031 3.19968 0.167367 3.09021C0.27453 2.98073 0.419876 2.91923 0.571428 2.91923Z"
                                      fill="#25A246"
                                    />
                                  </svg>
                                </span>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </>
      )}
    </>
  );
}
