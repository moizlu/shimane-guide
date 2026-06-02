"use client"

import clsx from "clsx";
import { useEffect } from "react";

// import styles from "./SplashScreen.module.css";
import { useSplashStore } from "@/store";

import LoadingAnimation from "@/components/ui/LoadingAnimation";

const SplashScreen = () => {
    const { splashAppeared, setSplashAppeared } = useSplashStore();

    useEffect(() => {
        setTimeout(() => {
            setSplashAppeared(false);
        }, 300);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={clsx("z-100000 transition-all duration-600 fixed top-0 left-0 w-full h-full bg-base flex flex-col justify-center items-center", (!splashAppeared) && "translate-x-100 opacity-0 pointer-events-none")}>
            <LoadingAnimation />
            <p className="text-xl font-light">Now Loading...</p>
        </div>
    );
};

export default SplashScreen;
