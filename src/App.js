import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
 
import ProfilePage from "./components/Profile/ProfilePage";
// Split view
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Courses from "./components/Courses/Courses";
import Practice from "./components/Practice/Practice";
import Community from "./components/Community/Community";
import Placements from "./components/Placements/Placements";
import SubtopicPage from "./SubtopicsPage/SubtopicPage";
import Codeplayground from "./CodePlayground";

function App() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Navbar />}
        <main>
          <Routes>
            {/* Public routes */}
            <Route
              path="/login"
              element={!isAuthenticated ? <Login /> : <Navigate to="/home" replace />}
            />
            <Route
              path="/register"
              element={!isAuthenticated ? <Register /> : <Navigate to="/home" replace />}
            />

            {/* Protected routes */}
            <Route
              path="/"
              element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}
            />
            <Route
              path="/home"
              element={isAuthenticated ? <Home /> : <Navigate to="/login" replace />}
            />
            {/* Profile split view */}
            <Route
              path="/profile"
              element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/courses"
              element={isAuthenticated ? <Courses /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/practice"
              element={isAuthenticated ? <Practice /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/community"
              element={isAuthenticated ? <Community /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/placements"
              element={isAuthenticated ? <Placements /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/subtopics/:subtopicName"
              element={isAuthenticated ? <SubtopicPage /> : <Navigate to="/login" replace />}
            />
            <Route
              path="/code_playground"
              element={isAuthenticated ? <Codeplayground /> : <Navigate to="/login" replace />}
            />

            {/* Catch-all route */}
            <Route
              path="*"
              element={<Navigate to={isAuthenticated ? "/home" : "/login"} replace />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
