import { ChangeEvent, useRef, useState } from "react";
import SearchIcon from "../../../assets/icons/white_search.svg";
import useDebouncedCallback from "../../hooks/useDebouncedCallback";
interface SearchProps {
  onSearch: (searchTest: string) => void;
}
const Search = ({ onSearch }: SearchProps) => {
  const searchInput = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (!searchInput.current) return;
    onSearch(searchInput.current.value);
  };

  return (
    <div className="Search">
      <input ref={searchInput} placeholder="Search for notes" />
      <button className="no-style-button" onClick={handleSearch}>
        <img alt="search-icon" src={SearchIcon} />
      </button>
    </div>
  );
};

export default Search;
