import Filters from "./Filters.jsx"
import SearchBar from "./SearchBar.jsx"
export default function HeaderStore({ changeFilters }) {
  return (
    <header className="header-store">
        <Filters onChange={changeFilters} />
        <SearchBar />
    </header>
  )
}
