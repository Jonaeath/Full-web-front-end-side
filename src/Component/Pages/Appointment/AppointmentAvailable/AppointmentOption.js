import React from "react";

const AppointmentOption = ({ option, SetTreatment }) => {
  const { name, slots } = option;

  return (
    <div>
      <div className="card m-5 shadow-xl">
        <div className="card-body text-center">
          <h2 className="text-center text-2xl text-primary">{name}</h2>
          <p>{slots.length > 0 ? slots[0] : "Try Another Day"}</p>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <div className="card-actions justify-center">
            <label 
            htmlFor="Booking-modal" 
            className="btn btn-primary"
            onClick = {()=>SetTreatment(option)}
            >
              Book Appointment
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
