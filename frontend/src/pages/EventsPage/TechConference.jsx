import React from 'react';
import styles from './TechConference.module.css';


function PastTechConferences() {
  return (
    <div className={styles.pastTechContainer}>
      <div className={styles.pastTechContainer}>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.pinimg.com/736x/cd/8f/5c/cd8f5c1fc11141429178c3bae17177c5.jpg" className={styles.carouselImage}alt="Tech Conference 2023" />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/736x/5c/42/d0/5c42d0eca4bba794aa73506c997d95fb.jpg" className={styles.carouselImage}alt="Tech Conference 2022" />
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/736x/bc/74/ed/bc74edb82e88019ced58912eafb08255.jpg" className={styles.carouselImage}alt="Tech Conference 2021" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
</div>



      <h2>Past Tech Conferences</h2>

      <div className="conference">
        <h3>🚀 Tech Conference 2023 – Nairobi, Kenya</h3>
        <p>Held in August 2023, this event brought together over <strong>1,500 tech professionals</strong> from across Africa.</p>
        <ul>
          <li>Keynote by <strong>Ada Nduka Oyom</strong>, founder of She Code Africa</li>
          <li>Workshops on <em>AI in African Business</em> and <em>Cloud Security</em></li>
          <li>Startup pitch session led to <strong>3 new VC investments</strong></li>
        </ul>
        <blockquote>“One of the most organized conferences I’ve attended in Africa.” — Attendee Feedback</blockquote>
      </div>

      <div className="conference">
        <h3>💡 Tech Conference 2022 – Johannesburg, South Africa</h3>
        <p>Focused on <strong>emerging markets</strong> and <strong>digital transformation</strong>. Over 80 speakers shared insights.</p>
        <ul>
          <li>Blockchain & Fintech Innovation</li>
          <li>Youth Empowerment through Tech</li>
          <li>Sustainable Tech Startups</li>
        </ul>
        <p>Ended with a hackathon that produced a <strong>rural banking solution</strong> prototype in 36 hours.</p>
      </div>

      <div className="conference">
        <h3>🌍 Tech Conference 2021 – Virtual</h3>
        <p>Our first fully virtual event drew <strong>3,000+ global participants</strong>.</p>
        <ul>
          <li>Keynote by <strong>Iyinoluwa Aboyeji</strong> (Flutterwave Co-founder)</li>
          <li>30+ panels and virtual networking lounges</li>
          <li>Live code-alongs in React and Node.js</li>
        </ul>
        <p><strong>Highest online engagement ever recorded.</strong></p>
      </div>
    </div>
  );
}

export default PastTechConferences;


