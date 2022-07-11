import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blog from '../Blogs/Blog';
import DentalCare from '../DentalCare/DentalCare';
import HoursLocationContact from '../HoursLocationContact/HoursLocationContact';

import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <HoursLocationContact></HoursLocationContact>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <Blog></Blog>
           <OurDoctors></OurDoctors>
        </div>
    );
};

export default Home;