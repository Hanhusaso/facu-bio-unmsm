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
                                        <Breadcrumb.Item active>Investigación: Proyectos</Breadcrumb.Item>
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
                                <Col md="1" lg="1"></Col>
                                <Col md="7" lg="8">
                                    Todo lo necesario para cursar el semestre con éxito está aquí: cronograma académica, planes de estudios, mallas curriculares, syllabus, etc.
                                </Col>
                                <Col md="4" lg="3"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
                                    <div className="filters-wrapper">
                                        <div className="mb-3">
                                            <div className="font-weight-bold mb-2">Recurso:</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="recurso-horarios" name="recurso-horarios" value="horarios"/>
                                                    <label className="mb-0" for="recurso-horarios"><span className="checkmark"></span> Horarios</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="recurso-malla" name="recurso-malla" value="malla"/>
                                                    <label className="mb-0" for="recurso-malla"><span className="checkmark"></span> Malla curricular y plan de estudios</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="recurso-syllabus" name="recurso-syllabus" value="syllabus"/>
                                                    <label className="mb-0" for="recurso-syllabus"><span className="checkmark"></span> Syllabus</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="recurso-docentes" name="recurso-docentes" value="docentes"/>
                                                    <label className="mb-0" for="recurso-docentes"><span className="checkmark"></span> Información de docentes</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-weight-bold mb-2">Escuelas:</div>
                                            <div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-ciencias-biologicas" name="escuelas-ciencias-biologicas" value="ciencias-biologicas"/>
                                                    <label className="mb-0" for="escuelas-ciencias-biologicas"><span className="checkmark"></span> Ciencias Biológicas</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-microbiologia" name="escuelas-microbiologia" value="microbiologia"/>
                                                    <label className="mb-0" for="escuelas-microbiologia"><span className="checkmark"></span> Microbiología y parasitología</label>
                                                </div>
                                                <div className="input-group mb-1">
                                                    <input type="checkbox" id="escuelas-genetica" name="escuelas-genetica" value="genetica"/>
                                                    <label className="mb-0" for="escuelas-genetica"><span className="checkmark"></span> Genética y biotecnología</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="4" lg="6">
                                    <div>
                                        <div className="divisor my-3"></div>
                                        <div className="block-divider mb-3">
                                            <Link href="/informacion-academica/horarios">
                                                <a className="title">Horarios 2021-II | Ciencias Biológicas</a>
                                            </Link>
                                            <p className="mb-3">Todos los cursos electivos y obligatorios. Horario actualizado el 23/04/16.</p>
                                        </div>
                                        <div className="block-divider mb-3">
                                            <Link href="/informacion-academica/syllabus">
                                                <a className="title">Syllabus | Ciencias Biológicas</a>
                                            </Link>
                                            <p className="mb-3">Todos los cursos electivos y obligatorios. Horario actualizado el 23/04/16.</p>
                                        </div>
                                        <div className="block-divider mb-3">
                                            <Link href="/informacion-academica/plan">
                                                <a className="title">Malla curricular y plan de estudios 2018 | Ciencias Biológicas</a>
                                            </Link>
                                            <p className="mb-3">Todos los cursos electivos y obligatorios. Horario actualizado el 23/04/16.</p>
                                        </div>
                                        <div className="block-divider mb-3">
                                            <Link href="/informacion-academica/docentes">
                                                <a className="title">Información de docentes | Departamento de Biología celular y Genética</a>
                                            </Link>
                                            <p className="mb-3">Todos los cursos electivos y obligatorios. Horario actualizado el 23/04/16.</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" lg="2">
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
                                <Col md="1" lg="1"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>

        </>
    )
}