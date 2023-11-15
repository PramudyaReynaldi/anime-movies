"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import InputSearch from "../../InputSearch";

const Navbar = () => {
    // Mengakses nilai dari element input yang terkait dengan search
    const searchRef = useRef();
    const router = useRouter();
    
    const handleSearch = (event) => {
        event.preventDefault();
        // Mengambil value dari input (useRef())
        const keyword = searchRef.current.value;

        const destination = keyword === "" ? '/' : `/search/${keyword}`;
        keyword === "" ? alert("Masukkan kata kunci") : router.push(destination);
    }
    
    return (
        <header className="bg-white">
            <div className="flex md:flex-row lg:flex-row flex-col justify-between items-center p-5 shadow-xl">
                <h2 className="text-3xl font-bold text-black">Anime<span className="text-red-500">Movie</span></h2>
                <InputSearch fowardRef={searchRef} placeholder="Search..." onClick={handleSearch} />
            </div>
        </header>
           
    )
}

export default Navbar;