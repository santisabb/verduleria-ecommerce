import { Link } from "react-router-dom"

function Logo(){
    return(
        <>
        <Link to="/">
            <div className="logo">         
                <img src="https://th.bing.com/th/id/OIG3.2fzho3I0UskKl3j9l4pZ?pid=ImgGn" alt="" className="logo-img"/>
                <h1 className="name">Verduleria</h1>
            </div>
        </Link>
        </>
    )
}

export default Logo