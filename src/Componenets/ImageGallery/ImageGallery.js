import React from 'react';
import spic from './../../image/2nd.jpg'
import tpic from './../../image/3rd.jpg'
import fpic from './../../image/4th.jpg'
import Fpic from './../../image/5th.jpg'
import sixpic from './../../image/6th.jpg'
import sevenpic from './../../image/7th.jpg'
import eightpic from './../../image/8th.jpg'
import ninepic from './../../image/9th.jpg'
import tenpic from './../../image/10th.jpg'
import elevenpic from './../../image/11th.jpg'
import twelevePic from './../../image/12th.jpg'
import thirteenthpic from './../../image/13th.jpg'
import fourteenPic from './../../image/14th.jpg'
import fifteenthpic from './../../image/15th.jpg'

import Slide from 'react-reveal/Slide';

import './ImageGallery.css'

const ImageGallery = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="text-center">
                    <p style={{ fontSize: '30px' }}>All work, all play</p>
                    <p style={{ fontSize: '30px' }}>Selected projects</p>
                </div>
                <div className="column mt-5">
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={spic} alt="" />
                                <p className="text-center font-weight-bold">Dorsia</p>
                                <p className="text-center">Branding, Product, Marketing</p>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={tpic} alt="" />
                                <p className="text-center font-weight-bold">Reuters News App</p>
                                <p className="text-center">Design, Product</p>
                            </div>
                        </Slide>
                    </div>

                </div>
                <div className="column">
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={fpic} alt="" />
                                <p className="text-center font-weight-bold">ESPN Body Issue</p>
                                <p className="text-center">Branding, Marketing</p>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={Fpic} alt="" />
                                <p className="text-center font-weight-bold">Zero</p>
                                <p className="text-center">Developing, Branding, Product, Marketing</p>
                            </div>
                        </Slide>
                    </div>

                </div>
                <div className="column">
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={sixpic} alt="" />
                                <p className="text-center font-weight-bold">Lonely Planet</p>
                                <p className="text-center">Development, Product</p>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <img className="img-fluid images" src={tenpic} alt="" />
                        <p className="text-center font-weight-bold">Slack</p>
                        <p className="text-center">Marketing</p>
                    </div>

                </div>
                <div className="column">
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={thirteenthpic} alt="" />
                                <p className="text-center font-weight-bold">RedBull TV</p>
                                <p className="text-center">Development, Product</p>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={ninepic} alt="" />
                                <p className="text-center font-weight-bold">Copper</p>
                                <p className="text-center">Design, Branding, Marketing</p>
                            </div>
                        </Slide>
                    </div>

                </div>
                <div className="column">
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={sevenpic} alt="" />
                                <p className="text-center font-weight-bold">DropBox Guide</p>
                                <p className="text-center">Development, Marketing</p>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={elevenpic} alt="" />
                                <p className="text-center font-weight-bold">Google Santa Tracker</p>
                                <p className="text-center">Development, Branding, Product, Marketing</p>
                            </div>
                        </Slide>
                    </div>

                </div>
                <div class="column">
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={twelevePic} alt="" />
                                <p className="text-center font-weight-bold">Verve</p>
                                <p className="text-center">Branding,Development, Product</p>
                            </div>
                        </Slide>
                    </div>
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={eightpic} alt="" />
                                <p className="text-center font-weight-bold">Uber Design</p>
                                <p className="text-center">Development, Marketing</p>
                            </div>
                        </Slide>
                    </div>

                </div>
                <div className="column">
                    <div>
                        <Slide bottom>
                            <div>
                                <img className="img-fluid images" src={fourteenPic} alt="" />
                                <p className="text-center font-weight-bold">Cowboy</p>
                                <p className="text-center">Design, Branding</p>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;