import React, { useState } from 'react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from '../../../components/Layout'
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'

export default function Proyectos() {

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

            <Layout title="Proyectos">
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
                                        <Breadcrumb.Item active>Investigación: Producción científica de la facultad</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Producción científica de la Facultad</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-3">
                            <Row>
                                <Col md="1"></Col>
                                <Col>
                                    Estamos orgullos del trabajo que hacen nuestros estudiantes, docentes y egresados de la facultad para generar conocimiento e impacto en la sociedad. Ponemos a disposición el resultado de su esfuerzo, esperando visibilizar soluciones a los problemas actuales y motivar a futuros investigadores. Puedes publicar tu proyecto o saber más sobre los grupos de investigación.
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4">
                            <Row>
                                <Col md="4"></Col>
                                <Col md="4">
                                    <div>
                                        <input className="search-input" placeholder="Buscar por palabra clave" type="text" />
                                    </div>
                                </Col>
                                <Col md="4"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
                                    <div className="filters-wrapper">
                                        <div className="mb-3">
                                            <div className="font-weight-bold mb-2">Grupos de investigación</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="recurso-horarios" name="recurso-horarios" value="horarios"/>
                                                    <label className="mb-0" for="recurso-horarios"><span className="checkmark"></span>Biología molecular y biotecnología (35)</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="recurso-malla" name="recurso-malla" value="malla"/>
                                                    <label className="mb-0" for="recurso-malla"><span className="checkmark"></span>Biotecnología para la remediación (28)</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="recurso-syllabus" name="recurso-syllabus" value="syllabus"/>
                                                    <label className="mb-0" for="recurso-syllabus"><span className="checkmark"></span>Reproducción, biología del desarrollo y ecotoxicología (23)</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="recurso-docentes" name="recurso-docentes" value="docentes"/>
                                                    <label className="mb-0" for="recurso-docentes"><span className="checkmark"></span>Citogenética y sistemas modelo de drosophila (17)</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="font-weight-bold mb-2">Tipo</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-ciencias-biologicas" name="escuelas-ciencias-biologicas" value="ciencias-biologicas"/>
                                                    <label className="mb-0" for="escuelas-ciencias-biologicas"><span className="checkmark"></span>Tesis</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-microbiologia" name="escuelas-microbiologia" value="microbiologia"/>
                                                    <label className="mb-0" for="escuelas-microbiologia"><span className="checkmark"></span>Patentes</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-genetica" name="escuelas-genetica" value="genetica"/>
                                                    <label className="mb-0" for="escuelas-genetica"><span className="checkmark"></span>Artículos científicos</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-weight-bold mb-2">Fecha</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-ciencias-biologicas" name="escuelas-ciencias-biologicas" value="ciencias-biologicas"/>
                                                    <label className="mb-0" for="escuelas-ciencias-biologicas"><span className="checkmark"></span>2021 - 2015</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-microbiologia" name="escuelas-microbiologia" value="microbiologia"/>
                                                    <label className="mb-0" for="escuelas-microbiologia"><span className="checkmark"></span>2014 - 2010</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-genetica" name="escuelas-genetica" value="genetica"/>
                                                    <label className="mb-0" for="escuelas-genetica"><span className="checkmark"></span>2009 - 2005</label>
                                                </div>
                                            </div>
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
                                            <a className="mb-2 mb-md-0" href="proyectos/proyecto">
                                                <div className="part-img position-relative">
                                                    <img className="w-100 img-fluid" src="/assets/img/investigacion/proyectos/proyectos3.png" alt="" />
                                                </div>
                                            </a>
                                            <div>
                                                <p className="mb-2">
                                                    <i>Biología molecular y biotecnología</i>
                                                </p>
                                                <a href="proyectos/proyecto" className="mb-2 title line-clamp-2">
                                                    Biodiversidad de las comunidades microbianas del suelo asociadas a cuerpos en descomposición de importancia forense
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    La Facultad de Biología tiene como meta impulsar las actividades de investigación para generar nuevo conocimiento, desarrollo tecnológico y dar soluciones a problemas e interrogantes de carácter científico. Por ello
                                                </p>
                                            </div>
                                        </div>
                                        <div className="divisor"></div>

                                        <div className="grid-img-txt-2 no-reverse">
                                            <a className="mb-2 mb-md-0" href="proyectos/proyecto">
                                                <div className="part-img position-relative">
                                                    <img className="w-100 img-fluid" src="/assets/img/investigacion/proyectos/proyectos3.png" alt="" />
                                                </div>
                                            </a>
                                            <div>
                                                <p className="mb-2">
                                                    <i>Biología molecular y biotecnología</i>
                                                </p>
                                                <a href="proyectos/proyecto" className="mb-2 title line-clamp-2">
                                                    Biodiversidad de las comunidades microbianas del suelo asociadas a cuerpos en descomposición de importancia forense
                                                </a>
                                                <p className="mb-0 line-clamp-4">
                                                    La Facultad de Biología tiene como meta impulsar las actividades de investigación para generar nuevo conocimiento, desarrollo tecnológico y dar soluciones a problemas e interrogantes de carácter científico. Por ello
                                                </p>
                                            </div>
                                        </div>
                                        <div className="divisor"></div>
                                    </div>
                                </Col>
                                <Col md="3" lg="2">
                                    <aside>
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
                                <Col md="1" lg="1"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>

        </>
    )
}