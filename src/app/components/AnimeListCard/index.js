import Image from "next/image";

const AnimeListCard = ({ title, images }) => {
    return (
        <div className="top-anime-list text-xl">
            <Image src={images} width={300} height={300} alt={title} />
            <h3 className="font-bold p-4 md:text-lg text-sm">{title}</h3>
        </div>
    );
};

export default AnimeListCard;
