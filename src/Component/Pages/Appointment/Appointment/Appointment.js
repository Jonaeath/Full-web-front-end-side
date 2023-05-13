import React, { useState } from "react";
import bgBanner from "../../../../assets/images/bg.png";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AppointmentAvailable from "../AppointmentAvailable/AppointmentAvailable";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date());

  return (
    <div
      style={{
        backgroundImage: `url(${bgBanner})`,
      }}
    >
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <AppointmentAvailable selected={selected}></AppointmentAvailable>
    </div>
  );
};

export default Appointment;
