import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, selectedDate,setTreatment,refetch }) => {
    const {user} = useContext(AuthContext)

    const { name, slots } = treatment
    const selectedate = format(selectedDate, 'PP')

    const handleSubmit = event =>{
        event.preventDefault()
        const form = event.target;
        
        const patient = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        // console.log(date,name,email,phone)
        const booking ={
            patient,
            treatment:name,
            email,
            phone,
            slot,
            appointmentDate : selectedate

        }

        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body : JSON.stringify(booking)

        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged){
                setTreatment(null)
                alert('booking successfull')
                refetch();
            }
            else {
                alert(`${data.message}`)
            }
            
        })

        
        
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

                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="name" className="input input-bordered w-full " />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="email" className="input input-bordered w-full " />
                        <input name='phone' type="text" placeholder="phone" className="input input-bordered w-full " />
                        <input type="submit" value='submit' className="btn btn-primary w-full text-white  " />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;