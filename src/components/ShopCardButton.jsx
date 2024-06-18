import Button from "./Button.jsx"
import Modal from "./Modal.jsx"
import ShopCart from "./ShopCart.jsx"
import { useState } from "react"

function ShopCardButton(){

    const [modal, setModal] = useState(false)

    return(
        <>
        <div className="shop-card">
            <Button style={"shop-button"} aFunction={ () => setModal(true)}>
                <i className="bi bi-cart-fill"></i>
            </Button>
            <span className="counter">0</span>
            <Modal isOpen={modal} onClose={ () => setModal(false) } titleTop={'Carrito'} className={'shop-cart-container'}>
                <ShopCart />
            </Modal>
        </div>
        </>
    )
}

export default ShopCardButton