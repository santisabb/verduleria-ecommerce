import NavBar from "./NavBar.jsx"
import ShopCard from "./ShopCard.jsx"
import Logo from "./Logo.jsx"
import { useState } from "react"

export function Header(){
    const [visible, setVisible] = useState(true)


    return(
        <>
        <header className="header">
            <Logo></Logo>
            <button className="open-menu" onClick={() => setVisible(true)}>
                <i className="bi bi-list"></i>
            </button>
            <NavBar isVisible={visible} isHidden={ () => setVisible(false) }></NavBar>
            <ShopCard></ShopCard>
        </header>
        </>
    )
}