import React from 'react'

export default function Header({ HeaderText }) {
  return (
    <div className='container-fluid header p-0 py-lg-3' style={{ backgroundImage: `linear-gradient(rgba(0, 174, 227, 0.75),rgba(0, 174, 227, 0.75)),url("/images/confident-businesspeople-standing-outside-office-building 2.webp")` }}>
      <div className='text-center text-white row w-80 mx-auto py-sm-5 py-4'>
        <div className='col-lg-6  col-md-8 mx-auto wow animate__animated animate__fadeIn'>
          <h1 className='fs-1 fw-bolder'>
            {HeaderText.heading}
          </h1>
          <p className='fw-light ' dangerouslySetInnerHTML={{ __html: HeaderText.detail }}>
          </p>
        </div>
      </div>
    </div>
  )
}
