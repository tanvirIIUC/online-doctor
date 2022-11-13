import React from 'react';
import appointment from '../../../src/assets/images/appointment.png'
import doctor from '../../../src/assets/images/doctor.png'

const AppointmentSection = () => {
    return (
        <div className="hero my-10" style={{ backgroundImage: `url(${appointment})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
                {/* <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div> */}
                <div className="hero  ">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={doctor} className="max-w-lg hidden md:block  -mt-32" />
                        <div>
                            <p>Appointment</p>
                            <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentSection;