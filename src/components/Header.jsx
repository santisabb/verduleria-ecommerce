import NavBar from "./NavBar.jsx"
import ShopCard from "./ShopCard.jsx"
import Logo from "./Logo.jsx"

export function Header(){
    return(
        <>
        <header className="header">
            <Logo></Logo>
            <ShopCard></ShopCard>
            <NavBar></NavBar>
        </header>
        </>
    )
}