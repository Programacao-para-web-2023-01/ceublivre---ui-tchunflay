import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { MdSearch } from "react-icons/md";


export function SearchBar() {
    const [inputSearch, setInputSearch] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputSearch(event.currentTarget.value);    
      };

    return (
        <form className="flex flex-row">
            <input name="search"  onChange={handleChange}
            value={inputSearch} className="w-[831px] h-[55px] pl-3 text-lg focus:outline-none" placeholder="Encontre já o seu produto"/>
            <div className="search-button">
            <Link href={{pathname: '/products', query: {name: inputSearch}}}>
                <MdSearch size={36} color="#9D278B"/>
            </Link>
            </div>
        </form>
    );
}