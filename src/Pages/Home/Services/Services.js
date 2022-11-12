import React from 'react';
import teeth from '../../../assets/images/fluoride.png'
import teeth1 from '../../../assets/images/cavity.png'
import teeth2 from '../../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className='text-center my-32'>
            <h1 className='text-primary text-xl font-bold'>OUR SERVICES</h1>
            <h2 className=' text-2xl'>Fluoride Treatment</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={teeth} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Cavity Filling</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                   
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={teeth1} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Teeth Whitening</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={teeth2} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                   
                </div>
            </div>

        </div>
        </div>
        
    );
};

export default Services;