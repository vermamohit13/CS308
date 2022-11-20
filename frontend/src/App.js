import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Feature from './components/Feature';
import Contact from './components/Contact';
import Login from "./components/Login";
import Register from "./components/Register";
import SetAvatar  from "./components/SetAvatar";
import Chat from "./components/Chat";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Chat />} />
          <Route path="/about" element={<About />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
          <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
