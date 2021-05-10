import React from 'react';
import MainSection from './MainSection/MainSection';
import Navbar from './Navbar/Navbar';
import SecondSection from './SecondSection/SecondSection';

const Header = () => {
    return (
        <div style={{backgroundColor:'#FAFAFA'}}>
           <Navbar></Navbar>
           <MainSection></MainSection>
           <SecondSection></SecondSection>
        </div>
    );
};

export default Header;