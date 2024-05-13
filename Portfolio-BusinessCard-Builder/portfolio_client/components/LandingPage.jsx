import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Signup from './Signup/Signup';
import Login from './Login/Login';


const LandingPage = (props) => {
  return (
    <div className="landing-page">
      <header>
        <h1>Portfolio Builder</h1>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#portfolio-showcase">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
            {/* <li><Link to="/login">Login</Link></li> */}
            {/* <li><a href="#register">Register</a></li> */}
          </ul>
        </nav>
      </header>

      <section id="hero">
        <div className="hero-content">
          <h2>Create Your Stunning Portfolio Website<br />and Business Cards</h2>
          <p>Build your online presence effortlessly with our platform. Choose from a variety of templates and get started today!</p>
          <Link to="/signup" className="btn">Get Started</Link>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <h2>Features</h2>
          <div className="feature-item">          
            <p><h3>Easy to Use</h3>Our platform offers a user-friendly interface that allows you to create your portfolio website and business cards with ease.</p>
          </div>
          <div className="feature-item">            
            <p><h3>Customizable Templates</h3>Choose from a variety of professionally designed templates for both your portfolio website and business cards.</p>
          </div>
          <div className="feature-item">            
            <p><h3>PDF Export</h3>Download your portfolio website as a static HTML file and your business cards as a PDF document for easy sharing and printing.</p>
          </div>
        </div>
      </section>

      <section id="portfolio-showcase">
        <h2>Portfolio Showcase</h2>
        <div className="container">        
          <div className="portfolio-item">
            <img src="src/assets/images/moon.jpg" alt="Project 1" />
          </div>
          <div className="portfolio-item">
            <img src="src/assets/images/moon.jpg" alt="Project 2" />
          </div>
          <div className="portfolio-item">
            <img src="src/assets/images/moon.jpg" alt="Project 3" />
          </div>
          <div className="portfolio-item">
            <img src="src/assets/images/moon.jpg" alt="Project 4" />
          </div>
          <div className="portfolio-item">
            <img src="src/assets/images/moon.jpg" alt="Project 5" />
          </div>
          <div className="portfolio-item">
            <img src="src/assets/images/moon.jpg" alt="Project 6" />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </section>

  <footer>
  <div className="footer-content">
    <p>&copy; 2024 Portfolio Builder</p>
    <div className="social-media">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </div>
</footer>
    </div>
  );
};

export default LandingPage;
