import logo from './logo.svg';
import './App.css';

// bootstrap css
// import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './Components/Navbar/Navbar';
import Rec_Movies from './Components/Rec-Movies/Rec_Movies';
import Live_Events from './Components/Live_Events/Live_Events';
import Premiere from './Components/Premiere/Premiere';
import Music from './Components/Music/Music';
import Login from './Components/Login/Login';
import Banner from './Components/Banner/Banner';
import { Route, Router, Routes } from 'react-router-dom';
import Movie_Info from './Components/Movie_Info/Movie_Info';
import Booking from './Components/Booking/Booking';
import Footer from './Components/Footer/Footer';



function App() {
  return (

    <>
      {/* <Banner/> */}
      <Navbar />
    
      <Routes>
        <Route path='/' element={
          <>
            <Rec_Movies />
            <Live_Events />
            <Premiere />
            <Music />
            
          </> 
        } />
        <Route path='/login' element ={<Login/>} />
        <Route path='/Movies' element ={<Rec_Movies/>} />
        <Route path="/movies/:movieId" element={<Movie_Info />} />
        <Route path="/movie/:movieId/booking" element={<Booking/>} />
        

      </Routes>
      <Footer/>
        {/* <SeatSelector/> */}
    </>

  );
}

export default App;
