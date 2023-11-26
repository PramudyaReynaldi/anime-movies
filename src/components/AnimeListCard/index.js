import Image from "next/image";
import Link from "next/link";

const AnimeListCard = ({ api }) => {
    return (
        <div className="container">
            <div className="top-anime-list text-xl">
                <div className="top-anime-header">
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-5 p-5">
                        {api && api.data && api.data.map((anime) => (
                            <div className="top-anime-hover shadow-xl" key={anime.mal_id}>
                                <Link href={`/${anime.mal_id}`}>
                                    <Image
                                        src={anime.images.webp.image_url}
                                        width={300}
                                        height={300}
                                        alt={anime.title}
                                    />
                                    <div className="p-4">
                                        <h3 className="font-bold md:text-md text-sm break-words text-primary-color">
                                            {anime.title}
                                        </h3>
                                        <p className="text-sm text-primary-color">Rate: {anime.score}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimeListCard;
