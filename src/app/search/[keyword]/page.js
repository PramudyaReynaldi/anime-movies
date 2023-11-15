import AnimeListCard from "@/components/AnimeListCard";
import AnimeListTitle from "@/components/AnimeListCard/AnimeListTile";

const Page = async ({ params }) => {
    const { keyword } = params;
    // atau
    // const keyword = params.keyword;

    // Fetching API search anime
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
    );

    const searchAnime = await res.json();
    if(keyword === "") {
        return (
            <>
                <section className="home-container">
                    <AnimeListTitle title="Anime Tidak Ditemukan" linkHref="/popular" linkText="See More" />
                </section>
            </>
        );
    }

    return (
        <>
            <section className="home-container">
                <AnimeListTitle title={`Pencarian dari anime ${keyword} ...`} linkHref="/popular" linkText="See More" />
                <AnimeListCard api={searchAnime} />
            </section>
        </>
    );
};

export default Page;