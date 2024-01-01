import React from 'react'
import Slider from 'react-slick'

export default function FeatureCard(props) {
    
    const { Data } = props

    const settings = {

        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <>
            {Data &&

                <div className='row w-80 mx-auto justify-content-center d-lg-flex d-none'>
                    {Data.map((e, i) => {

                        return (
                            <div key={i} className={`col-lg-4      mt-4 wow animate__animated animate__fadeInUp`}>
                                <div className='work-process-card card-effect  rounded text-start h-100'>
                                    <div className='rounded-circle feature-card-number fw-semibold'>
                                        {i + 1}
                                    </div>
                                    <div className='work-process-card-text' >
                                        <h3 className='fw-bolder pt-3 '>{e.heading}</h3>
                                        <p className='lh-lg pb-3'>
                                            {e.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {Data &&

                <div className='row w-80 mx-auto d-lg-none '>
                    <Slider {...settings}>

                        {Data.map((e, i) => {
                            return (
                                <div key={i} className='p-2 my-3' data-aos="fade-up">
                                    <div className='work-process-card card-effect m-xl-4  rounded text-start'>
                                        <div className='rounded-circle feature-card-number fw-semibold'>
                                            {i + 1}
                                        </div>
                                        <div className='work-process-card-text' >
                                            <h3 className='fw-bolder pt-3 '>{e.heading}</h3>
                                            <p className='lh-lg pb-3'>
                                                {e.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>}
        </>
    )
}
