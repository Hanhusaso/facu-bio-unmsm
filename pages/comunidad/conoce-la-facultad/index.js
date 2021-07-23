import React from 'react'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

const pregrado = () => {
    return (
        <>
            <Layout title="Conoce la facultad">
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
                                        <Breadcrumb.Item active>Comunidad: Conoce la facultad</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Conoce la facultad</div>
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
                                    <Link href="/comunidad/conoce-la-facultad/biblioteca">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/comunidad/biblioteca.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/comunidad/conoce-la-facultad/biblioteca">
                                            <a className="title-green">
                                                Biblioteca
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
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/comunidad/conoce-la-facultad/laboratorios">
                                            <a className="title-green">
                                                Laboratorios
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Genética y Biotecnología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            Uno de los motivos por el que la Facultad de Ciencias Biológicas (FCB) se encuentra muy bien posicionada en investigación es la cantidad de laboratorios con los que cuenta y el uso diario que se le da para diversos proyectos de investigación.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4" className="text-center">
                                    <Link href="/comunidad/conoce-la-facultad/laboratorios">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/comunidad/laboratorios.png" alt="" />
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
                                    <Link href="/comunidad/conoce-la-facultad/laboratorio-especializado">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/comunidad/laboratorio-especializado.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/comunidad/conoce-la-facultad/laboratorio-especializado">
                                            <a className="title-green">
                                                Laboratorio de Equipamiento especializado
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Microbiología y Parasitología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            Bienvenidos al Laboratorio de Equipamiento Especializado, es un laboratorio dedicado a la innovación, aplicación y tecnología ubicado en la Facultad de Ciencias biológicas de la Universidad Nacional Mayor de San Marcos. Este Laboratorio brinda servicios de Microscopia Electronica de Barrido, Microscopia de Epifluorescencia, Cromatografía Liquida de alto performance/rendimiento, Liofilización, Metalización, desecado a punto crítico, esterilización por sonicador y produccion de agua ultrapura tipo III (para lavar materiales de vidrio, para baño María) y tipo I (la mejor calidad de agua para dilución de reactivos). El agua tipo I pasa a través de un filtro con poros de 0.22um.
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
