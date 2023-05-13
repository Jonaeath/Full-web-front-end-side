import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOption from "./AppointmentOption";
import BookingModal from "./BookingModal";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Shared/Loading/Loading";

const AppointmentAvailable = ({selected}) => {
 
  // const [appointOption, setAppointOption] = useState([]);
  const [treatment,SetTreatment] = useState(null);
  const date = format(selected, 'PP');
 
  const {data:appointOption = [], refetch, isLoading} = useQuery({
    queryKey:['appointOption',date],
    queryFn:() => fetch(`http://localhost:5000/appointmentOption?date=${date}`)
      .then(res => res.json())
    
  }) 

  if(isLoading){
    return <Loading></Loading>
  }

  // // useEffect( ()=> {
  // //     fetch('http://localhost:5000/appointmentOption')
  // //     .then(res => res.json())
  // //     .then(data => setAppointOption(data) )

  // },[])

  return (
    <div>
      <p className="text-center text-2xl text-secondary mt-6 font-bold">You Have Available Time: <span className="text-black">{format(selected, 'PP')}</span> </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          appointOption?.map(option =><AppointmentOption
          key = {option._id}
          option = {option}
          SetTreatment = {SetTreatment}
          ></AppointmentOption>)
        }
      </div>
      { 
        treatment &&
        <BookingModal
        selected = {selected}
        treatment = {treatment}
        SetTreatment = {SetTreatment}
        refetch = {refetch}
        ></BookingModal>
      }
    </div>
  );
};

export default AppointmentAvailable;
