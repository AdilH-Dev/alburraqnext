import React from 'react'
import Buttons from './Buttons'
import Slider from 'react-slick'
import Link from "next/link";

export default function WorkCard() {
    const Data = [
        {
            logo: "/images/book-open-reader 1.png",
            heading: "Discovery:",
            details: "Before we start any project, we spend time listening to our customers. We want to understand their goals, their vision, and their expectations."
        },
        {
            logo: "/images/clipboard-list 1.png",
            heading: "Design:",
            details: "Our designers create custom design that is aligned with client's needs and their brand's voice."
        },
        {
            logo: "/images/Vector.png",
            heading: "Code:",
            details: "Our developers get into coding to build a functional product."
        },
        {
            logo: "/images/approval.png",
            heading: "Test:",
            details: "After development comes rigorous testing to ensure quality and standard."
        },
        {
            logo: "/images/support.png",
            heading: "Deploy & Support:",
            details: "We deploy the product and provide on going support and maintenance services."
        },
    ]
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
            <div className='row justify-content-center d-lg-flex d-none '>
                {Data.map((e, i) => {
                    return (
                        <div key={i} className=' col-lg-4 mt-4 wow animate__animated animate__fadeInUp'>
                            <div className='work-process-card card-effect p-xl-4 rounded text-start h-100'>
                                <div className={i === 1 ? `light-background` : `work-process-icon`}>
                                    <img src={e.logo} className='w-100 h-100' alt='' title={`${e.heading.toLowerCase().replace(/\s+/g, '-')}`}  />
                                </div>
                                <div className='work-process-card-text' >
                                    <h3 className='fw-bolder pt-3 '>{e.heading}</h3>
                                    <p className='lh-lg'>
                                        {e.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )

                })}
                <Link
                    href="/services"
                    className="text-decoration-none"
                >
                    <div className='mt-4 text-center wow animate__animated animate__fadeInUp'>
                        <Buttons text="SEE MORE" />
                    </div>
                </Link>

            </div>

            <div className='row d-lg-none '>
                <Slider {...settings} >

                    {Data.map((e, i) => {
                        return (
                            <div key={i} className='col-12 p-2 mt-3 wow animate__animated animate__fadeInUp'>
                                <div className='work-process-card card-effect m-xl-4  rounded text-start '>
                                        <div className={i === 1 ? `light-background` : `work-process-icon`}>
                                            <img src={e.logo} className='w-100 h-100' alt='' title={`${e.heading.toLowerCase().replace(/\s+/g, '-')}`}  />
                                        </div>
                                    <div className='work-process-card-text' >
                                        <h3 className='fw-bolder pt-3 '>{e.heading}</h3>
                                        <p className='lh-lg pb-3 mb-0'>
                                            {e.details}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
                <div className='text-center mt-4 wow animate__animated animate__fadeInUp'>
                    <Buttons text="SEE MORE" />
                </div>
            </div>
        </>
    )
}
