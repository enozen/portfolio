import styles from "../styles/Contact.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faAt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import gif from "../assets/motion.gif";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className={styles.contact}>
      <h1 className={styles.contactTitle} data-aos={"fade"}>
        Contact
      </h1>
      <section className={styles.contactContainer}>
        <div className={styles.formContainer}>
          <form
            data-aos={"slide-up"}
            className={styles.form}
            action="https://formspree.io/f/myyqjprr"
            method="POST"
          >
            <label className={styles.getInTouch}>Get in Touch</label>
            <hr id={styles.hr} />
            <div className={styles.inputsContainer}>
              <span className={styles.span} htmlFor="name">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                className={styles.inputs}
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className={styles.inputsContainer}>
              <span className={styles.span} htmlFor="e-mail">
                <FontAwesomeIcon icon={faAt} />
              </span>
              <input
                className={styles.inputs}
                id="email"
                type="e-mail"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <textarea
              className={styles.textarea}
              name="textarea"
              id="textarea"
              cols="30"
              rows="10"
              placeholder="Write your message here..."
              required
            ></textarea>

            <button className={styles.submitButton} type="submit">
              <FontAwesomeIcon icon={faEnvelope} /> Send Message
            </button>
          </form>
        </div>
        <div className={styles.gifContainer}>
          <div className={styles.gifWrapper} data-aos={"fade-left"}>
            <img src={gif} alt="Contact-Gif" width="380" />
          </div>
          <div className={styles.followMeContainer} data-aos={"slide-up"}>
            <h3 id={styles.followMe}>follow me</h3>
            <ul className={styles.headerIcons}>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
            <p className={styles.copyRight}>
              Copyright <FontAwesomeIcon icon={faCopyright} /> 2023 Hendri
              Zeneli{" "}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
