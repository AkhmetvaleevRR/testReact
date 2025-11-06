import { Link } from "react-router";
import styles from "./homePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <p className={styles.subtitle}>The best restaurants in the city at your service</p>
      <div className={styles.features}>
        <div className={styles.feature}>
          <h3>Quality Food</h3>
          <p>Only verified restaurants</p>
        </div>
        <div className={styles.feature}>
          <h3>Easy Ordering</h3>
          <p>Simple interface</p>
        </div>
        <Link to='/restaurants' className={styles.ctaButton}>Choose Restaurant</Link>
      </div>
    </div>
  );
};