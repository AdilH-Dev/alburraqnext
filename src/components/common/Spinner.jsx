import React from 'react'

export default function Spinner(props) {
    return (
        <div className={`spin text-center py-5 ${props.background}` }>
            <div className={`spinner-border ${props.color}`} role="status">
                {/* <span className="sr-only"></span> */}
            </div>
        </div>
    )
}
