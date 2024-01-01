import React from "react";
import Slider from "react-slick";
import Spinner from "./Spinner";
import { useSelector, useDispatch } from "react-redux";
import { getServicesList } from "../../redux/services/ServicesSlice";
import { useEffect } from "react";
import Link from "next/link";

export default function ServicesMainCard() {
  const { ServicesList, isLoading } = useSelector((state) => state.services);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getServicesList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="row w-80 mx-auto justify-content-center d-lg-flex d-none py-5">
        {isLoading && (
          <Spinner background="color-gray" color="spinner-color-blue" />
        )}
        {!isLoading &&
          ServicesList?.services?.map((e, i) => {
            return (
              <div
                className="col-lg-4  col-12 p-lg-4 my-1 wow animate__animated animate__fadeInUp"
                key={i}
              >
                <Link
                  href={`/services/${e.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/${e.id}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="bg-white h-100 p-3 m-1 services-main-card position-relative card-effect">
                    <h2 className="services-number p-2">{"0" + (i + 1)}</h2>
                    <h3 className="fw-bold fs-4">{e.title}</h3>
                    <p className="fw-light mb-0">{e.main_description}</p>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>

      <div className="row w-80 mx-auto d-lg-none py-5">
        <Slider {...settings}>
          {isLoading && (
            <Spinner background="color-gray" color="spinner-color-blue" />
          )}
          {!isLoading &&
            ServicesList?.services?.map((e, i) => {
              return (
                <div
                  className="mx-auto wow animate__animated animate__fadeInUp"
                  key={i}
                >
                  <Link
                    href={`/services/${e.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}/${e.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="bg-white h-100 p-3 m-1 services-main-card position-relative card-effect">
                      <h2 className="services-number p-2">{"0" + (i + 1)}</h2>
                      <h3 className="fw-bold fs-4">{e.title}</h3>
                      <p className="fw-light mb-0">{e.main_description}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
}
