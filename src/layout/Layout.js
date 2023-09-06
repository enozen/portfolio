import { useState } from "react";
import styles from "../styles/Layout.module.css";
import Navigation from "../components/Navigation";
const Layout = ({ children }) => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <div className={styles.layout}>
      <div>
        <Navigation />
      </div>
      <main className={styles.mainLayout}>{children}</main>
      <div
        className={styles.cursor}
        style={{
          left: cursorX + "px",
          top: cursorY + "px",
        }}
      ></div>
    </div>
  );
};

export default Layout;
