import "./SearchBar.css";
import magnifyingGlass from '../../assets/magnifying_glass_transparent.png'

function SearchBar(props: { placeholderText: string }) {
  return (
    <div className="searchBarContainer">
      <input className="searchBar" type="text" placeholder={props.placeholderText} />
      <button className="searchBarButton">
        <img src={magnifyingGlass} alt="Search" />
      </button>
    </div>
  );
}

export default SearchBar;
