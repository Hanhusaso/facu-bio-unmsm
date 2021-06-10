import React , { useEffect } from 'react'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

const evento = () => {
    return (
        <>
            <Layout title="Evento">
                <div>
                    <div>
                        <Container>
                            <Row>
                                <Col md="1"></Col>
                                <Col className="">
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
                                            <Link href="/noticias">
                                                <a role="button">Eventos</a>
                                            </Link>
                                        </li>
                                        <Breadcrumb.Item active>Evento</Breadcrumb.Item>
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
                                <Col md="8" className="">
                                    <div className="title-page mb-2">Charla | Estudio y análisis de la fauna microscópica en medios terrestres y acuáticos</div>
                                    {/* <div className="sub-title text-center">Egresada de la E.P. Microbiología y Parasitología </div> */}
                                    <div className="d-flex justify-content-start">
                                        <div className="date mr-4">
                                            <span>
                                                <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                            </span>
                                            <span>7 de abril de 2021</span>
                                        </div>
                                        <div className="date mr-4">
                                            <span>
                                                <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                            </span>
                                            <span>5:00 pm</span>
                                        </div>
                                        <div className="date">
                                            <span>
                                                <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                            </span>
                                            <span>Zoom meetings</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="2"></Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1"></Col>
                                <Col md="8">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img className="img-fluid" src="/assets/img/eventos/eventos_desarrollo.png" alt="" />
                                    </div>
                                    <p>
                                        El litoral peruano posee una riqueza que es ampliamente conocida y el mar de Tumbes, en especial, reserva todo un tesoro gracias a la confluencia de la corriente fría del sur y la corriente cálida del norte. ¿Te imaginas bucear y ver un caballito de mar, o navegar mar adentro y encontrarte con una enorme ballena jorobada?
                                    </p>
                                    <p>
                                        En Tumbes encontrarás muchas alternativas que te permitirán conocer y disfrutar de la gran biodiversidad de uno de los mares más generosos del planeta.​
                                    </p>
                                    <div className="mb-3">
                                        <a className="btn-green-bright" href="">
                                            Inscripciones
                                        </a>
                                    </div>
                                    <div className="section-compartir">
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
                                <Col md="2">
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
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default evento
