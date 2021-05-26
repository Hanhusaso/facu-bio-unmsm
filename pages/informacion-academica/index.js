import React, { useState } from 'react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import { AiFillContainer } from 'react-icons/ai'

export default function InformacionAcademica() {

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

            <Layout title="Información académica">
                <div>
                    <div>
                        <Container>
                            <Row>
                                <Col sm="1"></Col>
                                <Col className="desktop-extra-width">
                                    <Breadcrumb>
                                        {/* <Breadcrumb.Item> */}
                                        <li className="breadcrumb-item">
                                            <Link href="/">
                                                <a role="button">Inicio</a>
                                            </Link>
                                        </li>
                                        {/* </Breadcrumb.Item> */}
                                        <Breadcrumb.Item active>Información académica</Breadcrumb.Item>
                                    </Breadcrumb>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <Container className="mb-3">
                            <Row>
                                <Col sm="1"></Col>
                                <Col className="desktop-extra-width">
                                    <div className="title-page text-center">Información académica</div>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-3">
                            <Row>
                                <Col sm="1"></Col>
                                <Col className="desktop-extra-width-l">
                                    Todo lo necesario para cursar el semestre con éxito está aquí: cronograma académica, planes de estudios, mallas curriculares, syllabus, etc.
                                </Col>
                                <Col sm="3"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col sm="1"></Col>
                                <Col className="desktop-extra-width-l" sm="2">
                                    <div>
                                        <div>Recurso:</div>
                                        <div>Horarios</div>
                                        <div>Malla curricular</div>
                                        <div>Syllabus</div>
                                        <div>Información de docentes</div>
                                    </div>
                                    <div>
                                        <div>Escuelas</div>
                                        <div>Ciencias Biológicas</div>
                                        <div>Microbiología y parasitología</div>
                                        <div>Genética y biotecnología</div>
                                    </div>
                                </Col>
                                <Col sm="6">
                                    <div>
                                        {pages.map(post => (
                                            <div className="block-divider mb-3">
                                                <h3 className="title">Cronograma académico 2021</h3>
                                                <p className="mb-3">Mira el cronograma completo para el semestre y el ciclo anual</p>
                                            </div>
                                        ))}
                                    </div>
                                </Col>
                                <Col className="desktop-extra-width-r" sm="2">
                                    <aside>
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
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>

        </>
    )
}