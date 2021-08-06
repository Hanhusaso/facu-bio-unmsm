import React , { useState , useEffect } from 'react'
import {getNoticiasUltimasApi, getNoticiasSubcategoriasApi} from '../pages/api/noticias';

const NoticiasExtra = (props) => {

    const {idNoticiaDetalle} = props;

    const [noticiasUltimas, setNoticiasUltimas] = useState([]);
    const [noticiasSubcategorias, setNoticiasSubcategorias] = useState([]);

    useEffect(() => {
        (async () => {
            const response_subcategorias = await getNoticiasSubcategoriasApi();
            setNoticiasSubcategorias(response_subcategorias);
            const response_noticias_ultimas = await getNoticiasUltimasApi(idNoticiaDetalle);
            setNoticiasUltimas(response_noticias_ultimas);
        })();
    }, []);

    return (
        <>
            <div className="d-flex mb-3">
                <h2 className="subtitle-green mr-1 mb-0">Noticias</h2>
                <a href="/noticias" className="d-inline-block">
                    <img src="/assets/img/iconos/boton_vermas.png"/>
                </a>
            </div>
            <div>
                {noticiasUltimas.map((noticia_ultima, index) =>(
                    <div key={index} className="mb-3">
                        <a className="card-bio color-inherit no-color-hover" href={`/noticias/noticia?titulo=${noticia_ultima.url_titulo}`}>
                            <div className="part-img position-relative">
                                <div className="position-relative">
                                    <img className="w-100 img-fluid" src={noticia_ultima.imagen_previsualizacion ? noticia_ultima.imagen_previsualizacion[0].url : ''}></img>
                                    <div className="dark-filter"></div>
                                </div>
                                <div className="badge-tag">
                                {noticiasSubcategorias[noticia_ultima.id_categoria_subcategoria.id_subcategoria-1].nombre}
                                </div>
                            </div>
                            <div className="part-text">
                                <p className="title-card mb-0">
                                    {noticia_ultima.titulo}
                                </p>
                            </div>
                        </a>
                    </div> 
                ))}
            </div>
        </>
    )
}

export default NoticiasExtra
