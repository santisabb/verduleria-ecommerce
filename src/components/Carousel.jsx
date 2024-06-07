function Carousel(){
    return(
        <>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="carousel-item-text">
                        <h2>LOS MEJORES PRODUCTOS PARA VOS A UN CLICK DE DISTANCIA</h2>
                    </div>
                    <img src="https://www.cucinare.tv/wp-content/uploads/2021/05/Frutas.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <div className="carousel-item-text">
                        <h2>SEGUINOS EN NUESTRAS REDES SOCIALES, LINKS AL FONDO DE LA PAGINA</h2>
                    </div>
                    <img src="https://fotografias.larazon.es/clipping/cmsimages01/2023/05/16/EE2C5D7F-6DE5-482E-8C6E-D033104BA3E2/sabias-que-tomate-fruta_98.jpg?crop=8192,4609,x0,y439&width=1900&height=1069&optimize=low&format=webply" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <div className="carousel-item-text">
                        <h2>NO TE OLVIDES DE ESCRIBIRNOS POR WHATSAPP PARA CUALQUIER CONSULTA</h2>
                    </div>
                    <img src="https://s1.eestatic.com/2021/03/31/ciencia/nutricion/570205261_177025979_1706x960.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}

export default Carousel