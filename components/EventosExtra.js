import React , { useState , useEffect } from 'react'
import {getEventosProximosApi} from '../pages/api/eventos';

const EventosExtra = (props) => {

    const {idEventoDetalle} = props;

    const [eventosProximos, setEventosProximos] = useState([]);

    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'p.m.' : 'a.m.';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    useEffect(() => {
        (async () => {
            const response_eventos_proximos = await getEventosProximosApi(idEventoDetalle);
            setEventosProximos(response_eventos_proximos);
        })();
    }, []);

    return (
        <>
            <div className="d-flex mb-3">
                <h2 className="subtitle-green mr-1 mb-0">Eventos</h2>
                <a href="/eventos" className="d-inline-block">
                    <img src="/assets/img/iconos/boton_vermas.png"/>
                </a>
            </div>
            <div>
                {eventosProximos.map((evento_proximo, index) =>(
                    <div key={index} className="card-bio no-grid mb-3">
                        <a href={`/eventos/evento?nombre=${evento_proximo.url_nombre}`} style={{color: '#56756B'}}>
                            <div className="part-img position-relative d-none d-md-block">
                                <div className="position-relative">
                                    <img className="w-100 img-fluid" src={evento_proximo.imagen ? evento_proximo.imagen[0].url : ''}></img>
                                    <div className="dark-filter"></div>
                                </div>
                            </div>
                            <div className="part-text">
                                <p className="title-card title mb-0">
                                    {evento_proximo.nombre}
                                </p>
                            </div>
                            <div className="part-info">
                                <div className="date mb-1">
                                    <span>
                                        <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                    </span>
                                    <span>{new Date(evento_proximo.fechaInicio).getDate()} de {months[new Date(evento_proximo.fechaInicio).getMonth()]} de {new Date(evento_proximo.fechaInicio).getFullYear()}</span>
                                </div>
                                <div className="date mb-1">
                                    <span>
                                        <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                    </span>
                                    <span>{formatAMPM(new Date(evento_proximo.fechaInicio))}</span>
                                </div>
                                <div className="date mb-1">
                                    <span>
                                        <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                    </span>
                                    <span>{evento_proximo.lugar}</span>
                                </div>
                            </div>
                        </a>
                    </div> 
                ))}
            </div>
        </>
    )
}

export default EventosExtra
