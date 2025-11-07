import React, { useState } from 'react';
import './Journeys.css';

function Journeys() {
  const [expandedCard, setExpandedCard] = useState(null);

  const journeyCards = [
    {
      title: 'Temple Tour',
      description: 'Explore magnificent temples that showcase India\'s architectural brilliance and spiritual heritage, from ancient cave temples to grand structures that have stood for centuries.',
      details: [
        'Visit the iconic Khajuraho Temples, known for their intricate stone carvings and architectural excellence.',
        'Explore the ancient Ellora and Ajanta Caves, showcasing Buddhist, Hindu, and Jain rock-cut architecture.',
        'Discover the magnificent Meenakshi Temple in Madurai, a masterpiece of Dravidian architecture.',
        'Experience the spiritual grandeur of the Golden Temple in Amritsar, a symbol of Sikh faith.',
        'Witness the architectural marvel of the Konark Sun Temple, a UNESCO World Heritage Site.'
      ]
    },
    {
      title: 'Classical Dance',
      description: 'Immerse yourself in the graceful movements and expressive storytelling of India\'s classical dance forms, including Bharatanatyam, Kathak, Odissi, and more.',
      details: [
        'Bharatanatyam: Originating from Tamil Nadu, this dance form combines rhythm, expression, and graceful movements.',
        'Kathak: A North Indian dance form known for its intricate footwork, spins, and storytelling through gestures.',
        'Odissi: From Odisha, characterized by fluid movements and sculpturesque poses inspired by temple carvings.',
        'Kathakali: Kerala\'s dramatic dance form with elaborate costumes, makeup, and facial expressions.',
        'Kuchipudi: A classical dance from Andhra Pradesh combining grace, strength, and storytelling.'
      ]
    },
    {
      title: 'Festivals',
      description: 'Experience the vibrant colors, joyous celebrations, and deep cultural significance of India\'s festivals, from Diwali to Holi, each telling a unique story.',
      details: [
        'Diwali: The Festival of Lights, symbolizing the victory of light over darkness, celebrated with lamps, fireworks, and sweets.',
        'Holi: The Festival of Colors, marking the arrival of spring with vibrant colors, music, and joyous celebrations.',
        'Dussehra: Commemorating the victory of good over evil, celebrated with effigy burnings and cultural performances.',
        'Eid: Celebrated by Muslims across India with prayers, feasts, and community gatherings.',
        'Pongal/Makar Sankranti: Harvest festivals celebrated with traditional foods, kite flying, and family gatherings.',
        'Onam: Kerala\'s harvest festival featuring elaborate flower arrangements, traditional feasts, and boat races.'
      ]
    },
    {
      title: 'Cuisine',
      description: 'Savor the diverse flavors of Indian cuisine, where each region offers distinct tastes, spices, and culinary traditions that reflect local culture and history.',
      details: [
        'North Indian: Rich gravies, tandoori dishes, and breads like naan and roti, featuring dishes like butter chicken and biryani.',
        'South Indian: Known for dosas, idlis, sambhar, and coconut-based curries with distinct flavors of tamarind and curry leaves.',
        'Gujarati: Vegetarian cuisine with sweet, sour, and spicy flavors, including dhokla, thepla, and undhiyu.',
        'Bengali: Fish curries, sweets like rasgulla and sandesh, and mustard oil-based preparations.',
        'Rajasthani: Spicy and flavorful dishes adapted to desert conditions, including dal baati churma and gatte ki sabzi.',
        'Maharashtrian: A blend of sweet and spicy, featuring vada pav, misal pav, and puran poli.'
      ]
    },
    {
      title: 'Handicrafts',
      description: 'Discover the exquisite artistry of Indian handicrafts, from intricate textiles and pottery to woodwork and metalwork, each piece a testament to skilled craftsmanship.',
      details: [
        'Textiles: Banarasi silk, Kanchipuram sarees, Pashmina shawls, and Bandhani tie-dye work from Gujarat and Rajasthan.',
        'Pottery: Blue pottery from Rajasthan, terracotta from West Bengal, and black pottery from Manipur.',
        'Woodwork: Intricate carvings from Kashmir, sandalwood work from Karnataka, and lacquer work from Andhra Pradesh.',
        'Metalwork: Bidriware from Karnataka, brass work from Moradabad, and filigree work from Odisha.',
        'Embroidery: Zardozi, Chikankari from Lucknow, Phulkari from Punjab, and Kantha from West Bengal.',
        'Carpets & Rugs: Hand-knotted Persian-style carpets from Kashmir and durries from various regions.'
      ]
    },
    {
      title: 'Jewelry Trail',
      description: 'Admire the stunning beauty of traditional Indian jewelry, featuring intricate designs, precious stones, and techniques passed down through generations of master artisans.',
      details: [
        'Kundan: Traditional jewelry setting technique using gold foil and precious stones, popular in Rajasthan and Gujarat.',
        'Temple Jewelry: Inspired by temple architecture, featuring intricate gold work with rubies, emeralds, and pearls.',
        'Meenakari: Enamel work on gold and silver, creating vibrant, colorful designs, especially famous in Rajasthan.',
        'Polki: Uncut diamonds set in gold, creating a traditional and elegant look, popular in North India.',
        'Antique Jewelry: Vintage pieces reflecting different eras of Indian history, from Mughal to British colonial periods.',
        'Regional Specialties: Jadau from Rajasthan, Navratna jewelry, and traditional silver jewelry from various tribal communities.'
      ]
    }
  ];

  const handleCardClick = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section id="journeys" className="journeys-section">
      <div className="journeys-container">
        {journeyCards.map((journey, index) => (
          <div 
            key={index} 
            className={`journey-card ${expandedCard === index ? 'expanded' : ''}`}
          >
            <div 
              className="journey-header"
              onClick={() => handleCardClick(index)}
            >
              <h3 className="journey-title">{journey.title}</h3>
              <span className="expand-icon">
                {expandedCard === index ? '−' : '+'}
              </span>
            </div>
            <p className="journey-description">{journey.description}</p>
            {expandedCard === index && (
              <div className="journey-details">
                <h4 className="details-heading">Learn More:</h4>
                <ul className="details-list">
                  {journey.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="detail-item">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journeys;

