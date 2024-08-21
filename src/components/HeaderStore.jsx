import Filters from "./Filters.jsx"
import SearchBar from "./SearchBar.jsx"
export default function HeaderStore() {
  return (
    <header>
        <h2 className="store-title">Tienda</h2>
        <Filters />
        <SearchBar />
    </header>
  )
}
