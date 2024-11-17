function Article({article}){/* DESTRUCTURACION DE LOS DATOS */
    const {image,title,description}=article;
    return(
        <>
            <article className="entrada">
                <div className="entrada_imagen">
                    <img src={image} alt="imagen con un escritorio" />
                </div>
                <div className="entrada_contenido">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <a href="entrada1.html" className="boton boton__primario">Leer más</a>
                </div>
            </article>
        </>
    );
}

export default Article;