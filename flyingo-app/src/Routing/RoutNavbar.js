import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from '../Components/Contact/Contact'
import Offer from '../Components/Offer/Offer'
import Nav from './Nav'
import Footer from '../Components/Footer/Footer'
import Cargo from './Cargo/Cargo'
import BookNow from './FastBook/BookNow'
import Explore from './Explore/Explore'
import Carousel from './Explore/Carousel'
import DestinationDetails from './Explore/DestinationDetails'

function RoutNavbar() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Nav/> } >
<<<<<<< Updated upstream
              <Route index element={ <div> 
                <Offer/> 
                <Carousel/> 
                <Contact/> 
                <Footer/> 
                </div> } />
              {/* <Route path='/explore' element={<Explore/>} /> */}
              <Route path="/destination/:id" element={<DestinationDetails />} />
=======
              <Route index element={ <div> <Offer/> <Contact/> <Footer/> </div> } />
              <Route path='/explore' element={<Explore/>} />
>>>>>>> Stashed changes
              <Route path='/cargo' element={<Cargo/>} />
            </Route>
            <Route path='/booknow' element={ <BookNow/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutNavbar