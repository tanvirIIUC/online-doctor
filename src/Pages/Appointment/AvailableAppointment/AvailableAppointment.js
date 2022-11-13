import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {
    const [Options,SetOption]= useState([]);
    useState(()=>{
        fetch('appointmentOption.json')
        .then(res => res.json())
        .then(data =>SetOption(data))
    },[])
    return (
        <section className='my-28'>
            <p className='text-center text-primary font-bold'>You have selected date : {format(selectedDate, 'PP')}</p>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
            {
               Options.map(option =><AppointmentOption
               key={option._id}
               option={option}
               ></AppointmentOption>) 
            }
         </div>
        </section>
    );
};

export default AvailableAppointment;