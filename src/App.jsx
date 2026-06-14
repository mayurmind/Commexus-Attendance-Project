import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Architecture from './pages/Architecture';
import Working from './pages/Working';
import TechStack from './pages/TechStack';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Security from './pages/Security';
import LoadingScreen from './pages/LoadingScreen';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const location = useLocation();
  
  return (
    <div key={location.pathname} className="animate-page-transition w-full min-h-screen">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/working" element={<Working />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/security" element={<Security />} />
        <Route path="/loading" element={<LoadingScreen />} />
      </Routes>
    </div>
  );
}

function App() {
  const [hasLoaded, setHasLoaded] = useState(() => {
    return sessionStorage.getItem('appLoaded') === 'true';
  });

  const handleLoadingComplete = () => {
    sessionStorage.setItem('appLoaded', 'true');
    setHasLoaded(true);
  };

  if (!hasLoaded) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
