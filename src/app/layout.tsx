import type { Metadata } from "next";
import "./globals.css";

import ModalWindowEntryPoint from "@/components/ui/ModalWindow";

import SplashScreen from "@/components/sections/SplashScreen";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero/Hero";

export const metadata: Metadata = {
    title: "島根県ガイド",
    description: "",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <html lang="ja" className="h-full antialiased bg-base text-label">
            <body className="min-h-full flex flex-col">
                <main>
                    <ModalWindowEntryPoint />
                    <SplashScreen />
                    <Header />
                    <div className="mt-15">
                        <Hero />
                        {children}
                        <Footer />
                    </div>
                </main>
            </body>
        </html>
    );
}

export default RootLayout;
