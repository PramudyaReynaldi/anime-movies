import { Inter } from "next/font/google";
import Navbar from "@/components/utils/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Anime Movies",
    description: "Film anime terbaik dan terpopuler di Indonesia",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
