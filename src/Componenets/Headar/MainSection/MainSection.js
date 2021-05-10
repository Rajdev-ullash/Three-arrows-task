import React from 'react';
import firstImg from './../../../image/1st.jpg';
import './MainSection.css'
import Slide from 'react-reveal/Slide';


const MainSection = () => {
    // const props = { width: 400, height: 250, zoomWidth: 500 };
    return (
        <div className="container mt-5" style={{ height: '600px' }}>
            <div className="row">
                <div className="col-md-6 align-items-center justify-content-between d-flex" >
                    <div >
                        <Slide left>
                            <p style={{ fontSize: '50px' }}>ClearMotion<br /><span style={{ color: '#A8A9B1' }}>It's gonna be a Comfy</span><br /><span style={{ color: '#A8A9B1' }}>ride</span></p>
                            <div className="mt-5">
                                <div className="btn buttons"><span>More Projects</span></div>
                            </div>
                        </Slide>
                    </div>

                </div>
                <div className="col-md-6 mt-3">
                    {/* <Slide right> */}
                        <img className="img-fluid mb-3 images" src={firstImg} alt="imag" style={{ width: "1000px", backgroundSize: "cover", }} />
                    {/* </Slide> */}
                </div>
            </div>
        </div>

    );
};

export default MainSection;