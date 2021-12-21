import type { NextPage } from "next";
import styles from '../styles/Home.module.scss'
import Slider from "../Components/SliderHorizontal/Slider";
import Trending from "../Components/Trending/Trending";
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular</h1>
      <Slider />
      <h1 className={styles.title}>TRENDING ABUMS</h1>
      <Trending/>
    </div>
  );
};

export default Home;
