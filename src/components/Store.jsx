import Card from "./ProductCard.jsx" 


function Store(){
    return(
        <>
        <div className="container-lg">
            <Card nombre={'Filada'} precio={2500} img={'https://i.pinimg.com/236x/30/af/fc/30affc5dba47e00b8ee0b46c6b8bb09d.jpg'}></Card>
            <Card nombre={'En Bloque'} precio={2322} img={'https://i.pinimg.com/236x/ee/61/61/ee61617b57b20f98d0b93e240fc99340.jpg'}></Card>
            <Card nombre={'Trapecio'} precio={323223} img={'https://i.pinimg.com/236x/df/80/55/df8055c618d9bc36d86fa04889b9ee97.jpg'}></Card>
            <Card nombre={'Gilada'} precio={2332} img={'https://i.pinimg.com/236x/ac/30/d6/ac30d6db4e937f3e60141f427bf065aa.jpg'}></Card>
            <Card nombre={'Filada'} precio={2500} img={'https://i.pinimg.com/236x/30/af/fc/30affc5dba47e00b8ee0b46c6b8bb09d.jpg'}></Card>
            <Card nombre={'Filada'} precio={2500} img={'https://i.pinimg.com/236x/30/af/fc/30affc5dba47e00b8ee0b46c6b8bb09d.jpg'}></Card>
        </div>
        </>
    )
}

export default Store