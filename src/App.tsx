import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import CtaSection from './components/CtaSection';
import Hero from './components/Hero';
import Classes from './pages/Classes';
import Schedule from './components/Schedule';
import Trainers from './pages/Trainers';
import MembershipsSection from './components/MembershipsSection';
import Testimonials from './components/Testimonials';
import Nutrition from './pages/Nutrition';
import Gallery from './components/Gallery';
import Blog from './pages/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import About from './pages/About';
import AboutSection from './components/AboutSection';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import MembershipsPage from './pages/MembershipsPage';

// Home component that includes all the main page sections
const HomePage = () => (
  <>
    <Hero />
    <AboutSection />
    <Gallery />
    <MembershipsSection />
    <Testimonials />
    <CtaSection />
  </>
);

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="bg-background-light dark:bg-background-dark transition-colors duration-500 min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/trainers" element={<Trainers />} />
              <Route path="/nutrition" element={<Nutrition />} />
              <Route path="/memberships" element={<MembershipsPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;