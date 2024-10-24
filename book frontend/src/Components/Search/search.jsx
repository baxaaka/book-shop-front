import "./search.css";
import search_img from "../../assets/search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ setBookSearch }) => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  // console.log(query);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      window.location.replace(`/books/?search_book=${encodeURIComponent(query)}`);


    }
  };

  const handleSearch = () => {
    setBookSearch(query);
    navigate(`?search_book=${encodeURIComponent(query)}`);
    window.location.replace(`/books/?search_book=${encodeURIComponent(query)}`);
  };

  return (
    <div className="search">
      <div className="search_container">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Kitob qidirish"
        />
        <button onClick={handleSearch}>
          <img src={search_img} alt="Search" />
        </button>
      </div>
    </div>
  );
};

export default Search;
