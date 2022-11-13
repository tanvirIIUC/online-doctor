import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from './BookingModal';

const AvailableAppointment = ({selectedDate}) => {
    const [Options,setOption]= useState([]);
    const [treatment,setTreatment]= useState(null);

    useState(()=>{
        fetch('appointmentOption.json')
        .then(res => res.json())
        .then(data =>setOption(data))
    },[])
    return (
        <section className='my-28'>
            <p className='text-center text-primary font-bold'>You have selected date : {format(selectedDate, 'PP')}</p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
            {
               Options.map(option =><AppointmentOption
               key={option._id}
               option={option}
               setTreatment={setTreatment}
               ></AppointmentOption>) 
            }
         </div>
          {   treatment &&
             <BookingModal
             selectedDate={selectedDate}
              treatment={treatment}
              setTreatment={setTreatment}
              ></BookingModal>
          }
         
        </section>
    );
};

export default AvailableAppointment;