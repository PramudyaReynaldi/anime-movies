import Link from "next/link";

const AnimeListTitle = ({ title, titleSpan, linkHref, linkText }) => {
    return (
        <div className="flex justify-between items-center p-6 pb-0">
            <div className="text-xl font-bold">
                <span className="text-red-500">{title}</span>{titleSpan}
            </div>
            <Link href={linkHref} className="text-sm hover-link">
                {linkText}
            </Link>
        </div>
    );
};

export default AnimeListTitle;