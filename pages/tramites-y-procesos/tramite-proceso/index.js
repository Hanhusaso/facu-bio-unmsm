import React , { useState , useEffect } from 'react'
import { Loader } from 'semantic-ui-react'
import { useRouter } from "next/router";
import Layout from "../../../components/Layout"
// import Tabs from "../../../components/Tabs/vanillaTabs"
import {Row, Col, Container, Breadcrumb, Spinner} from 'react-bootstrap'
import Link from 'next/link'
import { size } from "lodash";
import {getTramiteProcesoByUrlApi} from '../../api/tramites-procesos';

const anulacionMatricula = () => {

    const { query } = useRouter();

    const currentUrlTramiteProceso = query.nombre;
    const [loading, setLoading] = useState(true);
    const [sinResultados, setSinResultados] = useState(false);
    const [tramiteProceso, setTramiteProceso] = useState(false);

    useEffect(() => {
        if (!query) {
            return;
        }
        (async () => {
          setLoading(true);
          setSinResultados(false);
          const response = await getTramiteProcesoByUrlApi(currentUrlTramiteProceso);
          if(size(response) == 0){
            // setSinResultados(true);
          }
          else{
            setTramiteProceso(response[0]);
            setLoading(false);
            // setSinResultados(false);
          }
          window.scrollTo(0, 0);
        })();
    }, [query]);

    return (
        <>
            <Layout title="Trámite y Proceso">
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
                                                    <Link href="/tramites-y-procesos">
                                                        <a role="button">Trámites y procesos</a>
                                                    </Link>
                                                </li>
                                                <Breadcrumb.Item active>{tramiteProceso.nombre_tramite}</Breadcrumb.Item>
                                            </Breadcrumb>
                                        </Col>
                                        <Col md="1"></Col>
                                    </Row>
                                </Container>
                            </div>
                            <div>
                                <Container className="mb-3">
                                    <Row>
                                        <Col md="1"></Col>
                                        <Col>
                                            <div className="title-page text-center mb-3">{tramiteProceso.nombre_tramite}</div>
                                        </Col>
                                        <Col md="1"></Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row>
                                        <Col md="1" lg="1"></Col>
                                        <Col md="7" lg="8">
                                            <p>
                                                <span className="mr-2 font-weight-bold">Dirigido a:</span>
                                                <span>Alumnos de posgrado y pegrado</span>
                                            </p>
                                            <p>
                                                <span className="mr-2 font-weight-bold">Descripción:</span>
                                                <span dangerouslySetInnerHTML={{ __html: tramiteProceso.descripcion }} />
                                            </p>
                                            <p>
                                                <span className="mr-2 font-weight-bold">Este trámite tiene fecha límite:</span>
                                                <span dangerouslySetInnerHTML={{ __html: tramiteProceso.fecha_limite }} />
                                            </p>
                                            <p className="font-weight-bold">
                                                Proceso:
                                            </p>
                                            <p>
                                                <ul className="nav flex-column">
                                                    <li className="font-weight-bold mb-2">1. Completa los siguientes requisitos</li>
                                                    <ul className="chevron-green-dark mb-3" dangerouslySetInnerHTML={{ __html: tramiteProceso.descripcion_requisito }} />
                                                        {/* <li className="mb-2">Recibo de Pago	de S/. 67.00 al Banco Pichincha. Concepto de pago: Código de escuela + 005 <a href="#">Pagar</a></li>
                                                        <li className="mb-2">Último Reporte de Matrícula	(Puedes descargarlo desde tu cuenta en el <a href="#">SUM</a>)</li>
                                                        <li className="mb-2">Copia de Constancia de Ingreso de la Escuela a donde se trasladó (si fuera el caso).</li>
                                                        <li className="mb-2">Solicitud simple (Firmada): Indicando el motivo de la anulación.</li> */}
                                                    {/* </ul> */}
                                                    <li className="font-weight-bold mb-2">2. Ingresa tu solicitud en el Módulo de atención de trámites (MAT) <a href="#">Ver tutorial</a></li>
                                                    <ul className="chevron-green-dark mb-3">
                                                        <li className="mb-2">Inicia sesión en el <a href="#">MAT</a></li>
                                                    </ul>
                                                    <li className="font-weight-bold mb-2">3. Realiza el seguimiento de tu trámite</li>
                                                    <ul className="chevron-green-dark mb-3">
                                                        <li className="mb-2">Ingresa tu número de expediente <a href="#">aquí</a></li>
                                                    </ul>
                                                </ul>
                                            </p>
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
                                                <div className="block-interest-links mb-4">
                                                    <p className="font-weight-bold mb-2 text-center">
                                                        ¿Tienes dudas sobre algún trámite o no encuentras la información que necesitas?
                                                    </p>
                                                    <ul className="nav flex-column">
                                                        <li className="mb-2 text-center font-weight-bold">
                                                            <Link href="/tramites-y-procesos/preguntas-frecuentes">
                                                                <a>
                                                                    Ir a preguntas frecuentes
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="d-flex mb-3">
                                                    <h2 className="subtitle-green mr-1 mb-0">Noticias</h2>
                                                    <a href="#" className="d-inline-block">
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

export default anulacionMatricula
