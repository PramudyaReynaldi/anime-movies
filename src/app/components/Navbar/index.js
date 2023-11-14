import InputSearch from "../InputSearch";

const Navbar = () => {
    return (
        <div className="flex md:flex-row lg:flex-row flex-col justify-around items-center">
            <h2 className="text-3xl font-bold">Anime<span className="text-red-500">Movie</span></h2>
            <InputSearch />
        </div>
           
    )
}

export default Navbar;