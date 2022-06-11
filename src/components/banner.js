import React from 'react';
import styles from "./banner.module.css";
import banner from "../images/banner2.jpg";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="Banner" />
            <div className={styles.textContainer}>
                <h1>Mobile Shop</h1>
                <p>We have <span>mobile phone</span> for all you need</p>
            </div>
        </div>
    );
};

export default Banner;