import { NavLink } from "react-router-dom";
import styles from "../styles/Navigation.module.css";
import ProfileImage from "../assets/myPhoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "About Me", to: "/about-me", id: 2 },
    { name: "Resume", to: "/resume", id: 3 },
    { name: "Projects", to: "/projects", id: 4 },
    { name: "Contact", to: "/contact", id: 5 },
  ];
  return (
    <header className={styles.header}>
      <img className={styles.profileImage} src={ProfileImage} alt="Profile" />
      <h3 className={styles.name}>Hendri Zeneli</h3>
      <nav className={styles.container}>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive ? styles.active : undefined
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
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
    </header>
  );
};

export default Navigation;
