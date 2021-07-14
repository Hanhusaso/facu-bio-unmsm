import React, { useState } from 'react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from '../../../components/Layout'
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'

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
            <Layout title="Testimonios">
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
                                        <Breadcrumb.Item active>Comunidad: Testimonios</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Testimonios</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
                                    <div className="filters-wrapper">
                                        <div className="mb-3">
                                            <div className="font-weight-bold mb-2">Escuelas</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-campus" name="categorias-campus" value="campus"/>
                                                    <label className="mb-0" for="categorias-campus"><span className="checkmark"></span>E.P. Microbiología y Parasitología</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-arte" name="categorias-arte" value="arte"/>
                                                    <label className="mb-0" for="categorias-arte"><span className="checkmark"></span>E.P Genética y Biotecnología</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="categorias-ciencia" name="categorias-ciencia" value="ciencia"/>
                                                    <label className="mb-0" for="categorias-ciencia"><span className="checkmark"></span>E.P. Ciencias biológicas</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="font-weight-bold mb-2">Posgrado</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-ciencias-biologicas" name="escuelas-ciencias-biologicas" value="ciencias-biologicas"/>
                                                    <label className="mb-0" for="escuelas-ciencias-biologicas"><span className="checkmark"></span>Doctorado</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-microbiologia" name="escuelas-microbiologia" value="microbiologia"/>
                                                    <label className="mb-0" for="escuelas-microbiologia"><span className="checkmark"></span>Maestría</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-genetica" name="escuelas-genetica" value="genetica"/>
                                                    <label className="mb-0" for="escuelas-genetica"><span className="checkmark"></span>Segunda especialidad</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4" lg="6">
                                    <div>
                                        <div className="divisor my-3 mt-md-0"></div>

                                        <div className="grid-img-txt-2">
                                            <div className="mx-5 mx-md-0">
                                                <Link href="testimonios/testimonio">
                                                    <a>
                                                        <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado1.png" alt="" />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="mb-3 mb-md-0">
                                                <Link href="testimonios/testimonio">
                                                    <a className="title">
                                                        <p>
                                                            Bach. María Cárdenas López  | E.P. Microbiología y Parasitología 
                                                        </p>
                                                    </a>
                                                </Link>
                                                {/* <p className="title">Bach. María Cárdenas López </p> */}
                                                <p className="mb-0">
                                                    "La profesión que escogí  ha sido nombrada la carrera del futuro. Según El Colombiano "La biología dominará los currículos". Es una ciencia en la que predomina la investigación y EAFIT me ha brindado todas las herramientas necesarias para mi formación como científica; desde varios grupos de investigación y semilleros, hasta una infraestructura que cuenta con los laboratorios mejores dotados, al igual que charlas informátivas de diferentes temas de pertinencia dictadas por extranjeros y nacionales que han enriquecido mi conocimiento. 
                                                </p>
                                            </div>
                                        </div>
                                        <div className="divisor"></div>

                                        <div className="grid-img-txt-2">
                                            <div className="mx-5 mx-md-0">
                                                <Link href="testimonios/testimonio">
                                                    <a>
                                                        <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado1.png" alt="" />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="mb-3 mb-md-0">
                                                <Link href="testimonios/testimonio">
                                                    <a className="title">
                                                        <p>
                                                            Bach. María Cárdenas López  | E.P. Microbiología y Parasitología 
                                                        </p>
                                                    </a>
                                                </Link>
                                                {/* <p className="title">Bach. María Cárdenas López </p> */}
                                                <p className="mb-0">
                                                    "La profesión que escogí  ha sido nombrada la carrera del futuro. Según El Colombiano "La biología dominará los currículos". Es una ciencia en la que predomina la investigación y EAFIT me ha brindado todas las herramientas necesarias para mi formación como científica; desde varios grupos de investigación y semilleros, hasta una infraestructura que cuenta con los laboratorios mejores dotados, al igual que charlas informátivas de diferentes temas de pertinencia dictadas por extranjeros y nacionales que han enriquecido mi conocimiento. 
                                                </p>
                                            </div>
                                        </div>
                                        <div className="divisor"></div>

                                    </div>
                                </Col>
                                <Col md="3" lg="2">
                                    <aside>
                                        <div className="d-flex mb-3">
                                            <h2 className="subtitle-green mr-1 mb-0">Proyectos</h2>
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

export default index
