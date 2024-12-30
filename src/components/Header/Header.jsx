import React from 'react';
import styles from "./Header.module.css";
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <nav className={styles.Header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="contact">Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
}
