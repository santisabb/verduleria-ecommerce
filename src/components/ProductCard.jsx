import { Link } from "react-router-dom"

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
                <Link to="#">Más información</Link>
            </div>
            <div className="add-shop-list">
                <button type="button" className="btn btn-outline-primary">AGREGAR AL CARRITO 🛒</button>
            </div>
        </div>
        </>
    )
}

export default Card