import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'

const Footer = () => {
    return (
        <>
            <footer className="pt-5">
                <Container>
                    <Row>
                        <Col sm="1"></Col>
                        <Col sm="10">
                            <div>
                                <p className="title-footer">
                                    Facultad de Ciencias Biológicas
                                </p>
                            </div>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm="1"></Col>
                        <Col sm="3">
                            <div className="footer-left">
                                <p>
                                    Av. Venezuela s/n cuadra 34.
                                    <br />
                                    Lima 1-Perú
                                    <br />
                                    Ciudad Universitaria. UNMSM
                                </p>
                                <p>
                                    +(51) 619 7000 Anexo 1502
                                    <br />
                                    +(51) 619 7000 Fax 1509
                                </p>
                                <p>
                                    decanobio@unmsm.edu.p
                                </p>
                            </div>
                        </Col>
                        <Col sm="3">
                            <ul className="nav flex-column">
                                <li className="mb-3">Trámites y procesos</li>
                                <li className="mb-3">Información académica</li>
                                <li className="mb-3">Revista peruana de Biología</li>
                                <li className="mb-3">Recursos de Investigación</li>
                            </ul>
                        </Col>
                        <Col sm="2">
                            <ul className="nav flex-column">
                                <li className="mb-3">Formación académica</li>
                                <li className="mb-3">Investigación</li>
                                <li className="mb-3">Noticias y eventos</li>
                                <li className="mb-3">Comunidad</li>
                                <li className="mb-3">Nosotros</li>
                            </ul>
                        </Col>
                        <Col sm="2" className="d-flex align-items-start justify-content-end">
                            <img className="img-logo" src="/assets/img/iconos/escudo_sanmarcos.png" alt=""/>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                </Container>
                <Container className="mt-4">
                    <Row>
                        <Col sm="1"></Col>
                        <Col sm="10">
                            <div className="d-flex justify-content-center">
                                <p className="footer-bot mb-2">
                                    Facultad de Ciencias Biológicas - Universidad Nacional Mayor de San Marcos
                                </p>
                            </div>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer
