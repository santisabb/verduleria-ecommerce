import { Link } from "react-router-dom"

function Categories(){
    return(
        <>
        <section className="categories">
            <div className="cat cat1">
                <span className="cat-name">Frutas de la tierra</span>
                <Link to={'#'} className="btn btn-info">Ver</Link>
            </div>
            <div className="cat cat2">
                <span className="cat-name">Frutas de la finca</span>
                <Link to={'#'} className="btn btn-info">Ver</Link>
            </div>
            <div className="cat cat3">
                <span className="cat-name">Frutos secos</span>
                <Link to={'#'} className="btn btn-info">Ver</Link>
            </div>
            <div className="cat cat4">
                <span className="cat-name">Otros productos</span>
                <Link to={'#'} className="btn btn-info">Ver</Link>
            </div>
        </section>
        </>
    )
}

export default Categories