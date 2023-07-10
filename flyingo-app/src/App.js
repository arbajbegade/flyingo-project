import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Offer from './Components/Offer/Offer';

function App() {
  return (
    <div className="bg-blue-200">
      <Navbar></Navbar>
      <Offer></Offer>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  );
}

export default App;
