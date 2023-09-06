import styles from "../styles/Resume.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faFileArrowDown,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section className={styles.resume}>
      <h1 className={styles.resumeTitle} data-aos={"slide-down"}>
        Resume
      </h1>
      <div className={styles.row}>
        <div className={styles.education}>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.circleDot}> </div>
              <div data-aos={"zoom-in"}>
                <h3 className={styles.timelineDate}>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{ color: "orange" }}
                  />{" "}
                  2006-2009
                </h3>
                <h4 className={styles.timelineTitle}>
                  Vocational school in computer science
                </h4>
                <p className={styles.timelineText}>
                  This is where I had my first contact with programming. I also
                  gained knowledge on computer networks, operating systems, etc.
                </p>
                <button className={styles.downloadCertificate}>
                  <FontAwesomeIcon icon={faFileArrowDown} /> Download
                  Certificate
                </button>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.circleDot}></div>
              <div data-aos={"zoom-out"}>
                <h3 className={styles.timelineDate}>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{ color: "orange" }}
                  />{" "}
                  2009-2011
                </h3>
                <h4 className={styles.timelineTitle}>
                  High school direction computer science
                </h4>
                <p className={styles.timelineText}>
                  Here I continued to learn more about IT, but unfortunately I
                  stopped my studies early and could not get a diploma.
                </p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.circleDot}></div>
              <div data-aos={"zoom-in"}>
                <h3 className={styles.timelineDate}>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    style={{ color: "orange" }}
                  />{" "}
                  2022-2023
                </h3>
                <h4 className={styles.timelineTitle}>
                  Further training towards web development
                </h4>
                <p className={styles.timelineText}>
                  In the DCI course, I got my first lessons on Web development.
                  I got knowledge about Html, Css, Sass, Tailwind, Bootstrap,
                  Javascrip, React and Node.js. During the one-year course, we
                  did daily exercises and created small projects.
                </p>
                <button className={styles.downloadCertificate}>
                  <FontAwesomeIcon icon={faFileArrowDown} /> Download
                  Certificate
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* SKILLS*/}
        <div className={styles.mySkills} data-aos={"slide-up"}>
          <h3 className={styles.title}>My Skills</h3>
          <div className={styles.skillsContainer}>
            <div className={styles.skills}>
              <div className={styles.skillItem}>
                <h5 className={styles.skillsTitle}>html/css</h5>
                <div className={styles.progress}>
                  <div
                    className={styles.progressIn}
                    style={{ width: "85%" }}
                  ></div>
                  <div className={styles.skillPercent}>85%</div>
                </div>
              </div>
            </div>

            <div className={styles.skills}>
              <div className={styles.skillItem}>
                <h5 className={styles.skillsTitle}>sass</h5>
                <div className={styles.progress}>
                  <div
                    className={styles.progressIn}
                    style={{ width: "70%" }}
                  ></div>
                  <div className={styles.skillPercent}>70%</div>
                </div>
              </div>
            </div>

            <div className={styles.skills}>
              <div className={styles.skillItem}>
                <h5 className={styles.skillsTitle}>bootstrap</h5>
                <div className={styles.progress}>
                  <div
                    className={styles.progressIn}
                    style={{ width: "60%" }}
                  ></div>
                  <div className={styles.skillPercent}>60%</div>
                </div>
              </div>
            </div>
            <div className={styles.skills}>
              <div className={styles.skillItem}>
                <h5 className={styles.skillsTitle}>tailwind</h5>
                <div className={styles.progress}>
                  <div
                    className={styles.progressIn}
                    style={{ width: "50%" }}
                  ></div>
                  <div className={styles.skillPercent}>50%</div>
                </div>
              </div>
            </div>
            <div className={styles.skills}>
              <div className={styles.skillItem}>
                <p className={styles.skillsTitle}>javascript</p>
                <div className={styles.progress}>
                  <div
                    className={styles.progressIn}
                    style={{ width: "70%" }}
                  ></div>
                  <div className={styles.skillPercent}>70%</div>
                </div>
              </div>
            </div>
            <div className={styles.skills}>
              <div className={styles.skillItem}>
                <h5 className={styles.skillsTitle}>react js</h5>
                <div className={styles.progress}>
                  <div
                    className={styles.progressIn}
                    style={{ width: "65%" }}
                  ></div>
                  <div className={styles.skillPercent}>65%</div>
                </div>
                <button className={styles.downloadCv}>
                  Download CV <FontAwesomeIcon icon={faDownload} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
