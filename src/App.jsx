import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Login from "./Components/Login"
import { Navbar } from "./Components/Navbar"
import { Property } from "./Components/Property"
import { Home } from "./Components/Home"
import { About } from "./Components/AboutUs"
import { Contact } from "./Components/ContactUs"

function App() {

  const [role, setRole] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const handleLogout = () => {
    setLoggedIn(false)
    setRole("")
  }

  return (
    <BrowserRouter>
      {loggedIn && <Navbar role={role} onLogout={handleLogout} />}

      <Routes>
        {!loggedIn ? (
          <Route path="*" element={<Login setRole={setRole} setLoggedIn={setLoggedIn} />} />
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/properties" element={<Property role={role} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* default redirect */}
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
