import styles from "../styles/Projects.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import imageSearch from "../assets/image-search.png";
import weatherApp from "../assets/weather-app-icons.jpg";
import eCommerce from "../assets/ecommerce-websites.jpg";
import tourTravel from "../assets/Tour-and-Travel.png";
import restaurant from "../assets/Restaurant.png";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className={styles.projectsContent}>
      <h1
        className={styles.projectsTitle}
        data-aos={"slide-up"}
        data-aos-duration={"700"}
      >
        Projects
      </h1>

      {/* First Card*/}
      <section className={styles.cardsContainer}>
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={styles.cardsContent}
          data-aos="zoom-in-up"
          data-aos-offset="-5"
          data-aos-delay="0"
          data-aos-duration="2000"
        >
          <img src={imageSearch} alt="" width={330} height={200} />
          <div className={styles.links}>
            <a href="">
              <FontAwesomeIcon
                icon={faLink}
                size="lg"
                style={{ color: "#fafafa" }}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                style={{ color: "#fafafa" }}
              />
            </a>
          </div>
          <h2 className={styles.cardTitel}>Image search App with Api</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            impedit fuga eaque mollitia eos iusto.
          </p>
          <div className={styles.languagesContainer}>
            <p className={`${styles.html} ${styles.languages}`}>Html</p>
            <p className={`${styles.css} ${styles.languages}`}>CSS</p>
            <p className={`${styles.javascript} ${styles.languages}`}>
              JavaScript
            </p>
          </div>
        </motion.div>

        {/* Second Card*/}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={styles.cardsContent}
          data-aos={"zoom-in-up"}
          data-aos-offset={"-5"}
          data-aos-delay={"700"}
          data-aos-duration={"2000"}
        >
          <img src={weatherApp} alt="" width={330} height={200} />
          <div className={styles.links}>
            <a href="">
              <FontAwesomeIcon
                icon={faLink}
                size="lg"
                style={{ color: "#fafafa" }}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                style={{ color: "#fafafa" }}
              />
            </a>
          </div>
          <h2 className={styles.cardTitel}>Weather App with Api</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            impedit fuga eaque mollitia eos iusto.
          </p>
          <div className={styles.languagesContainer}>
            <p className={`${styles.html} ${styles.languages}`}>Html</p>
            <p className={`${styles.css} ${styles.languages}`}>CSS</p>
            <p className={`${styles.javascript} ${styles.languages}`}>
              JavaScript
            </p>
          </div>
        </motion.div>

        {/* Third Card*/}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={styles.cardsContent}
          data-aos={"zoom-in-up"}
          data-aos-offset={"-5"}
          data-aos-delay={"1400"}
          data-aos-duration={"2000"}
        >
          <img src={eCommerce} alt="" width={330} height={200} />
          <div className={styles.links}>
            <a href="">
              <FontAwesomeIcon
                icon={faLink}
                size="lg"
                style={{ color: "#fafafa" }}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                style={{ color: "#fafafa" }}
              />
            </a>
          </div>
          <h2 className={styles.cardTitel}>E-commerce website</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            impedit fuga eaque mollitia eos iusto.
          </p>
          <div className={styles.languagesContainer}>
            <p className={`${styles.html} ${styles.languages}`}>Html</p>
            <p className={`${styles.css} ${styles.languages}`}>CSS</p>
          </div>
        </motion.div>

        {/* Fourth Card*/}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={styles.cardsContent}
          data-aos={"zoom-in-up"}
          data-aos-offset={"-5"}
          data-aos-delay={"2100"}
          data-aos-duration={"2000"}
        >
          <img src={tourTravel} alt="" width={330} height={200} />
          <div className={styles.links}>
            <a href="">
              <FontAwesomeIcon
                icon={faLink}
                size="lg"
                style={{ color: "#fafafa" }}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                style={{ color: "#fafafa" }}
              />
            </a>
          </div>
          <h2 className={styles.cardTitel}>Tour and Travel Website</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            impedit fuga eaque mollitia eos iusto.
          </p>
          <div className={styles.languagesContainer}>
            <p className={`${styles.css} ${styles.languages}`}>CSS</p>

            <p className={`${styles.react} ${styles.languages}`}>React js</p>
          </div>
        </motion.div>

        {/*fifth card*/}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className={styles.cardsContent}
          data-aos={"zoom-in-up"}
          data-aos-delay={"0"}
          data-aos-offset="-5"
          data-aos-duration={"2000"}
        >
          <img src={restaurant} alt="" width={330} height={200} />
          <div className={styles.links}>
            <a href="">
              <FontAwesomeIcon
                icon={faLink}
                size="lg"
                style={{ color: "#fafafa" }}
              />
            </a>
            <a href="">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                style={{ color: "#fafafa" }}
              />
            </a>
          </div>
          <h2 className={styles.cardTitel}>Restaurant Website</h2>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            impedit fuga eaque mollitia eos iusto.
          </p>
          <div className={styles.languagesContainer}>
            <p className={`${styles.html} ${styles.languages}`}>Html</p>
            <p className={`${styles.css} ${styles.languages}`}>CSS</p>
            <p className={`${styles.bootstrap} ${styles.languages}`}>
              Bootstrap
            </p>
          </div>
        </motion.div>
      </section>
    </section>
  );
};

export default Projects;
