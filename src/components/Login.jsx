import { Link } from "react-router-dom"
import Button from "./Button.jsx"

function Login(){
    return(
        <>
        <div className="form">
            <div className="input">
                <label htmlFor="" className="form-label">Ingrese su mail</label>
                <input type="text" name="" id="" placeholder="unemail@ejemplo.com"/>
            </div>
            <div className="input">
                <label htmlFor="">Ingrese su contraseña</label>
                <input type="text" />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">No cerrar sesión</label>
            </div>
        </div>
        <div className="right-section">
            <div className="register">
                <p>¿Sos nuevo?</p>
                <Link to="/register">Crea tu cuenta GRATIS!</Link>
            </div>
            <div className="forgot-password">
                <p>¿Te olvidaste la contraseña?</p>
                <Link to="/recuperar-contraseña">Recuperala acá</Link>
            </div>
        </div>
        <div className="bottom">
            <Button  style={"btn btn-primary btn-sm"}>Iniciar Sesion</Button>
        </div>
        </>
    )
}

export default Login