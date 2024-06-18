import Modal from "./Modal.jsx"
import { useState } from "react"

function ShopCardButton(){

    const [modal, setModal] = useState(false)

    return(
        <>
        <div className="shop-card">
            <button type="button" className="shop-button" onClick={ () => setModal(true)}>
                <i className="bi bi-cart-fill"></i>
            </button>
            <span className="counter">0</span>
            <Modal isOpen={modal} onClose={ () => setModal(false) } titleTop={'Carrito'}>                
            </Modal>
        </div>
        </>
    )
}

export default ShopCardButton