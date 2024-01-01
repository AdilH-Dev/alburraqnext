import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPortfolioList } from "../../redux/portfolio/PortfolioSlics";
import { useEffect } from "react";
import Spinner from "./Spinner";
import Link from "next/link";
import Slider from "react-slick";

export default function PortfolioCard() {
  const [id, setid] = useState(0);
  const [name, setname] = useState("");
  const { PortfolioList, isLoading } = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  const handleClick = (id, name) => {
    setid(id);
    setname(name);
  };

  useEffect(() => {
    dispatch(getPortfolioList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredPortfolios = PortfolioList?.portfolios?.filter(
    (e) =>
      id === 0 ||
      id === e.category_id ||
      e.tags.some((tag) => tag.tags_name.name === name)
  );

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplaySpeed: 1700,
    autoplay: true,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid color-gray py-5 px-md-3 px-0">
        {isLoading && (
          <Spinner background="color-gray" color="spinner-color-blue" />
        )}

        {!isLoading && (
          <div className="w-80 mx-auto">
            <div className="row d-sm-none d-flex mx-auto w-100 bg-white rounded shadow mb-4">
              <ul className="mb-0 py-3">
                <Slider {...settings} className="px-1">
                  <span className=" text-center py-1">
                    <span
                      onClick={() => setid(0)}
                      className={`border d-block mx-2 py-1  px-3 top_tag rounded-pill ${
                        id === 0 ? "portfolio_active" : ""
                      }`}
                    >
                      ALL
                    </span>
                  </span>
                  {PortfolioList?.categories?.map((e, i) => {
                    return (
                      <span className="text-center py-1" key={i}>
                        <span
                          onClick={() => handleClick(e.id, e.name)}
                          className={`border d-block mx-2 py-1 px-3 top_tag rounded-pill ${
                            e.id === id ? "portfolio_active" : ""
                          }`}
                        >
                          {e.name}
                        </span>
                      </span>
                    );
                  })}
                </Slider>
              </ul>
            </div>
            <div className="row d-sm-flex d-none mx-auto w-100 bg-white rounded shadow mb-4">
              <ul className="d-flex flex-wrap portfolio-tag text-start mb-0 pt-3">
                <span
                  onClick={() => setid(0)}
                  className={`border py-1 mb-3 mx-1 px-3 top_tag rounded-pill ${
                    id === 0 ? "portfolio_active" : ""
                  }`}
                >
                  ALL
                </span>
                {PortfolioList?.categories?.map((e, i) => {
                  return (
                    <span
                      onClick={() => handleClick(e.id, e.name)}
                      key={i}
                      className={`border py-1 mb-3 mx-1 px-3 top_tag rounded-pill ${
                        e.id === id ? "portfolio_active" : ""
                      }`}
                    >
                      {e.name}
                    </span>
                  );
                })}
              </ul>
            </div>
            <div className="row px-md-5 py-0">
              {filteredPortfolios?.map((e, i) => {
                return (
                  <div
                    className="col-xxl-3 col-lg-4 col-sm-6 col-12 p-0 "
                    key={i}
                  >
                    <Link
                      href={`/portfolio/[${e.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}]/[${e.id}]`}
                      className="text-decoration-none text-dark"
                    >
                      <div className="card border-0 card-effect rounded-0  m-3  wow animate__animated animate__fadeInUp">
                        <div className="card-body Porfolio-card">
                          <div>
                            <img
                              src={e?.thumbnail_url}
                              className="card-img-top rounded"
                              alt=""
                              title={`${e.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            />
                          </div>
                          <h2 className="card-title fs-20 mt-3">{e?.title}</h2>
                          <div
                            className="fw-light Porfolio-card-p"
                            dangerouslySetInnerHTML={{ __html: e?.description }}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
