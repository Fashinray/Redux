import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Service from "../pages/service"
import AboutUs from "../pages/aboutus"


function Navigation() {
     return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="service" element={<Service />}/>
            <Route path="about-us" element={<AboutUs />}/>
        </Routes>
    )
}

export default Navigation