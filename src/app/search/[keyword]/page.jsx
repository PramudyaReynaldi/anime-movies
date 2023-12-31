import AnimeListCard from "@/components/AnimeListCard";
import AnimeListTitle from "@/components/AnimeListCard/AnimeListTile";
import { getAnimeApi } from "@/libs/api-libs";

const Page = async ({ params }) => {
    const { keyword } = params; // atau const keyword = params.keyword;
    const encodedKeyword = encodeURIComponent(keyword); // Mengonversi nilai keyword menggunakan encodeURIComponent

    // Fetching API search anime
    const searchAnime = await getAnimeApi("anime",`q=${encodedKeyword}`);

    const decodedKeyword = decodeURIComponent(keyword); // Memastikan nilai 'keyword' di decode sebelum digunakan dalam URL

    if (!searchAnime.data) {
        return (
            <section className="home-container">
                <AnimeListTitle
                    title="Anime Tidak Ditemukan"
                    linkHref="/popular"
                    linkText="See More"
                />
            </section>
        );
    } else {
        return (
            <section className="home-container">
                <AnimeListTitle
                    title={`Pencarian dari anime `}
                    titleSpan={`${decodedKeyword} ...`}
                    linkHref="/popular"
                />
                <AnimeListCard api={searchAnime} />
            </section>
        );
    }
};

export default Page;
