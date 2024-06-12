function Contact (){
    return (
        <>
        <div className="page-info">
            <h2>Contactaté con nosotros</h2>
            <p>Podes ponerte en contacto con nosotros para cualquier consulta, posibles proyectos
            y asociaciones comerciales
            </p>
        </div>
        <div className="contact-options">
            <div className="wpp">
                <i className="bi bi-phone"></i>
                <h3>Escribinos</h3>
                <p>WhatsApp: 123456789</p>
            </div>
            <div className="email">
                <i className="bi bi-envelope-at"></i>
                <h3>Nos podes mandar un mail</h3>
                <p>unmail@gmail.com</p>
            </div>
        </div>
        </>
    )
}

export default Contact