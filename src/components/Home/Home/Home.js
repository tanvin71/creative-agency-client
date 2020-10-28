import React from 'react';
import Carousel from '../Carousel/Carousel';
import Companies from '../Companies/Companies';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Companies></Companies>
            <Services></Services>
            <Carousel></Carousel>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;