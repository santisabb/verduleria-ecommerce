import { Link } from "react-router-dom"


function ShopCardButton(){


    return(
        <>
        <div className="shop-card">
            <Link to='/carrito'>
                <i className="bi bi-cart-fill"></i>
            </Link>
            <span className="shop-count">0</span>
        </div>
        </>
    )
}

export default ShopCardButton