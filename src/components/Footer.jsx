function Footer(){
    return(
        <>
        <footer className="footer">
            <nav className="nav-bar-footer">
                <ul className="social-media">
                    <li className="social">
                        <a href="https://www.instagram.com/" className="text">Instagram</a>
                        <i className="bi bi-instagram"></i>
                    </li>
                    <li className="social">
                        <a href="https://www.facebook.com/?locale=es_LA" className="text">Facebook</a>
                        <i className="bi bi-facebook"></i>
                    </li>
                    <li className="social">
                        <a href="https://x.com/?logout=1717649955062" className="text">X(Twitter)</a>
                        <i className="bi bi-twitter-x"></i>
                    </li>
                    <li className="social">
                        <span className="text">WhatsApp</span>
                        <i className="bi bi-whatsapp"></i>
                    </li>
                </ul>
                <ul className="options">
                    <li className="option">
                        <a href="#">Sobre nosotros</a>
                    </li>
                    <li className="option">
                        <a href="#">Preguntas frequentes</a>
                    </li>
                    <li className="option">
                        <a href="#">Contactanos</a>
                    </li>
                </ul>
            </nav>
        </footer>
        </>
    )
}

export default Footer