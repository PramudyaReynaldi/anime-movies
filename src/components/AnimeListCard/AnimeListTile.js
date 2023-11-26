import Link from "next/link";

const AnimeListTitle = ({ title, titleSpan, linkHref, linkText }) => {
    return (
        <div className="container">
            <div className="flex justify-between items-center p-6 pb-0">
                <div className="text-text-title font-bold text-primary-color anime-title ps-2">
                    <h5 className="font-oswald"><span className="text-secondary-color">{title}</span>{titleSpan}</h5>
                </div>
                <Link href={linkHref} className="text-sm hover-link text-primary-color">
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default AnimeListTitle;
