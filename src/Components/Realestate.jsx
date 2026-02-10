import { Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { AboutUs } from "./AboutUs"
import { ContactUs } from "./ContactUs"
import { Property } from "./Property"

export const Realestate=()=>{
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
<Route path="/properties" element={<Property role={role} />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />

    </Routes>
  )
}
