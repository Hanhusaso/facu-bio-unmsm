const NoticiasExtra = () => {
    return (
        <>
            <div className="d-flex mb-3">
                <h2 className="subtitle-green mr-1 mb-0">Noticias</h2>
                <a href="/noticias" className="d-inline-block">
                    <img src="/assets/img/iconos/boton_vermas.png"/>
                </a>
            </div>
            <div>
                <div className="card-bio mb-3">
                    <div className="part-img position-relative">
                        <div className="position-relative">
                            <img className="w-100 img-fluid" src="/assets/img/noticias/noticia2.png"></img>
                            <div className="dark-filter"></div>
                        </div>
                        <div className="badge-tag">
                            Tecnologia
                        </div>
                    </div>
                    <div className="part-text">
                        <p className="title-card mb-0">
                            Dos científicas ganan el Premio Nobel de Química 2020 por “tijeras genéticas” CRISPR-Cas9
                        </p>
                    </div>
                </div>
                <div className="card-bio mb-3">
                    <div className="part-img position-relative">
                        <div className="position-relative">
                            <img className="w-100 img-fluid" src="/assets/img/noticias/noticia3.png"></img>
                            <div className="dark-filter"></div>
                        </div>
                        <div className="badge-tag">
                            Ciencia
                        </div>
                    </div>
                    <div className="part-text">
                        <p className="title-card mb-0">
                            El objetivo de nuestro proyecto es ir en camino a producir clones de alpacas
                        </p>
                    </div>
                </div>
                <div className="card-bio mb-3">
                    <div className="part-img position-relative">
                        <div className="position-relative">
                            <img className="w-100 img-fluid" src="/assets/img/noticias/noticia4.png"></img>
                            <div className="dark-filter"></div>
                        </div>
                        <div className="badge-tag">
                            Facultad
                        </div>
                    </div>
                    <div className="part-text">
                        <p className="title-card mb-0">
                            ¡La FCB ya cuenta oficialmente con un nuevo y moderno pabellón!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoticiasExtra
