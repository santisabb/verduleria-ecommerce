export default function SearchBar() {
    return (
    <div className="search-section">
        <form className="d-flex" role="search">
            <label htmlFor="">Buscar productos</label>
            <input className="form-control me-2" type="search" placeholder="Manzana" aria-label="Search"></input>
            <button className="btn btn-outline-success" type="submit">
                <i className="bi bi-search"></i>
            </button>
        </form>
    </div>
    )
}
