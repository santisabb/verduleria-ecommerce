import { Link } from "react-router-dom"

function Footer(){
    return(
        <>
        <footer className="footer">
            <nav className="nav-bar-footer">
                <ul className="social-media">
                    <li className="social">
                        <Link to="https://www.instagram.com/" className="text">Instagram</Link>
                        <i className="bi bi-instagram"></i>
                    </li>
                    <li className="social">
                        <Link to="https://www.facebook.com/?locale=es_LA" className="text">Facebook</Link>
                        <i className="bi bi-facebook"></i>
                    </li>
                    <li className="social">
                        <Link to="https://x.com/?logout=1717649955062" className="text">X(Twitter)</Link>
                        <i className="bi bi-twitter-x"></i>
                    </li>
                </ul>
                <ul className="options">
                    <li className="option">
                        <Link to="#">Preguntas frequentes</Link>
                    </li>
                    <li className="option">
                        <Link to="#">Contactanos</Link>
                    </li>
                </ul>
            </nav>
        </footer>
        </>
    )
}

export default Footer