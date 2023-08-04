import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from '../Components/Contact/Contact'
import Offer from '../Components/Offer/Offer'
import Nav from './Nav'
import Footer from '../Components/Footer/Footer'
import Explore from './Explore/Explore'
import Cargo from './Cargo/Cargo'
import BookNow from './FastBook/BookNow'

function RoutNavbar() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Nav/> } >
              <Route index element={ <div> <Offer/> <Contact/> <Footer/> </div> } />
              
              <Route path='/explore' element={<Explore/>} />
              <Route path='/cargo' element={<Cargo/>} />
            </Route>
            <Route path='/booknow' element={ <BookNow/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutNavbar