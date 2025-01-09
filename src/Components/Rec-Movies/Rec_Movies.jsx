import React from 'react';
import './Rec_Movies.css';

// import images 

import Viduthalai from '../Images/rec-movie1.avif';
import Mufasa from '../Images/rec-movie2.avif';
import Marco from '../Images/rec-movie3.avif';
import Identity from '../Images/rec-movie4.avif';
import Pushpa from '../Images/rec-movie5.avif';

// banner image
import Banner from '../Images/banner book my show stream.avif';

import { Link } from 'react-router-dom';

const Rec_Movies = () => {
  return (
    <div className="container">
      <div className="topic">
          <div className='topic-left'>
          <h1 className="heading">Recommended <span>Movies</span></h1>
          </div>
          <div className="topic-right">
              <span> See All  </span>
          </div>
      </div>

      <div className="posts">
        <div className="row">
          <Link to="/Movies/viduthalai">
          <div className="col">
            <img className='photo' src={Viduthalai} alt="" />
            <h1 className="title">Viduthalai Part-2</h1>
            <p className="Movie-type">Action/Crime/Drama</p>
          </div>
          </Link>
          
          <Link to="/Movies/mufasa">
          <div className="col">
            <img className='photo' src={Mufasa} alt="" />
            <h1 className="title"> Mufasa : The Lion King</h1>
            <p className="Movie-type">Adventure/Animation/Drama</p>
          </div>
          </Link>

          <Link to="/Movies/marco">
          <div className="col">
            <img className='photo' src={Marco} alt="" />
            <h1 className="title">Marco</h1>
            <p className="Movie-type">Action/Thriller</p>
          </div>
          </Link>

          <Link to="/Movies/identity">
          <div className="col">
            <img className='photo' src={Identity} alt="" />
            <h1 className="title">Identity</h1>
            <p className="Movie-type"> Action/Crime/Thriller</p>
          </div>
          </Link>

          <Link to="/Movies/pushpa-2">
          <div className="col">
            <img className='photo' src={Pushpa} alt="" />
            <h1 className="title"> Pushpa 2: The Rule</h1>
            <p className="Movie-type">Action/Thriller</p>
          </div>
          </Link>

          
        </div>
      </div>
 
<div className="banner">
         <img src={Banner} alt="" />
</div>



    </div>
  )
}

export default Rec_Movies;