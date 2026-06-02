"use client";

import clsx from "clsx";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={clsx(styles.heroImage, "p-2 h-100 flex justify-end items-center text-nowrap")}>
            <div className="flex justify-center items-center text-4xl sm:text-6xl md:text-9xl h-[1em] overflow-hidden">
                <ul className={clsx(styles.ticker, "text-right text-base-light text-2xl sm:text-4xl md:text-6xl lg:text-7xl h-[1em] overflow-hidden font-serif flex flex-col justify-center items-end")}>
                    <li>神々の国</li>
                    <li>鳥取の左側</li>
                    <li>ご縁の国</li>
                    <li>美肌県</li>
                    <li>いいけん</li>
                </ul>
                <span className="text-base-light text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-serif">、</span>
                <span className="sm:-ml-5 lg:-ml-10 text-base-light font-serif">島根県</span>
            </div>
        </div>
    )
}

export default Hero;
