import React from 'react'
import logo from '../images/footer-logo.png'


const Footer = () => {
    return (
        <>
            <section class="subscribeSec">
                <div class="container">
                    <div class="subscribeBar">
                        <h4><span>subscribe to our</span>newsletter</h4>
                        <form action="" class="subform">
                            <input type="text" class="form-control" placeholder="Enter Your Email Here" />
                            <button class="btnStyle">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </section>
            <footer>
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-md-4">
                            <a href="#" class="logo"><img src={logo} alt="" class="img-fluid" /></a>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div class="col-md-4">
                            <h4>navigation</h4>
                            <ul class="list-unstyled links">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Treatments</a>
                                </li>
                                <li>
                                    <a href="#">Memberships</a>
                                </li>
                                <li>
                                    <a href="#">Ingredients</a>
                                </li>
                                <li>
                                    <a href="#">about us</a>
                                </li>
                                <li>
                                    <a href="#">location</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h4>Contact</h4>
                            <ul class="list-unstyled contInfo">
                                <li><a href="#"><span>Address</span>line here lorem ispum 123-456</a></li>
                                <li><a href="tel:+10298765422"><span>Phone</span>+102 987 654 22</a></li>
                                <li><a href="mailto:Info@MYlVCARE.com"><span>Email</span>Info@MYlVCARE.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row copyRight">
                        <div class="col-md-9">
                            <p>Copyright © 2021 MY lV CARE All Right Reserved.</p>
                        </div>
                        <div class="col-md-3">
                            <ul class="list-unstyled socialIo">
                                <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
