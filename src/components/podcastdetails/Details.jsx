import React, { useEffect, useState } from "react";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

import { BsFacebook, BsTiktok } from "react-icons/bs";

import { getPodcastDetailList } from "../../redux/podcast/PodcastDetailSlice";
import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
import Link from "next/link";
import Spinner from "../common/Spinner";
import Header from "../common/Header";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Details() {
  const dispatch = useDispatch();
  const { PodcastDetailList, isLoading } = useSelector(
    (state) => state.podcastDetail
  );
  const router = useRouter();
  const { slug } = router.query;
  const [videoSrc, setVideoSrc] = useState("");
  useEffect(() => {
    dispatch(getPodcastDetailList(slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  // console.log(PodcastDetailList, "=> PodcastDetailList")
  useEffect(() => {
    // setVideoSrc(PodcastDetailList?.podcast?.video)
  }, [videoSrc]);
  console.log(PodcastDetailList);

  return (
    <>
      {isLoading && (
        <Spinner background="color-gray" color="spinner-color-blue" />
      )}
      {!isLoading && (
        <>
          <Head>
            <title>Podcast Detail</title>
            <meta
              name="description"
              content="Podcast detail page discription"
            />
            <link
              rel="canonical"
              href={`/our-talent-showcase/${PodcastDetailList?.podcast?.title
                ?.split(" ")
                ?.map((w, i, arr) => (i === arr?.length - 1 ? w : w[0] + "."))
                ?.join(" ")
                ?.toLowerCase()
                ?.replace(/\s+/g, "-")}/${slug}`}
            ></link>
          </Head>
          <Header
            HeaderText={{
              // heading: `Podcast with ${PodcastDetailList?.podcast?.name.split(" ").map((w, i, arr) => i === arr.length - 1 ? w : w[0] + ".").join(" ")}`,
              heading: `TechStar Spotlight`,
              detail: `${PodcastDetailList?.podcast?.short_description}`,
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
                      setVideoSrc(
                        `https://www.youtube.com/embed/${PodcastDetailList?.podcast?.video_url_id}`
                      );
                    }}
                  >
                    <img
                      className="img-fluid "
                      src={PodcastDetailList?.podcast?.thumbnail}
                      alt=""
                      title={`${PodcastDetailList?.podcast?.name
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
                    {/* {PodcastDetailList?.podcast?.name.split(" ").map((w, i, arr) => i === arr.length - 1 ? w : w[0] + ".").join(" ")} */}
                    Join Our Community
                  </h2>
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
                  <h2 className="fw-bolder fs-4">
                    {PodcastDetailList?.podcast?.title}
                  </h2>
                  {/* <p className='fw-light '>
                                    {PodcastDetailList?.podcast?.professional_bio}
                                </p> */}
                  <p
                    className="fw-light"
                    dangerouslySetInnerHTML={{
                      __html: PodcastDetailList?.podcast?.long_description,
                    }}
                  ></p>
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
