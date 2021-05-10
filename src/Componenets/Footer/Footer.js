import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <p className="font-weight-bold">Ueno.</p>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-md-end">
                        <div>
                            <a style={{textDecoration:'none', color:'black'}} href="/">Privacy</a>
                        </div>
                        <div>
                            <Link to="/"><i className="fab fa-dribbble ms-4"></i></Link>
                            <Link to="/"><i className="fab fa-twitter ms-4"></i></Link>
                            <Link to="/"><i className="fab fa-github ms-4"></i></Link>
                            <Link to="/"><i className="fab fa-instagram ms-4"></i></Link>
                            <Link to="/"><i className="fab fa-facebook-f ms-4"></i></Link>
                            <Link to="/"><i className="fab fa-linkedin-in ms-4"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;