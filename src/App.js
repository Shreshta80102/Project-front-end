import React from 'react';
import Header from './Header';
import Home from './Home';
import Journeys from './Journeys';

function App() {
  const appStyles = {
    fontFamily: 'Nunito, Lato, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
    color: '#4b3a2a',
    backgroundColor: '#fff',
    margin: 0,
    padding: 0,
  };
  const mainStyles = {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 24px 64px',
  };
  return (
    <div style={appStyles}>
      <Header />
      <main style={mainStyles}>
        <section id="home">
          <Home />
        </section>
        <section id="journeys" style={{ scrollMarginTop: 88 }}>
          <Journeys />
        </section>
      </main>
    </div>
  );
}
export default App;
