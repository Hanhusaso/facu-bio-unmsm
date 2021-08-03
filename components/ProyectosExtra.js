import React , { useState , useEffect } from 'react'
import {getProyectosUltimosApi} from '../pages/api/proyectos';

const ProyectosExtra = (props) => {

    const {idProyectoDetalle} = props;

    const [proyectosUltimos, setProyectosUltimos] = useState([]);

    useEffect(() => {
        (async () => {
            const response_proyectos_ultimos = await getProyectosUltimosApi(idProyectoDetalle);
            setProyectosUltimos(response_proyectos_ultimos);
        })();
    }, []);

    return (
        <>
            <div className="d-flex mb-3">
                <h2 className="subtitle-green mr-1 mb-0">Proyectos</h2>
                <a href="/investigacion/proyectos" className="d-inline-block">
                    <img src="/assets/img/iconos/boton_vermas.png"/>
                </a>
            </div>
            <div>
                {proyectosUltimos.map((proyecto_ultimo, index) =>(
                    <div key={index} className="mb-3">
                        <a className="card-bio color-inherit no-color-hover" href={`/investigacion/proyectos/proyecto?nombre=${proyecto_ultimo.url_nombre}`}>
                            <div className="part-img position-relative">
                                <div className="position-relative">
                                    <img className="w-100 img-fluid" src={proyecto_ultimo.imagen ? proyecto_ultimo.imagen.url : ''}></img>
                                    <div className="dark-filter"></div>
                                </div>
                                {/* <div className="badge-tag">
                                {noticiasSubcategorias[noticia_ultima.id_categoria_subcategoria.id_subcategoria-1].nombre}
                                </div> */}
                            </div>
                            <div className="part-text">
                                <p className="title-card mb-0">
                                    {proyecto_ultimo.nombre}
                                </p>
                            </div>
                        </a>
                    </div> 
                ))}
            </div>
        </>
    )
}

export default ProyectosExtra