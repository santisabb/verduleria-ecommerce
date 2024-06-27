import ShopCartProduct from "./ShopCartProduct.jsx"
import Button from './Button.jsx'


function ShopCart(){
    return(
        <>
        <h2>Carrito de pedidos</h2>
        <div className="product-container">
            <ShopCartProduct img={'https://i.pinimg.com/564x/b2/c0/e8/b2c0e8cdc61331e141f624842cdd319a.jpg'} name={'Nombre del producto'} price={'$1313'}></ShopCartProduct>
            <ShopCartProduct img={'https://i.pinimg.com/564x/b2/c0/e8/b2c0e8cdc61331e141f624842cdd319a.jpg'} name={'Nombre del producto'} price={'$1313'}></ShopCartProduct>
            <ShopCartProduct img={'https://i.pinimg.com/564x/b2/c0/e8/b2c0e8cdc61331e141f624842cdd319a.jpg'} name={'Nombre del producto'} price={'$1313'}></ShopCartProduct>
            <ShopCartProduct img={'https://i.pinimg.com/564x/b2/c0/e8/b2c0e8cdc61331e141f624842cdd319a.jpg'} name={'Nombre del producto'} price={'$1313'}></ShopCartProduct>
            
        </div>
        <div className="subtotal">
            <span>Subtotal:$13312</span>
            <div className="d-grid gap-2 col-6 mx-auto">
            <Button style={"btn btn-primary"}>Button</Button>
            <Button style={"btn btn-primary"}>Button</Button>
        </div>
        </div>
        
        </>
    )
}

export default ShopCart