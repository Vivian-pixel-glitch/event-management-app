import React from 'react';
import styles from './AboutPage.module.css'; // Optional styling

function AboutPage() {
  return (
    <div className={styles.aboutContainer || "p-8 max-w-4xl mx-auto"}>
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="mb-4 text-lg">
        We are a passionate team dedicated to simplifying the way people plan and manage events. Our platform was built with a mission to empower individuals, organizations, and communities to organize amazing events effortlessly.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">What We Do</h2>
      <p className="mb-4">
        From conferences and weddings to community meetups and concerts, our tools help users create, promote, and manage events all in one place. We offer customizable features including ticketing, attendee management, location filtering, and event discovery.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
      <p className="mb-4">
        Our mission is to make event planning easy, accessible, and enjoyable. We aim to support every step of the event journey, from the initial idea to the final applause.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Easy-to-use event creation tools</li>
        <li>Robust attendee and ticket management</li>
        <li>Mobile-friendly and responsive design</li>
        <li>Trusted by thousands of organizers worldwide</li>
      </ul>
    </div>
  );
}

export default AboutPage;
