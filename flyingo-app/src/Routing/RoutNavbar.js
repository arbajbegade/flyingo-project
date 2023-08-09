import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Contact from '../Components/Contact/Contact'
import Offer from '../Components/Offer/Offer'
import Nav from './Nav'
import Footer from '../Components/Footer/Footer'
import Cargo from './Cargo/Cargo'
import BookNow from './FastBook/BookNow'
import FeedbackPage from '../Components/FeedBackAndReview/FeedbackPage'
import OfferDetails from '../Components/Offer/OfferDetails'
import Help from '../Components/Help/Help'

function RoutNavbar() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Nav/> } >
              <Route index element={ <div> <Offer/> <FeedbackPage/> <Footer/> </div> } />
              <Route path="/offer/:id" element={<OfferDetails />} />
              <Route path='/cargo' element={<Cargo/>} />
            </Route>
            <Route path='/booknow' element={ <BookNow/> } />
            <Route path='/contact' element={ <Contact/> } />
            <Route path='/help' element={ <Help/> } />
        </Routes>
    </BrowserRouter>
  )
}

export default RoutNavbar