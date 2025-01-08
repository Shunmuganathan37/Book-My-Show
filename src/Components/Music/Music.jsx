import React from 'react';
import './Music.css';

// import images 

import Music1 from '../Images/music1.avif';
import Music2 from '../Images/music2.avif';
import Music3 from '../Images/music3.avif';
import Music4 from '../Images/music4.avif';
import Music5 from '../Images/music5.avif';


const Music = () => {
  return (
    <div className="container">
      <div className="topic">
          <div className='topic-left'>
          <h1 className="heading">Your  <span>Studio</span> Music</h1>
          </div>
          <div className="topic-right">
              <span> See All  </span>
          </div>
      </div>

      <div className="posts">
        <div className="row">
          <a href="">
          <div className="col">
            <img className='photo' src={Music1} alt="" />
            <h1 className="title">Ed Sheeran: +-=÷x India Tour 2025 in <br /> CHENNAI
           </h1>
            <p className="Movie-type">YMCA Grounds : Chennai  Concerts</p>
          </div>
          </a>
          
          <a href="">
          <div className="col">
            <img className='photo' src={Music2} alt="" />
            <h1 className="title"> SAARANG'25 POPULAR NIGHT</h1>
            <p className="Movie-type">IIT Madras Open Air Theater : CHENNAI   Music Festivals </p>
          </div>
          </a>

          <a href="">
          <div className="col">
            <img className='photo' src={Music3} alt="" />
            <h1 className="title">SAARANG'25 - EDM NIGHT</h1>
            <p className="Movie-type">IIT Madras Open Air Theater : CHENNAI   concerts </p>
          </div>
          </a>

          <a href="">
          <div className="col">
            <img className='photo' src={Music4} alt="" />
            <h1 className="title">SPB CLASSICS by SPB CHARAN <br />& PRIYANKA</h1>
            <p className="Movie-type"> Kamarajar Arangam : Chennai  Concerts</p>
          </div>
          </a>

          <a href="">
          <div className="col">
            <img className='photo' src={Music5} alt="" />
            <h1 className="title"> TIMELESS-Melodies of a lifetime- <br /> K.S Chithra Live</h1>
            <p className="Movie-type">YMCA Grounds : Chennai  Concerts</p>
          </div>
          </a>

          
        </div>
      </div>
 


    </div>
  )
}

export default Music;