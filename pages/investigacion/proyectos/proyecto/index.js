import React, { useState, useEffect } from "react";
import Layout from '../../../../components/Layout'
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'
import NoticiasExtra from "../../../../components/NoticiasExtra"

const index = () => {

    return (
        <>
            <Layout title="Proyecto">
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
                                        {/* <Breadcrumb.Item active>Formación académica</Breadcrumb.Item> */}
                                        <li className="breadcrumb-item">
                                            <Link href="/investigacion/proyectos">
                                                <a role="button">Investigación: Producción científica de la facultad</a>
                                            </Link>
                                        </li>
                                        <Breadcrumb.Item active>Nuestros Nanobiofertilizantes...</Breadcrumb.Item>
                                    </Breadcrumb>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    <div>
                        <Container className="mb-3">
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="7" lg="8">
                                    <div className="title-page mb-2">
                                        Nuestros Nanobiofertilizantes: uso de arcillas en la preparación de emulsiones de Pickering para formulados agrícolas a base de biomasa microalgal de Arthrospira máxima
                                    </div>
                                </Col>
                                <Col md="3" lg="2"></Col>
                                <Col md="1" lg="1"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="7" lg="8">
                                    <div className="img-float-left mb-3 mr-3">
                                        <p className="img-info">Genómica funcional de microorganismos y biorremediación</p>
                                        <img className="w-100 img-fluid" src="/assets/img/investigacion/proyectos/proyecto_desarrollo.png" alt="" />
                                    </div>
                                    <p>
                                        Se discute en este trabajo el desarrollo histórico, significado y valor heurístico de la Historia Natural en la reflexión teórica y generación de hipótesis en biología. Sobre esta base se fundamenta la validez de una metodología propia en el dominio de las ciencias naturales históricas, en general.
                                    </p>
                                    <p>
                                        Primero se examinan de manera crítica los principios generales y metodologías que rigen la investigación en ciencias naturales históricas, en contraste con las ciencias biológicas experimentales. Se comenta el actualismo, un principio fundamental que valida el uso de análogos actuales y la formulación de retrodicciones en la investigación del pasado.
                                    </p>
                                    <p>
                                        La disciplina de la "Historia Natural" nació con la búsqueda de principios que gobiernan el orden natural de los seres vivos en el siglo XVII, sobre la base de la observación metódica de los organismos mismos, esto es, sin referencia el discurso que caracterizara la época medieval, donde la observación se mezclaba con la literatura, fantasía, leyenda y utilidad. Pese a importantes diferencias entre ellos, el orden que proponen los naturalistas en el siglo XVII – como Linneo y Buffon− enfatiza la observación de la anatomía externa e interna de los organismos, método que posibilita su reconocimiento y comparación y, por ende, el desarrollo de una nomenclatura, un orden sistemático y la comunicación universal. De esta suerte, la Taxonomía se constituye en la ciencia del orden natural, donde los conceptos fundamentales son los de jerarquía, selección de caracteres y sistema. Así, lejos de constituir un campo meramente descriptivo, desorganizado y subjetivo, la Historia Natural moderna −y sus incipientes descendientes, la Botánica, Zoología, Embriología, Morfología, Anatomía, etc.− nacen inspirados en el modelo de racionalidad de las ciencias físicas y en el pensamiento mecanicista cartesiano, pensamiento que da origen a las ciencias naturales en general.
                                    </p>
                                    <p>
                                        Esta mirada moderna experimenta un giro radical en el siglo XIX, cuando se reconfigura el campo de la Historia Natural sobre la base de nuevos principios y conceptos que caracterizan la transición de modernidad a la época contemporánea. Una de las ideas claves de este cambio de paradigma es la noción de "organismo", introducida por Kant en 1790. En contraste con la materia inanimada, los seres vivos son concebidos por primera vez como productos o fines naturales de un proceso de autoproducción y autoorganización. El principio de "conformidad a fin" de los seres vivos lo propone Kant como un principio reflexivo, pero necesario para orientar la investigación y la formulación de nuevas leyes empíricas (uso heurístico). Este principio surge como respuesta a la multiplicidad de formas y fenómenos contingentes del dominio de los seres vivos, contingencia que parece rebasar la posibilidad de explicación por causalidad meramente mecánica. Paralelamente, los naturalistas del siglo XIX, −como De Candolle, Jussieau, Cuvier, Lamarck, Darwin, Haeckel, Von Uexküll, entre otros− abren el espacio evolutivo-histórico de los organismos, al enfatizar en la clasificación de plantas y animales la búsqueda de aquellos caracteres naturales, capaces de revelar el plan estructural común de los grandes grupos y la función integrada del organismo y sus partes en conexión con su entorno.
                                    </p>
                                    <p>
                                        En este contexto, es crucial el giro que conlleva el pensamiento evolutivo de Lamark y Darwin, quienes reemplazan la doctrina fijista de las especies, dominante en su época, por una concepción que reconoce sus transformaciones como producto de la historia. La teoría evolutiva −fundamentada en la integración y discusión de evidencias empíricas procedentes de la Historia Natural de la época (sistemática, anatomía comparada, desarrollo, distribución geográfica, geología y paleontología)− se plasma en El Origen de las Especies (1859), la obra cumbre de Darwin, que transforma radicalmente el modo de entender las relaciones entre los organismos e introduce una perspectiva histórica en el estudio de la vida. Así la Historia Natural se abre hacia la comprensión de los seres vivos como agentes de su propia historia. El tiempo irrumpe en el ordenado espacio de la clasificación de la modernidad, centrada en la búsqueda de una mathesis cualitativa para el ordenamiento de los seres vivos; ella cede paso a una nueva "Historia Natural", centrada ahora en el origen y transformación histórica de los mismos.
                                    </p>
                                    <div className="title-dark mb-3">Bibliografía</div>
                                    <div>
                                        <p>
                                            ALVAREZ, L.W., W. ALVAREZ, F. ASARO & H.V. MICHEL. 1980. Extraterrestrial Cause for the Cretaceous Tertiary Extinction. Science 208: 1095-1108. 
                                        </p>
                                        <p>
                                            ARIEW, A. 2007. Teleology. In D. Hull & M. Ruse (eds.), Cambridge Companion to Philosophy of Biology, pp. 160-181. Cambridge. Cambridge University Press. <a href="#">[ Links ]</a>
                                        </p>
                                    </div>
                                    <div className="section-compartir mb-3">
                                        <div className="d-inline-block font-weight-bold mr-3">
                                            Compartir vía:
                                        </div>
                                        <div className="icons">
                                            <a href="#" className="d-inline-block">
                                                <img src="/assets/img/iconos/email.svg"/>
                                            </a>
                                            <a href="#" className="d-inline-block">
                                                <img src="/assets/img/iconos/whatsapp.svg"/>
                                            </a>
                                            <a href="#" className="d-inline-block">
                                                <img src="/assets/img/iconos/facebook.svg"/>
                                            </a>
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
                                                    <Link href="/investigacion/grupos-investigacion">
                                                        <a>
                                                            Infórmate aquí
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <NoticiasExtra 
                                            idNoticiaDetalle = {""} 
                                        />
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
