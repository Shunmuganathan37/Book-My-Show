import React from 'react';
import './Live_Events.css';

// import images

import Live1 from '../Images/live-events1.avif';
import Live2 from '../Images/live-events2.avif';
import Live3 from '../Images/live-events3.avif';
import Live4 from '../Images/live-events4.avif';
import Live5 from '../Images/live-events5.avif';



const Live_Events = () => {
    return (
        <main>
            <div className="live-events">
                <span className="head">The Best Of Live Events</span>

                <div className="best-events">
                    <div className="row">
                        <a href=""> <div className="col">
                            <img className='image' src={Live1} alt="" />

                        </div>
                        </a>


                      <a href="">
                      <div className="col">
                        <img className='image' src={Live2} alt="" />
                            
                        </div>
                      </a>

                        
                      <a href="">
                      <div className="col">
                        <img  className='image' src={Live3} alt="" />
                            
                        </div>
                      </a>


                      <a href="">
                      <div className="col">
                        <img className='image' src={Live4} alt="" />
                            
                        </div>
                      </a>

                      <a href="">
                      <div className="col">
                        <img className='image' src={Live5} alt="" />
                            
                        </div>
                      </a>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Live_Events;