import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Home from "../Containers/Home";
// import Navbar from "../Components/Navbar/Navbar";
// import Contact from "../containers/contact";
// import Services from "../containers/services";
// import Home from "../containers/home";

export default function Routes() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          {/* <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/services">
            <Services />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
