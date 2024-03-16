import React from 'react';
import './homepage.css'
import {Link} from 'react-router-dom'

function Homepage() {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <Link to="/chat" className="logo">Linkitup</Link>
        </div>
        <div className="nav">
          <div className="dropdown">
            <button className="nav-button dropbtn">Login</button>
            <div className="dropdown-content">
              <Link to="/company-login">As Company</Link>
              <Link to="influencer-login">As Influencer</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="nav-button dropbtn">Sign Up</button>
            <div className="dropdown-content">
              <Link to="/company-registration">As Company</Link>
              <Link to="/influencer-registration">As Influencer</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="hero">
          <h1>Connecting companies to best influencers all over the world</h1>
        </section>

        <section className="cards">
          <div className="card">
            <div className="card-content">
              <h3>For Influencers</h3>
              <p>Join a vibrant network that puts you in touch with leading brands from around the globe. Leverage your influence to craft inspiring narratives. Linkitup is where your creativity meets great opportunities.</p>
              <button className="cta-button">Companies</button>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>For Companies</h3>
              <p>Discover the perfect influencer to amplify your brand's message on Linkitup. With our extensive network, you'll find the ideal match for your marketing needs and engage your target audience effectively.</p>
              <button className="cta-button">Connect Now</button>
            </div>
          </div>
        </section>
      </main>

      <section className="partners">
        <div className="partners-container">
          <img src="paypal-logo.png" alt="PayPal" className="partner-logo" />
          <img src="mamaearth-logo.png" alt="Mamaearth" className="partner-logo" />
          <img src="amazon-logo.png" alt="Amazon" className="partner-logo" />
          <img src="marriott-logo.png" alt="Marriott" className="partner-logo" />
          <img src="myantra-logo.png" alt="Myantra" className="partner-logo" />
          <img src="asics-logo.png" alt="Asics" className="partner-logo" />
        </div>
      </section>

      <section className="discovery-section">
        <div className="influencer-showcase">
          <img src="influencer.png" alt="Platform Screenshot" />
        </div>
        <div className="discovery-info">
          <div className="section-title">INFLUENCER DISCOVERY</div>
          <div className="main-heading">Find the best influencers.</div>
          <div className="info-point">Creators who already love your brand.</div>
          <p>The one who will love your brand and will give his best.</p>
          <div className="info-point">Not just any creators. The right ones.</div>
          <p>Find truly complimentary creators based off of data, content, and performance to fit your brands.</p>
        </div>
      </section>

      <section className="discovery-section">
        <div className="discovery-info">
          <div className="main-heading">Save time</div>
          <div className="info-point">Easy hiring.</div>
          <p>Hire the best influencers for fruitful and long-term collaborations with your brand. .</p>
          <div className="info-point">AI assisted.</div>
          <p>AI will help you to connect with the influencers whose audience matches with your customer market</p>
        </div>
        <div className="influencer-showcase">
          <img src="time.png" alt="Platform Screenshot" />
        </div>
      </section>
    </div>
  );
}

export default Homepage;
