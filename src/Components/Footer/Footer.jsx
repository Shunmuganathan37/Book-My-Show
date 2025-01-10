import React from 'react';
import './Footer.css';

import { GiBarracksTent } from "react-icons/gi";

import cutomer from '../Images/footer1';
import money from '../Images/footer2';
import mail from '../Images/footer3';


const Footer = () => {
  return (
  
    <footer>
        <div className="footer">
            <div className="footer-head">
               <GiBarracksTent className='footer-icon'/><span>List your Show</span> Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow
            <button className='footer-btn'>Contact Today!</button>
            </div>
            <hr />

            <div className="footer-care">
                <div className="footer-row">
                    <div className="footer-col">
                            {/* <img src={cutomer} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer