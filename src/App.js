import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components";
import Shop from "./components/Shop";
import Whyus from "./components/Whyus";
import Testimonial from "./components/Testimonial";
import {Login} from "./components/Login";
import Contactus from "./components/Contactus";
import { Item } from "./components/Item";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Login/>}/>
      <Route path="/home"element={<HomePage/>}/>
      <Route path="/shop"element={<Shop/>}/>
      <Route path="/testimonial"element={<Testimonial/>}/>
      <Route path="/whyus"element={<Whyus/>}/>
      <Route path="/contact"element={<Contactus/>}/>
      <Route path="/items/:id"element={<Item/>}/>

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
