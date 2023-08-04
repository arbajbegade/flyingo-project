import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestinationDetails from "./DestinationDetails";

function Explore() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/destination/:id" element={<DestinationDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Explore;
