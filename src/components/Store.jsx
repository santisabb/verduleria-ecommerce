import Card from "./ProductCard.jsx" 
import fruta from '../assets/images/fruta.jpg'


function Store(){
    return(
        <>
        <h2 className="store-title">Tienda</h2>
        <section className="categories-nav">
            <nav className="nav">
                <ul className="menu">
                    <li className="cat">
                        <a href="#">Frutas de la finca</a>
                    </li>
                    <li className="cat">
                        <a href="#">Frutas de la tierra</a>
                    </li>
                    <li className="cat">
                        <a href="#">Frutos secos</a>
                    </li>
                    <li className="cat">
                        <a href="#">Otros productos</a>
                    </li>
                </ul>
            </nav>
        </section>
        <section className="filters">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Ordenar productos
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item active" href="#">por defecto</a></li>
                    <li><a className="dropdown-item" href="#">por popularidad</a></li>
                    <li><a className="dropdown-item" href="#">por mas nuevos</a></li>
                </ul>
            </div>
            <div className="search-section">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            </div>
        </section>
        <div className="card-container">
            <Card nombre={'Nombre + x cantidad'} precio={2500} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={2322} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={323223} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={2332} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={2500} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={2500} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={2500} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={2500} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={323223} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={323223} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={323223} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={2322} img={fruta}></Card>
            <Card nombre={'Nombre + x cantidad'} precio={2322} img={fruta}></Card>

        </div>
        </>
    )
}

export default Store