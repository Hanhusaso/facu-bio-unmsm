import React, { useState } from 'react'

// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link'
import Layout from '../../../../components/Layout'
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
                                        <li className="breadcrumb-item">
                                            <Link href="/formacion-academica/educacion-continua">
                                                <a role="button">Formación académica: Educación continua</a>
                                            </Link>
                                        </li>
                                        <Breadcrumb.Item active>Curso</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Validación en procesos farmacéuticos con énfasis estadístico de datos</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>

                        {/* IMAGE */}

                        <div className="mb-4">
                            <img className="w-100" src="/assets/img/educacion-continua/educacion_continua_banner.png" alt="" />
                        </div>

                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
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
                                        <div className="mb-2">
                                            <p className="font-weight-bold mb-1">Horario de atención:</p>
                                            <p className="mb-0">Lun - Mie - Vie.</p>
                                            <p className="mb-0">8:00 a.m. - 5:00 p.m.</p>
                                        </div>
                                        <div className="mb-2">
                                            <p className="font-weight-bold mb-1">Ubicación:</p>
                                            <p className="mb-0">Zoom meetings</p>
                                        </div>
                                        <div className="mb-2">
                                            <p className="font-weight-bold mb-1">N° de vacantes:</p>
                                            <p className="mb-0">50 vacantes</p>
                                        </div>
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
                                                <Link href="/informacion-academica">
                                                    <a>
                                                        Información académica
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="4" lg="6">
                                    <div>
                                        <p className="title-dark">
                                            Descripción:
                                        </p>
                                        <p>
                                            El Cerseu de la Facultad de Ciencias Físicas organiza el Curso-Taller “Enseñanza interactiva de Ciencia y Tecnología por competencias”, dirigido a docentes de Educación Básica e interesados. La capacitación inicia el 18 de enero, los lunes, miércoles y viernes de 6:00 p. m. a 8:00 p. m.
                                        </p>
                                        <a href="#" className="btn-green-bright mb-3">Inscripciones</a>
                                        <p className="title-dark">
                                            Inicio y fin de clases
                                        </p>
                                        <p>
                                            18 de mayo
                                        </p>
                                        <p className="title-dark">
                                            Duración
                                        </p>
                                        <p>
                                            140 horas electivas.
                                        </p>
                                        <p className="title-dark">
                                            Inversión
                                        </p>
                                        <p>
                                            Curso gratuito
                                        </p>
                                        <p className="title-dark">
                                            Público objetivo
                                        </p>
                                        <p>
                                            Comunidad sanmarquina y público en general.
                                        </p>
                                        <p className="title-dark">
                                            Plana docente
                                        </p>
                                        <div>
                                            <p className="title mb-2">
                                                Lic. Julio  Montero Cáceres
                                            </p>
                                            <p>
                                                Docente  especialista en temas de ebendum blandit morbi tristique metus.Eu suspendisse cras magna scelerisque penatibus viverra aliquam. Risus morbi in facilisi est leo eget ullamcorper. Amet tempus fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper purus ue aliquet netus. Bibendum blandit morbi tristique met tempus fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper...
                                            </p>
                                        </div>
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

export default index
