import ShopCartProduct from "../components/ShopCartProduct.jsx"
import Button from '../components/Button.jsx'


function ShopCart(){
    return(
    <>
        <div className="shop-cart">
            <h2 className="page-title">Carrito de pedidos</h2>
            <div className="product-container">
                <ShopCartProduct img={'https://i.pinimg.com/564x/b2/c0/e8/b2c0e8cdc61331e141f624842cdd319a.jpg'} name={'Nombre del producto'} price={'2x $1313'}></ShopCartProduct>
            </div>
            <div className="subtotal">
                <div className="section-title ">
                    <h3>TOTAL CARRITO</h3>
                </div>
                <div className="final-price ">
                    <span className="title-price ">Subtotal:</span>
                    <span className="price ">$1313</span>
                </div>
                <div className="options ">
                    <span className="options-title ">Seleccione una opcion:</span>
                    <div className="forms ">
                        <div className="form-check form ">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Retiro por local</label>
                        </div>
                        <div className="form-check form ">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">Envío a domicilio</label>
                        </div>
                    </div>
                </div>
                <div className="total ">
                    <span className="title-price ">Subtotal:</span>
                    <span className="price ">$1313</span>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto ">
                    <Button style={"btn btn-primary"}>FINALIZAR COMPRA</Button>
                </div>
            </div>
        </div>
    </>
    )
}

export default ShopCart