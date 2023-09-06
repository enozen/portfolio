import fileSaver from "file-saver";
import styles from "../styles/AboutMe.module.css";
import gif from "../assets/PHP-Developers.gif";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const saver = () => {
    fileSaver.saveAs(
      process.env.PUBLIC_URL + "/f.pdf",
      "Lebenslauf.pdf"
    );
  };
  return (
    <div className={styles.about}>
      <h1 className={styles.header} data-aos="slide-down">
        About Me
      </h1>
      <div className={styles.aboutMain}>
        <div className={styles.aboutText}>
          <h5 className={styles.enthusiastHeader} data-aos="fade-left">
            I'm <span>Hendri Zeneli,</span> a Web Enthusiast
          </h5>
          <div className={styles.pContainer}>
            <p data-aos="fade-left">
              Greetings! I'm <span>Hendri Zeneli,</span> a web development
              enthusiast with a background in computer science. Currently part
              of the "Advanced Education" program at DCI.
            </p>
            <p data-aos="fade-right">
              I have worked so far with html, css, javascript, react, etc. and I
              am ready to learn even more. I really like to create new projects
            </p>
            <p data-aos="fade-left">
              I'm actively seeking opportunities to apply my skills in
              real-world projects. I'm looking for a position where I can either
              start an internship or begin my career.
            </p>
            <p data-aos="fade-right">
              Besides coding, I enjoy playing football and reading.
            </p>
            <p data-aos="fade-left">
              I'm excited about the potential opportunities in web development.
            </p>
          </div>
        </div>
        <div className={styles.gifContainer} data-aos="slide-left">
          <img src={gif} alt="Developer-Gif" className={styles.img} />
          <button className={styles.downloadCv} onClick={saver}>
            Download CV
            <FontAwesomeIcon icon={faDownload} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
