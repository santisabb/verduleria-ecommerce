/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Button from "./Button.jsx"
import { useState } from "react"

function Card({ products }){
    if(!Array.isArray(products)){
        return <h3>No hay productos</h3>
    }
    return(
    <div className="card-container">
        {
        products.map(product => (
            <div key={product.id} className="card card-h">
                <div className="image">
                    <img src={product.image_url} alt={product.product_name} />
                </div>
                <div className="product-info-v product-info">
                    <h3>{product.product_name}</h3>
                    <h4>{product.price}</h4>
                    <Link to="/product" className="product-link">Más información</Link>
                </div>
                <div className="add-shop-list">
                    <button disabled={product.stock == 0 ? true : false} type="button" className="btn btn-outline-primary">
                        AGREGAR A CARRITO 🛒
                    </button>
                </div>
                <span style={product.stock == 0 ? {display:'block', color:'red'} : {display:'none'}}>
                    PRODUCTO NO DISPONIBLE
                </span>
            </div>
        ))}
    </div>
    )
}

export function CardBodyVertical({ products, children }){
    return(
        <>
        {
        products.map((product) => {
            <>
            <div className="product-info-v product-info">
                <h3>{product.product_name}</h3>
                <h4>{product.price}</h4>
                <Link to="/product" className="product-link">Más información</Link>
            </div>
            <div className="add-shop-list">
                {children}
            </div>
        </>
        }
        )}
        </>
    )
}


export function CardBodyHorizontal({ name , price }){
    const [count, setCount] = useState(1)

    const addProduct = () => setCount(count + 1)

    const deleteProduct = () => setCount(count == 1 ?  1 : count - 1)

    return(
        <>
            <div className="product-info-h product-info">
                <Link to='/product' className="product-page-info">{name}</Link>
                <h4>{price}</h4>    
            </div>
            <div className="plus-product">
                <Button aFunction={addProduct} style={"btn btn-outline-primary btn-sm"}>+</Button>
                <span>{count}</span>
                <Button aFunction={deleteProduct}  style={"btn btn-outline-primary btn-sm"}>-</Button>
            </div>
            <div>
                <Button style={'btn btn-danger'}>
                    <i className="bi bi-trash3-fill"></i>
                </Button>
            </div>
        </>
    )
}

export default Card