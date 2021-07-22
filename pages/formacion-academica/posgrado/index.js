import React from 'react'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

const posgrado = () => {
    return (
        <>
            <Layout title="Posgrado - Formación académica">
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
                                        {/* <li className="breadcrumb-item">Formación académica</li> */}
                                        <Breadcrumb.Item active>Formación académica: Posgrado</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Posgrado</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4">
                            <Row>
                                <Col sm="1"></Col>
                                <Col className="">
                                    <p className="mb-0">
                                        La Unidad de Posgrado de la Facultad de Ciencias Biológicas viene formando masa crítica en investigación, mediante programas de Doctorado y Maestrías, en base a la gran biodiversidad del Perú. Las líneas de investigación fomentadas por los programas de posgrado de nuestra unidad contemplan aspectos como: taxonomía y sistemática, florística, bioprospección, ecología vegetal ecología acuática, limnología, acuicultura, sistemática evolutiva, biogeografía, entomología, ornitología, malacología, biología de la reproducción, manejo y gestión de la biodiversidad, etnobiología, microbiología, parasitología, virología, biotecnología, contaminación biológica, biología molecular y genética.
                                    </p>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4 mb-md-5">
                            <Row className="reverse-responsive">
                                <Col md="2"></Col>
                                <Col md="4" className="text-center">
                                    {/* <Link href="/formacion-academica/pregrado/ciencias-biologicas"> */}
                                    <Link href="/formacion-academica/posgrado/doctorado-ciencias-biologicas">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/posgrado/doctorado-ciencias-biologicas-unmsm-minihome.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        {/* <Link href="/formacion-academica/pregrado/ciencias-biologicas"> */}
                                        <Link href="/formacion-academica/posgrado/doctorado-ciencias-biologicas">
                                            <a className="title-green">
                                                Doctorado en Ciencias Biológicas
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            El Doctorado en Ciencias Biológicas forma especialistas de los más altos niveles capaces de evaluar e investigar la problemática nacional en las diversas áreas del conocimiento biológico, con especial énfasis en los campos de la biodiversidad y biología molecular.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4 mb-md-5">
                            <Row>
                                <Col md="2"></Col>
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/formacion-academica/posgrado/maestria-botanica-tropical">
                                            <a className="title-green">
                                                Maestría en Botánica Tropical
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Genética y Biotecnología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-2">
                                            La Maestría de Botánica Tropical de la Facultad de Ciencias Biológicas de la Universidad Nacional Mayor de San Marcos ofrece el grado académico respectivo mediante el desarrollo de cuatro semestres con cursos básicos y electivos. Tiene tres menciones:
                                        </p>
                                        <ul className="chevron-green-dark font-weight-bold">
                                            <li>Botánica Económica</li>
                                            <li>Etnobotánica</li>
                                            <li>Taxonomía y Sistemática Evolutiva</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="4" className="text-center">
                                    <Link href="/formacion-academica/posgrado/maestria-botanica-tropical">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/posgrado/maestria-botanica-tropical-unmsm-minihome.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4 mb-md-5">
                            <Row className="reverse-responsive">
                                <Col md="2"></Col>
                                <Col md="4" className="text-center">
                                    <Link href="/formacion-academica/posgrado/maestria-ecosistemas">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/posgrado/maestria-ecosistemas-recursos-acuaticos-unmsm-minihome.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/formacion-academica/posgrado/maestria-ecosistemas">
                                            <a className="title-green">
                                                Maestría en Ecosistemas y Recursos Acuáticos 
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Microbiología y Parasitología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            La Maestría de Investigación en Ecosistemas y Recursos Acuáticos con mención en Acuicultura, se desarrolla con el fin de formar capital humano que genere conocimiento y su aplicación. Se imparte una formación de calidad que provee investigadores altamente calificados. El egresado podrá desempeñarse tanto en el sector productivo como en universidades o institutos de investigación.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4 mb-md-5">
                            <Row>
                                <Col md="2"></Col>
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/formacion-academica/posgrado/maestria-zoologia">
                                            <a className="title-green">
                                                Maestría en Zoología
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Genética y Biotecnología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-2">
                                            Se busca formar investigadores de alto nivel, capaces de elaborar y ejecutar proyectos de investigación originales, perfeccionar docentes universitarios, elevando su nivel académico, así como capacitar profesionales para favorecer su mejor desenvolvimiento científico-tecnológico. Tiene tres menciones:
                                        </p>
                                        <ul className="chevron-green-dark font-weight-bold">
                                            <li>Ecología y Conservación</li>
                                            <li>Sistemática y Evolución</li>
                                            <li>Ecología y Conservación</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="4" className="text-center">
                                    <Link href="/formacion-academica/posgrado/maestria-zoologia">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/posgrado/maestria-zoologia-unmsm-minihome.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4 mb-md-5">
                            <Row className="reverse-responsive">
                                <Col md="2"></Col>
                                <Col md="4" className="text-center">
                                    <Link href="/formacion-academica/posgrado/maestria-biologia-molecular">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/posgrado/maestria-biologia-molecular-unmsm-minihome.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/formacion-academica/posgrado/maestria-biologia-molecular">
                                            <a className="title-green">
                                                Maestría en Biología Molecular
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Microbiología y Parasitología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            La Maestría de Investigación en Biología Molecular forma especialistas del más alto nivel, conocedores de los conceptos y metodologías actualizadas en el campo de la biología molecular, además de constituirse en un seguidor activo de los constantes avances de la disciplina.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4 mb-md-5">
                            <Row>
                                <Col md="2"></Col>
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/formacion-academica/posgrado/maestria-genetica">
                                            <a className="title-green">
                                                Maestría en Genética
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Genética y Biotecnología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            El objetivo de la Maestría de Investigación en Genética es formar investigadores y docentes calificados para conocer los genes, su estructura, su organización, los mecanismos de transferencia y expresión y su alteración espontánea e inducida en función del tiempo y las condiciones ambientales. Así mismo, utilizar las herramientas moleculares para su aislamiento, conservación y empleo en el mejoramiento genético a través de librerías y bancos genéticos.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4" className="text-center">
                                    <Link href="/formacion-academica/posgrado/maestria-genetica">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/posgrado/maestria-genetica-unmsm-minihome.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4 mb-md-5">
                            <Row className="reverse-responsive">
                                <Col md="2"></Col>
                                <Col md="4" className="text-center">
                                    <Link href="/formacion-academica/posgrado/maestria-biodiversidad">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/posgrado/maestria-biodiversidad-gestion-ecosisemas-unmsm-minihome.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/formacion-academica/posgrado/maestria-biodiversidad">
                                            <a className="title-green">
                                                Maestría en Investigación en Biodiversidad y Gestión de Ecosistemas
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Microbiología y Parasitología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            El objetivo general de la Maestría de Investigación en Biodiversidad y Gestión de Ecosistemas es formar recursos humanos con la capacidad de generar conocimientos. Promover y gestionar la conservación en relación a la biodiversidad dentro de los enfoques del desarrollo sustentable y ecosistémico en las distintas regiones del país.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                        <Container className="">
                            <Row>
                                <Col md="2"></Col>
                                <Col className="d-flex flex-column justify-content-center mb-3 mb-md-0" md="4">
                                    <div className="text-center">
                                        <Link href="">
                                            <a className="title-green">
                                                Segunda especialidad en Parasitología en Animales Silvestres y Acuáticos
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Genética y Biotecnología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias biológicas con especial énfasis en la flora, fauna y ecosistemas Nuestro primer compromiso como institución Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias biológicas con especial énfasis en la flora, fauna y ecosistemas Nuestro primer compromiso como institución. Nuestro primer compromiso como institución académica es el avance del conocimiento de las ciencias.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4" className="text-center">
                                    <Link href="#">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/carreras/genetica.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default posgrado
