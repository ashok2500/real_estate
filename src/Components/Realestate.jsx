import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { AboutUs } from "./AboutUs"
import { ContactUs } from "./ContactUs"
import { Property } from "./Property"

export const Realestate=()=>{
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/property" element={<Property/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
  )
}
