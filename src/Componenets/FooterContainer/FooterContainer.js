import React from 'react';
import { Link } from 'react-router-dom';

const FooterContainer = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h3>Got a project?</h3>
                    <h3 style={{ color: '#A8A9B1' }}>Let's Talk</h3>
                    <div className="btn mt-3 buttons"><span>Tell us everything</span></div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-2 m-md-5">
                            <Link to="/"><div className="btn">Home</div></Link>
                            <Link to="/"><div className="btn">About</div></Link>
                            <Link to="/"><div className="btn">News</div></Link>
                            <Link to="/"><div className="btn">Contact</div></Link>
                            <Link to="/"><div className="btn">Careers</div></Link>
                            <Link to="/"><div className="btn">Press</div></Link>
                        </div>
                        <div className="col-md-2 m-md-5">
                            <Link to="/"><div className="btn">San Francisco</div></Link>
                            <Link to="/"><div className="btn">New York</div></Link>
                            <Link to="/"><div className="btn">Los Angeles</div></Link>
                            <Link to="/"><div className="btn">Reykjavik</div></Link>
                        </div>
                        <div className="col-md-2 m-md-5">
                            <Link to="/"><div className="btn">Newsletter</div></Link>
                            <Link to="/"><div className="btn">Blog</div></Link>
                            <Link to="/"><div className="btn">Bueno.com</div></Link>
                            <Link to="/"><div className="btn">Ueno.design</div></Link>
                            <Link to="/"><div className="btn">Ueno.store</div></Link>
                            <Link to="/"><div className="btn">Ueno.events</div></Link>
                            <Link to="/"><div className="btn">Ueno.land</div></Link>
                            <Link to="/"><div className="btn">Playground</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterContainer;