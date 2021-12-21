import * as React from 'react';
import styles from './Horizontal.module.scss'
export default function Slider () {
  return (
    <div className={styles.container}>
      <div className={styles.sliderItem}>
        <div className={styles.imageBox}>
          <img
            className={styles.image}
            src="https://thisismehul.files.wordpress.com/2017/01/ed-sheeran-shape-of-you-video-1485704997.jpg?w=640"
            alt=""
          />
        </div>
        <div className={styles.title}>Pop Rock</div>
        <div className={styles.view}>751,475 Views</div>
      </div>

      <div className={styles.sliderItem}>
        <div className={styles.imageBox}>
          <img
            className={styles.image}
            src="https://thisismehul.files.wordpress.com/2017/01/ed-sheeran-shape-of-you-video-1485704997.jpg?w=640"
            alt=""
          />
        </div>
        <div className={styles.title}>Pop Rock</div>
        <div className={styles.view}>751,475 Views</div>
      </div>

      <div className={styles.sliderItem}>
        <div className={styles.imageBox}>
          <img
            className={styles.image}
            src="https://thisismehul.files.wordpress.com/2017/01/ed-sheeran-shape-of-you-video-1485704997.jpg?w=640"
            alt=""
          />
        </div>
        <div className={styles.title}>Pop Rock</div>
        <div className={styles.view}>751,475 Views</div>
      </div>
    </div>
  );
}
