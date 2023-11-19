"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputSearch from "@/components/InputSearch";
import debounce from "lodash/debounce";
import Link from "next/link";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    // const searchRef = useRef();

    // Debounce the handleSearch function to avoid making too many requests
    const debouncedSearch = debounce((query) => handleSearch(query), 300);

    const handleSearch = (query) => {
        const keyword = query.trim(); // Remove leading and trailing whitespaces
        const destination =
            keyword === "" ? "/" : `/search/${encodeURIComponent(keyword)}`;

        if (keyword !== "") return router.push(destination);
    };

    const handleChange = (e) => {
        const newQuery = e.target.value;
        setSearchQuery(newQuery);
        debouncedSearch(newQuery);
    };
   
    return (
        <header className="bg-white">
            <div className="flex md:flex-row lg:flex-row flex-col justify-between items-center p-5 shadow-xl">
                <Link href="/" className="text-3xl font-bold text-black">
                    Anime<span className="text-red-500">Movie</span>
                </Link>
                <InputSearch
                    value={searchQuery}
                    onChange={handleChange}
                    placeholder="Search..."
                    onClick={() => debouncedSearch(searchQuery)}
                />
            </div>
        </header>
    );
};

export default Navbar;
