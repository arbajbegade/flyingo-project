import './App.css';
import Booking from './Components/Booking/Booking';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Offer from './Components/Offer/Offer';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Booking></Booking>
      <Offer></Offer>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default App;
