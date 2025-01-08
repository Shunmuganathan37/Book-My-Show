import React from 'react';
import './Premiere.css';

import Pre_Banner from '../Images/premiere-banner.avif';
import pre_Movie1 from '../Images/premire1.avif';
import pre_Movie2 from '../Images/premire2.avif';
import pre_Movie3 from '../Images/premire3.avif';




const Premiere = () => {
    return (

        <main>
            <div className="premiere">
                <img src={Pre_Banner} alt="" width='100%' />

                <div className="pre-container">
                    <h2>Premieres</h2>
                    <p>Brand new releases every <span>Friday</span></p>

                    <div className="pre-row">
                        <a href="">
                            <div className="pre-col">
                                <img src={pre_Movie1} alt="" />
                                <p className="pre-title">Wicked</p>
                                <span>English</span>

                            </div>
                        </a>

                        <a href="">
                            <div className="pre-col">
                                <img src={pre_Movie2} alt="" />

                                <p className="pre-title">Gladiator II</p>
                                <span>English</span>

                            </div>
                        </a>

                        <a href="">
                            <div className="pre-col">
                                <img src={pre_Movie3} alt="" />
                                <p className="pre-title">Christmas Eve in Miller's Point</p>
                                <span>English</span>

                            </div>
                        </a>

                    </div>

                </div>
            </div>
        </main>
    )
}

export default Premiere;