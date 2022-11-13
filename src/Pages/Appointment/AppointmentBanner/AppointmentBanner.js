import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';



const AppointmentBanner = ({selectedDate,setSelectedDate}) => {
    
    return (
        <header>
            <div className="hero my-12">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img src={chair} alt='' className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-12 rounded-lg shadow-2xl p-5'>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            
                        />
                       
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;