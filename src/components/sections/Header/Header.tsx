'use client';

import Image from "next/image";
import Link from "next/link";

import clsx from "clsx";

import styles from "./Header.module.css";
import { useCategoryNavigator } from "@/hooks";
import { CategoryNames } from "@/types";
import { useCategoryStore } from "@/store";

const Header = () => {
    const categoryNavigator = useCategoryNavigator();
    const { category } = useCategoryStore();

    return (
        <>
            <header className="z-1000 fixed top-0 left-0 w-full h-15 px-2 bg-base/50 backdrop-blur-sm flex justify-between items-center">
                <Link href="/" className="flex justify-center items-center">
                    <Image src="/logo.svg" alt="logo" width={500} height={500} className="w-15 h-15" />
                    <p className="text-3xl font-bol font-serif">島根県ガイド</p>
                </Link>
            </header>

            <nav>
                <div className={clsx(styles.sectionButton, "fixed px-2 max-md:pb-5 w-full md:max-w-150 right-0 max-md:bottom-0 md:top-2 flex justify-center items-center gap-2 max-md:bg-base/50 max-md:backdrop-blur-sm z-1000")}>
                    <button onClick={categoryNavigator("all")} className={clsx((category === "all") && styles.activeButton)}><p>{CategoryNames["all"]}</p></button>
                    <button onClick={categoryNavigator("history")} className={clsx((category === "history") && styles.activeButton)}><p>{CategoryNames["history"]}</p></button>
                    <button onClick={categoryNavigator("foods")} className={clsx((category === "foods") && styles.activeButton)}><p>{CategoryNames["foods"]}</p></button>
                    <button onClick={categoryNavigator("sightseeing")} className={clsx((category === "sightseeing") && styles.activeButton)}><p>{CategoryNames["sightseeing"]}</p></button>
                </div>
            </nav>
        </>
    );
};

export default Header;
