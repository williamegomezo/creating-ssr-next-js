import SvgIcon from "components/svgIcon";
import css from "./index.scss";

function SearchBar(props) {
  const { placeholder } = props;
  return (
    <div className={css.searchBar}>
      <div className={css.searchIcon}>
        <SvgIcon iconName="search" />
      </div>
      <input className={css.searchInput} placeholder={placeholder} />
    </div>
  );
}

export default SearchBar;
