import React from 'react'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

const pregrado = () => {
    return (
        <>
            <Layout title="Conoce la facultad">
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
                                        <Breadcrumb.Item active>Comunidad: Conoce la facultad</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Conoce la facultad</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4">
                            <Row>
                                <Col md="1"></Col>
                                <Col>
                                    <p>
                                        La Facultad de Ciencias Biológicas les da la bienvenida y expresa su compromiso de trabajar por y para el país. Esperamos que a través de esta página Web puedan encontrar la información de su interés, así como servicios académicos y tecnológicos requeridos por la comunidad.
                                    </p>
                                    <p>
                                        Somos una facultad cuyo objetivo es formar profesionales con una sólida formación académica que responda a las necesidades de nuestro país, formamos parte del área de Ciencias Básicas y contamos con tres Escuelas académico profesionales: Ciencias Biológicas, Genética y Biotecnología y de Microbiología y Parasitología. Además contamos con una Unidad de posgrado donde impartimos Maestrías y Doctorados.
                                    </p>
                                    <p>
                                        La Facultad cuenta con un instituto de investigación Antonio Raimondi que es el órgano que promueve la investigación científica en nuestra facultad, y el Centro de extensión universitaria y proyección social que se encarga de la producción de bienes y servicios de la comunidad.
                                    </p>
                                    <p className="mb-0">
                                        Al asumir el gobierno de la facultad reafirmamos nuestro compromiso de realizar un trabajo con responsabilidad, equidad y transparencia; de tal manera que podamos alcanzar objetivos académicos, administrativos, de investigación y de proyección social, con la finalidad de colaborar con el progreso del país dentro del marco del desarrollo sostenible.
                                    </p>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container className="mb-4 mb-md-5">
                            <Row className="reverse-responsive">
                                <Col md="2"></Col>
                                <Col md="4" className="text-center">
                                    <Link href="/comunidad/conoce-la-facultad/biblioteca">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/comunidad/biblioteca.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/comunidad/conoce-la-facultad/biblioteca">
                                            <a className="title-green">
                                                Biblioteca
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            La Facultad de Ciencias Biológicas cuenta con su propia biblioteca especializada, la misma que se encuentra interconectada a través del Sistema de Bibliotecas (siglas: SISBIB) con la Biblioteca Central Pedro Zulen de la Universidad de San Marcos. Esta unidad provee un apoyo esencial a la comunidad universitaria en el fomento del estudio, la docencia y la investigación. La biblioteca fue reinaugurada en septiembre del 2020 tras ampliarse el pabellón en el que se ubicaba. Así, actualmente cuenta con un área aproximada de trescientos cincuenta metros cuadrados y se encuentra en el tercer piso del denominado pabellón de docencia.
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
                                        <Link href="/comunidad/conoce-la-facultad/laboratorios">
                                            <a className="title-green">
                                                Laboratorios
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Genética y Biotecnología</div> */}
                                    <div className="d-none d-md-block">
                                        <p>
                                            Uno de los motivos por el que la Facultad de Ciencias Biológicas (FCB) se encuentra muy bien posicionada en investigación es la cantidad de laboratorios con los que cuenta y el uso diario que se le da para diversos proyectos de investigación.
                                        </p>
                                        <p className="mb-0">
                                            Incluso, durante la supervisión que realizó la Superintendencia (Sunedu) previo a la entrega del licenciamiento institucional, nuestros laboratorios fueron reconocidos por dicha entidad en su video de saludo a San Marcos.
                                        </p>
                                    </div>
                                </Col>
                                <Col md="4" className="text-center">
                                    <Link href="/comunidad/conoce-la-facultad/laboratorios">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/comunidad/laboratorios.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col md="2"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="reverse-responsive">
                                <Col md="2"></Col>
                                <Col md="4" className="text-center">
                                    <Link href="/comunidad/conoce-la-facultad/laboratorio-especializado">
                                        <a>
                                            <img className="img-fluid" src="/assets/img/comunidad/laboratorio-especializado.png" alt="" />
                                        </a>
                                    </Link>
                                </Col>
                                <Col className="d-flex flex-column justify-content-center" md="4">
                                    <div className="text-center mb-3">
                                        <Link href="/comunidad/conoce-la-facultad/laboratorio-especializado">
                                            <a className="title-green">
                                                Laboratorio de Equipamiento especializado
                                            </a>
                                        </Link>
                                    </div>
                                    {/* <div className="title-green text-center">E.P Microbiología y Parasitología</div> */}
                                    <div className="d-none d-md-block">
                                        <p className="mb-0">
                                            Bienvenidos al Laboratorio de Equipamiento Especializado, es un laboratorio dedicado a la innovación, aplicación y tecnología ubicado en la Facultad de Ciencias biológicas de la Universidad Nacional Mayor de San Marcos. Este Laboratorio brinda servicios de Microscopia Electronica de Barrido, Microscopia de Epifluorescencia, Cromatografía Liquida de alto performance/rendimiento, Liofilización, Metalización, desecado a punto crítico, esterilización por sonicador y produccion de agua ultrapura tipo III (para lavar materiales de vidrio, para baño María) y tipo I (la mejor calidad de agua para dilución de reactivos). El agua tipo I pasa a través de un filtro con poros de 0.22um.
                                        </p>
                                    </div>
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

export default pregrado
