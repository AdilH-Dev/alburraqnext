import React from 'react'
import Slider from 'react-slick'

export default function OurServicesCard() {
    const Data = [
        {
            logo: "/images/book-open-reader.png",
            heading: "Unparallel Quality",
            details: "Leading the way in high-impact, high-performance Web/ Mobile/ Wordpress/ Laravel development services, Al-Burraq Technologies guarantees quality solutions."
        },
        {
            logo: "/images/book-open-reader 2.png",
            heading: "Customization",
            details: "During our entire project cycle, we love to customize solutions to make it according to your requirements."
        },
        {
            logo: "/images/skill-development 1.png",
            heading: "Proven Methodology",
            details: "We combine innovation with tried and true methodologies that we have practised with our assorted clients, further equipping us with relevant expertise."
        },
        {
            logo: "/images/approval1.png",
            heading: "Competitive Pricing",
            details: "Get true value for your investment with our competitively priced development services that are characterized by robustness, scalablity and reliability."
        },
        {
            logo: "/images/support1.png",
            heading: "24/7 Technical Support",
            details: "Uncompromisingly customer-focused, the Al-Burraq Technologies personnel is available 24/7 to assist the customers with their queries."
        },
        {
            logo: "/images/support (1).png",
            heading: "Skilled Developers",
            details: "Developers at Al-Burraq Technologies are adept with latest industry standards and technologies. Hire them to fuel your business for uninterrupted expansion."
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
            <div className='row justify-content-center d-lg-flex d-none'>
                {Data.map((e, i) => {
                    return (
                        <div key={i} className=' col-lg-4 my-4 wow animate__animated animate__fadeInUp'>
                            <div className='work-process-card card-effect m-xl-4  rounded text-start h-100'>
                                <div className='work-process-icon'>
                                    <img src={e.logo} className='w-100 h-100' alt='' title={`${e.heading}`} />
                                </div>
                                <div className='work-process-card-text' >
                                    <h3 className='fw-bolder pt-3 '>{e.heading}</h3>
                                    <p className='lh-lg pb-3'>
                                        {e.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='row d-lg-none '>
                <Slider {...settings}>

                    {Data.map((e, i) => {
                        return (
                            <div key={i} className='p-2 my-3' data-aos="fade-up">
                                    <div className='work-process-card card-effect m-xl-4  rounded text-start'>
                                        <div className='work-process-icon'>
                                            <img src={e.logo} className='w-100 h-100' alt=''  title={`${e.heading}`} />
                                        </div>
                                        <div className='work-process-card-text' >
                                            <h3 className='fw-bolder pt-3 '>{e.heading}</h3>
                                            <p className='lh-lg pb-3'>
                                                {e.details}
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </>
    )
}
