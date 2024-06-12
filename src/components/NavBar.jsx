import { Link } from "react-router-dom"

function NavBar(){
    return(
    <>
    <button className="open-menu">
            <i className="bi bi-list"></i>
    </button>
    <nav className="nav-bar">
        <button className="close-menu">
            <i className="bi bi-x-circle-fill"></i>
        </button>
        <ul className="menu">
            <li className="menu-item">
                <Link to="/">Inicio</Link>
            </li>
            <li className="menu-item">
                <Link to="/store">Tienda</Link>
            </li>
            <li className="menu-item">
                <Link to="/FAQs">Preguntas frecuentes</Link>
            </li> 
            <li className="menu-item">
                <Link to="#">Registro clientes</Link>
            </li>
        </ul>
    </nav>
    </>
    )
}

export default NavBar