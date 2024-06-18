import NavBar from "./NavBar.jsx"
import ShopCardButton from "./ShopCardButton.jsx"
import Logo from "./Logo.jsx"
import Button from './Button.jsx'
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
            <ShopCardButton></ShopCardButton>
        </header>
        </>
    )
}