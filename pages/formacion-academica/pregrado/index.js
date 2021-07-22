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
                                        La Facultad de Ciencias Biológicas cuenta con la infraestructura adecuada para desarrollar sus diferentes actividades académicas, para lo cual posee un pabellón de docencia con aulas de teoría, laboratorios de práctica, laboratorios de informática debidamente equipadas, posee además recursos humanos altamente calificados. La mayoría de nuestros docentes cuentan con grados de doctor y maestrÍa que aseguran un nivel de enseñanza de excelencia.
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
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/formacion-academica/pregrado/ciencias-biologicas">
                                            <a className="title-green">
                                                E.P. Ciencias Biológicas
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            Nuestro objetivo fundamental es ofrecer al país Biólogos comprometidos con la conservación y protección del ambiente, el uso sostenible de los recursos naturales y capaces de desarrollar exitosamente las funciones propias de su quehacer profesional cuando se inserten en la vida laboral. Es de vital importancia la formación humanista que obtienen nuestros estudiantes durante sus estudios en la Universidad Nacional Mayor de San Marcos, lo cual los hace tomar conciencia social y su compromiso de ayudar al desarrollo del país.
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
                                        <Link href="/formacion-academica/pregrado/genetica-biotecnologia">
                                            <a className="title-green">
                                                E.P Genética y Biotecnología
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Genética y Biotecnología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            La Escuela Profesional de Genética y Biotecnología, es una comunidad académica de la Facultad de Ciencias Biológicas de la UNMSM, dedicada a la formación de profesionales y académicos integrales en el área de la Genética y Biotecnología, generadores de conocimiento, con pensamiento crítico, iniciativa, capacidad de gestión y responsabilidad social, para contribuir con el desarrollo sostenible del país.
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
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/formacion-academica/pregrado/microbiologia-parasitologia">
                                            <a className="title-green">
                                                E.P Microbiología y Parasitología
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Microbiología y Parasitología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            La Escuela Académico-Profesional de Microbiología y Parasitología de la Facultad de Ciencias Biológicas de la UNMSM, forma investigadores dedicados al conocimiento de los microorganismos en las diferentes actividades donde se encuentran; nuestros egresados al término de sus estudios seráN competentes de: Diseñar, dirigir y ejecutar programas o actividades de aislamiento e identificación de microorganismos, parásitos y artrópodos a partir de seres humanos, animales y plantas; así como del suelo, aguas, aire y de productos elaborados por el ser humano.
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
