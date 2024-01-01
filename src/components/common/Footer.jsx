import React from 'react'
import Link from "next/link";

export default function Footer() {
    return (
        <div className='footer'>
            <div className='w-80 mx-auto'>
                <div className='container-fluid py-5'>
                    <div className='row text-white mt-5 pt-5 wow animate__animated animate__fadeInUp'>
                        <div className='col-lg-4'>
                            <div className='pt-lg-5 pt-0 px-xl-5 px-0'>
                                <h2 className='fw-bolder fs-3 pe-3'>About AL-Burraq</h2>
                                <p className='fw-lighter lh-lg pe-3'>
                                    Global Experience in Providing Digital Solutions to different businesses.
                                    We understand the value of customization and strive to continuously deliver solutions which cater directly to your business needs. 
                                </p>

                            </div>
                        </div>

                        <div className='col-lg-4 pt-5 ps-xl-5 ps-3'>
                            <div className='pt-lg-4 pt-0 ps-xl-5 ms-xl-5 ms-0 px-0'>
                                <h2 className='fw-bold fs-5 pe-3'>Quick Links</h2>

                                <ul className='fw-lighter lh-lg pe-3'>
                                    <li>
                                        <Link href="/our-talent-showcase" className="text-decoration-none text-white">
                                            Our Talent Showcase
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services" className="text-decoration-none text-white">
                                            Services
                                        </Link>
                                    </li>
                                    <li>Blog</li>

                                    <li>
                                        <Link href="/contact-us" className="text-decoration-none text-white">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className='col-lg-4 pt-5'>
                            <div className='pt-lg-4 pt-0 px-xl-5 px-0'>
                                <h2 className='fw-bold fs-5 pe-3 pb-3'>Social Links</h2>
                                <ul className='fw-lighter lh-lg pe-3 list-unstyled'>
                                   
                                    <a href="mailto:info@al-burraq.com" className="text-decoration-none text-white">
                                        <li className='my-2 d-flex'>
                                            <span className='footer-icon me-3'>
                                                <img src='/images/envelope 1.png'  alt='' title="mail"  />
                                            </span>
                                            ali@al-burraq.com
                                        </li>
                                    </a>
                                    <Link href="/" className="text-decoration-none text-white">
                                        <li className='my-2 d-flex'>
                                            <span className='footer-icon me-3'>
                                                <img src='/images/envelope 2.png'  alt='' title="website" />
                                            </span>
                                            www.al-burraq.com
                                        </li>
                                    </Link>
                                    <a href="skype:/http:/alihassan869?chat" className="text-decoration-none text-white">
                                        <li className='my-2 d-flex'>
                                            <span className='footer-icon me-3'>
                                                <img src='/images/envelope 3.png'  alt='' title="skype"  />
                                            </span>
                                            alihassan869
                                        </li>
                                    </a>

                                    <li className='my-2 d-flex'>
                                        <span className='footer-icon me-3'>
                                            <img src='/images/envelope 4.png'  alt='' title="address" />
                                        </span>
                                        49-C, Commercial Area Cavalry
                                        Ground, Lahore, Punjab
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
