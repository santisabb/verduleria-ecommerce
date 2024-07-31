import Card, {CardBodyVertical} from "./ProductCard.jsx"

function FeaturedProducts(){
    return(
        <>
        <h3 className="title">PRODUCTOS DESTACADOS</h3>
        <div className="card-container">
            <Card img={'https://i.pinimg.com/236x/0b/f6/20/0bf620588aa99392749d42ad199092e0.jpg'}>
                <CardBodyVertical name={'Naranjas X1KG'} price={'$1500'}></CardBodyVertical>
            </Card>
            <Card img={'https://i.pinimg.com/236x/0b/54/11/0b5411ec8319c428da173d4438a7edbc.jpg'}>
                <CardBodyVertical name={'Manzanas X1KG'} price={'$1500'}></CardBodyVertical>
            </Card>
            <Card img={'https://i.pinimg.com/236x/f3/d5/c8/f3d5c85fa0426f90f400358a38d438ae.jpg'}>
                <CardBodyVertical name={'Bananas X1KG'} price={'$1500'}></CardBodyVertical>
            </Card>
        </div>
        </>
    )
}

export default FeaturedProducts