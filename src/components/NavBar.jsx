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
                <a href="#">Frutas</a>
            </li>
            <li className="menu-item">
                <a href="#">Verduras</a>
            </li>
            <li className="menu-item">
                <a href="#">Frutos secos</a>
            </li>
            <li className="menu-item">
                <a href="#">Productos de almacen</a>
            </li>
        </ul>
    </nav>
    </>
    )
}

export default NavBar