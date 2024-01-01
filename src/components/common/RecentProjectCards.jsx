import React from 'react'
import Slider from 'react-slick'
import Buttons from './Buttons'
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux'
import { getHomeList } from '../../redux/home/HomeSlice'
import { useEffect } from 'react';
import Spinner from './Spinner'


export default function RecentProjectCards() {

    const { HomeList, isLoading, } = useSelector((state) => state.home)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHomeList())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    }
    return (
        <>
            <div className='row d-lg-flex d-none '>
                {isLoading && <Spinner background="color-blue" color="spinner-color-gray" />}

                {!isLoading && HomeList?.portfolio?.map((e, i) => {
                    return (
                        <div key={i} className='col-lg-4 col-md-6 col-sm-12 p-4 wow animate__animated animate__fadeInUp'>
                            <div className='h-100 d-flex flex-column justify-content-between'>
                                <div className='bg-white card-effect p-2 w-100 h-75'>
                                    <Link href={`/portfolio/${e.title.toLowerCase().replace(/\s+/g, '-')}/${e.id}`} className="text-decoration-none text-dark">
                                        <img className='img-fluid w-100 h-100' src={`${e?.thumbnail_url}`} alt='' title={`${e.title.toLowerCase().replace(/\s+/g, '-')}`}/>
                                    </Link>
                                </div>
                                <h3 className='text-white mb-0 pt-3 fs-5 fw-semibold'>
                                    {/* NeuroForce1’s performance */}
                                    {e?.title}
                                </h3>
                                <h3 className='text-white mb-0 pt-3 fs-5 fw-semibold'>
                                    {/* fitness mobile app */}
                                    {e?.category.name}
                                </h3>
                                <Link href={`/portfolio/${e.title.toLowerCase().replace(/\s+/g, '-')}/${e.id}`} className="text-decoration-none text-dark">
                                    <button type='button' className='align-self-start border-0 mt-3 py-1 px-3 text-white common-button-text'>
                                        See detail
                                    </button>
                                </Link>

                            </div>
                        </div>
                    )
                })}
                <div className='col-12 text-center pt-4 pb-5 wow animate__animated animate__fadeInUp'>
                    <Link
                        href="/portfolio"
                        className="text-decoration-none"
                    >
                        <Buttons text={"SHOW MORE PROJECTS"} />
                    </Link>
                </div>
            </div>

            {/*------------------------- Sliders cards------------------------- */}
            <div className='row  d-lg-none'>
                {isLoading && <Spinner background="color-blue" color="spinner-color-gray" />}
                {!isLoading &&
                    <Slider {...settings}>
                        {HomeList?.portfolio?.map((e, i) => {
                            return (
                                <div key={i} className='col-lg-4 col-md-6 col-sm-12 p-4 my-1 wow animate__animated animate__fadeInUp'>
                                    <div className='h-100 d-flex flex-column justify-content-around'>

                                        <div className='bg-white card-effect p-2 w-100 h-75'>
                                            <Link href={`/portfolio/${e.title.toLowerCase().replace(/\s+/g, '-')}/${e.id}`} className="text-decoration-none text-dark">
                                                <img className='img-fluid w-100 h-100' src={e?.thumbnail_url} alt='' title={`${e.title.toLowerCase().replace(/\s+/g, '-')}`}  />
                                            </Link>
                                        </div>
                                        <h3 className='text-white mb-0 pt-3 fs-5 fw-semibold'>
                                            {/* NeuroForce1’s performance */}
                                            {e?.title}
                                        </h3>
                                        <h3 className='text-white mb-0 pt-3 fs-5 fw-semibold'>
                                            {/* fitness mobile app */}
                                            {e?.category.name}
                                        </h3>
                                        <Link href={`/portfolio/${e.title.toLowerCase().replace(/\s+/g, '-')}/${e.id}`} className="text-decoration-none text-dark">
                                            <button type='button' className='align-self-start border-0 mt-3 py-1 px-3 text-white common-button-text'>
                                                See detail
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>}
                <div className='col-12 text-center pt-4 pb-5 wow animate__animated animate__fadeInUp'>
                    <Link
                        href="/portfolio"
                        className="text-decoration-none"
                    >
                        <Buttons text={"SHOW MORE PROJECTS"} />
                    </Link>
                </div>
            </div>
        </>
    )
}
