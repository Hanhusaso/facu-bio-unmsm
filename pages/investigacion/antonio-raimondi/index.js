import React , { useEffect } from 'react'
import Layout from "../../../components/Layout"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

const antonioRaimondi = () => {
    return (
        <>
            <Layout title="Instituto Antonio Raimondi">
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
                                        <Breadcrumb.Item active>Investigación: Instituto de Investigación de Ciencias Biológicas "Antonio Raimondi" - ICBAR</Breadcrumb.Item>
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
                                    <div className="title-page mb-2 text-center">Instituto de Investigación de Ciencias Biológicas "Antonio Raimondi" - ICBAR</div>
                                    {/* <div className="sub-title text-center">Egresada de la E.P. Microbiología y Parasitología </div> */}
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="7" lg="8">
                                    <div className="mb-4">
                                        <p>
                                            El Instituto de Investigación de Ciencias Biológicas Antonio Raimondi (ICBAR) es la unidad académica de la Facultad de Ciencias Biológicas encargada de la promoción, ordenamiento y desarrollo de la investigación científica y tecnológica. Su objetivo fundamental es la generación del conocimiento científico en las líneas de investigación sobre la biodiversidad y ecología, biotecnología, salud y sanidad, producción y manejo de recursos biológicos, así como su difusión, preservación, utilización y transferencia tecnológica dentro de las normas que rigen la vida académica de la universidad.
                                        </p>
                                        <p>
                                            Su creación data del 18 de octubre de 1977 y su nombre fue escogido en memoria del estudioso Antonio Raimondi, personaje muy ligado a la cultura peruana y quien, viniendo desde Italia, permaneció en el Perú estudiando su flora y su fauna. La sede del ICBAR se ubica en el pabellón de Investigación de la Facultad de Ciencias Biológicas, en la Ciudad Universitaria de la Universidad Nacional Mayor San Marcos.
                                        </p>
                                        <p>
                                            Actualmente cuenta con 118 investigadores de los cuales 34 ostentan el grado de Doctor y 32 el de Magister, quienes desarrollan sus actividades en los laboratorios de investigación ubicados en la Ciudad Universitaria, en el Museo de Historia Natural, en IVITA-Pucallpa e IVITA-Iquitos. Muchos de los docentes investigadores realizan continuamente entrenamientos, pasantías o posgrados en importantes universidades del mundo.
                                        </p>
                                        <p>
                                            La producción científica del ICBAR se refleja en las publicaciones en revistas indexadas y de categoría ISI, así como en presentaciones a numerosos eventos nacionales e internacionales. En esta tarea participan activamente estudiantes de pre y posgrado que año a año se van incorporando a los laboratorios de investigación de la Facultad. Así también varios grupos de investigación del ICBAR trabajan en estrecha coordinación con instituciones extranjeras y nacionales.
                                        </p>
                                        <p>
                                            El ICBAR realiza anualmente un evento denominado Reunión Científica ICBAR, cuyos inicios se remontan a 1991. Así mismo la Revista Peruana de Biología, editada por el ICBAR, es considerada una de las mejores publicaciones científicas nacionales por la calidad de los artículos que contiene, su periodicidad y la jerarquía de su Comité Editor y Consultivo. A través de la información que brindamos a continuación, el lector no solamente podrá conocer más de cerca al ICBAR sino que se facilitará el contacto con nuestros investigadores y sus temas de trabajo.
                                        </p>
                                    </div>
                                    <div className="title-dark mb-2">Vicedecana de Invesigación y Posgrado</div>
                                    <p className="mb-5">
                                        Dra. Martha Esther Valdivia Cuya
                                    </p>
                                    <div className="mb-3">
                                        <table className="striped m-auto">
                                            <thead>
                                                <tr>
                                                    <th colSpan="2" className="text-center">Comité directivo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th className="text-center">Nombre y apellido</th>
                                                    <th className="text-center">Departamento académico</th>
                                                </tr>
                                                <tr>
                                                    <td>Marco Antonio Espino Sánchez</td>
                                                    <td>Hidrología y Pesquería</td>
                                                </tr>
                                                <tr>
                                                    <td>Egma Marcelina Mayta Huatuco</td>
                                                    <td>Microbiología y Parasitología</td>
                                                </tr>
                                                <tr>
                                                    <td>Mery Luz Suni Ninataype</td>
                                                    <td>Botánica</td>
                                                </tr>
                                                <tr>
                                                    <td>Guillermo Odilón Alvarez Bejar</td>
                                                    <td>Biología celular y Genética</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
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
                                                        +(51) 619 7000 anexo 1506
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="mb-0 grid-contacto">
                                                <div>
                                                    <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                </div>
                                                <div>
                                                    <span>
                                                        icbar.biologia@unmsm.edu.pe
                                                    </span>
                                                </div>
                                            </div>
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

export default antonioRaimondi
