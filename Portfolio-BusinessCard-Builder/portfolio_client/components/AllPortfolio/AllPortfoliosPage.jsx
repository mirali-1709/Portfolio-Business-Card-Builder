// AllPortfoliosPage.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioService } from '../../src/services/fierbase.services';
import styles from './AllPortfoliosPage.module.css';
import { useAuth } from '../../src/auth';

const AllPortfoliosPage = () => {
  const { user } = useAuth();
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        if (!user) {
          throw new Error("User not authenticated");
        }
        const portfoliosData = await portfolioService.getAllPortfolios(user.uid);
        setPortfolios(portfoliosData);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      }
    };

    fetchPortfolios();
  }, [user]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>All Portfolios</h1>
      {portfolios.map((portfolio) => (
        <div key={portfolio.id} className={styles.portfolio}>
          <h2 className={styles.portfolioName}>{portfolio.name}</h2>
          <p className={styles.portfolioAbout}>{portfolio.about}</p>
          {user && (
            <Link to={`/portfolio/${portfolio.id}`} className={styles.viewDetails}>
              View Details
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllPortfoliosPage;
