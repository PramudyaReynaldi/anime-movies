import AnimeListCard from "@/components/AnimeListCard";
import AnimeListTitle from "@/components/AnimeListCard/AnimeListTile";
import Slider from "@/components/Slider";

const Home = async () => {
    // Fetching API (top anime) (API diambil dari environment)
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=10`
    );
    const topAnimeList = await res.json();

    return (
        <>
            <section className="home-container">
                <Slider />
                <AnimeListTitle title="POPULAR " titleSpan="ANIME" linkHref="/popular" linkText="See More" />
                <AnimeListCard api={topAnimeList} />
            </section>
        </>
    );
};

export default Home;
