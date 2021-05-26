import React , { useEffect } from 'react'
import Layout from "../../../../../components/Layout"
// import Tabs from "../../../../../components/Tabs/vanillaTabs"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

const egresado = () => {
    return (
        <>
            <Layout title="Egresados">
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
                                        {/* <Breadcrumb.Item active>Formación académica</Breadcrumb.Item> */}
                                        <li className="breadcrumb-item">Formación académica</li>
                                        <li className="breadcrumb-item">
                                            <Link href="/formacion-academica/pregrado">
                                                <a role="button">Carreras de pregrado</a>
                                            </Link>
                                        </li>
                                        <li className="breadcrumb-item">
                                            <Link href="/formacion-academica/pregrado/ciencias-biologicas">
                                                <a role="button">E.P Ciencias Biológicas</a>
                                            </Link>
                                        </li>
                                        <Breadcrumb.Item active>Seguimiento al egresado</Breadcrumb.Item>
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
                                    <div className="title-page text-center mb-1">Mg. Claudia Villa Vargas - Directora del Genetics Lab. María Cárdenas López</div>
                                    <div className="sub-title text-center">Egresada de la E.P. Microbiología y Parasitología </div>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col sm="1"></Col>
                                <Col sm="8">
                                    <div className="d-flex justify-content-center mb-4">
                                        <img className="img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado3.png" alt="" />
                                    </div>
                                    <p>
                                        Se trata de la Mg. Claudia Villa, egresada de la E.P de Ciencias biológicas, quien en la actualidad se desempeña como gerente senior de Programas, como parte de Cloudpath, una iniciativa de liderazgo rotacional que busca formar a los siguientes líderes de la organización y brindarles los conocimientos necesarios sobre el negocio de la computación en la nube.
                                    </p>
                                    <p>
                                        "La profesión que escogí  ha sido nombrada la carrera del futuro. Según El Colombiano "La biología dominará los currículos". Es una ciencia en la que predomina la investigación y EAFIT me ha brindado todas las herramientas necesarias para mi formación como científica; desde varios grupos de investigación y semilleros, hasta una infraestructura que cuenta con los laboratorios mejores dotados, al igual que charlas informátivas de diferentes temas de pertinencia dictadas por extranjeros y nacionales que han enriquecido mi conocimiento. Las oportunidades de intercambio y hacer doble titulación vuelven más atractiva mi hoja de vida. Aparte la universidad tiene una facilidad de pago (debido a  numerosos convenios que tiene) que me permitió seguir estudiando, y debido a mi promedio, pude alcanzar mi mayor ánhelo: la Beca de Honor Pregrado por el primer semestre. Son éstas clases de estímulos que fomentan el buen estudio. Por eso y mucho más adoro Mi universidad, me siento orgullosa de decir que soy y seré EAFITENSE".​
                                    </p>
                                    <p>
                                        Todo esto de la mano de su capacidad de visión de futuro, la construcción participativa, el trabajo en equipo, la curiosidad constante y la disciplina, cualidades que han sido diferenciadoras en el desempeño de este eafitense desde que cursaba sus estudios de pregrado, y que ahora imprime en cada uno de los desafíos que emprende en Amazon Web Services.
                                    </p>
                                    <div className="title mb-3">Aportar al país, su mayor sentido de responsabilidad</div>
                                    <p>
                                        Desde lo profesional, todas las herramientas para ser más analítico y diseñar modelos simples para el manejo de las finanzas y otros procesos; las matemáticas, la estadística y los temas de control y mejora. Y, desde lo profesional, los amigos con los que aún entabla conversaciones, la amplitud para ver el mundo en su diversidad, el emprendimiento y las ganas de aportar al desarrollo y progreso del país.
                                    </p>
                                    <p>
                                        Son muchos los recuerdos, aprendizajes y anécdotas que este egresado conserva de su época de estudiante del pregrado en Ingeniería de Producción y de la maestría en Finanzas. Por eso no es raro que destaque algunos momentos como la pasantía que realizó en la Universidad Macquarie (Australia), cuando estaba cursando el pregrado en Ingeniería de Producción, o las clases con el profesor Ricardo Uribe Marín, hoy decano de la Escuela de Administración, y a quien recuerda con especial afecto.
                                    </p>
                                    <p>
                                        “El tema de aportar al país siempre ha sido parte de mi sentido de responsabilidad. Me lo inculcaron en mi familia y en el colegio, pero EAFIT me lo reforzó y me entregó las herramientas. La Universidad y sus profesores siempre hicieron énfasis en utilizar los conocimientos para devolverle a la sociedad, me mostraron cómo a través de los negocios se podía aportar, y cómo hacer negocios responsables para devolverle crecimiento y oportunidades a Colombia”, recuerda.
                                    </p>
                                    <p>
                                        En la actualidad, y aunque se encuentra residiendo en el exterior, Daniel señala que le encanta visitar la Institución cuando tiene oportunidad y no descarta la posibilidad de poner sus conocimientos al servicio de esta, ya sea como conferencista o como integrante de algún proyecto. “Creo firmemente en la educación como motor de desarrollo y creo que EAFIT, como institución, va en ese camino”.
                                    </p>
                                    <div className="title mb-3">Logros</div>
                                    <ul className="chevron-green mb-3">
                                        <li>Ser galardonada como la primera mujer bióloga peruana en trabajar para la NASA.</li>
                                        <li>Realizar más 150 publicaciones en área de la genética</li>
                                        <li>Asumir el cargo de direccora en el Gentics Lab</li>
                                    </ul>
                                    <div className="section-compartir">
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
                                <Col sm="2">
                                    <aside>
                                        <div className="block-interest-links mb-4">
                                            <p className="font-weight-bold mb-2 text-center">Enlaces de interés</p>
                                            <ul className="nav flex-column">
                                                <li className="mb-2">
                                                    <a href="#">
                                                        Plan de estudios
                                                    </a>
                                                </li>
                                                <li className="mb-2">
                                                    <a href="#">
                                                        Admisión
                                                    </a>
                                                </li>
                                                <li className="mb-2">
                                                    <a href="#">
                                                        Estudios de Posgrados
                                                    </a>
                                                </li>
                                                <li className="mb-0">
                                                    <a href="#">
                                                        Educación continua
                                                    </a>
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
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default egresado
