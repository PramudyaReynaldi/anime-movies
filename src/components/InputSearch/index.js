// components/InputSearch.js
import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = ({ value, onChange, placeholder, onClick }) => {
    return (
        <div className="border md:my-0 lg:my-0 my-3 flex items-center p-2 rounded-md">
            <input
                type="search"
                placeholder={placeholder}
                className="outline-none px-2"
                value={value}
                onChange={onChange} // Update added here
            />
            <button onClick={onClick}>
                <MagnifyingGlass size={20} />
            </button>
        </div>
    );
};

export default InputSearch;
