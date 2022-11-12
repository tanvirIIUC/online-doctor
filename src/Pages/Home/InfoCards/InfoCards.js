import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg' 
import phone from '../../../assets/icons/phone.svg' 
import InfoCard from './InfoCard';

const InfoCards = () => {

    const info =[
        {
            id: 1,
            title:'Visit our location',
            descr:'open 9 am to 10 pm everyday',
            icon:clock,
            bgclass:'bg-primary',


        },
        {
            id: 2,
            title:'Opening Hours',
            descr:'open 9 am to 10 pm everyday',
            icon:location,
            bgclass:'bg-neutral',


        },
        {
            id: 3,
            title:'Contact us now',
            descr:'open 9 am to 10 pm everyday',
            icon:phone,
            bgclass:'bg-primary',


        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
            {
                info.map(card=><InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
            
        </div>
    );
};

export default InfoCards;