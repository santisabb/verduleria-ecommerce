import { Link } from "react-router-dom"
import Button from "./Button.jsx"

/* eslint-disable react/prop-types */
function Card({ children, img}){
    return(
        <>
        <div className="card card-h">
            <div className="image">
                <img src={`${img}`} alt="imagen del producto" />
            </div>
            {children}


            {/* <div className="product-info">
                <h3>{precio}</h3>
                <h4>{nombre}</h4>
                <Link to="/product" className="product-link">Más información</Link>
            </div>
            <div className="add-shop-list">
                <Button  style={"btn btn-outline-primary"}>AGREGAR AL CARRITO 🛒</Button>
            </div> */}
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
    return(
        <>
            <div className="product-info-h product-info">
                <Link to='/product' className="product-page-info">{name}</Link>
                <h4>{price}</h4>    
            </div>
            <div className="plus-product">
                <Button  style={"btn btn-outline-primary btn-sm"}>+</Button>
                <span>1</span>
                <Button style={"btn btn-outline-primary btn-sm"}>-</Button>
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