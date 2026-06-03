"use client"

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { useCategoryNavigator } from "@/hooks";
import { greet } from "@/utils";
import Articles from "@/components/ui/Articles";

const Home = () => {
    const categoryNavigator = useCategoryNavigator();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.get("category") === null) {
            categoryNavigator("all")();
        }
    }, [searchParams, categoryNavigator]);

    useEffect(() => {
        greet();
    }, [])

    return (
        <div className="w-full h-full pb-20 min-h-dvh">
            <Articles />
        </div>);
}

export default Home;
