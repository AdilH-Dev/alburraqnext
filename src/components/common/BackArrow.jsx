import React from "react";
import { GrFormNextLink } from "react-icons/gr";



export default function BackArrow(props) {
    const { onClick } = props;
    return (
        <>
            <div onClick={onClick} className='back-arrow'>
                <GrFormNextLink size={25} />
            </div>
        </>
    );
}