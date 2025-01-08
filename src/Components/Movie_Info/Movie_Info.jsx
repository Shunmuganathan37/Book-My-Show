import React from 'react';
import './Movie_Info.css'
import Navbar from '../Navbar/Navbar';

import Background from '../Images/mufasa-banner';
import mufasa from '../Images/rec-movie2.avif';

const Movie_Info = () => {
  return (
    <>

      <Navbar />

      <div className="mufasa-con">

        <div className="mufasa-back">
          <img src={Background} alt="" width={"100%"} height={"450px"} />

        </div>
        <div className="mufasa-front">
          <div className="mufasa-row">

            <div className="mufas-col">
              <img src={mufasa} alt="" />
            </div>

            <div className="mufasa-col">
             
             
            </div>

            <div className="mufasa-col">
             
             
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Movie_Info;