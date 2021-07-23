import React from 'react'
import Layout from '../../../components/Layout'
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

const pregrado = () => {
    return (
        <>
            <Layout title="Historia">
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
                                        <Breadcrumb.Item active>Nosotros: Historia</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Historia</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="7" lg="8">
                                    <div className="mb-4">
                                        <p className="">
                                            Durante su segundo periodo presidencial el Mariscal Ramón Castilla promulga el 28 de agosto de 1861 el Reglamento para la Universidad de San Marcos. La universidad estaba conformada por 5 facultades, entre ellas, la de Matemáticas y Ciencias Naturales cuyo plan de estudios estaba conformado, entre otras materias de enseñanza, por Historial natural siendo su primer catedrático don Antonio Raimondi Dell'Acqua.
                                        </p>
                                        <p className="">
                                            El Decreto del 15 de marzo de 1866 independizó la Facultad de Ciencias de la Facultad de Letras y Jurisprudencia. La Facultad de Ciencias continuó con el plan de estudios de 1861, los contenidos de la cátedra de Historia Natural estaban conformados por Mineralogía, Geología, Botánica y Zoología. El gobierno designa primer decano de esta Facultad a don Antonio Raimondi Dell'Acqua quien ejerció el referido cargo durante un año para continuar con sus labores de exploración por nuestro país. Sebastián Barranca sucede a Raimondi en el dictado de las lecciones de Historia Natural. Emulando a Raimondi, durante el último tercio del siglo XIX, ejercieron la docencia en Botánica los doctores José María Romero y Miguel Felipe Colunga, este último amigo personal de Raimondi.
                                        </p>
                                    </div>

                                    {/* <p className="title-dark mb-4">
                                        Galería
                                    </p>

                                    <div className="grid-img-hover mb-4">
                                        <div className="wrapper-img mb-3">
                                            <img className="w-100 img-fluid mb-2" src="/assets/img/noticias/noticias_page_1.png" alt="" />
                                            <div className="name-img text-center">
                                                Galería 1
                                            </div>
                                        </div>
                                        <div className="wrapper-img mb-3">
                                            <img className="w-100 img-fluid mb-2" src="/assets/img/noticias/noticias_page_1.png" alt="" />
                                            <div className="name-img text-center">
                                                Galería 2
                                            </div>
                                        </div>
                                        <div className="wrapper-img mb-3">
                                            <img className="w-100 img-fluid mb-2" src="/assets/img/noticias/noticias_page_1.png" alt="" />
                                            <div className="name-img text-center">
                                                Galería 3
                                            </div>
                                        </div>
                                    </div> */}
                                </Col>
                                <Col md="3" lg="2">
                                    <aside>
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
                                            <div className="mb-0 grid-contacto">
                                                <div>
                                                    <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                </div>
                                                <div>
                                                    <span>
                                                        epcb.biologia@unmsm.edu.pe
                                                    </span>
                                                </div>
                                            </div>
                                            {/* <p className="font-weight-bold mb-1">Horario de atención:</p>
                                            <p className="mb-0">8:00 a.m. - 5:00 p.m.</p> */}
                                        </div>
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
                                        <div className="d-flex mb-3">
                                            <h2 className="subtitle-green mr-1 mb-0">Proyectos</h2>
                                            <a href="/eventos" className="d-inline-block">
                                                <img src="/assets/img/iconos/boton_vermas.png"/>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="card-bio no-grid mb-3">
                                                <div className="part-img position-relative d-none d-md-block">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia2.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card title mb-0">
                                                        Dos científicas ganan el Premio Nobel de Química 2020 por “tijeras genéticas” CRISPR-Cas9
                                                    </p>
                                                </div>
                                                <div className="part-info">
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>7 de abril de 2021</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                        </span>
                                                        <span>5:00 pm</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                        </span>
                                                        <span>Zoom meetings</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-bio no-grid mb-3">
                                                <div className="part-img position-relative d-none d-md-block">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia3.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card title mb-0">
                                                        El objetivo de nuestro proyecto es ir en camino a producir clones de alpacas
                                                    </p>
                                                </div>
                                                <div className="part-info">
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>7 de abril de 2021</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                        </span>
                                                        <span>5:00 pm</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                        </span>
                                                        <span>Zoom meetings</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-bio no-grid mb-3">
                                                <div className="part-img position-relative d-none d-md-block">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia4.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card title mb-0">
                                                        ¡La FCB ya cuenta oficialmente con un nuevo y moderno pabellón!
                                                    </p>
                                                </div>
                                                <div className="part-info">
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>7 de abril de 2021</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                        </span>
                                                        <span>5:00 pm</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                        </span>
                                                        <span>Zoom meetings</span>
                                                    </div>
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

export default pregrado
