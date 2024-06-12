function Faqs(){
    return(
        <>
        <article className="faqs-wrapper">
            <h2 className="page-title">Preguntas frecuentes</h2>
            <section className="section">
                <div className="general-questions">
                    <div className="question">
                        <h5>¿Cómo realizo una compra?</h5>
                        <p>Comprar en verduleria.com es muy fácil!</p>
                        <p>Podés navegar por las diferentes Categorías de la página hasta encontrar el producto que estás buscando. Una vez elegido y hacer click en “Comprar”.</p>
                        <p>En el Carrito de Compra podés chequear los datos de tu pedido, eliminar aquellos artículos que no te convenzan y cambiar las cantidades seleccionadas. Una vez que estés seguro de tu pedido, hacés click en “Finalizar compra” para cerrar la operación.</p>
                        <p>Cargás tus datos personales, los del envío y elegís el medio de pago.</p>
                        <p>Como último paso procedés a efectuar el pago seleccionado. Si elegiste tarjeta de crédito, cargás los datos de la misma. En el caso de que hayas elegido abonar tu compra en efectivo, imprimís el cupón de RapiPago ó Pago Fácil que se te genere.</p>
                        <p>Una vez que se acredite el pago, nosotros procesamos y despachamos tu compra.</p>
                    </div>
                    <div className="question">
                        <h5>¿Cómo verifico el estado de mi envío?</h5>
                        <p>Una vez despachado tu pedido, recibirás un mail automático con el NÚMERO DE SEGUIMIENTO para que puedas ir verificando el estado online desde la web de CORREO ARGENTINO.</p>
                    </div>
                    <div className="question">
                        <h5>¿Los envíos llegan a todas partes del país?</h5>
                        <p>Sí, llegan a cualquier punto del territorio nacional. Los envíos se gestionan por Correo Argentino y se entregan directamente en el domicilio solicitado</p>
                    </div>
                    <div className="question">
                        <h5>¿Cuánto demora el envío?</h5>
                        <p>Una vez que tu pedido se encuentra acreditado, podemos demorar hasta 48hs en procesarlo. Una vez ingresado en el sistema de correo Argentino , puede demorar entre 3 y 7 días hábiles, según la zona donde te encuentres. El plazo total de envío es de máximo 10 días hábiles.</p>
                        <p>Los envíos se realizan de Lunes a Viernes de 9.00 a 18.00 hs (horario comercial). No es posible coordinar horario de entrega. Puede recibir tu pedido cualquier mayor de 18 años presentando DNI.</p>
                    </div>
                    <div className="question">
                        <h5>¿Qué sucede en caso de que no haya nadie para recibir el pedido enviado por correo?</h5>
                        <p>El Correo visitará tu dirección de entrega seleccionada en dos oportunidades. Si en ambos casos no se encontrara nadie en dicho domicilio, el pedido quedará en Custodia en la sucursal del Correo más cercana a la dirección de entrega por un plazo de 10 días. Podrás acercarte a dicha sucursal a retirarlo personalmente con tu número de seguimiento y DNI.</p>
                        <p>Vencido ese plazo, el pedido retornará a nuestras oficinas.</p>
                    </div>
                </div>
                <div className="payment-info">
                    <h3>Informacion sobre los pagos</h3>
                    <div className="question">
                        <h5>¿Cómo puedo pagar mi pedido?</h5>
                        <p>A través de la web, aceptamos tarjetas de crédito o medios de pago en efectivo (a través de RapiPago ó Pago Fácil).</p>
                        <p></p>
                    </div>
                    <div className="question">
                        <h5>¿Es seguro comprar en Verduleria.com?</h5>
                        <p>
                        Absolutamente. Utilizamos un sistema de pago seguro y confidencial para proteger tus datos.
                        </p>
                        <p>Confiamos en los servicios de MercadoPago, medio por el cual se procesan los pagos de forma segura y confiable. Los datos viajan por Internet en forma encriptada y una vez aprobado el pago los mismos se destruyen de todo registro. Nadie conserva la información de tu tarjeta de crédito una vez finalizado el cobro.</p>
                    </div>
                    <div className="question">
                        <h5>¿Se puede pagar en cuotas?</h5>
                        <p>Sí, podés abonar tu compra en cuotas siempre y cuando el pago se haga con Tarjeta de Crédito.</p>
                        <p>Si elegiste abonar la compra en efectivo (ya sea por RapiPago ó Pago Fácil), debés abonar el total de la misma. No se puede financiar una operación de esta forma.</p>
                    </div>
                </div>
            </section>
        </article>
        </>
    )
}

export default Faqs