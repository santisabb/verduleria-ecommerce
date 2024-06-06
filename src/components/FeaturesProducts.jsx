import Card from "./ProductCard.jsx"

function FeaturedProducts(){
    return(
        <>
        <h2 className="title">PRODUCTOS DESTACADOS</h2>
        <div className="card-container">
            <Card nombre={'Naranja x1KG'} precio={'$3500'} img={'https://i.pinimg.com/236x/0b/f6/20/0bf620588aa99392749d42ad199092e0.jpg'}></Card>
            <Card nombre={'Manzana x1/2KG'} precio={'$2999'} img={'https://i.pinimg.com/236x/0b/54/11/0b5411ec8319c428da173d4438a7edbc.jpg'}></Card>
            <Card nombre={'Banana x1/2KG'} precio={'$3499'} img={'https://i.pinimg.com/236x/f3/d5/c8/f3d5c85fa0426f90f400358a38d438ae.jpg'}></Card>
        </div>
        </>
    )
}

export default FeaturedProducts