import React from 'react';
import img from '../../../assets/images/treatment.png'
const Section = () => {
    return (
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="md:w-1/3 rounded-lg shadow-2xl m-10" alt='' />
                <div className='lg:w-1/2 m-10'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Section;