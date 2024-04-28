// app.js
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppAppBar from './components/AppAppBar';
import LandingPage from './components/LandingPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp.js';
import GetStarted from './components/Getstarted';
import Pricing from './components/Pricing';
import Analytics from './components/Analytics';
import Blog from './components/Blog';
import ProtectedRoute from './components/ProtectedRoute';
import ContactForm from './components/ContactForm';

export const AppContext = createContext(null);

function App() {
  const [user, setUser] = useState(null); // Manage user state

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Router>
        <AppAppBar /> {/* Display the AppBar on all tabs */}
        <Routes>
          <Route path="/" element={user ? <LandingPage /> : <Navigate to="/signin" replace />} />
          <Route path="/signin" element={user ? <Navigate to="/" replace /> : <SignIn setUser={setUser} />} />
          <Route path="/signup" element={user ? <Navigate to="/" replace /> : <SignUp setUser={setUser} />} />
          <Route path="/get-started" element={<ProtectedRoute user={user}><GetStarted /></ProtectedRoute>} />
          <Route path="/pricing" element={<ProtectedRoute user={user}><Pricing /></ProtectedRoute>} />
          <Route path="/analytics" element={<ProtectedRoute user={user}><Analytics /></ProtectedRoute>} />
          <Route path="/blog" element={<ProtectedRoute user={user}><Blog /></ProtectedRoute>} />
          <Route path="/contact-trainer" element={<ProtectedRoute user={user}><ContactForm /></ProtectedRoute>} />  // New Route for contacting trainers
          
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
