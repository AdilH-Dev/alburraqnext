import { GrFormPreviousLink } from "react-icons/gr";
import React from "react";


export default function NextArrow(props) {
    const { onClick } = props;
    return (
        <>
            <div onClick={onClick} className='next-arrow'>
                <GrFormPreviousLink size={25} />
            </div>
        </>
    );
}