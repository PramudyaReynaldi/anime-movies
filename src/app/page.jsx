import AnimeListCard from "@/components/AnimeListCard";
import AnimeListTitle from "@/components/AnimeListCard/AnimeListTile";
import { getAnimeApi } from "@/libs/api-libs";

const Home = async () => {
    // Fetching API (top anime) (API diambil dari environment)
    const topAnimeList = await getAnimeApi("top/anime", "limit=10");

    return (
        <>
            <section className="home-container">
                <AnimeListTitle title="POPULAR " titleSpan="ANIME" linkHref="/popular" linkText="See More" />
                <AnimeListCard api={topAnimeList} />
            </section>
        </>
    );
};

export default Home;
