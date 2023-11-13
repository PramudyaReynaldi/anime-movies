import AnimeListCard from "@/app/components/AnimeListCard";

const Home = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
    );
    const topAnimeList = await res.json();

    return (
        <>
            <div>Popular Anime</div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4">
                {topAnimeList.data.map((data) => (
                    <div key={data.mal_id} className="shadow-xl p-4">
                        <AnimeListCard
                            title={data.title}
                            images={data.images.webp.image_url}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
