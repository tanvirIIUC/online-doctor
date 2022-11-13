import React from 'react';
import bannerimg from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div
        style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        } }
        className="hero ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerimg} className="lg:w-1/2 rounded-lg shadow-2xl" alt='/' />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn  text-white bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;