import { Oswald } from "next/font/google";
import Link from "next/link";

// Init Oswald font
const oswald = Oswald({ subsets: ["latin"] });

const AnimeListTitle = ({ title, titleSpan, linkHref, linkText }) => {
    return (
        <div className="container">
            <div className={`flex justify-between items-center p-6 pb-0 md:flex-row lg:flex-row`}>
                <div className="text-text-title font-extrabold text-primary-color anime-title ps-2">
                    <h5 className={oswald.className}><span className="text-secondary-color">{title}</span>{titleSpan}</h5>
                </div>
                <Link href={linkHref} className="text-sm hover-link text-primary-color">
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default AnimeListTitle;
