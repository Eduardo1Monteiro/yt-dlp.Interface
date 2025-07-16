import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./SearchBar.css";
import magnifyingGlass from '../../assets/magnifying_glass_transparent.png';
function SearchBar(props) {
    return (_jsxs("div", { className: "searchBarContainer", children: [_jsx("input", { className: "searchBar", type: "text", placeholder: props.placeholderText }), _jsx("button", { className: "searchBarButton", children: _jsx("img", { src: magnifyingGlass, alt: "Search" }) })] }));
}
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map