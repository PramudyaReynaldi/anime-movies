export const getAnimeApi = async(resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const animeData = await response.json();

    return animeData;
}

