import { Link } from "react-router-dom"
import Button from "./Button.jsx"
import { useState } from "react"

/* eslint-disable react/prop-types */
function Card({ children, img}){
    return(
        <>
        <div className="card card-h">
            <div className="image">
                <img src={`${img}`} alt="imagen del producto" />
            </div>
            {children}
        </div>
        </>
    )
}

export function CardBodyVertical({ name, price }){
    return(
        <>
            <div className="product-info-v product-info">
                <h3>{name}</h3>
                <h4>{price}</h4>
                <Link to="/product" className="product-link">Más información</Link>
            </div>
            <div className="add-shop-list">
                <Button  style={"btn btn-outline-primary"}>AGREGAR AL CARRITO 🛒</Button>
            </div>
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