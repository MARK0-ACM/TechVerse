function Pack({pack, agregarAlCarrito}){
    const {title,price,photos}=pack;
    return(
        <>
                <li className="paquetes__titulo">
                    <h4 className="no-margin">{title}</h4>
                    <p className="paquetes__titulo__etiqueta">Precio: <span class="paquetes__titulo__etiqueta__info">{price}</span></p>
                    <p className="paquetes__titulo__etiqueta">Fotos: <span class="paquetes__titulo__etiqueta__info">{photos} pz.</span></p>
                    <a className="boton boton__secundario" onClick={() => agregarAlCarrito (pack)} > Agregar al carrito</a>
                </li>
        </>
    );
}
export default Pack;