/* eslint-disable react/prop-types */



function ShopCartProduct({img, name, price, units}){
    return(
        <>
        <div className="shop-card">
            <button type="button" className="delete-button"><i className="bi bi-x"></i></button>
            <div className="product-image">
                <img src={`${img}`} alt="imagen del producto" />
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <h4>{units}{price}</h4>
            </div>
        </div>
        </>
    )
}

export default ShopCartProduct