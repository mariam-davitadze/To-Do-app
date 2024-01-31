import SearchIcon from "../../../assets/icons/white_search.svg";

const Search = () => {
  return (
    <div className="Search">
      <input placeholder="Search for notes" />
      <button className="no-style-button">
        <img alt="search-icon" src={SearchIcon} />
      </button>
    </div>
  );
};

export default Search;
