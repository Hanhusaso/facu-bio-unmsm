import React , { useEffect } from 'react'
import Layout from "../../../components/Layout"
// import Tabs from "../../../components/Tabs/vanillaTabs"
import {Row, Col, Container, Breadcrumb, Accordion } from 'react-bootstrap'
import Link from 'next/link'

const preguntasFrecuentes = () => {
    return (
        <>
            <Layout title="Preguntas Frecuentes">
                <div>
                    <div>
                        <Container>
                            <Row>
                                <Col sm="1"></Col>
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
                                            <Link href="/tramites-y-procesos">
                                                <a role="button">Trámites y procesos</a>
                                            </Link>
                                        </li>
                                        <Breadcrumb.Item active>Preguntas frecuentes</Breadcrumb.Item>
                                    </Breadcrumb>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <Container className="mb-3">
                            <Row>
                                <Col sm="1"></Col>
                                <Col className="">
                                    <div className="title-page text-center">Preguntas frecuentes</div>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4">
                            <Row>
                                <Col sm="3"></Col>
                                <Col sm="6" className="">
                                    <div>
                                        <input className="search-input" placeholder="Busca por palabra clave" type="text" />
                                    </div>
                                </Col>
                                <Col sm="3"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col sm="1"></Col>
                                <Col sm="8">
                                    <Accordion>
                                        <div className="mb-3">
                                            <Accordion.Toggle className="toggle-accordion" eventKey="0">
                                                ¿Qué puedo hacer si mi solicitud en el MAT no avanza?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <div className="pt-3">
                                                    <p className="mb-0">
                                                        Hello! I'm the body
                                                    </p>
                                                </div>
                                            </Accordion.Collapse>
                                        </div>
                                        <div className="mb-3">
                                            <Accordion.Toggle className="toggle-accordion" eventKey="1">
                                                ¿Hasta cuando tiempo después del inicio de clases puedo anular mi matrícula?
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <div className="pt-3">
                                                    <p className="mb-0">
                                                        La anulación procede para quitar tu matrícula, luego de hacer este trámite Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur velit convallis enim, in orci vestibulum mauris. Duis arcu arcu adipiscing urna pulvinar congue nisi, maecenas. Malesuada et, in faucibus dignissim leo. Rhoncus scelerisque sed tempor porttitor at vel eu eget.maecenas. Malesuada et, in faucibus dignissim leo. Rhoncus scelerisque sed tempor porttitor at vel eu eget.maecenas. Malesuada et, in faucibus dignissim leo. Rhoncus scelerisque sed tempor porttitor at vel eu eget.maecenas. Malesuada et, in faucibus dignissim leo. Rhoncus scelerisque sed tempor porttitor at vel eu eget.maecenas. Malesuada et, in faucibus dignissim leo. Rhoncus scelerisque sed tempor porttitor at vel eu eget.
                                                    </p>
                                                </div>
                                            </Accordion.Collapse>
                                        </div>
                                    </Accordion>
                                </Col>
                                <Col sm="2">
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
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default preguntasFrecuentes
