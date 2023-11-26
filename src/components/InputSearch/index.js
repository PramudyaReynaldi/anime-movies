// components/InputSearch.js
import { MagnifyingGlass } from "@phosphor-icons/react";

const InputSearch = ({ value, onChange, placeholder, onClick, onKeyDown }) => {
    return (
        <div className="md:my-0 lg:my-0 my-3 flex items-center p-2 rounded-md">
            <input
                type="search"
                placeholder={placeholder}
                className="outline-none p-2 rounded-md"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick} className="ms-2">
                <MagnifyingGlass size={20} className="text-primary-color" />
            </button>
        </div>
    );
};

export default InputSearch;
