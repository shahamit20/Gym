import React, { use, useEffect, useRef, useState } from 'react';
import { inView, motion, scale, useForceUpdate, useScroll } from 'framer-motion';
import Navber from '../other/Navber';
import Banner from './home/Banner';
import Service from './home/Service';
import Profile from './home/Profile';
import Sport from './home/Sport';
import Calorieshome from './home/Calorieshome';
import Plain from './home/Plain';
import Footer from '../other/Footer';

const Home = () => {

    return (
        <>
            <Navber />
            <Banner />
            <Service />
            <Profile />
            <Sport />
            <Calorieshome />
            <Plain />
            <Footer/>

        </>
    )
}
export default Home;