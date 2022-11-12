import React from 'react';

const InfoCard = ({ card }) => {
    const { title, descr, bgclass, icon } = card
    return (
        <div className={`card card-side ${bgclass} shadow-xl text-white p-6`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{descr}</p>
                
            </div>
        </div>
    );
};

export default InfoCard;