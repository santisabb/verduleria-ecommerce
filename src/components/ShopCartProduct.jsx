import Card from './ProductCard.jsx'

function ShopCartProduct(){
    return(
        <>
        <div className="card mb-1" style={{ maxWidth: '340px' }}>
            <div className="row g-6">
                <div className="col-md-4">
                    <img src="http://localhost:5173/verduleria-ecommerce/src/assets/images/fruta.jpg" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShopCartProduct