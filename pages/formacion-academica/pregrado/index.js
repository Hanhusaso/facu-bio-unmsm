import React from 'react'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

const pregrado = () => {
    return (
        <>
            <Layout title="Pregrado - Formación académica">
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
                                        <Breadcrumb.Item active>Formación académica: Carreras de pregrado</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Carreras de pregrado</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4">
                            <Row>
                                <Col md="1"></Col>
                                <Col>
                                    <p className="mb-0">
                                        Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias biológicas con especial énfasis en la flora, fauna y ecosistemas amazónicos así como en la microbiología y parasitología; desarrollando campos como la taxonomía, fisiología, bioquímica, genética, patología y biología molecular, aplicándose en propuestas para el desarrollo sostenible de la región, como por ejemplo zoocriaderos, piscicultura, manejo de ecosistemas y recursos naturales, así como en las áreas relacionadas con la salud del hombre, animales y plantas; iniciándose además alternativas innovadoras a través de la biotecnología.
                                    </p>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4 mb-md-5">
                            <Row className="reverse-responsive">
                                <Col md="2"></Col>
                                <Col md="4" className="text-center">
                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/carreras/cienciasbiologicas.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center mb-3 mb-md-0" md="4">
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
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4 mb-md-5">
                            <Row>
                                <Col md="2"></Col>
                                <Col className="d-flex flex-column justify-content-center mb-3 mb-md-0" md="4">
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
                                <Col md="4" className="text-center">
                                    <Link href="/formacion-academica/pregrado/genetica-biotecnologia">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/carreras/genetica.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="reverse-responsive">
                                <Col md="2"></Col>
                                <Col md="4" className="text-center">
                                    <Link href="/formacion-academica/pregrado/microbiologia-parasitologia">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/carreras/microbiologia.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center mb-3 mb-md-0" md="4">
                                    <div className="text-center">
                                        <Link href="/formacion-academica/pregrado/microbiologia-parasitologia">
                                            <a className="title-green">
                                                E.P Microbiología y Parasitología
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Microbiología y Parasitología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias biológicas con especial énfasis en la flora, fauna y ecosistemas Nuestro primer compromiso como institución Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias biológicas con especial énfasis en la flora, fauna y ecosistemas Nuestro primer compromiso como institución. Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default pregrado
