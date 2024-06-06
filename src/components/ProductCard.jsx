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
            </div>
            <div className="add-shop-list">
                <button>AGREGAR AL CARRITO</button>
            </div>
        </div>
        </>
    )
}

export default Card