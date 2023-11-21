import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
