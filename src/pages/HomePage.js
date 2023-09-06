import Typewriter from "typewriter-effect";
import styles from "../styles/HomePage.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.home}>
      <h1 className={styles.welcome} data-aos="zoom-in-up">
        Welcome
      </h1>

      <div className={styles.typingText} data-aos="zoom-in">
        <Typewriter
          options={{
            delay: 150,
            pauseFor: 1500,
            autoStart: true,
            loop: true,
            strings: [
              "✋ I'm Hendri Zeneli",
              "I'm Full-Stack 🌐developer",
              "I'm currently a DCI-Student 📚",
            ],
          }}
        />
      </div>

      <button
        className={styles.contactButton}
        data-aos="zoom-out-up"
        data-aos-delay="1400"
      >
        <Link className={styles.link} to="/contact">Contact Me</Link>
      </button>
    </div>
  );
};

export default HomePage;
