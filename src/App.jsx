import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './Components/Welcome.jsx'
import NavBar from './Components/NavBar/NavBar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Home from './Components/Home/Home.jsx'
import Who from './Components/Foundation/Who.jsx'
import History from './Components/Foundation/History.jsx'
import Volunteers from './Components/Foundation/Volunteers.jsx'
import Garden from './Components/Foundation/Garden.jsx'
import Administration from './Components/Foundation/Administration.jsx'
import Institutional from './Components/School/Institutional.jsx'
import Offer from './Components/School/Offer.jsx'
import Teachers from './Components/School/Teachers.jsx'
import Registration from './Components/School/Registration.jsx'
import RedesButton from './Components/Home/RedesButton.jsx'
import Honey from './Components/Products/Honey.jsx'
import Energies from './Components/Products/Energies.jsx'
import ScrollToTop from './Components/ScrollToTop.jsx'


function App() {
  

  return (
    <>
    <ScrollToTop/>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/home" element={<Home />} />
      <Route path="/who" element={<Who/>} />
      <Route path="/history" element={<History/>} />
      <Route path="/volunteers" element={<Volunteers/>} />
      <Route path="/garden" element={<Garden/>} />
      <Route path="/administration" element={<Administration/>}/>


      <Route path="/institutional" element={<Institutional/>} />
      <Route path="/offer" element={<Offer/>} />
      <Route path="/teachers" element={<Teachers/>} />
      <Route path="/registration" element={<Registration/>} />


      <Route path="/honey" element={<Honey/>} />
      <Route path="/energies" element={<Energies/>} />




    </Routes>
    <RedesButton/>
    <Footer/>
    </>
  )
}

export default App
