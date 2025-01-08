import React from "react";
import './Navbar.css';

import Logo from '../Images/Book MY Show.png'

import { IoMenu } from "react-icons/io5";



const Navbar = () => {
    return (
        <header>
            <div className="header1">
                <div className="nav-left">
                    <div className="logo">
                        <a href=""><img src={Logo} alt="" /></a>
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
                        <button className="btn">Sign in</button>
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
                                    <li>Movies</li>
                                    <li>Stream</li>
                                    <li>Events</li>
                                    <li>Plays</li>
                                    <li>Sports</li>
                                    <li>Activities</li>
                                </ul>
                             </div>
                       </div>
                       <div className="head-right">
                       <div className="lists2">
                                <ul>
                                    <li>ListYourShow</li>
                                    <li>Corporates</li>
                                    <li>Offers</li>
                                    <li>Gift Cards</li>
                               </ul>
                             </div>
                       </div>
            </div>
        </header>
    )
}

export default Navbar;