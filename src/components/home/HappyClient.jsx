import React from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { getHomeList } from "../../redux/home/HomeSlice";
import { useEffect } from "react";
import Spinner from "../common/Spinner";
import { BACKEND_IMAGES } from "../../helper/helper";

export default function HappyClient() {
  const { HomeList, isLoading } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const settings = {
    dots: true,
    // dotsClass:"slick-dots",
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "20%",
        },
      },
    ],
  };
  return (
    <div className="color-gray container-fluid py-5">
      <div className="row position-relative">
        <div className="col-lg-6 happy-client-background p-md-5 p-3">
          <div className="p-md-5 pt-4 me-xl-5 text-white text-lg-start text-center">
            <h2 className="me-xl-5 fw-bolder lh-base fs-1 mb-0 wow animate__animated animate__fadeInLeft">
              What our happy clients are saying about us
            </h2>
            <p className="lh-lg me-xl-5 py-2 fw-light wow animate__animated animate__fadeInRight">
              We put client&apos;s need first. Don&apos;t take our word, hear
              from our satisfied clients.
            </p>
          </div>
        </div>
        <div className="happy-client-slider pt-5 pt-lg-0">
          {isLoading && (
            <Spinner background="color-gray" color="spinner-color-blue" />
          )}
          {!isLoading && (
            <Slider
              {...settings}
              className="pb-3 wow animate__animated animate__fadeInUp"
            >
              {HomeList?.testimonial?.map((e, i) => {
                return (
                  <div
                    key={i}
                    className="p-4 mb-4 lh-base text-center bg-white happy-client-slides card-effect"
                  >
                    <img
                      className="slider-avator rounded-circle"
                      src={`${BACKEND_IMAGES}/assets/img/man.png`}
                      alt=""
                      title={`${e.name.toLowerCase().replace(/\s+/g, "-")}`}
                    />
                    <h3 className="fw-bold fs-5 py-2">{e.name}</h3>
                    <p className="happy-client-p">{e.comment}</p>
                  </div>
                );
              })}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}
