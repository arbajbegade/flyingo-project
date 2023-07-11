import "./App.css";
import Booking from "./Components/Booking/Booking";
import Card from "./Components/Cards/Card";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Offer from "./Components/Offer/Offer";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Booking></Booking>
      <Card
        title="Amsterdam"
        img={"./images/amsterdam.jpeg"}
        body="Amsterdam is known for its window brothels, wild nightlife, and coffeeshops selling soft drugs."
      />
      <Offer></Offer>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
