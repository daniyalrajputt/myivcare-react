import React from "react";
import logo from '../images/logo.png'
// import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav class="navbar navbar-expand-lg">
                            <a class="logo" href="#"><img src={logo} alt="" class="img-fluid" /></a>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.php">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="treatment.php">Treatments</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="membership.php">Memberships</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="ingredients.php">Ingredients</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="about.php">about us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="location.php">location</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact.php">Contact Us</a>
                                    </li>
                                </ul>
                                <div class="difOpt">
                                    {/* <ul>
                                        <li><a href="#"><i class="fa fa-user"></i></a></li>
                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                        <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    </ul> */}
                                    <a href="#" class="btnStyle">Book Now</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
