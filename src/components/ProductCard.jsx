import { Link } from "react-router-dom"
import Button from "./Button.jsx"

/* eslint-disable react/prop-types */
function Card({ nombre, precio, img}){
    return(
        <>
        <div className="card">
            <div className="image">
                <img src={`${img}`} alt="imagen del producto" />
            </div>
            <div className="product-info">
                <h3>{precio}</h3>
                <h4>{nombre}</h4>
                <Link to="/product" className="product-link">Más información</Link>
            </div>
            <div className="add-shop-list">
                <Button  style={"btn btn-outline-primary"}>AGREGAR AL CARRITO 🛒</Button>
            </div>
        </div>
        </>
    )
}

export default Card