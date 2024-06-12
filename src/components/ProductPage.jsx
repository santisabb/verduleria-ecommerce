function ProductPage(){
    return(
        <>
        <section className="product-page">
            <div className="product-img">
                <img src="https://www.clarin.com/img/2023/08/22/wE5l-hKg8_600x600__1.jpg" alt="" />
            </div>
            <div className="product-info">
                <h3>NOMBRE PRODUCTO + x cantidad</h3>
                <h4>$12345(un precio)</h4>
            </div>
            <div className="product-options">
                <div className="quantity">
                    <label htmlFor="">Cantidad</label>
                    <input type="number" min={1} />
                </div>
                <div className="add-button">
                    <button type="button" className="btn btn-primary">🛒AGREGAR AL CARRITO</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default ProductPage