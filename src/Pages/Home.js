import React from 'react';
//import components
import Header from '../components/Modules/HomePageModules/Header';
import Hero from '../components/Modules/HomePageModules/Hero';

const Home = () => {
    return (
        <section className='home-container'>
            <Header />
            <Hero />
        </section>
    );
};

export default Home;
