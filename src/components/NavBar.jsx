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
                <a href="#">Inicio</a>
            </li>
            <li className="menu-item">
                <a href="#">Tienda</a>
            </li>
            <li className="menu-item">
                <a href="#">Categorias</a>
            </li>
            <li className="menu-item">
                <a href="#">Registro clientes</a>
            </li>
        </ul>
    </nav>
    </>
    )
}

export default NavBar