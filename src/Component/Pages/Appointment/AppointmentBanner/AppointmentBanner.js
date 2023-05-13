import chair from '../../../../assets/images/chair.png';
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selected,setSelected}) => {
  return (
    
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div>
          <img
            src={chair}
            className="max-w-sm rounded-lg shadow-2xl" alt = ''
          />
          </div>
          <div className='mx-20'>
            <DayPicker
             mode="single"
             selected={selected}
             onSelect={setSelected}
            />
          </div>
        </div>
      </div>
  );
};

export default AppointmentBanner;
