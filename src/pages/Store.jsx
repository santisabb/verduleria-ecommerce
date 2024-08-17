import Card, {CardBodyVertical} from "../components/ProductCard.jsx" 
import products from '../mocks/products.json'


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
                    <li><a className="dropdown-item active" href="#">Por defecto</a></li>
                    <li><a className="dropdown-item" href="#">Populares</a></li>
                    <li><a className="dropdown-item" href="#">Más nuevos</a></li>
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
            {
                products.map((product) => {
                    return(
                        <Card key={product.id} img={product.image_url}>
                            <CardBodyVertical name={product.product_name} price={product.price}/>
                        </Card>
                    )
                    
                })
            }
            
        </div>
        </>
    )
}

export default Store