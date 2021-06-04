import React, { useState } from 'react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'

const syllabus = () => {
    return (
        <>
            <Layout title="Syllabus">
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
                                        <li className="breadcrumb-item">
                                            <Link href="/informacion-academica">
                                                <a role="button">Información académica</a>
                                            </Link>
                                        </li>
                                        <Breadcrumb.Item active>Syllabus | Ciencias Biológicas</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Syllabus | Ciencias Biológicas</div>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4">
                            <Row>
                                <Col sm="3"></Col>
                                <Col sm="6">
                                    <div>
                                        <input className="search-input" placeholder="Busca por un curso o docente" type="text" />
                                    </div>
                                </Col>
                                <Col sm="3"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col sm="1"></Col>
                                <Col sm="8">
                                    <div>
                                        <div className="block-divider mb-3 position-relative">
                                            <h3 className="title">Biología y parasitología I</h3>
                                            <p className="mb-3">Docente: Julio Galarza Perez</p>
                                            <div className="wrapper-icon-download">
                                                <div>
                                                    <img src="/assets/img/iconos/descarga.svg" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="2">
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

export default syllabus