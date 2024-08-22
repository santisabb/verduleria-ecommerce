import Filters from "./Filters.jsx"
import SearchBar from "./SearchBar.jsx"
export default function HeaderStore() {
  return (
    <header className="header-store">
        <Filters />
        <SearchBar />
    </header>
  )
}
