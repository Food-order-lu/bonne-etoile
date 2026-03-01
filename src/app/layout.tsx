import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "BONNE ÉTOILE | Restaurant Gastronomique à Ettelbruck",
    description: "Restaurant Bonne étoile à Ettelbruck : découvrez notre cuisine raffinée et authentique. Un cadre élégant pour vos repas d'exception. Réservez votre table dès maintenant !",
    keywords: "restaurant Ettelbruck, gastronomie Luxembourg, Bonne étoile, cuisine raffinée, restaurant élégant, réservation table Ettelbruck",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
