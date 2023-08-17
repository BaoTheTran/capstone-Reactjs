import React, { Component } from 'react';
import {Outlet} from "react-router-dom";
import Footer from './_components/Footer';
import NavBar from './_components/Navbar';
import Contact from './_components/Contact';

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <Contact/>
        <NavBar/>
        {/* dinh tuyen vao cac component con. */}
        <Outlet/>
        
        <Footer/>
      </div>
    )
  }
}
