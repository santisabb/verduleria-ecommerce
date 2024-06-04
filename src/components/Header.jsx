export function Header(){
    return(
        <>
        <header className="header">
            <div className="logo">
                <img src="https://th.bing.com/th/id/OIG3.2fzho3I0UskKl3j9l4pZ?pid=ImgGn" alt="" className="logo-img"/>
                <h1>Verduleria</h1>
            </div>
            <nav className="nav-bar">
                <ul className="menu">
                    <li className="menu-item">
                        <a href="#">opcion1</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">opcion1</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">opcion1</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">opcion1</a>
                    </li>
                </ul>
                <div className="open-menu">
                    <i className="bi bi-list"></i>
                </div>
                <div className="shop-card">
                    <i className="bi bi-cart-fill"></i>
                </div>
            </nav>
        </header>
        </>
    )
}