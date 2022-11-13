import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate,setTreatment }) => {

    const { name, slots } = treatment
    const selectedate = format(selectedDate, 'PP')

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        const date= selectedDate;
        const patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // console.log(date,name,email,phone)
        const booking ={
            patient,
            treatment:name,
            email,
            phone,
            appointmentDate : date

        }
        console.log(booking)
        setTreatment(null)
    }

    return (
        <>
            <input type="checkbox" id="Booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-5 mt-10'>
                        <input name='date' type="text" disabled placeholder="Type here" value={selectedate} className="input input-bordered w-full " />

                        <select name='slot' className="select select-bordered w-full ">
                           
                            {
                                slots.map((slot,i)=><option 
                                value={slot} 
                                key={i}
                                >{slot}</option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="name" className="input input-bordered w-full " />
                        <input name='email' type="email" placeholder="email" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="phone" className="input input-bordered w-full " />
                        <input type="submit" value='submit' className="btn btn-primary w-full text-white  " />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;