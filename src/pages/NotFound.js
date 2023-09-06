import styles from "../styles/NotFound.module.css";
import gif from "../assets/404-error.gif";

const NotFound = () => {
  const goBack = () => {
    window.history.go(-1);
  };
  return (
    <section className={styles.NotFound}>
      <div className={styles.notFoundContainer}>
        <img src={gif} alt="Not Found Gif" />
        <h3 className={styles.notFoundText}>Oops! Page Not Found.</h3>
        <button className={styles.goBackButton} onClick={goBack}>
          Go back
        </button>
      </div>
    </section>
  );
};

export default NotFound;
