import React from 'react';
import styles from './NewsSection.module.css';

const NewsSection = () => {
  return (
    <div className={styles.container}>
        <div className={styles.newshead}>
            <h1>News</h1>
            <img
                className={styles.logo}
                loading="lazy"
                alt=""
                src="/paper.png"
            />
            
        </div>
        <div className={styles.newshere}>
            <div>
                <div className={styles.newsC}>
                    <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/paper.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div className={styles.newsC}>
                    <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/paper.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div className={styles.newsC}>
                    <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/paper.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div className={styles.newsC}>
                    <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/paper.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
            </div>
            <div>
            <div className={styles.newsC}>
                    <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/paper.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div className={styles.newsC}>
                    <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/paper.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div className={styles.newsC}>
                    <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/paper.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
                <div className={styles.newsC}>
                    <img
                    className={styles.logo}
                    loading="lazy"
                    alt=""
                    src="/paper.png"
                    />
                    <p className={styles.p}>Lorem ipsum dolor sit amet consectetur. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsSection;