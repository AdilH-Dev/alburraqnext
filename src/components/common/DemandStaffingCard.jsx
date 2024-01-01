import React from 'react'
import Slider from 'react-slick'
import Buttons from './Buttons'
import { useSelector, useDispatch } from 'react-redux'
import { getHomeList } from '../../redux/home/HomeSlice'
import { useEffect } from 'react';
import Spinner from './Spinner'
import Link from "next/link";
import {BACKEND_IMAGES} from '../../helper/helper'
export default function DemandStaffingCard() {

    const { HomeList, isLoading } = useSelector((state) => state.home)
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
        slidesToShow: 1,
        slidesToScroll: 1,

    }
    return (
        <>
            <div className='row d-lg-flex d-none'>

                {isLoading && <Spinner background="color-gray" color="spinner-color-blue" />}

                {!isLoading && HomeList?.services?.map((e, i) => {
                    return (
                        <div key={i} className='col-lg-4 col-md-6 col-12 pt-4 px-4 wow animate__animated animate__fadeInUp'>
                            <Link href={`/services/${e.title.toLowerCase().replace(/\s+/g, '-')}/${e.id}`} className="text-decoration-none text-dark">

                                <div className=' rounded shadow p-1 bg-white  fix-services card-effect '>
                                    <div className=' services-img text-center py-2'>
                                        <img src={`${BACKEND_IMAGES}/servicesImages/${e.thumbnail}`} alt='' title={`${e.title.toLowerCase().replace(/\s+/g, '-')}`}  />
                                    </div>
                                    <div className='text-center pt-0 px-4 pb-4'>
                                        <h2 className='fw-bolder fs-4 lh-base my-2'>
                                            {e.title}
                                        </h2>
                                        <p className='fw-normal fs-6 lh-lg'>
                                            {e.main_description}
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <div className='text-center pt-4'>
                                <Link href={`/services/${e.title.toLowerCase().replace(/\s+/g, '-')}/${e.id}`} className="text-decoration-none text-dark">
                                    <Buttons text="LEARN MORE" />
                                </Link>
                            </div>
                        </div>
                    )
                })}

            </div>

            <div className='row  d-lg-none'>
                {isLoading && <Spinner background="color-gray" color="spinner-color-blue" />}

                {!isLoading && <Slider {...settings} className='px-0'>
                    {HomeList?.services?.map((e, i) => {
                        return (
                            <div key={i} className='col-lg-4 col-md-6 col-12 pt-4 px-4 wow animate__animated animate__fadeInUp'>
                                <Link href={`/services/${e.title.toLowerCase().replace(/\s+/g, '-')}/${e.id}`} className="text-decoration-none text-dark">
                                    <div className='bg-white rounded shadow p-1  fix-services card-effect '>
                                        <div className=' services-img text-center py-2'>
                                            <img src={e.thumbnail_url} alt='' title={`${e.title.toLowerCase().replace(/\s+/g, '-')}`}  />
                                        </div>
                                        <div className='text-center pt-0 px-4 pb-4'>
                                            <h2 className='fw-bolder fs-4 lh-base my-2'>
                                                {e.title}
                                            </h2>
                                            <p className='fw-normal fs-6 lh-lg services-card-p'>
                                                {e.main_description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                                <div className='text-center pt-4'>
                                    <Link href={`/services/${e.title.toLowerCase().replace(/\s+/g, '-')}/${e.id}`} className="text-decoration-none text-dark">
                                        <Buttons text="LEARN MORE" />
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </Slider>}

            </div>
        </>
    )
}
