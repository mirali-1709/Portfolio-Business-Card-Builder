import React, { useState } from 'react';
import { portfolioService } from '../services/fierbase.services';
import styles from './PortfolioForm.module.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth } from "../fierbase-config";

const PortfolioForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    about: '',
    project1Name: '',
    project1Description: '',
    project2Name: '',
    project2Description: '',
    email: '',
    phone: '',
    address: '',
    skills: '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const user = auth.currentUser;
    if (!user) {
      console.error("User not authenticated");
      return;
    }
  
    const portfolioDataWithUserId = { ...formData, userId: user.uid };
  
    try {
      const addedPortfolio = await portfolioService.addPortfolio(portfolioDataWithUserId);
      const portfolioId = addedPortfolio.id;
      console.log('Data sent successfully:', portfolioDataWithUserId);
      setFormData({ /* Reset form data after successful submission */ });
      navigate(`/portfolio/${portfolioId}`);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };
  
  

  return (
    <div className={styles.container}>
      <h1>Portfolio Form</h1>
      <form className={styles.content} onSubmit={handleSubmit}>
        <div className={styles.section}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div className={styles.section}>
          <label htmlFor="role">Role:</label>
          <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} />
        </div>

        <div className={styles.section}>
          <label htmlFor="about">About Me:</label>
          <textarea id="about" name="about" value={formData.about} onChange={handleChange} />
        </div>

        <div className={styles.section}>
          <h2>Projects</h2>
          <div className={styles.project}>
            <label htmlFor="project1Name">Project 1 Name:</label>
            <input type="text" id="project1Name" name="project1Name" value={formData.project1Name} onChange={handleChange} />
            <label htmlFor="project1Description">Project 1 Description:</label>
            <textarea id="project1Description" name="project1Description" value={formData.project1Description} onChange={handleChange} />
          </div>
          <div className={styles.project}>
            <label htmlFor="project2Name">Project 2 Name:</label>
            <input type="text" id="project2Name" name="project2Name" value={formData.project2Name} onChange={handleChange} />
            <label htmlFor="project2Description">Project 2 Description:</label>
            <textarea id="project2Description" name="project2Description" value={formData.project2Description} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Contact Information</h2>
          <div className={styles.contactInfo}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className={styles.contactInfo}>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className={styles.contactInfo}>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.section}>
          <h2>Skills</h2>
          <label htmlFor="skills">Skills:</label>
          <textarea id="skills" name="skills" value={formData.skills} onChange={handleChange} />
        </div>
    
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PortfolioForm;
