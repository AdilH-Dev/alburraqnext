import React from 'react'
import WorkCard from '../common/WorkCard'

export default function WorkProcess() {

    return (
        <>
            <div className='color-gray pt-5'>
                <div className='w-80 mx-auto text-center'>
                    <h2 className='we-work fw-bolder wow animate__animated animate__fadeInLeft '>HOW WE WORK</h2>
                    <h2 className='fw-bolder mx-auto work-process wow animate__animated animate__fadeInRight'>Our work process ensures quality, timely delivery and requirement fulfillment.</h2>

                    <div className='container-fluid'>
                       <WorkCard/>
                    </div>
                </div>
            </div>

        </>
    )
}
