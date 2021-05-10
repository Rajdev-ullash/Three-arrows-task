import React from 'react';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
import FooterContainer from '../FooterContainer/FooterContainer';
import Header from '../Headar/Header';
import ImageGallery from '../ImageGallery/ImageGallery';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ImageGallery></ImageGallery>
            <FooterContainer></FooterContainer>
            <Footer></Footer>
        </div>
    );
};

export default Home;