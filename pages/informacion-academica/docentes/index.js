import React, { useState } from 'react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import * as HiIcons from "react-icons/hi";

const docentes = () => {
    return (
        <>
            <Layout title="Docentes">
                <div>
                    <div>
                        <Container>
                            <Row>
                                <Col sm="1"></Col>
                                <Col className="">
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
                                        <Breadcrumb.Item active>Información de docentes | Departamento de Biología Celular y Genética</Breadcrumb.Item>
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
                                <Col className="">
                                    <div className="title-page text-center">Información de docentes | Departamento de Biología Celular y Genética</div>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4">
                            <Row>
                                <Col sm="3"></Col>
                                <Col>
                                    <div>
                                        <input className="search-input" placeholder="Busca por un docente por nombre" type="text" />
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
                                        <div className="divisor my-3"></div>
                                        <div className="block-divider mb-3 pb-2 position-relative">
                                            <h3 className="title">Mg. Julio  Montero Cáceres | Docente principal   </h3>
                                            <p className="mb-2">
                                                <span className="mr-2">Documentación:</span>
                                                <a href="#" className="d-inline-block color-inherit mr-3">
                                                    <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                    <span className="">Resolución rectoral</span>
                                                </a>
                                                <a href="#" className="d-inline-block color-inherit mr-3">
                                                    <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                    <span className="">Hoja de vida</span>
                                                </a>
                                            </p>
                                            <p className="mb-2">
                                                <span className="mr-2">Investigación:</span>
                                                <a href="#" className="d-inline-block color-inherit mr-2">
                                                    <span className="mr-1">RAIS</span>
                                                    <HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                </a>
                                                <a href="#" className="d-inline-block color-inherit mr-2">
                                                    <span className="mr-1">SIIS</span>
                                                    <HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                </a>
                                            </p>
                                            <p className="mb-2">
                                                <span className="mr-2">Contacto:</span>
                                                <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                <span className="text-break">laucastivas@unmsm.edu.pe</span>
                                            </p>
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

export default docentes
