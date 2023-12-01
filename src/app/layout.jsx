import { Mulish } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata = {
    title: "Anime Movies",
    description: "Film anime terbaik dan terpopuler di Indonesia",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={mulish.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
