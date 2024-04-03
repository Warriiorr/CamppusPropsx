import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile"
import Search from "./pages/Search"
import Favorites from "./pages/Favorites"
import SignUp from "./pages/SignUp";
import Booked from "./pages/Booked";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import BottomTabNav from "./components/BottomTabNav";
import SideBar from "./components/SideBar";
import FAQs from "./pages/FAQs";
import { Stack } from "@mui/material";

// import React from 'react'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Stack direction={"row"} justifyContent={"space-between"}>
    <SideBar />
        <div style={{ flex: 4 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/booked" element={<Booked />} />
      </Routes>
      </div>    
      </Stack>
      <BottomTabNav />
    </BrowserRouter>  )
}

export default App;

