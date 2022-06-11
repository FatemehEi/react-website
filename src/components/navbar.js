import React from 'react';
import logo from "../images/logo.png";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home Page</li>
                    <li>Products</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div>
                <img className={styles.logo} src={logo} alt="Logo" />
            </div>
        </header>
    );
};

export default Navbar;