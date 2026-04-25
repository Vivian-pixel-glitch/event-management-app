import React from 'react';
import HeroSection from '../../components/HeroSection';
import SearchBar from '../../components/SearchBar';
import FeaturedEventsSection from '../../components/FeaturedEventsSection';
import EventCategorySection from '../../components/EventCategorySection';
import LocationListings from '../../components/LocationListings';
import CallToAction from '../../components/CallToAction';
import TestimonialsSection from '../../components/TestimonialsSection';
import AboutUsSnippet from '../../components/AboutUsSection';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar'; 
import FeaturesSection from '../../components/FeaturesSection'; 
import styles from './HomePage.module.css';

function HomePage() {
  return (
    <div className={styles.homePageContainer}>
      <HeroSection />
      <FeaturesSection /> 
      <AboutUsSnippet />
      <TestimonialsSection />
      <FeaturedEventsSection />
      <LocationListings />
      <EventCategorySection />
      <CallToAction />
    </div>
  );
}
export default HomePage;    