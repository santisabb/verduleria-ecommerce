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
                <a href="#">Crea tu cuenta GRATIS!</a>
            </div>
            <div className="forgot-password">
                <p>¿Te olvidaste la contraseña?</p>
                <a href="#">Recuperala acá</a>
            </div>
        </div>
        <div className="bottom">
            <button type="button" className="btn btn-primary btn-sm">Iniciar Sesion</button>
        </div>
        </>
    )
}

export default Login