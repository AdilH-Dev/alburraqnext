import React from "react";
import DemandStaffingCard from "../common/DemandStaffingCard";

export default function DemandStaffing() {
  return (
    <div className="py-5 color-gray">
      <div className="w-80 mx-auto">
        <div className="text-center wow animate__animated animate__fadeInLeft">
          <h2 className=" fw-bolder fs-1 our-services my-2 wow animate__animated animate__fadeInLeft">
            OUR SERVICES
          </h2>
          <h3 className="fw-bold on-demand fs-5 my-2 wow animate__animated animate__fadeInRight">
            On-Demand Staffing
          </h3>
          <p className="services-p lh-lg text-center fs-6 my-2 wow animate__animated animate__fadeInUp">
            Unlock the full potential of your business with Al-Burraq
            Technologies&apos; On Demand Offshore Software Engineers. Our
            handpicked experts are ready to join your team, delivering top-notch
            software development with their versatile skill sets.
          </p>
        </div>
        <div className="container-fluid">
          <DemandStaffingCard />
        </div>
      </div>
    </div>
  );
}
