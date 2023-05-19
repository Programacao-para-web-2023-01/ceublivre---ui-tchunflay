import { MdSearch } from "react-icons/md";

export function SearchBar() {

    return (
        <form className="flex flex-row">
            <input className="w-[831px] h-[55px] pl-3 text-lg focus:outline-none" placeholder="Encontre já o seu produto"/>
            <div className="search-button">
            <button type="submit">
                <MdSearch size={36} color="#9D278B"/>
            </button>
            </div>
        </form>
    );
}