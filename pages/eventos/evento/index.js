import React , { useState , useEffect } from 'react'
import { Loader } from 'semantic-ui-react'
import { useRouter } from "next/router";
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import Link from 'next/link';
import { size } from "lodash";
import {getEventoByUrlApi,updateVisitasEventoApi} from '../../api/eventos';
import { BASE_PATH_S3 } from "../../../utils/constants";

const evento = () => {

    const { query } = useRouter();

    const currentUrlEvento = query.nombre;
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [evento, setEvento] = useState(false);

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

    function getCookie(cname) {
        var name = cname + "=";
        // console.log(document.cookie);
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    useEffect(() => {
        if (!query) {
            return;
        }
        (async () => {
          setLoading(true);
          setSinResultados(false);
          const response = await getEventoByUrlApi(currentUrlEvento);
          if(size(response) == 0){
            // setSinResultados(true);
          }
          else{
            setEvento(response[0]);
            var cevento = getCookie("evento"+response[0].id);

            if(cevento == ""){
                document.cookie = "evento"+response[0].id+"="+response[0].id;
                const response_update_visitas = await updateVisitasEventoApi(response[0].id, response[0].visitas);
            }
            setLoading(false);
            // setSinResultados(false);
          }

        //   const response_eventos_ultimos = await getEventosUltimosApi();

          window.scrollTo(0, 0);
        })();
    }, [query]);

    return (
        <>
            <Layout title="Evento">
            {loading ? (
                    <>
                    <div className="d-flex align-items-center justify-content-center my-5">
                        <div className="d-inline-flex flex-column justify-content-center align-items-center">
                            <Spinner animation="border" role="status" className="mb-2"/>
                            <span>Buscando formación...</span>
                        </div>
                    </div>
                    </>
                ) : !sinResultados ? (
                    <div>
                        <div>
                            <Container>
                                <Row>
                                    <Col md="1"></Col>
                                    <Col>
                                        <Breadcrumb>
                                            {/* <Breadcrumb.Item> */}
                                            <li className="breadcrumb-item">
                                                <Link href="/">
                                                    <a role="button">Inicio</a>
                                                </Link>
                                            </li>
                                            {/* </Breadcrumb.Item> */}
                                            {/* <Breadcrumb.Item active>Formación académica</Breadcrumb.Item> */}
                                            <li className="breadcrumb-item">
                                                <Link href="/eventos">
                                                    <a role="button">Eventos</a>
                                                </Link>
                                            </li>
                                            <Breadcrumb.Item active>{evento.nombre}</Breadcrumb.Item>
                                        </Breadcrumb>
                                    </Col>
                                    <Col md="1"></Col>
                                </Row>
                            </Container>
                        </div>
                        <div>
                            <Container className="mb-3">
                                <Row>
                                    <Col md="1" lg="1"></Col>
                                    <Col md="7" lg="8">
                                        <div className="title-page mb-2">{evento.tipo} | {evento.nombre}</div>
                                        {/* <div className="sub-title text-center">Egresada de la E.P. Microbiología y Parasitología </div> */}
                                        <div className="d-block d-md-flex justify-content-start">
                                            <div className="date mr-4 mb-1">
                                                <span>
                                                    <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                </span>
                                                <span>{new Date(evento.fechaInicio).getDate()} de {months[new Date(evento.fechaInicio).getMonth()]} de {new Date(evento.fechaInicio).getFullYear()}</span>
                                            </div>
                                            <div className="date mr-4 mb-1">
                                                <span>
                                                    <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                </span>
                                                <span>{formatAMPM(new Date(evento.fechaInicio))}</span>
                                            </div>
                                            <div className="date mb-1">
                                                <span>
                                                    <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                </span>
                                                <span>{evento.lugar}</span>
                                            </div>
                                            <div className="date mb-1">
                                                <span>
                                                    <img width="22px" className="mr-2" src="/assets/img/iconos/vistas.svg" alt="" />
                                                </span>
                                                <span>{evento.visitas} vistas</span>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="3" lg="2"></Col>
                                    <Col md="1" lg="1"></Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col md="1" lg="1"></Col>
                                    <Col md="7" lg="8">
                                        <div className="d-flex justify-content-center mb-3 mb-md-4">
                                            <img className="img-fluid" src={BASE_PATH_S3+evento.imagen[0].url} alt="" />
                                        </div>
                                        <div dangerouslySetInnerHTML={{ __html: evento.descripcion }} />

                                        {/* <p>
                                            El litoral peruano posee una riqueza que es ampliamente conocida y el mar de Tumbes, en especial, reserva todo un tesoro gracias a la confluencia de la corriente fría del sur y la corriente cálida del norte. ¿Te imaginas bucear y ver un caballito de mar, o navegar mar adentro y encontrarte con una enorme ballena jorobada?
                                        </p>
                                        <p>
                                            En Tumbes encontrarás muchas alternativas que te permitirán conocer y disfrutar de la gran biodiversidad de uno de los mares más generosos del planeta.​
                                        </p> */}
                                        {evento.link_inscripcion != '' && evento.link_inscripcion != null ? 
                                            <div className="mb-3">
                                                <a className="btn-green-bright" href={evento.link_inscripcion} target="_blank">
                                                    Inscripciones
                                                </a>
                                            </div>
                                        : 
                                        ''
                                        }
                                        <div className="section-compartir mb-3">
                                            <div className="d-inline-block font-weight-bold mr-3">
                                                Compartir vía:
                                            </div>
                                            <div className="icons">
                                                <a href="#" className="d-inline-block">
                                                    <img src="/assets/img/iconos/email.svg"/>
                                                </a>
                                                <a href="#" className="d-inline-block">
                                                    <img src="/assets/img/iconos/whatsapp.svg"/>
                                                </a>
                                                <a href="#" className="d-inline-block">
                                                    <img src="/assets/img/iconos/facebook.svg"/>
                                                </a>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="3" lg="2">
                                        <aside>
                                            <div className="d-flex mb-3">
                                                <h2 className="subtitle-green mr-1 mb-0">Eventos</h2>
                                                <a href="/eventos" className="d-inline-block">
                                                    <img src="/assets/img/iconos/boton_vermas.png"/>
                                                </a>
                                            </div>
                                            <div>
                                                <div className="card-bio no-grid mb-3">
                                                    <div className="part-img position-relative d-none d-md-block">
                                                        <div className="position-relative">
                                                            <img className="w-100 img-fluid" src="/assets/img/noticias/noticia2.png"></img>
                                                            <div className="dark-filter"></div>
                                                        </div>
                                                    </div>
                                                    <div className="part-text">
                                                        <p className="title-card title mb-0">
                                                            Dos científicas ganan el Premio Nobel de Química 2020 por “tijeras genéticas” CRISPR-Cas9
                                                        </p>
                                                    </div>
                                                    <div className="part-info">
                                                        <div className="date mb-1">
                                                            <span>
                                                                <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                            </span>
                                                            <span>7 de abril de 2021</span>
                                                        </div>
                                                        <div className="date mb-1">
                                                            <span>
                                                                <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                            </span>
                                                            <span>5:00 pm</span>
                                                        </div>
                                                        <div className="date mb-1">
                                                            <span>
                                                                <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                            </span>
                                                            <span>Zoom meetings</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-bio no-grid mb-3">
                                                    <div className="part-img position-relative d-none d-md-block">
                                                        <div className="position-relative">
                                                            <img className="w-100 img-fluid" src="/assets/img/noticias/noticia3.png"></img>
                                                            <div className="dark-filter"></div>
                                                        </div>
                                                    </div>
                                                    <div className="part-text">
                                                        <p className="title-card title mb-0">
                                                            El objetivo de nuestro proyecto es ir en camino a producir clones de alpacas
                                                        </p>
                                                    </div>
                                                    <div className="part-info">
                                                        <div className="date mb-1">
                                                            <span>
                                                                <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                            </span>
                                                            <span>7 de abril de 2021</span>
                                                        </div>
                                                        <div className="date mb-1">
                                                            <span>
                                                                <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                            </span>
                                                            <span>5:00 pm</span>
                                                        </div>
                                                        <div className="date mb-1">
                                                            <span>
                                                                <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                            </span>
                                                            <span>Zoom meetings</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-bio no-grid mb-3">
                                                    <div className="part-img position-relative d-none d-md-block">
                                                        <div className="position-relative">
                                                            <img className="w-100 img-fluid" src="/assets/img/noticias/noticia4.png"></img>
                                                            <div className="dark-filter"></div>
                                                        </div>
                                                    </div>
                                                    <div className="part-text">
                                                        <p className="title-card title mb-0">
                                                            ¡La FCB ya cuenta oficialmente con un nuevo y moderno pabellón!
                                                        </p>
                                                    </div>
                                                    <div className="part-info">
                                                        <div className="date mb-1">
                                                            <span>
                                                                <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                            </span>
                                                            <span>7 de abril de 2021</span>
                                                        </div>
                                                        <div className="date mb-1">
                                                            <span>
                                                                <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                            </span>
                                                            <span>5:00 pm</span>
                                                        </div>
                                                        <div className="date mb-1">
                                                            <span>
                                                                <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                            </span>
                                                            <span>Zoom meetings</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </aside>
                                    </Col>
                                    <Col md="1" lg="1"></Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </Layout>
        </>
    )
}

export default evento
