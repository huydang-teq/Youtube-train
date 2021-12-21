import * as React from 'react';
import styles from './Trending.module.scss'

export default function Trending () {
  return (
    <div className={styles.container}>
      <div className={styles.trendingItem}>
        <p className={styles.text}>1</p>
        <img
          src="https://thisismehul.files.wordpress.com/2017/01/ed-sheeran-shape-of-you-video-1485704997.jpg?w=640"
          alt=""
          className={styles.image}
        />
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <div className={styles.title}>Everyday Life</div>
            <div className={styles.text}>Coldplay</div>
          </div>
          <div className={styles.text}>3:42</div>
        </div>
      </div>

      <div className={styles.trendingItem}>
        <p className={styles.text}>1</p>
        <img
          src="https://thisismehul.files.wordpress.com/2017/01/ed-sheeran-shape-of-you-video-1485704997.jpg?w=640"
          alt=""
          className={styles.image}
        />
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <div className={styles.title}>Everyday Life</div>
            <div className={styles.text}>Coldplay</div>
          </div>
          <div className={styles.text}>3:42</div>
        </div>
      </div>

      <div className={styles.trendingItem}>
        <p className={styles.text}>1</p>
        <img
          src="https://thisismehul.files.wordpress.com/2017/01/ed-sheeran-shape-of-you-video-1485704997.jpg?w=640"
          alt=""
          className={styles.image}
        />
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <div className={styles.title}>Everyday Life</div>
            <div className={styles.text}>Coldplay</div>
          </div>
          <div className={styles.text}>3:42</div>
        </div>
      </div>

    </div>
  );
}
