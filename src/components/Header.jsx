import NavBar from "./NavBar.jsx"
import Logo from "./Logo.jsx"
import Button from './Button.jsx'
import { Link } from "react-router-dom"
import { useState } from "react"

export function Header(){
    const [visible, setVisible] = useState(true)


    return(
        <>
        <header className="header">
            <Logo></Logo>
            <Button style={'open-menu'} aFunction={() => setVisible(true)}>
                <i className="bi bi-list"></i>
            </Button>
            <NavBar isVisible={visible} isHidden={ () => setVisible(false) }></NavBar>
            <Link to='/carrito' className='shop-card-button'>
                <i className="bi bi-cart-fill"></i>
                <span className="shop-count">0</span>
            </Link>
        </header>
        </>
    )
}