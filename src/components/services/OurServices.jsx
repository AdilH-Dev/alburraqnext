import React from 'react'
import OurServicesCard from '../common/OurServicesCard'

export default function OurServices() {

    return (
        <>
            <div className='color-gray py-5'>
                <div className='w-80 mx-auto text-center'>
                    <h2 className='fw-bolder fs-1 py-1 wow animate__animated animate__fadeInLeft'>Our Services</h2>
                    <div className='container-fluid'>
                       <OurServicesCard/>
                    </div>
                </div>
            </div>

        </>
    )
}