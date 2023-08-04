import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestinationDetails from "./DestinationDetails";
import Explore from "./Explore";

export default function PageRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Explore/>} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
