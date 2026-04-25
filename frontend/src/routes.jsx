import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout'; // Import your shared layout
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import BookEventsPage from './pages/BookEventPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import TechConference from './pages/EventsPage/TechConference';
import UserPage from './pages/UserPage';


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '', element: <HomePage /> }, 
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'service', element: <ServicesPage /> },
      { path: 'bookevent', element: <BookEventsPage /> },
      { path: 'techconference', element: <TechConference /> },
      
      
      
      
    ],
  },
  
  { path: 'signup', element: <SignUpPage/> },
  { path: 'login', element: <LoginPage/> },
  { path: 'user', element: <UserPage /> },

]);
