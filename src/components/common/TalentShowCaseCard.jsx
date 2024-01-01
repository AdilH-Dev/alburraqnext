import React, { useState } from 'react'
import { useEffect } from 'react'
import { getTalentShowCaseList } from '../../redux/talentshowcase/TalentShowCaseSlice'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from './Spinner'
import Link from "next/link";
import Slider from 'react-slick'


export default function TalentShowCaseCard() {

    const [stackId, setstackId] = useState("0")
    const { TalentShowCaseList, isLoading, } = useSelector((state) => state.talentshowcase)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTalentShowCaseList())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    let filteredTalents;
    if (stackId === "0") {
        filteredTalents = TalentShowCaseList?.talents;
    } else {
        filteredTalents = TalentShowCaseList?.talents?.filter(talent =>
            talent.stacks.some(stack => stack.name === stackId)
        );
    }


    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        autoplaySpeed:1700,
        autoplay: true,
        pauseOnHover: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
            }
        }]
    }

    return (
        <>
            <div className='container-fluid color-gray py-5'>
                {isLoading && <Spinner background="color-gray" color="spinner-color-blue" />}
                {!isLoading &&
                    <div className='w-80 mx-auto'>
                        <div className='row d-sm-none d-flex mx-auto w-100 bg-white rounded shadow mb-4'>
                            <ul className=' mb-0 py-3'>

                                <Slider {...settings} className=' px-3 '>
                                    <div className='px-3 text-center my-1'>
                                        <div onClick={() => setstackId('0')} className={`border py-1  mx-1 top_tag px-3 rounded-pill ${stackId === '0' ? "portfolio_active" : ""}`}> ALL</div>
                                    </div>
                                    {TalentShowCaseList?.stacks?.map((e, i) => {
                                        return (
                                            <div className='px-2 text-center my-1' key={i}>

                                                <div onClick={() => setstackId(e?.id?.toString())} className={`border w-100 py-1 top_tag px-3 text-center pointer rounded-pill ${e?.id?.toString() === stackId ? "portfolio_active" : ""
                                                    }`}>{e?.name}</div>
                                            </div>
                                        )
                                    })}
                                </Slider>

                            </ul>
                        </div>
                        <div className='row d-sm-flex d-none mx-auto w-100 bg-white rounded shadow mb-4'>
                            <ul className='d-flex flex-wrap justify-content-xl-evenly text-start mb-0 pt-3'>
                                <span onClick={() => setstackId('0')} className={`border py-1 mb-3 mx-1 top_tag px-3 rounded-pill ${stackId === '0' ? "portfolio_active" : ""}`}>ALL</span>

                                {/* <Slider {...settings}> */}
                                {TalentShowCaseList?.stacks?.map((e, i) => {
                                    return (
                                        <span onClick={() => setstackId(e.id.toString())} key={i} className={`border py-1 mb-3 mx-1 top_tag px-3 rounded-pill ${e.id.toString() === stackId ? "portfolio_active" : ""
                                            }`}>{e.name}</span>
                                    )
                                })}
                                {/* </Slider> */}

                            </ul>
                        </div>
                        <div className='row px-md-5 py-0 '>
                            {filteredTalents?.map((e, i) => {
                                return (
                                    <div className='col-xxl-3 col-lg-4 col-sm-6 col-12 p-3 wow animate__animated animate__fadeInUp' key={i}>
                                        <Link href={`/our-talent-showcase/${e.name.split(" ").map((w, i, arr) => i === arr.length - 1 ? w : w[0] + ".").join(" ").toLowerCase().replace(/\s+/g, '-')}/${e?.id}`} className="text-decoration-none text-dark">
                                            <div className="card TalentShowCaseCard card-effect rounded-0 h-100">
                                                <img src={e.image_url} className="card-img-top rounded-0" alt="" title={`${e.name.split(" ").map((w, i, arr) => i === arr.length - 1 ? w : w[0] + ".").join(" ").toLowerCase().replace(/\s+/g, '-')}`} />
                                                <div className="card-body">
                                                    <h2 className="card-title fs-20">{e.name.split(" ").map((w, i, arr) => i === arr.length - 1 ? w : w[0] + ".").join(" ")}</h2>
                                                    <p className="card-text fw-light">{e.talent_destination}</p>
                                                    <span className="color-blue text-white fw-light px-2">WATCH NOW</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                )
                            }

                            )}
                        </div>
                    </div>}
            </div >
        </>
    )
}
