import React, { useEffect, useState } from "react";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import { BsFacebook, BsTiktok } from "react-icons/bs";

import { getTalentShowCaseDetailList } from "../../redux/talentshowcase/TalentShowCaseDetailSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Spinner from "../common/Spinner";
import Header from "../common/Header";
import Head from "next/head";

export default function Details() {
  const dispatch = useDispatch();
  const { TalentShowCaseDetailList, isLoading } = useSelector(
    (state) => state.talentShowCaseDetail
  );
  const router = useRouter();
  const { id } = router.query;
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    dispatch(getTalentShowCaseDetailList(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // console.log(TalentShowCaseDetailList, "=> TalentShowCaseDetailList")
  useEffect(() => {
    // setVideoSrc(TalentShowCaseDetailList?.talents?.video)
  }, [videoSrc]);
  return (
    <>
      {isLoading && (
        <Spinner background="color-gray" color="spinner-color-blue" />
      )}
      {!isLoading && (
        <>
          <Head>
            <title>TalentShowCase Detail</title>
            <meta
              name="description"
              content="TalentShowCase detail page discription"
            />
            <link
              rel="canonical"
              href={`/our-talent-showcase/${TalentShowCaseDetailList?.talents?.name
                .split(" ")
                .map((w, i, arr) => (i === arr.length - 1 ? w : w[0] + "."))
                .join(" ")
                .toLowerCase()
                .replace(/\s+/g, "-")}/${id}`}
            ></link>
          </Head>
          <Header
            HeaderText={{
              heading: `${TalentShowCaseDetailList?.talents?.name
                .split(" ")
                .map((w, i, arr) => (i === arr.length - 1 ? w : w[0] + "."))
                .join(" ")}`,
              detail: `${TalentShowCaseDetailList?.talents?.talent_destination}`,
            }}
          />

          <div className="container-fluid color-gray py-5">
            <div className="row  w-80 mx-auto px-auto justify-content-center">
              <div className="col-xl-5 col-lg-5 p-md-4 p-0 text-center mb-lg-0 mb-4">
                <div className="h-100 ">
                  <div
                    className="position-relative card-effect"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => {
                      setVideoSrc(TalentShowCaseDetailList?.talents?.video);
                    }}
                  >
                    <img
                      className="img-fluid "
                      src={TalentShowCaseDetailList?.talents?.image_url}
                      alt=""
                      title={`${TalentShowCaseDetailList?.talents?.name
                        .split(" ")
                        .map((w, i, arr) =>
                          i === arr.length - 1 ? w : w[0] + "."
                        )
                        .join(" ")
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    />
                    <div className="border position-absolute play">
                      <div className="dashed-border rounded-circle">
                        <div className="color-blue play-icon rounded-circle">
                          <img
                            className="img-fluid "
                            src="/images/play.png"
                            alt=""
                            title="play"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2 className="fw-bold fs-3 mt-3">
                    {TalentShowCaseDetailList?.talents?.name
                      .split(" ")
                      .map((w, i, arr) =>
                        i === arr.length - 1 ? w : w[0] + "."
                      )
                      .join(" ")}
                  </h2>
                  <p className="fw-light mb-2">
                    {TalentShowCaseDetailList?.talents?.talent_destination}
                  </p>
                  <div>
                    <Link href="https://twitter.com/AlBurraqTech">
                      {
                        <AiOutlineTwitter
                          size={25}
                          className="mx-1 detail-icon"
                        />
                      }
                    </Link>
                    <Link href="https://www.linkedin.com/company/alburraqtech/">
                      {
                        <AiFillLinkedin
                          size={25}
                          className="mx-1 detail-icon"
                        />
                      }
                    </Link>
                    <Link href="https://www.facebook.com/alburraqtech">
                      {<BsFacebook size={25} className="mx-1 detail-icon" />}
                    </Link>
                    <Link href="https://www.instagram.com/alburraqtech/">
                      {
                        <AiOutlineInstagram
                          size={25}
                          className="mx-1 detail-icon"
                        />
                      }
                    </Link>
                    <Link href="https://www.youtube.com/@alburraqtech">
                      {
                        <AiOutlineYoutube
                          size={25}
                          className="mx-1 detail-icon"
                        />
                      }
                    </Link>
                    <Link href="https://www.tiktok.com/@alburraqtech?lang=en">
                      {<BsTiktok size={16} className="mx-1 detail-icon" />}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-7 p-lg-4 p-0">
                <div className="p-4 bg-white rounded h-100">
                  <h2 className="fw-bolder fs-4">Professional Bio</h2>
                  <p className="fw-light ">
                    {TalentShowCaseDetailList?.talents?.professional_bio}
                  </p>
                  <h2 className="fw-bolder fs-4">Experience</h2>
                  <p className="fw-light">
                    {TalentShowCaseDetailList?.talents?.experience}
                  </p>
                  <h2 className="fw-bolder fs-4">Skills</h2>
                  <div className="container-fluid">
                    {TalentShowCaseDetailList &&
                      TalentShowCaseDetailList?.Talent_skills?.length &&
                      TalentShowCaseDetailList?.Talent_skills?.map(
                        (item, index) => {
                          return (
                            // <>
                            <div
                              className="row"
                              style={{ alignItems: "center" }}
                              key={index}
                            >
                              <div className="col-lg-5  p-0">
                                <h2 className="fw-bolde fs-6 mb-0">
                                  {item?.skill}
                                </h2>
                              </div>
                              <div className="col-lg-7 p-0 mb-3 mt-lg-3">
                                <p
                                  className="mb-0 w-100"
                                  style={{
                                    paddingLeft: `${item?.percentage - 7}%`,
                                  }}
                                >
                                  {item?.percentage}%
                                </p>
                                <div
                                  className="progress"
                                  style={{ height: "8px" }}
                                >
                                  <div
                                    className="progress-bar rounded-pill"
                                    role="progressbar"
                                    style={{
                                      width: `${item?.percentage}%`,
                                      backgroundColor: "#00AEE3",
                                    }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </div>
                            </div>

                            // </>
                          );
                        }
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        onClick={() => {
          setVideoSrc("");
        }}
        id="exampleModal"
        tabeindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-header border-0"></div>
            <div className="modal-body ">
              <div className="text-end">
                <RxCross1
                  size={25}
                  className="modal-close-button"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setVideoSrc("");
                  }}
                />
              </div>

              <div className="iframe-container ">
                <iframe
                  width="560"
                  height="315"
                  src={videoSrc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
