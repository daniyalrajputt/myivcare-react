import React from "react";
// import { NavLink } from "react-router-dom";
import ban1 from '../images/ban1.png'
import heart from '../images/heart.png'
import hands from '../images/hands.png'
import microScope from '../images/micro-scope.png'
import sugarTest from '../images/sugar-test.png'
import aboutBg from '../images/abtBg.jpg'
import abtImg from '../images/img4.jpg'
import treatImg1 from '../images/img5.jpg'
import treatImg2 from '../images/img6.jpg'
import treatImg3 from '../images/img7.jpg'
import treatImg4 from '../images/img8.jpg'
import treatImg5 from '../images/img9.jpg'
import treatImg6 from '../images/img10.jpg'
import treatImg7 from '../images/ban1.png'


const Home = () => {
    return (
        <div>
            <div class="main-slider">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="img-fluid" src={ban1} alt="" />
                    </div>
                </div>
                <figure class="anim heart"><img src={heart} alt="" /></figure>
                <figure class="anim hands"><img src={hands} alt="" /></figure>
                <figure class="anim microScope"><img src={microScope} alt="" /></figure>
                <figure class="anim sugar"><img src={sugarTest} alt="" /></figure>
                <a href="#" class="proFinder">Discover the Product</a>
                <a href="#about" class="goDown"><i class="fa fa-angle-down"></i></a>
            </div>
            <section class="aboutSec" id="about">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <img src={aboutBg} alt="" class="img-fluid w-100" />
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <h2><span>About us</span>We bring IV therapy <br />& Covid-19 testing to you.</h2>
                            <p class="text-uppercase">In addition, you can also choose to receive treatments & testing at our clinic. </p>
                            <p>IVCleanse is an IV therapy company that brings IV treatments directly to you at the comfort of your preferred location. We also offer at-home Covid-19 testing for individuals and families, as well as onsite testing for businesses & corporations. All treatments are administered by licensed medical professional.</p>
                            <p>Wellness starts with a body that is in balance. Our proprietary IV infusion blends are full of <br /> essential fluids, electrolytes, vitamins, and antioxidants designed to promote whole-body <br /> health.</p>
                            <h4>The treatment are designed to: </h4>
                            <ul>
                                <li><span> Increase Energy</span></li>
                                <li><span>Boost Immunity</span></li>
                                <li><span>Cleanse & Detox</span></li>
                                <li><span>Provide Instant Hydration</span></li>
                                <li><span>Feel Immediate Results</span></li>
                            </ul>
                            <a href="about.php" class="linkStyle">Show more</a>

                        </div>
                        <div class="col-lg-6">
                            <figure class="dripMen"><img src={abtImg} class="img-fluid" alt="img" /></figure>
                        </div>
                    </div>
                </div>
            </section>
            <section class="treatmentSec">
                <h2 class="shadowText">Treatments</h2>
                <div class="secTitle">
                    <h4>Treatments</h4>
                </div>
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-6">
                            <h3><span>01</span>Sparkle</h3>
                            <p>The best way to flush out toxins from the body, decrease hangovers and increase immunity. Packed with essential vitamins, electrolytes and anti-nausea, anti-inflammatory and anti-pain meds (non-opioid) this bag will help find the body’s balance and help regain strength immediately</p>
                            <p>Second 1000 mL saline bag included for ultimate hydration. </p>
                            <a href="#" class="linkStyle">Shop Now</a>
                        </div>
                        <div class="col-lg-6">
                            <figure class="imgRight"><img src={treatImg1} alt="" class="img-fluid" /></figure>
                        </div>
                    </div>
                    <div class="row align-items-center flex-row-reverse my-5">
                        <div class="col-lg-6">
                            <h3><span>02</span>Detoxify </h3>
                            <strong>( Deep hydration `+ Cleanse+ Get rid of a hangover) </strong>
                            <p>The best way to flush out toxins from the body, decrease hangovers and increase immunity. Packed with essential vitamins, electrolytes and anti-nausea, anti-inflammatory and anti-pain meds (non-opioid) this bag will help find the body’s balance and help regain strength immediately. </p>
                            <p>Second 1000 mL saline bag included for ultimate hydration.</p>
                            <a href="#" class="linkStyle">Shop Now</a>
                        </div>
                        <div class="col-lg-6">
                            <figure class="imgLeft"><img src={treatImg2} alt="" class="img-fluid" /></figure>
                        </div>
                    </div>
                    <div class="row align-items-center my-5">
                        <div class="col-lg-6">
                            <h3><span>03</span>Metabolizer</h3>
                            <p>( weight loss + increases metabolism + burn stubborn fat) Idea for managing weight. Comes with our "Slim" booster shot to promote metabolism and burn stubborn fat.</p>
                            <a href="#" class="linkStyle">Shop Now</a>
                        </div>
                        <div class="col-lg-6">
                            <figure class="imgRight"><img src={treatImg3} alt="" class="img-fluid" /></figure>
                        </div>
                    </div>
                    <div class="row align-items-center flex-row-reverse my-5">
                        <div class="col-lg-6">
                            <h3><span>04</span>Immune booster</h3>
                            <strong>(Get rid of those lingering cold symptoms) </strong>
                            <p> (Immunity booster) Perfect for fighting off that cold lurking around the corner, preparing yourself for that long-haul flight next week or lifting general fatigue</p>
                            <a href="#" class="linkStyle">Shop Now</a>
                        </div>
                        <div class="col-lg-6">
                            <figure class="imgLeft"><img src={treatImg4} alt="" class="img-fluid" /></figure>
                        </div>
                    </div>
                    <div class="row align-items-center my-5">
                        <div class="col-lg-6">
                            <h3><span>05</span>Hydrate </h3>
                            <p>(Normal Saline) Receive an infusion of hydrating fluids that restore the body to its optimal levels. </p>
                            <a href="#" class="linkStyle">Shop Now</a>
                        </div>
                        <div class="col-lg-6">
                            <figure class="imgLeft"><img src={treatImg5} alt="" class="img-fluid" /></figure>
                        </div>
                    </div>
                </div>
                <h2 class="shadowText botm">Treatments</h2>
            </section>
            <section class="dripSec">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-4"><img src={treatImg6} alt="" class="img-fluid" /></div>
                        <div class="col-md-4 text-center">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
                            <a href="#" class="btnStyle">Book Now</a>
                        </div>
                        <div class="col-md-4"><img src={treatImg7} alt="" class="img-fluid drip" /></div>
                    </div>
                </div>
            </section>
            <section class="pkgSec">
                <div class="secTitle">
                    <h4>Memberships</h4>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="pkg">
                                <h2>SILVER</h2>
                                <strong class="price">$349 <small>per month</small></strong>
                                <p class="mb-5"><strong>max 3 visits per month</strong></p>
                                <p>Includes only the Hydrate treatment bag (max 3 visits per month). Members with this package can request our special pricing on any of the other IV therapy treatments for discounted rate. </p>
                                <a href="#" class="btnStyle">Get Membership</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pkg">
                                <h2>GOLD</h2>
                                <strong class="price">$499 <small>per month</small></strong>
                                <p class="mb-5"><strong>max 3 visits per month</strong></p>
                                <p>Includes any IV therapy treatments offered <br />(max 3 visits per month).</p>
                                <a href="#" class="btnStyle">Get Membership</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="pkg">
                                <h2>PLATINUM <small>VIP</small></h2>
                                <strong class="price">$799 <small>per month</small></strong>
                                <p class="mb-5"><strong>max 3 visits per month</strong></p>
                                <p>Includes any of the IV therapy treatments offered <br />(max 4 visits per month).</p>
                                <a href="#" class="btnStyle">Get Membership</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
