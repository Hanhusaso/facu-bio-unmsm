import React, { useState } from 'react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'

const TramitesProcesos = () => {

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
            <Layout title="Trámites y procesos">
                <div>
                    <div>
                        <Container>
                            <Row>
                                <Col md="1"></Col>
                                <Col className="">
                                    <Breadcrumb>
                                        {/* <Breadcrumb.Item> */}
                                        <li className="breadcrumb-item">
                                            <Link href="/">
                                                <a role="button">Inicio</a>
                                            </Link>
                                        </li>
                                        {/* </Breadcrumb.Item> */}
                                        <Breadcrumb.Item active>Trámites y procesos</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Trámites y procesos</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

                        <Container className="mb-4">
                            <Row>
                                <Col md="3"></Col>
                                <Col md="6">
                                    <div>
                                        <input className="search-input" placeholder="Matrícula, bachiller, sustentación de tesis, etc..." type="text" />
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
                                        <div className="mb-3">
                                            <div className="font-weight-bold mb-2">Dirigido a:</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="dirigido-ingresantes" name="dirigido-ingresantes" value="ingresantes"/>
                                                    <label className="mb-0" for="dirigido-ingresantes"><span className="checkmark"></span> Ingresantes</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="dirigido-pregrado" name="dirigido-pregrado" value="pregrado"/>
                                                    <label className="mb-0" for="dirigido-pregrado"><span className="checkmark"></span> Pregrado</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="dirigido-posgrado" name="dirigido-posgrado" value="posgrado"/>
                                                    <label className="mb-0" for="dirigido-posgrado"><span className="checkmark"></span> Posgrado</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="dirigido-egresados" name="dirigido-egresados" value="egresados"/>
                                                    <label className="mb-0" for="dirigido-egresados"><span className="checkmark"></span> Egresados</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="dirigido-docentes" name="dirigido-docentes" value="docentes"/>
                                                    <label className="mb-0" for="dirigido-docentes"><span className="checkmark"></span> Docentes</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-weight-bold mb-2">Frecuentes:</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="frecuentes-matricula" name="frecuentes-matricula" value="matricula"/>
                                                    <label className="mb-0" for="frecuentes-matricula"><span className="checkmark"></span> Matrícula</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="frecuentes-titulos-grados" name="frecuentes-titulos-grados" value="titulos y grados"/>
                                                    <label className="mb-0" for="frecuentes-titulos-grados"><span className="checkmark"></span> Títulos y grados</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="frecuentes-constancias" name="frecuentes-constancias" value="constancias"/>
                                                    <label className="mb-0" for="frecuentes-constancias"><span className="checkmark"></span> Constancias</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4" lg="6">
                                    <div>
                                        <div className="divisor my-3"></div>
                                        {pages.map(post => (
                                            <div className="block-divider mb-3">
                                                <Link href="/tramites-y-procesos/anulacion-matricula">
                                                    <a className="title">Anulación de matrícula | Pregrado</a>
                                                </Link>
                                                <p className="mb-3">
                                                    obortis quam placerat lobortis tristique aliquet netus. Bibendum blandit morbi tristique metus.Eu suspendisse cras magna scelerisque penatibus viverra aliquam. Risus morbi in facilisi est leo eget ullamcorper. Amet tempus fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper purus ue aliquet netus. Bibendum blandit morbi tristique metus..
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                                <Col md="3" lg="2">
                                    <aside>
                                        <div className="block-interest-links mb-4">
                                            <p className="font-weight-bold mb-2 text-center">
                                                ¿Tienes dudas sobre algún trámite o no encuentras la información que necesitas?
                                            </p>
                                            <ul className="nav flex-column">
                                                <li className="mb-2 text-center font-weight-bold">
                                                    <Link href="/tramites-y-procesos/preguntas-frecuentes">
                                                        <a>
                                                            Ir a preguntas frecuentes
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

export default TramitesProcesos
