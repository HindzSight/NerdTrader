import React, { useState } from 'react';
import styles from './TopBar.module.css';

interface TopBarProps {
  search: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TopBar: React.FC<TopBarProps> = ({ search, onSearchChange }) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.frame}>
      <img
        className={styles.logo}
        loading="lazy"
        alt=""
        src="/logo.png"
      />
        <div className={styles.nerdTrader}>Nerd Trader</div>
        <div className={styles.links}>
          <div className={styles.link}>News</div>
          <div className={styles.link}>Stocks</div>
          <div className={styles.link}>Stocks</div>
          <div className={styles.link}>Stocks</div>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search"
              className={styles.search}
              value={search}
              onChange={onSearchChange}
            />
          </div>
          <div className={styles.userSettings}>
            <button
            name='Notif'>Notif</button>
            <button
            name='Settings'>Settings</button>
            <button className={styles.link}>LoggedUser</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;