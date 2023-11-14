import Image from "next/image";

const AnimeListCard = ({ title, images, rate }) => {
    return (
        <div className="top-anime-list text-xl">
            <div className="top-anime-header">
                <Image src={images} width={300} height={300} alt={title} rate={rate} />
                <div className="p-4">
                    <h3 className="font-bold md:text-md text-sm break-words">{title}</h3>
                    <p className="text-sm">Rate: {rate}</p>
                </div>
            </div>
        </div>
    );
};

export default AnimeListCard;
