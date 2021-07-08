import React , { useEffect } from 'react'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'
import * as HiIcons from "react-icons/hi";

const gruposInvestigacion = () => {
    return (
        <>
            <Layout title="Grupos de investigación">
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
                                        {/* <li className="breadcrumb-item">
                                            <Link href="/noticias">
                                                <a role="button">Noticias</a>
                                            </Link>
                                        </li> */}
                                        <Breadcrumb.Item active>Investigación: Grupos de investigación</Breadcrumb.Item>
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
                                <Col md="10">
                                    <div className="title-page mb-2 text-center">Grupos de investigación</div>
                                    {/* <div className="sub-title text-center">Egresada de la E.P. Microbiología y Parasitología </div> */}
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="7" lg="8">
                                    <div className="mb-3">
                                        <p>
                                        Se discute en este trabajo el desarrollo histórico, significado y valor heurístico de la Historia Natural en la reflexión teórica y generación de hipótesis en biología. Sobre esta base se fundamenta la validez de una metodología propia en el dominio de las ciencias naturales históricas, en general.
                                        </p>
                                        <p>
                                        Primero se examinan de manera crítica los principios generales y metodologías que rigen la investigación en ciencias naturales históricas, en contraste con las ciencias biológicas experimentales. Se comenta el actualismo, un principio fundamental que valida el uso de análogos actuales y la formulación de retrodicciones en la investigación del pasado.
                                        </p>
                                        <div className="title-dark mb-2">¿Cómo se puede participar en los grupos de investigación?</div>
                                        <p>
                                            Los grupos de investigación pueden incorporar docentes que, de manera voluntaria, tengan la intención de iniciarse en la investigación. Los interesados, quienes deberán estar registrados como investigadores de la Universidad de Lima en el Directorio Nacional de Investigadores e Innovadores del Concytec, pueden contactar al responsable de cada grupo en cualquier momento del año y manifestar su interés en colaborar.
                                        </p>
                                        <div className="title-dark mb-2">¿Cómo se puede crear un  grupo de investigación?</div>
                                        <p>
                                            Los grupos de investigación pueden incorporar docentes que, de manera voluntaria, tengan la intención de iniciarse en la investigación. Los interesados, quienes deberán estar registrados como investigadores de la Universidad de Lima en el Directorio Nacional de Investigadores e Innovadores del Concytec, pueden contactar al responsable de cada grupo en cualquier momento del año y manifestar su interés en colaborar.
                                        </p>
                                    </div>
                                    <div>
                                        <Container className="mb-4">
                                            <Row>
                                                <Col md="3"></Col>
                                                <Col md="6" className="">
                                                    <div>
                                                        <input className="search-input" placeholder="Buscar por palabra clave" type="text" />
                                                    </div>
                                                </Col>
                                                <Col md="3"></Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    <div className="divisor"></div>
                                    <div>
                                        <div className="block-divider mb-3 pb-3 position-relative">
                                            <div className="mb-2">
                                                <a href="#">
                                                    <h3 className="title d-inline mr-2">Aplicación clínica de recursos naturales</h3><HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                </a>
                                            </div>
                                            <p className="mb-2">
                                                Monitorización y restauración de ecosistemas. Ectomicorrizas forestales, truficultura y micología forestal. Briología: biodiversidad y ecología de musgos. Informatización de colecciones de herbario.
                                            </p>
                                            <div>
                                                <div className="d-inline mr-4">
                                                    <span className="font-weight-bold mr-2">Coodinador:</span>
                                                    <span className="">Liliana del Rosario Tapia Ugaz</span>
                                                </div>
                                                <a className="color-inherit d-inline mr-4" href="#">
                                                    <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                    <span className="">Resolución rectoral</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-divider mb-3 pb-3 position-relative">
                                            <div className="mb-2">
                                                <a href="#">
                                                    <h3 className="title d-inline mr-2">Acuicultura y nutrición de organismos acuáticos</h3><HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                </a>
                                            </div>
                                            <p className="mb-2">
                                                Es un grupo de caracter interdisciplinario que tiene como objetivo el estudio de los RNAs desde el punto de vista genómico y postgenómico. Las actividades desarrolladas por el grupo integran conceptos de las ciencias biológicas, la química, las matemáticas y las ciencias de la computación.
                                            </p>
                                            <div>
                                                <div className="d-inline mr-4">
                                                    <span className="font-weight-bold mr-2">Coodinador:</span>
                                                    <span className="">Gaby Betty Millan Salazar</span>
                                                </div>
                                                <div className="d-inline mr-4">
                                                    <a className="color-inherit" href="#">
                                                        <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                        <span className="">Resolución rectoral</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" lg="2">
                                    <aside>
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
            </Layout>
        </>
    )
}

export default gruposInvestigacion
