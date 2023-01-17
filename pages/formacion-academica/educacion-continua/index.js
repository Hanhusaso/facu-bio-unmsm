import React, { useState } from 'react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from '../../../components/Layout'
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'
import * as AiIcons from "react-icons/ai";

const index = () => {

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
            <Layout title="Educación continua">
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
                                        <Breadcrumb.Item active>Formación académica: Educación continua</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Educación continua</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

                        <Container className="mb-3">
                            <Row>
                                <Col md="1"></Col>
                                <Col>
                                    Aquí iría una pequeña descripción o introducción sobre el propósito de te tener esta sección.Estamos orgullos del trabajo que hacen nuestros estudiantes, docentes y egresados de la facultad para generar conocimiento e impacto en la sociedad. Ponemos a disposición el resultado de su esfuerzo, esperando visibilizar soluciones a los problemas actuales y motivar a futuros investigadores. Puedes publicar tu proyecto o saber más sobre los grupos de investigación.
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

                        <Container className="mb-4">
                            <Row>
                                <Col md="3"></Col>
                                <Col md="6">
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
                                    <div className="filters-wrapper mb-4">
                                        <div className="mb-3">
                                            <div className="font-weight-bold mb-2">Tipos de formación</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-campus" name="categorias-campus" value="campus"/>
                                                    <label className="mb-0" for="categorias-campus"><span className="checkmark"></span>Talleres</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-arte" name="categorias-arte" value="arte"/>
                                                    <label className="mb-0" for="categorias-arte"><span className="checkmark"></span>Cursos</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-ciencia" name="categorias-ciencia" value="ciencia"/>
                                                    <label className="mb-0" for="categorias-ciencia"><span className="checkmark"></span>Programa</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="font-weight-bold mb-2">Escuelas</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="recurso-horarios" name="recurso-horarios" value="horarios"/>
                                                    <label className="mb-0" for="recurso-horarios"><span className="checkmark"></span>E.P. Microbiología y Parasitología</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="recurso-malla" name="recurso-malla" value="malla"/>
                                                    <label className="mb-0" for="recurso-malla"><span className="checkmark"></span>E.P Genética y Biotecnología</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="recurso-syllabus" name="recurso-syllabus" value="syllabus"/>
                                                    <label className="mb-0" for="recurso-syllabus"><span className="checkmark"></span>E.P. Ciencias biológicas</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="font-weight-bold mb-2">Modalidad</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-ciencias-biologicas" name="escuelas-ciencias-biologicas" value="ciencias-biologicas"/>
                                                    <label className="mb-0" for="escuelas-ciencias-biologicas"><span className="checkmark"></span>Presencial</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-microbiologia" name="escuelas-microbiologia" value="microbiologia"/>
                                                    <label className="mb-0" for="escuelas-microbiologia"><span className="checkmark"></span>Virtual</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-genetica" name="escuelas-genetica" value="genetica"/>
                                                    <label className="mb-0" for="escuelas-genetica"><span className="checkmark"></span>Semipresencial</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <AiIcons.AiOutlineInfoCircle className="icon mb-1 mr-1"/>
                                            <span><b>Observación:</b></span>
                                        </div>
                                        <div>
                                            La Facultad se reserva el derecho de apertura o aplazamiento de los cursos en caso de no contar con el número mínimo de inscritos.
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4" lg="6">
                                    <div>
                                        <div className="mb-3">
                                            2 resultados
                                        </div>
                                        <div className="divisor my-3 mt-md-0"></div>

                                        <div className="grid-img-txt-2 no-reverse">
                                            <a className="mb-2 mb-md-0" href="educacion-continua/curso">
                                                <div className="part-img position-relative">
                                                    <img className="w-100 img-fluid" src="/assets/img/noticias/noticias_page_1.png" alt="" />
                                                </div>
                                            </a>
                                            <div>
                                                <p className="mb-1 date">
                                                    <span>
                                                        <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                    </span>
                                                    <span>Del 11 de mayo al 25 de junio de 2021</span>
                                                </p>
                                                <a href="educacion-continua/curso" className="mb-1 title line-clamp-2">
                                                    Análisis de datos y diseño de experimentos
                                                </a>
                                                <p className="mb-0 line-clamp-3">
                                                    Para reforzar el trabajo solidario y altruista de los voluntarios sanmarquinos, la Universidad Nacional Mayor de San Marcos (UNMSM) elaboró el Reglamento Interno del Sistema de Voluntariado (SV-UNMSM) con el propósito de establecer.Para reforzar el trabajo solidario y altruista de los voluntarios sanmarquinos, la Universidad Nacional Mayor de San Marcos Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at est nam quisquam, illo expedita numquam. Hic velit eum quia, commodi cumque, odit quos ad alias mollitia distinctio expedita error.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="divisor"></div>

                                        <div className="grid-img-txt-2 no-reverse">
                                            <a className="mb-2 mb-md-0" href="educacion-continua/curso">
                                                <div className="part-img position-relative">
                                                    <img className="w-100 img-fluid" src="/assets/img/noticias/noticias_page_1.png" alt="" />
                                                </div>
                                            </a>
                                            <div>
                                                <p className="mb-1 date">
                                                    <span>
                                                        <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                    </span>
                                                    <span>Del 11 de mayo al 25 de junio de 2021</span>
                                                </p>
                                                <a href="educacion-continua/curso" className="mb-1 title line-clamp-2">
                                                    Análisis de datos y diseño de experimentos
                                                </a>
                                                <p className="mb-0 line-clamp-3">
                                                    Para reforzar el trabajo solidario y altruista de los voluntarios sanmarquinos, la Universidad Nacional Mayor de San Marcos (UNMSM) elaboró el Reglamento Interno del Sistema de Voluntariado (SV-UNMSM) con el propósito de establecer.Para reforzar el trabajo solidario y altruista de los voluntarios sanmarquinos, la Universidad Nacional Mayor de San Marcos Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at est nam quisquam, illo expedita numquam. Hic velit eum quia, commodi cumque, odit quos ad alias mollitia distinctio expedita error.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="divisor"></div>

                                    </div>
                                </Col>
                                <Col md="3" lg="2">
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
                                            <div className="mb-2 grid-contacto">
                                                <div>
                                                    <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                </div>
                                                <div>
                                                    <span>
                                                        epcb.biologia@unmsm.edu.pe
                                                    </span>
                                                </div>
                                            </div>
                                            <p className="font-weight-bold mb-1">Horario de atención:</p>
                                            <p className="mb-0">8:00 a.m. - 5:00 p.m.</p>
                                        </div>
                                        <div className="block-interest-links mb-3">
                                            <p className="font-weight-bold mb-2 text-center">
                                                Enlaces de interés
                                            </p>
                                            <ul className="nav flex-column">
                                                <li className="mb-2 font-weight-bold">
                                                    <Link href="/formacion-academica/pregrado">
                                                        <a>
                                                            Pregrado 
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="mb-2 font-weight-bold">
                                                    <Link href="/formacion-academica/posgrado">
                                                        <a>
                                                            Posgrado 
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li className="mb-2 font-weight-bold">
                                                    <Link href="/comunidad/conoce-la-facultad">
                                                        <a>
                                                            Conoce la facultad
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
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

export default index
