import React, { useState } from 'react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'

const noticias = () => {

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
                                <Col className="desktop-extra-width">
                                    <Breadcrumb>
                                        {/* <Breadcrumb.Item> */}
                                        <li className="breadcrumb-item">
                                            <Link href="/">
                                                <a role="button">Inicio</a>
                                            </Link>
                                        </li>
                                        {/* </Breadcrumb.Item> */}
                                        <Breadcrumb.Item active>Noticias</Breadcrumb.Item>
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
                                <Col className="desktop-extra-width">
                                    <div className="title-page text-center">Noticias</div>
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
                                <Col md="1"></Col>
                                <Col md="2">
                                    <div className="filters-wrapper">
                                        <div className="">
                                            <div className="font-weight-bold mb-2">Categorías</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-campus" name="categorias-campus" value="campus"/>
                                                    <label className="mb-0" for="categorias-campus"><span className="checkmark"></span> Campus y comunidad</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-arte" name="categorias-arte" value="arte"/>
                                                    <label className="mb-0" for="categorias-arte"><span className="checkmark"></span> Arte, cultura y humanidades</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-ciencia" name="categorias-ciencia" value="ciencia"/>
                                                    <label className="mb-0" for="categorias-ciencia"><span className="checkmark"></span> Ciencia, tecnología y salud</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-negocios" name="categorias-negocios" value="negocios"/>
                                                    <label className="mb-0" for="categorias-negocios"><span className="checkmark"></span> Negocios, derecho y sociedad</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-investigacion" name="categorias-investigacion" value="investigacion"/>
                                                    <label className="mb-0" for="categorias-investigacion"><span className="checkmark"></span> Investigación</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-comunicados" name="categorias-comunicados" value="comunicados"/>
                                                    <label className="mb-0" for="categorias-comunicados"><span className="checkmark"></span> Comunicados</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-articulos" name="categorias-articulos" value="articulos"/>
                                                    <label className="mb-0" for="categorias-articulos"><span className="checkmark"></span> Artículos de opinión</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-editoriales" name="categorias-editoriales" value="editoriales"/>
                                                    <label className="mb-0" for="categorias-editoriales"><span className="checkmark"></span> Editoriales</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="8">
                                    <div>
                                        <div className="divisor mt-0"></div>

                                        <div className="grid-img-txt-2">
                                            <a href="noticias/noticia">
                                                <div className="part-img position-relative">
                                                    <img className="w-100 img-fluid" src="/assets/img/noticias/noticias_page_1.png" alt="" />
                                                    <div class="badge-tag">Comunidad</div>
                                                </div>
                                            </a>
                                            <div>
                                                <p className="mb-1 date">
                                                    <span>
                                                        <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                    </span>
                                                    <span>23 de marzo de 2021</span>
                                                </p>
                                                <a href="noticias/noticia" className="mb-1 title line-clamp-2">
                                                    La UNMSM reglamenta labor del Sistema de Voluntariado de la comunidad sanmarquina
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    Para reforzar el trabajo solidario y altruista de los voluntarios sanmarquinos, la Universidad Nacional Mayor de San Marcos (UNMSM) elaboró el Reglamento Interno del Sistema de Voluntariado (SV-UNMSM) con el propósito de establecer.Para reforzar el trabajo solidario y altruista de los voluntarios sanmarquinos, la Universidad Nacional Mayor de San Marcos Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at est nam quisquam, illo expedita numquam. Hic velit eum quia, commodi cumque, odit quos ad alias mollitia distinctio expedita error.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="divisor"></div>

                                        <div className="grid-img-txt-2">
                                            <a href="#">
                                                <div className="part-img position-relative">
                                                    <img className="w-100 img-fluid" src="/assets/img/noticias/noticias_page_2.png" alt="" />
                                                    <div class="badge-tag">Comunidad</div>
                                                </div>
                                            </a>
                                            <div>
                                                <p className="mb-1 date">
                                                    <span>
                                                        <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                    </span>
                                                    <span>23 de marzo de 2021</span>
                                                </p>
                                                <a href="#" className="mb-1 title line-clamp-2">
                                                    Beca Continuidad: conoce cómo puedes postular a la segunda convocatoria
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    Si eres estudiante de educación superior, tienes buen rendimiento académico, fuiste afectado económicamente por la emergencia nacional a causa del Covid-19 y acreditas una de las cuatro condiciones de vulnerabilidad económica, puedes postular a la segunda convocatoria del concurso Beca de Continuidad de Estudios de Educación Superior (BCE).
                                                </p>
                                            </div>
                                        </div>

                                        <div className="divisor"></div>

                                        <div className="grid-img-txt-2">
                                            <a href="#">
                                                <div className="part-img position-relative">
                                                    <img className="w-100 img-fluid" src="/assets/img/noticias/noticias_page_3.png" alt="" />
                                                    <div class="badge-tag">Opinión</div>
                                                </div>
                                            </a>
                                            <div>
                                                <p className="mb-1 date">
                                                    <span>
                                                        <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                    </span>
                                                    <span>23 de marzo de 2021</span>
                                                </p>
                                                <a href="#" className="mb-1 title line-clamp-2">
                                                    Max Hidalgo: "Tenemos récords mundiales en muchos grupos taxonómicos, como peces y aves" | Opinión
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    Max Hidalgo del Águila, responsable del proyecto "Diversidad y conservación de comunidades acuáticas en áreas naturales protegidas de la región andino-amazónica sur: Evaluando estado actual, resiliencia y efectividad de protección", explicó en qué consiste su investigación de este.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="divisor"></div>

                                        <div className="grid-img-txt-2">
                                            <a href="#">
                                                <div className="part-img position-relative">
                                                    <img className="w-100 img-fluid" src="/assets/img/noticias/noticias_page_4.png" alt="" />
                                                    <div class="badge-tag">Editorial</div>
                                                </div>
                                            </a>
                                            <div>
                                                <p className="mb-1 date">
                                                    <span>
                                                        <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                    </span>
                                                    <span>23 de marzo de 2021</span>
                                                </p>
                                                <a href="#" className="mb-1 title line-clamp-2">
                                                    En Latinoamérica, la mejor manera de avanzar es sumándonos a las buenas cosas que se vienen haciendo
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    Una comitiva de investigadores en neurociencias cognitivas de Bolivia visitó la tarde de este martes 22 de octubre, la escuela profesional de Genética y Biotecnología de la Facultad de Ciencias Biológicas (FCB) de la UNMSM, para conocer los proyectos que se vienen realizando en.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="divisor"></div>

                                        <div className="grid-img-txt-2">
                                            <a href="#">
                                                <div className="part-img position-relative">
                                                    <img className="w-100 img-fluid" src="/assets/img/noticias/noticias_page_5.png" alt="" />
                                                    <div class="badge-tag">Institucional</div>
                                                </div>
                                            </a>
                                            <div>
                                                <p className="mb-1 date">
                                                    <span>
                                                        <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                    </span>
                                                    <span>23 de marzo de 2021</span>
                                                </p>
                                                <a href="#" className="mb-1 title line-clamp-2">
                                                    Ciencias Biológicas: PRIMERA Facultad en superar auditoría externa sin observaciones
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    Invictos. Tras largas jornadas de trabajo para ordenar y sistematizar los procesos que se desarrollan en las tres escuelas profesionales de la Facultad de Ciencias Biológicas, culminó hoy de manera exitosa la auditoría externa, a cargo del auditor Luis Alvarado Romani, representante de Bureau Veritas, con la aprobación, y sin observaciones, de los alcances auditados, lo que nos permite.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="divisor"></div>

                                    </div>
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

export default noticias
