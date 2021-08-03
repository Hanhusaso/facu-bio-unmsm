import React , { useEffect } from 'react'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'
import * as HiIcons from "react-icons/hi";
import NoticiasExtra from '../../../components/NoticiasExtra';

const gruposInvestigacion = () => {
    return (
        <>
            <Layout title="Grupos de investigación">
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
                                        {/* <li className="breadcrumb-item">
                                            <Link href="/noticias">
                                                <a role="button">Noticias</a>
                                            </Link>
                                        </li> */}
                                        <Breadcrumb.Item active>Investigación: Grupos de investigación</Breadcrumb.Item>
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
                                <Col md="10">
                                    <div className="title-page mb-2 text-center">Grupos de investigación</div>
                                    {/* <div className="sub-title text-center">Egresada de la E.P. Microbiología y Parasitología </div> */}
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="7" lg="8">
                                    <div className="mb-3">
                                        <div className="title-dark mb-2">¿Qué es la Investigación universitaria?</div>
                                        <p>
                                            Es aquella investigación colaborativa entre el docente y el estudiante, entendida como un proceso que involucra tanto la creación de conocimiento como el de educar y formar investigadores. Con esta premisa la UNMSM realizó un cambio importante en el manejo de la investigación en las 20 Facultades a través de la creación de los Grupos de Investigación (GI).
                                        </p>
                                        <div className="title-dark mb-2">¿Cómo se crearon los GI?</div>
                                        <p>
                                            Los GI se plantearon como unidades funcionales de duración temporal y renovable, integradas por docentes y estudiantes (preferentemente tesistas) de la UNMSM, para desarrollar actividades de investigación, desarrollo e innovación y que, a su vez, infundan dinamismo a los institutos de investigación en las facultades.
                                        </p>
                                        <div className="title-dark mb-2">¿Cuáles son sus objetivos?</div>
                                        <p>
                                            Los GI deberán contribuir a la investigación formativa a nivel del pregrado (trabajos de investigación y tesis), ser los guías y apoyo para las tesis de posgrado, y lograr graduaciones y titulaciones de alta calidad académica. Además, los GI deben promover y articular sus capacidades para solucionar y proponer alternativas a las diversas problemáticas del Perú, así como a las necesidades de innovación de las empresas y organismos públicos y privados, proponiendo soluciones tecnológicas; de esta manera, los GI se convierten en los espacios de investigaciones pertinentes a las necesidades de la sociedad y de formación de estudiantes con visión para el desarrollo. En resumen, en el modelo que propusimos, el estudiante de pre y posgrado debe vincularse a un GI, a fin de desarrollar allí un componente de programas o líneas de investigación del GI. Los GI tendrán estudiantes que cubrirán múltiples aspectos de los procesos que desarrollan mientras reciben el conocimiento directo de los docentes con más experiencia. Eso garantiza que el estudiante esté en contacto con la realidad de la investigación y no envuelto en metodologías que suelen confundirlo o llevarlo a una perspectiva formalista de la misma. Su relación con los investigadores de los GI y estos con la realidad del país, permitirá un mutuo enriquecimiento.
                                        </p>
                                        <div className="title-dark mb-2">¿Cuántos Grupos de Investigación encontramos en nuestra facultad?</div>
                                        <p>
                                            En la Facultad de Ciencias Biológicas se han constituido 36 grupos de Investigación los que han sido categorizados por el Vicerrectorado de Investigación y posgrado de nuestra Universidad siendo el 50% de ellos categorizados como grupos de investigación A y B.
                                        </p>
                                        <p>
                                            En los Grupos de Investigación (GI)  se abordan las diferentes disciplinas de competencia del investigador biólogo de acuerdo a su 13  Líneas de investigación propuestas en el taller de Investigación y Posgrado 2019.
                                        </p>
                                        <div className="title-dark mb-2">¿Te gustaría participar en un GI?</div>
                                        <p>
                                            En los GI se  destaca  la presencia de sus miembros Coordinadores, Titulares, Colaboradores externos  y Adherentes en calidad de  estudiantes en conjunto con los docentes investigadores en la actividad formativa ejercida a través de los Trabajos y tesis de investigación a nivel de Pre grado y Posgrado. La participación activa de investigadores internacionales colabora en la internacionalización de la investigación en la UNMSM.
                                        </p>
                                        <p>
                                            Los GI participan activamente en Convocatorias a FONDOS CONCURSABLES siendo  ganadores de proyectos institucionales con Fondos de la UNMSM y externos ya que los  productos de investigación  de los GI son evidentes en publicaciones en revista de impacto, tesis sustentadas y patentes.
                                        </p>
                                        <p>
                                            Los invitamos a ser parte activa de los Grupos de Investigación de la Facultad de Ciencias Biológicas e interactuar con nuestros Grupos de investigación a través del correo electrónico <b>icbar.biologia@unmsm.edu.pe</b>.
                                        </p>
                                    </div>
                                    <div className="text-center mb-3">
                                        <a className="btn-green-bright" href="https://vrip.unmsm.edu.pe/biologia/" target="_blank">
                                            Grupos de investigación
                                        </a>
                                    </div>
                                    {/* BUSCADOR */}
                                    {/* <div>
                                        <Container className="mb-4">
                                            <Row>
                                                <Col md="3"></Col>
                                                <Col md="6" className="">
                                                    <div>
                                                        <input className="search-input" placeholder="Buscar por palabra clave" type="text" />
                                                    </div>
                                                </Col>
                                                <Col md="3"></Col>
                                            </Row>
                                        </Container>
                                    </div> */}
                                    {/* LISTA DEL BUSCADOR */}
                                    {/* <div className="divisor"></div>
                                    <div>
                                        <div className="block-divider mb-3 pb-3 position-relative">
                                            <div className="mb-2">
                                                <a href="#">
                                                    <h3 className="title d-inline mr-2">Aplicación clínica de recursos naturales</h3><HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                </a>
                                            </div>
                                            <p className="mb-2">
                                                Monitorización y restauración de ecosistemas. Ectomicorrizas forestales, truficultura y micología forestal. Briología: biodiversidad y ecología de musgos. Informatización de colecciones de herbario.
                                            </p>
                                            <div>
                                                <div className="d-inline mr-4">
                                                    <span className="font-weight-bold mr-2">Coodinador:</span>
                                                    <span className="">Liliana del Rosario Tapia Ugaz</span>
                                                </div>
                                                <a className="color-inherit d-inline mr-4" href="#">
                                                    <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                    <span className="">Resolución rectoral</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="block-divider mb-3 pb-3 position-relative">
                                            <div className="mb-2">
                                                <a href="#">
                                                    <h3 className="title d-inline mr-2">Acuicultura y nutrición de organismos acuáticos</h3><HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                </a>
                                            </div>
                                            <p className="mb-2">
                                                Es un grupo de caracter interdisciplinario que tiene como objetivo el estudio de los RNAs desde el punto de vista genómico y postgenómico. Las actividades desarrolladas por el grupo integran conceptos de las ciencias biológicas, la química, las matemáticas y las ciencias de la computación.
                                            </p>
                                            <div>
                                                <div className="d-inline mr-4">
                                                    <span className="font-weight-bold mr-2">Coodinador:</span>
                                                    <span className="">Gaby Betty Millan Salazar</span>
                                                </div>
                                                <div className="d-inline mr-4">
                                                    <a className="color-inherit" href="#">
                                                        <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                        <span className="">Resolución rectoral</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </Col>
                                <Col md="3" lg="2">
                                    <aside>
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

export default gruposInvestigacion
