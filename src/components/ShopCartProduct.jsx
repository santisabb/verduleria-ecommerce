
function ShopCartProduct({img, name, price}){
    return(
        <>
        <div className="shop-card">
            <i className="bi bi-x"></i>
            <div className="product-image">
                <img src={`${img}`} alt="imagen del producto" />
            </div>
            <div className="card-info">
                <h3>{price}</h3>
                <h4>{name}</h4>
            </div>
        </div>
        </>
    )
}

export default ShopCartProduct