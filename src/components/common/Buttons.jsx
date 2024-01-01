import React from 'react'

export default function Buttons(props) {
  return (
    <>
    <button className='common-button bg-transparent p-1 '>
    <div className=' py-2 px-3 text-white common-button-text'>
    {props.text}
    </div>
    </button>

    </>
  )
}
