import React from 'react';
import AppointmentSection from '../../AppointmentSection/AppointmentSection';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Section from '../Section/Section';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Section></Section>
            <AppointmentSection></AppointmentSection>
        </div>
    );
};

export default Home;