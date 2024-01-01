import RecentProjectCards from '../common/RecentProjectCards';
import React from 'react';

export default function RecentProject() {
  
    return (
        <div className='color-blue pt-5'>
            <div className='w-80 position-relative'>
                <div className='text-center pb-2 text-white'>
                    <h3 className='fw-md-bolder  fw-bold portfolio-home-heading fs-4 wow animate__animated animate__fadeInLeft'>Portfolio</h3>
                    <h2 className='fw-md-bolder fw-bold our-recent fs-1 wow animate__animated animate__fadeInRight'>Our Recent Projects</h2>
                </div>
                <div className='container-fluid'>
                    <RecentProjectCards />
                </div>
            </div>
        </div>
    )
}
