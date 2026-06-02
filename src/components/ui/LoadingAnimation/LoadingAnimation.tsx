"use client"

import styles from "./LoadingAnimation.module.css";

const LoadingAnimation = () => {
    return (
        <div className="container w-50 h-5 flex flex-row-reverse justify-center items-center gap-2">
            <div className={styles.dot}></div>
            {/* <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div> */}
        </div>
    );
};

export default LoadingAnimation;
