import React from "react";
import Banner from "../Banner/Banner";
import CardFakeData from "../Card/CardFakeData";
import ServiceFakeData from "../Services/ServiceFakeData";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import ReviewFakeData from "../Review/ReviewFakeData";
import bghome from "../../../../assets/images/bg.png";

const Home = () => {
  return (
    <div
      className="mx-5"
      style={{
        backgroundImage: `url(${bghome})`,
      }}
    >
      <Banner></Banner>
      <CardFakeData></CardFakeData>
      <ServiceFakeData></ServiceFakeData>
      <MakeAppointment></MakeAppointment>
      <ReviewFakeData></ReviewFakeData>
    </div>
  );
};

export default Home;
