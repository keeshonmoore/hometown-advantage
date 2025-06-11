import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FeaturedProperties from './components/FeaturedProperties';
import ForeclosureBanner from './components/ForeclosureBanner';
import AboutYumaBanner from './components/AboutYumaBanner';
import MeetTheTeam from './components/MeetTheTeam';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AboutHomeAdvantage from './pages/AboutHomeAdvantage';
import AboutMichelleClaborn from './pages/AboutMichelleClaborn';
import OurTeam from './pages/OurTeam';
import AboutYuma from './pages/AboutYuma';
import FeaturedHomes from './pages/FeaturedHomes';
import Rentals from './pages/Rentals';
import Locations from './pages/Locations';
import Testimonials from './pages/Testimonials';
import HomesSold from './pages/HomesSold';
import ContactUs from './pages/ContactUs';
import PropertyListing from './pages/PropertyListing';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-custom">
        <TopBar />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <FeaturedProperties />
                <ForeclosureBanner />
                <AboutYumaBanner />
                <MeetTheTeam />
                <ContactForm />
              </>
            }
          />
          <Route path="/about-home-advantage" element={<AboutHomeAdvantage />} />
          <Route path="/about-michelle-claborn" element={<AboutMichelleClaborn />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/about-yuma" element={<AboutYuma />} />
          <Route path="/featured-homes" element={<FeaturedHomes />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/homes-sold" element={<HomesSold />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/property/:id" element={<PropertyListing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;