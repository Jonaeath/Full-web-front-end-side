import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContexts } from "../../../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, selected, SetTreatment,refetch}) => {
  const { name:treatmentName,slots } = treatment;
  const date = format(selected, "PP");
  const {user} = useContext(AuthContexts);

const handelAppointment = event => {
  event.preventDefault();
  const form = event.target;
  const slot = form.slot.value;
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;

const booking = {
  appointmentDate: date, 
  treatment: treatmentName, 
  patient:name, 
  slot,
  email,
  phone,
}

fetch('http://localhost:5000/bookings',{
  method: 'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(booking)
})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  if (data.acknowledged){
  SetTreatment(null);
  toast.success('Your Booking is Confirmed')
  refetch();
  }
  else{
    toast.error(data.message);
  }
})

}

  return (
    <>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          
          <form onSubmit={handelAppointment} className="grid gap-5">
            <input
              type="text"
              disabled
              value={date}
              className ="input input-bordered input-primary w-full"
            />
            <select name = 'slot' className="select input-bordered input-primary w-full">
            
              {
                slots.map((slot,i)=><option 
                key = {i}
                value={slot}>
                  {slot}
                </option>)
              }
            
            </select>
            <input
              name = "name"
              type="text"
              defaultValue={user?.displayName}
              placeholder="Your Name"
              className="input input-bordered input-primary w-full"
            />
            <input
              name = 'email'
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Your Email"
              className="input input-bordered input-primary w-full"
            />
            <input
              name='phone'
              type="text"
              placeholder="Your Phone Number"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-accent w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
