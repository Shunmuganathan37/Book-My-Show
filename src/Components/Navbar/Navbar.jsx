import React from "react";
import './Navbar.css';

import Logo from '../Images/Book MY Show.png'

import { IoMenu } from "react-icons/io5";

import { Link } from "react-router-dom";



const Navbar = () => {
    return (
        <header>
            <div className="header1">
                <div className="nav-left">
                    <div className="logo">
                      <Link to="/"> <a href=""><img src={Logo} alt="" /></a></Link> 
                    </div>
                    <div>
                    <input className="input-value" type="text" placeholder="Search for Movies,Events,Plays,Sports aand Activities" />
                    </div>
                </div>

                <div className="nav-right">
                    <div className="city">
                        <p>Chennai <span></span></p>
                    </div>
                    <div className="signin">
                       <Link to="/login">
                        <button className="btn">Sign in</button>
                        </Link>
                    </div>

                    <div className="menu-icon">
                    <IoMenu className="react-icon" />
                    </div>

                </div>
            </div>

            <div className="header2">
                       <div className="head-left">
                             <div className="lists">
                                <ul>
                                  <Link to="/Movies" className="links"> <li>Movies</li></Link> 
                                  <Link to="/Movies" className="links"> <li>Stream</li></Link> 
                                  <Link to="/Movies" className="links"> <li>Events</li></Link> 
                                  <Link to="/Movies" className="links"> <li>Plays</li></Link> 
                                  <Link to="/Movies" className="links"> <li>Sports</li></Link> 
                                  <Link to="/Movies" className="links"> <li>Activities</li></Link> 
                                </ul>
                             </div>
                       </div>
                       <div className="head-right">
                       <div className="lists2">
                                <ul>
                                  <Link to="/Movies" className="links"> <li>ListYourShow</li></Link> 
                                  <Link to="/Movies" className="links"> <li>Corporates</li></Link> 
                                  <Link to="/Movies" className="links"> <li>Offers</li></Link> 
                                  <Link to="/Movies" className="links"> <li>Gift Cards</li></Link> 
                               </ul>
                             </div>
                       </div>
            </div>
        </header>
    )
}

export default Navbar;