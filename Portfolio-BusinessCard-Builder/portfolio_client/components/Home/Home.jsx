import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css"; // Import CSS module

function Home(props) {
  return (
    <div>
      <header className={styles.header}>
        <h1>Portfolio Builder</h1>
        <h2>{props.name ? `Welcome - ${props.name}`:  '..'}</h2>
      </header>
      <div className={styles.container}>
        {/* Portfolio Card */}
        <div className={styles.card}>
          <img src="src/assets/images/moon.jpg" alt="Card Image" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2>Portfolio</h2>
            <p>Build your online presence effortlessly with our platform</p>
            <Link to="/portfolioForm" className={styles.cardButton}>Create Portfolio</Link>
            {/* Add a link to navigate to the page displaying all portfolios */}
            <Link to="/all-portfolios" className={styles.cardButton}>View All Portfolios</Link>
          </div>
        </div>
        {/* Business Card */}
        <div className={styles.card}>
          <img src="src/assets/images/bg.jpg" alt="Card Image" className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h2>Business Card</h2>
            <p>Create your professional business card online</p>
            <Link to="/businessCard" className={styles.cardButton}>Create Business Card</Link>
            {/* Add a link to navigate to the page displaying all business cards */}
            <Link to="/all-business-cards" className={styles.cardButton}>View All Business Cards</Link>
          </div>
        </div>
      </div>   
      <footer className={styles.footer}>
        <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
