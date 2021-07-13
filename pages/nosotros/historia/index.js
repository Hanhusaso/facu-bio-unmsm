import React from 'react'
import Layout from '../../../components/Layout'
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

const pregrado = () => {
    return (
        <>
            <Layout title="Historia">
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
                                        {/* <li className="breadcrumb-item">Formación académica</li> */}
                                        <Breadcrumb.Item active>Nosotros: Historia</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Historia</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="8">
                                    <Container className="mb-4">
                                        <Row>
                                            <Col>
                                                <p className="mb-0">
                                                    Aquí iría una pequeña introdución para presentar los hechos historicos que conformación la creación y desarrollo de la facultad. Aquí iría una pequeña introdución para presentar los hechos historicos que conformación la creación y desarrollo de la facultad. Aquí iría una pequeña introdución para presentar los hechos historicos que conformación la creación y desarrollo de la facultad. 
                                                </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Container className="mb-4 mb-md-5">
                                        <Row className="reverse-responsive">
                                            <Col md="6" className="text-center">
                                                <Link href="/formacion-academica/pregrado/ciencias-biologicas">
                                                    <a>
                                                        <img className="img-fluid" src="/assets/img/carreras/cienciasbiologicas.png" alt="" />
                                                    </a>
                                                </Link>
                                            </Col>
                                            <Col md="6" className="d-flex flex-column justify-content-center mb-3 mb-md-0">
                                                <div className="text-center">
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas">
                                                        <a className="title-green">
                                                            E.P. Ciencias Biológicas
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="d-none d-md-block">
                                                    <p className="mb-0">
                                                        Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias biológicas con especial énfasis en la flora, fauna y ecosistemas Nuestro primer compromiso como institución Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias biológicas con especial énfasis en la flora, fauna y ecosistemas Nuestro primer compromiso como institución. Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias.
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Container className="mb-4 mb-md-5">
                                        <Row>
                                            <Col md="6" className="d-flex flex-column justify-content-center mb-3 mb-md-0">
                                                <div className="text-center">
                                                    <Link href="/formacion-academica/pregrado/genetica-biotecnologia">
                                                        <a className="title-green">
                                                            E.P Genética y Biotecnología
                                                        </a>
                                                    </Link>
                                                </div>
                                                {/* <div className="title-green text-center">E.P Genética y Biotecnología</div> */}
                                                <div className="d-none d-md-block">
                                                    <p className="mb-0">
                                                        Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias biológicas con especial énfasis en la flora, fauna y ecosistemas Nuestro primer compromiso como institución Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias biológicas con especial énfasis en la flora, fauna y ecosistemas Nuestro primer compromiso como institución. Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias.
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col md="6" className="text-center">
                                                <Link href="/formacion-academica/pregrado/genetica-biotecnologia">
                                                    <a>
                                                        <img className="img-fluid" src="/assets/img/carreras/genetica.png" alt="" />
                                                    </a>
                                                </Link>
                                            </Col>
                                            <Col md="2"></Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col md="2">
                                    <aside>
                                        <div className="contacto-wrapper mb-3">
                                            <p className="title-dark mb-2">Contacto:</p>
                                            <div className="grid-contacto">
                                                <div>
                                                    <img className="icon mr-2" src="/assets/img/iconos/telefono.svg" alt=""/>
                                                </div>
                                                <div>
                                                    <span>
                                                        +(51) 619 7000 anexo 1507
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mb-0 grid-contacto">
                                                <div>
                                                    <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                </div>
                                                <div>
                                                    <span>
                                                        epcb.biologia@unmsm.edu.pe
                                                    </span>
                                                </div>
                                            </div>
                                            {/* <p className="font-weight-bold mb-1">Horario de atención:</p>
                                            <p className="mb-0">8:00 a.m. - 5:00 p.m.</p> */}
                                        </div>
                                        <div className="block-interest-links mb-3">
                                            <p className="font-weight-bold mb-2 text-center">
                                                ¿Te gustaría participar en un grupo de investigación?
                                            </p>
                                            <ul className="nav flex-column">
                                                <li className="mb-2 text-center font-weight-bold">
                                                    <Link href="#">
                                                        <a>
                                                            Infórmate aquí
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-flex mb-3">
                                            <h2 className="subtitle-green mr-1 mb-0">Proyectos</h2>
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
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default pregrado
