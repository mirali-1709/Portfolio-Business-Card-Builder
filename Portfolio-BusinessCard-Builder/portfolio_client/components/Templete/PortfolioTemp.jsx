// PortfolioTemp.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import portfolioService from '../../src/services/fierbase.services'; 
import styles from './PortfolioTemplate.module.css';
import { useAuth } from '../../src/auth';

const PortfolioTemp = () => {
  const { user } = useAuth() || {}; // Remove loading from destructuring
  const [portfolios, setPortfolio] = useState(null);
  const [fetchingPortfolio, setFetchingPortfolio] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        console.log("Fetching portfolio data for user");
        // Pass user.uid to getPortfolioById function
        const portfolioData = await portfolioService.getPortfolioById(user.uid);
        console.log("Fetched portfolio data:", portfolioData);
        setPortfolio(portfolioData);
        setFetchingPortfolio(false);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
        setFetchingPortfolio(false);
        // Handle error state appropriately
      }
    };

    fetchPortfolioData();
  }, [user]); // Include user in dependency array

  console.log("User:", user);
  console.log("Portfolio:", portfolios);
  console.log("Fetching portfolio:", fetchingPortfolio);

  const { name, role, about, project1Name, project1Description, project2Name, project2Description, email, phone, address, skills } = portfolios || {};

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>{name}</h1>
        <p>{role}</p>
      </header>
      <div className={styles.content}>
        <div className={styles.section}>
          <h2>About Me</h2>
          <p>{about}</p>
        </div>
        <div className={styles.section}>
          <h2>My Projects</h2>
          <div className={styles.project}>
            <h3>{project1Name}</h3>
            <p>{project1Description}</p>
          </div>
          <div className={styles.project}>
            <h3>{project2Name}</h3>
            <p>{project2Description}</p>
          </div>
        </div>
        <div className={styles.contactSection}>
          <h2>Contact Me</h2>
          <div className={styles.contactInfo}>
            <i className="fas fa-envelope"></i>
            <p>{email}</p>
          </div>
          <div className={styles.contactInfo}>
            <i className="fas fa-phone"></i>
            <p>{phone}</p>
          </div>
          <div className={styles.contactInfo}>
            <i className="fas fa-map-marker-alt"></i>
            <p>{address}</p>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Skills</h2>
          <ul className={styles.skillsList}>
            {skills && skills.split(',').map((skill, index) => (
              <li key={index}>{skill.trim()}</li>
            ))}
          </ul>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>&copy; 2024 Mirali Chhag Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioTemp;

