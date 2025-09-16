
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer";
import Courses from "./components/Courses/Courses";
import Practice from "./components/Practice/Practice";
import Community from "./components/Community/Community";
import Placements from "./components/Placements/Placements";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path = "/" element = {<Home/>} />
            <Route path="courses" element={<Courses />} /> 
            <Route path="/courses" element={<Courses />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/community" element={<Community />} />
            <Route path="/placements" element={<Placements />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
