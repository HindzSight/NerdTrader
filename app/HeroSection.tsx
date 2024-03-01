import React, { useState } from 'react';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ search, onSearchChange }) => {
  return (
    <div className={styles.largepage}>
        <div className={styles.alignment}>
            <img
            className={styles.logo}
            loading="lazy"
            alt=""
            src="/logo.png"
        />
        <h1 className={styles.title}>Nerd Trader</h1>
        </div>
        <input
        type="text"
        placeholder="Search for a Company"
        className={styles.search}
        value={search}
        onChange={onSearchChange}
        />
    </div>
  );
};

export default HeroSection;