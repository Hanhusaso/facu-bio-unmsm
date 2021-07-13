import React, { useState } from 'react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'

const eventos = () => {

    const [pages, setPages] = useState([
        "pag1",
        "pag2",
        "pag3",
        "pag3",
        "pag3",
        "pag3",
        "pag3",
        "pag3",
    ])

    return (
        <>
            <Layout title="Noticias">
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
                                        <Breadcrumb.Item active>Eventos</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Eventos</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

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

                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
                                    <div className="filters-wrapper">
                                        <div className="">
                                            <div className="font-weight-bold mb-2">Tipos</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="tipos-conferencias" name="tipos-conferencias" value="conferencias"/>
                                                    <label className="mb-0" for="tipos-conferencias"><span className="checkmark"></span> Conferencias</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="tipos-seminarios" name="tipos-seminarios" value="seminarios"/>
                                                    <label className="mb-0" for="tipos-seminarios"><span className="checkmark"></span> Seminarios</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="tipos-charlas" name="tipos-charlas" value="charlas"/>
                                                    <label className="mb-0" for="tipos-charlas"><span className="checkmark"></span> Charlas</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="tipos-otros" name="tipos-otros" value="otros"/>
                                                    <label className="mb-0" for="tipos-otros"><span className="checkmark"></span> Otros</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="7" lg="8">
                                    <div>
                                        <div className="divisor my-3 mt-md-0"></div>

                                        <div className="grid-img-txt-2 no-reverse">
                                            <a href="eventos/evento" className="mb-3 title line-clamp-2 d-block d-md-none">
                                                Conferencia | Google’s software development process
                                            </a>
                                            <a href="eventos/evento">
                                                <div className="part-img position-relative mb-2 mb-md-0">
                                                    <img className="w-100 img-fluid" src="/assets/img/eventos/eventos1.png" alt="" />
                                                    {/* <div class="badge-tag">Comunidad</div> */}
                                                </div>
                                            </a>
                                            <div>
                                                <div className="mb-1 d-block d-md-flex">
                                                    <div className="date mr-4 mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>23 de marzo de 2021</span>
                                                    </div>
                                                    <div className="date mr-4 mb-1">
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
                                                <a href="eventos/evento" className="mb-1 title line-clamp-2 d-none d-md-block">
                                                    Conferencia | Google’s software development process
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    Para reforzar el trabajo solidario y altruista de los voluntarios sanmarquinos, la Universidad Nacional Mayor de San Marcos (UNMSM) elaboró el Reglamento Interno del Sistema de Voluntariado (SV-UNMSM) con el propósito de establecer.Para reforzar el trabajo solidario y altruista de los voluntarios sanmarquinos, la Universidad Nacional Mayor de San Marcos Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at est nam quisquam, illo expedita numquam. Hic velit eum quia, commodi cumque, odit quos ad alias mollitia distinctio expedita error.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="divisor"></div>

                                        <div className="grid-img-txt-2 no-reverse">
                                            <a href="#" className="mb-3 title line-clamp-2 d-block d-md-none">
                                                Seminario | Exposición Macrofotografía en la Naturaleza
                                            </a>
                                            <a href="#">
                                                <div className="part-img position-relative mb-2 mb-md-0">
                                                    <img className="w-100 img-fluid" src="/assets/img/eventos/eventos2.png" alt="" />
                                                    {/* <div class="badge-tag">Comunidad</div> */}
                                                </div>
                                            </a>
                                            <div>
                                                <div className="mb-1 d-block d-md-flex">
                                                    <div className="date mr-4 mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>23 de marzo de 2021</span>
                                                    </div>
                                                    <div className="date mr-4 mb-1">
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
                                                <a href="#" className="mb-1 title line-clamp-2 d-none d-md-block">
                                                    Seminario | Exposición Macrofotografía en la Naturaleza
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    Si eres estudiante de educación superior, tienes buen rendimiento académico, fuiste afectado económicamente por la emergencia nacional a causa del Covid-19 y acreditas una de las cuatro condiciones de vulnerabilidad económica, puedes postular a la segunda convocatoria del concurso Beca de Continuidad de Estudios de Educación Superior (BCE).
                                                </p>
                                            </div>
                                        </div>

                                        <div className="divisor"></div>

                                        <div className="grid-img-txt-2 no-reverse">
                                            <a href="#" className="mb-3 title line-clamp-2 d-block d-md-none">
                                                Charla | Estudio y análisis de la fauna microscópica en medios terrestres y acuáticos
                                            </a>
                                            <a href="#">
                                                <div className="part-img position-relative mb-2 mb-md-0">
                                                    <img className="w-100 img-fluid" src="/assets/img/eventos/eventos3.png" alt="" />
                                                    {/* <div class="badge-tag">Opinión</div> */}
                                                </div>
                                            </a>
                                            <div>
                                                <div className="mb-1 d-block d-md-flex">
                                                    <div className="date mr-4 mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>23 de marzo de 2021</span>
                                                    </div>
                                                    <div className="date mr-4 mb-1">
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
                                                <a href="#" className="mb-1 title line-clamp-2 d-none d-md-block">
                                                    Charla | Estudio y análisis de la fauna microscópica en medios terrestres y acuáticos
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    Max Hidalgo del Águila, responsable del proyecto "Diversidad y conservación de comunidades acuáticas en áreas naturales protegidas de la región andino-amazónica sur: Evaluando estado actual, resiliencia y efectividad de protección", explicó en qué consiste su investigación de este.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="divisor"></div>

                                        <div className="grid-img-txt-2 no-reverse">
                                            <a href="#" className="mb-3 title line-clamp-2 d-block d-md-none">
                                                Conferencia | II Congreso internacional de Biología Molecular en Cáncer
                                            </a>
                                            <a href="#">
                                                <div className="part-img position-relative mb-2 mb-md-0">
                                                    <img className="w-100 img-fluid" src="/assets/img/eventos/eventos4.png" alt="" />
                                                    {/* <div class="badge-tag">Editorial</div> */}
                                                </div>
                                            </a>
                                            <div>
                                                <div className="mb-1 d-block d-md-flex">
                                                    <div className="date mr-4 mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>23 de marzo de 2021</span>
                                                    </div>
                                                    <div className="date mr-4 mb-1">
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
                                                <a href="#" className="mb-1 title line-clamp-2 d-none d-md-block">
                                                    Conferencia | II Congreso internacional de Biología Molecular en Cáncer
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    Una comitiva de investigadores en neurociencias cognitivas de Bolivia visitó la tarde de este martes 22 de octubre, la escuela profesional de Genética y Biotecnología de la Facultad de Ciencias Biológicas (FCB) de la UNMSM, para conocer los proyectos que se vienen realizando en.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="divisor"></div>

                                        <div className="grid-img-txt-2 no-reverse">
                                            <a href="#" className="mb-3 title line-clamp-2 d-block d-md-none">
                                                Convocatoria | Concurso de diseño de flyers para el aniversario de la UNMSM
                                            </a>
                                            <a href="#">
                                                <div className="part-img position-relative mb-2 mb-md-0">
                                                    <img className="w-100 img-fluid" src="/assets/img/eventos/eventos5.png" alt="" />
                                                    {/* <div class="badge-tag">Institucional</div> */}
                                                </div>
                                            </a>
                                            <div>
                                                <div className="mb-1 d-block d-md-flex">
                                                    <div className="date mr-4 mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>23 de marzo de 2021</span>
                                                    </div>
                                                    <div className="date mr-4 mb-1">
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
                                                <a href="#" className="mb-1 title line-clamp-2 d-none d-md-block">
                                                    Convocatoria | Concurso de diseño de flyers para el aniversario de la UNMSM
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    Invictos. Tras largas jornadas de trabajo para ordenar y sistematizar los procesos que se desarrollan en las tres escuelas profesionales de la Facultad de Ciencias Biológicas, culminó hoy de manera exitosa la auditoría externa, a cargo del auditor Luis Alvarado Romani, representante de Bureau Veritas, con la aprobación, y sin observaciones, de los alcances auditados, lo que nos permite.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="divisor"></div>

                                    </div>
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

export default eventos
