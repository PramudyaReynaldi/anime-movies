import AnimeListCard from "@/components/AnimeListCard";
import AnimeListTitle from "@/components/AnimeListCard/AnimeListTile";

const Home = async () => {
    // Fetching API (top anime) (API diambil dari environment)
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
    );
    const topAnimeList = await res.json();

    return (
        <>
            <section className="home-container">
                <div className="">
                    <AnimeListTitle title="Popular " titleSpan="Anime" linkHref="/popular" linkText="See More" />
                    <AnimeListCard api={topAnimeList} />
                </div>
                <div>

                </div>
            </section>
        </>
    );
};

export default Home;
