import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${styles.navbar}`}>
      <div className="container">
        <Link className={`navbar-brand ${styles.navbarBrand}`} to="/">
          <div className={styles.navbarLogoContainer}>
            <img 
              src="/src/assets/logo/world.png" 
              className={styles.navbarLogo} 
              
            />
            <span className={styles.navbarText}>TravelEasy</span>
          </div>
          
        </Link>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/">Главная</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/routes-and-tips">Маршруты и советы</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${styles.navLink}`} to="/about">О нас</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;