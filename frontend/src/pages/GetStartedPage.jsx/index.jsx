import React, { useState } from "react";
import "./GetStartedPage.css";

function GetStartedPage() {
  const [progress, setProgress] = useState(0);

  const handleProgress = () => setProgress((prev) => Math.min(prev + 20, 100));

  return (
    <div className="get-started-container">
      <h1>Welcome! Let’s Get Started</h1>
      <p>
        We’re excited to have you onboard. Please follow the steps below to get
        started.
      </p>

      <div className="steps">
        <h2>Steps to Get Started</h2>
        <ol>
          <li>Create an account</li>
          <li>Complete your profile</li>
          <li>Explore the features</li>
        </ol>
      </div>

      <div className="sign-up-form">
        <h3>Create your account</h3>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter your password" required />
          <button type="submit" className="cta-button">
            Sign Up
          </button>
        </form>
      </div>

      <div className="tutorial">
        <h2>Quick Tour</h2>
        <p>
          Let’s take a quick tour of our platform to get you familiar with the
          features!
        </p>
        <button className="cta-button" onClick={handleProgress}>
          Start Tour
        </button>
      </div>

      <div className="testimonials">
        <h2>What Our Users Say</h2>
        <blockquote>
          "This is exactly what I needed! So easy to get started." - Jane D.
        </blockquote>
        <blockquote>
          "Amazing platform, and the onboarding was a breeze!" - John S.
        </blockquote>
      </div>

      <div className="cta-section">
        <button className="cta-button">Start Tour</button>
        <button className="cta-button">Get Started</button>
      </div>

      <section className="faq">
        <h3>Need Help?</h3>
        <ul>
          <li>
            <a href="/faq">Frequently Asked Questions</a>
          </li>
          <li>
            <a href="/support">Contact Support</a>
          </li>
        </ul>
      </section>

      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
        <p>{progress}% Complete</p>
      </div>

      <div className="intro-video">
        <h2>Watch Our Introduction</h2>
        <iframe
          src="https://www.youtube.com/embed/your-video-id"
          title="Intro Video"
          width="560"
          height="315"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="activation-prompt">
        <h3>Almost there!</h3>
        <p>
          Please check your inbox and confirm your email to activate your
          account.
        </p>
      </div>

      <div className="pricing">
        <h2>Choose Your Plan</h2>
        <div className="plans">
          <div className="plan">
            <h3>Basic</h3>
            <p>$10/month</p>
            <button className="cta-button">Choose Plan</button>
          </div>
          <div className="plan">
            <h3>Pro</h3>
            <p>$30/month</p>
            <button className="cta-button">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStartedPage;
