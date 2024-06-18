/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Modal from './Modal.jsx'
import Login from "./Login.jsx"
import { useState } from "react"

function NavBar({ isVisible, isHidden }){

    const [modal, setModal] = useState(false)
    return(
    <>
    
    <nav className="nav-bar" style={{ visibility: isVisible ? 'visible' : 'hidden'}}>
        <button type="button" className="close-menu" onClick={isHidden}>
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
                <button type="button" className="login" onClick={ () => setModal(true) }>Registro clientes</button>
                <Modal isOpen={modal} onClose={ () => setModal(false) } titleTop={'INICIAR SESION'}>
                    <Login></Login>
                </Modal>
            </li>
        </ul>
    </nav>
    </>
    )
}

export default NavBar