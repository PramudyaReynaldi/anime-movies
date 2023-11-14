import AnimeListCard from "@/app/components/AnimeListCard";
import Navbar from "@/app/components/Navbar";

const Home = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
    );
    const topAnimeList = await res.json();

    return (
        <>
            <div className="home-container">
                <header className="navbar-container shadow-2xl p-3">
                    <div className="navbar-wrapper">
                        <Navbar />
                    </div>
                </header>
                <div>Popular Anime</div>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 grid-cols-2 gap-4">
                    {topAnimeList.data.map((data) => (
                        <div key={data.mal_id} className="shadow-xl p-4">
                            <AnimeListCard
                                title={data.title}
                                images={data.images.webp.image_url}
                                rate={data.score}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;
