import React, { useState, useEffect, useRef } from 'react';
import HeroBanner from "../components/HeroBanner/HeroBanner";
import ResidenceCategory from "../components/ResidenceCategory";
import PopularDestinations from "../components/PopularDestinations";
import OurServices from "../components/OurServices";
import GlobalDestinations from "../components/GlobalDestinations/GlobalDestinations";
import ContactUs from "../components/ContactUs/ContactUs";
function Home(){
    const [isVisible, setIsVisible] = useState(false); // Set initial state to false
    useEffect(() => {
        // Set up fade-in effect
        const fadeInTimeout = setTimeout(() => {
          setIsVisible(true); // Set isVisible to true after 2 seconds
        }, 1500); // Delay of 1 seconds
    });
    return(
        <>
        <HeroBanner />
        <div className={`container-fluid p-0 overflow-hidden float-in ${isVisible ? 'visible' : 'slide-out'}`}>
        <main>
        <ResidenceCategory />
        <PopularDestinations/>
        <GlobalDestinations/>
        <OurServices />
        <ContactUs />
        </main>
        </div>

        </>
    );
}

export default Home;