import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('visitCount');
    const count = storedCount ? parseInt(storedCount, 10) + 1 : 1;
    setVisitCount(count);
    localStorage.setItem('visitCount', count.toString());
  }, []);

  const handleExploreClick = () => {
    const journeysSection = document.getElementById('journeys');
    if (journeysSection) {
      journeysSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <h2 className="welcome-heading">Welcome to Your Exploration of Indian Culture!</h2>
        <p className="welcome-subtitle">
          Discover the rich heritage, traditions, and artistic expressions that make India a land of incredible diversity and beauty.
        </p>
        <button className="explore-button" onClick={handleExploreClick}>Start Your Journey</button>
        <div className="visit-counter">
          <span className="counter-label">Visits:</span>
          <span className="counter-value">{visitCount}</span>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
}

export default Home;

