import AnimeListCard from "@/components/AnimeListCard";
import AnimeListTitle from "@/components/AnimeListCard/AnimeListTile";

const Page = async ({ params }) => {
    const { keyword } = params; // atau const keyword = params.keyword;
    const encodedKeyword = encodeURIComponent(keyword);  // Mengonversi nilai keyword menggunakan encodeURIComponent

    // Fetching API search anime
    const res = await fetch( 
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${encodedKeyword}`
    );

    const searchAnime = await res.json();
    const decodedKeyword = decodeURIComponent(keyword); // Memastikan nilai 'keyword' di decode sebelum digunakan dalam URL

    if(decodedKeyword === "") {
        return (
            <section className="home-container">
                <AnimeListTitle title="Anime Tidak Ditemukan" linkHref="/popular" linkText="See More" />
            </section>
        );
    }

    return (
        <section className="home-container">
            <AnimeListTitle title={`Pencarian dari anime ${decodedKeyword} ...`} linkHref="/popular" linkText="See More" />
            <AnimeListCard api={searchAnime} />
        </section>
    );
};

export default Page;