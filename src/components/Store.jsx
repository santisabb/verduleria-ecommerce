import Card from "./ProductCard.jsx" 


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
            <Card nombre={'Filada'} precio={2500} img={'https://i.pinimg.com/236x/30/af/fc/30affc5dba47e00b8ee0b46c6b8bb09d.jpg'}></Card>
            <Card nombre={'En Bloque'} precio={2322} img={'https://i.pinimg.com/236x/ee/61/61/ee61617b57b20f98d0b93e240fc99340.jpg'}></Card>
            <Card nombre={'Trapecio'} precio={323223} img={'https://i.pinimg.com/236x/df/80/55/df8055c618d9bc36d86fa04889b9ee97.jpg'}></Card>
            <Card nombre={'Gilada'} precio={2332} img={'https://i.pinimg.com/236x/ac/30/d6/ac30d6db4e937f3e60141f427bf065aa.jpg'}></Card>
            <Card nombre={'Filada'} precio={2500} img={'https://i.pinimg.com/236x/30/af/fc/30affc5dba47e00b8ee0b46c6b8bb09d.jpg'}></Card>
            <Card nombre={'Filada'} precio={2500} img={'https://i.pinimg.com/236x/30/af/fc/30affc5dba47e00b8ee0b46c6b8bb09d.jpg'}></Card>
            <Card nombre={'Filada'} precio={2500} img={'https://i.pinimg.com/236x/30/af/fc/30affc5dba47e00b8ee0b46c6b8bb09d.jpg'}></Card>
            <Card nombre={'Filada'} precio={2500} img={'https://i.pinimg.com/236x/30/af/fc/30affc5dba47e00b8ee0b46c6b8bb09d.jpg'}></Card>
            <Card nombre={'Trapecio'} precio={323223} img={'https://i.pinimg.com/236x/df/80/55/df8055c618d9bc36d86fa04889b9ee97.jpg'}></Card>
            <Card nombre={'Trapecio'} precio={323223} img={'https://i.pinimg.com/236x/df/80/55/df8055c618d9bc36d86fa04889b9ee97.jpg'}></Card>
            <Card nombre={'Trapecio'} precio={323223} img={'https://i.pinimg.com/236x/df/80/55/df8055c618d9bc36d86fa04889b9ee97.jpg'}></Card>
            <Card nombre={'En Bloque'} precio={2322} img={'https://i.pinimg.com/236x/ee/61/61/ee61617b57b20f98d0b93e240fc99340.jpg'}></Card>
            <Card nombre={'En Bloque'} precio={2322} img={'https://i.pinimg.com/236x/ee/61/61/ee61617b57b20f98d0b93e240fc99340.jpg'}></Card>

        </div>
        </>
    )
}

export default Store