import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import { BACKEND_IMAGES } from "../../helper/helper";

export default function TeamLeads() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const Data = [
    {
      imgPath: `${BACKEND_IMAGES}/talent_thumbnails/6.webp`,
      id: 21,
      name: "Bilal Nazir",
    },
    {
      imgPath: `${BACKEND_IMAGES}/talent_thumbnails/11.webp`,
      id: 7,
      name: "Hamza Fasil",
    },
    {
      imgPath: `${BACKEND_IMAGES}/talent_thumbnails/12.webp`,
      id: 6,
      name: "Muhammad Asif",
    },
    {
      imgPath: `${BACKEND_IMAGES}/talent_thumbnails/24.webp`,
      id: 19,
      name: "Muhammad Noaman",
    },
    {
      imgPath: `${BACKEND_IMAGES}/talent_thumbnails/27.webp`,
      id: 12,
      name: "Muhammad Awais",
    },
  ];
  return (
    <div className=" text-center text-white team-lead py-5">
      <div className="w-80 mx-auto">
        <h2 className="fw-bolder team-member fs-5 pb-3 wow animate__animated animate__fadeInRight">
          {" "}
          Team Member{" "}
        </h2>
        <h2 className="fw-bold meet mx-auto fs-2 wow animate__animated animate__fadeInLeft">
          Get to know the experienced professionals behind Al-Burraq
        </h2>
        <Slider {...settings}>
          {Data?.map((e, i) => {
            return (
              <div
                key={i}
                className=" text-dark my-3 wow animate__animated animate__fadeInUp"
              >
                <Link
                  href={`/our-talent-showcase/${e.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/${e.id}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="card-effect bg-white m-2 p-2 checking position-relative">
                    <img
                      className="img-fluid"
                      src={e.imgPath}
                      alt=""
                      title={`${e.name.toLowerCase().replace(/\s+/g, "-")}`}
                    />
                    {/* <div className='border mb-0 position-absolute testing m-2 bg-black'>
                        {e.check}

                       </div> */}
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
