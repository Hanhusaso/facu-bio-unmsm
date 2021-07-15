import React , { useEffect } from 'react'
import Layout from '../../../components/Layout'
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

import { useWindowSize } from '../../../utils/useWindowSize'

const index = () => {

    const { width, height } = useWindowSize();

    // useEffect(() => {
    //     document.addEventListener('DOMContentLoaded', () => {

	// 		// create vertical tabs
	// 		new VanillaTabs({
	// 			'selector': '#tabs-v',	// default is ".tabs"
	// 			'type': 'vertical', 		// can be horizontal / vertical / accordion
	// 			'responsiveBreak': 840,	// tabs become accordion on this device width
	// 			'activeIndex' : 1				// active tab index (starts from 0 ). Can be -1 for accordions.
	// 		});

	// 	});
    // }, []); // Solo se vuelve a ejecutar si count cambia

    const Contact = () => {
        return (
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
                <p className="font-weight-bold mb-1">Horario de atención:</p>
                <p className="mb-0">8:00 a.m. - 5:00 p.m.</p>
            </div>
        )
    }

    const Interest = () => {
        return (
            <div className="block-interest-links mb-3">
                <p className="font-weight-bold mb-2">Información académica</p>
                <ul className="nav flex-column">
                    <li className="mb-2">
                        <Link href="/formacion-academica/pregrado">
                            <a>
                                Pregrado
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/informacion-academica/posgrado">
                            <a>
                                Posgrado
                            </a>
                        </Link>
                    </li>
                    <li className="mb-0">
                        <Link href="/informacion-academica">
                            <a>
                                Información académica
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <>
            <Layout title="CERSEU">
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
                                        {/* <li className="breadcrumb-item">
                                            <Link href="/formacion-academica/pregrado">
                                                <a role="button">Formación académica: Carreras de pregrado</a>
                                            </Link>
                                        </li> */}
                                        <Breadcrumb.Item active>Comunidad: Centro de Responsabilidad Social y Extensión Universitaria - CERSEU</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Centro de Responsabilidad Social y Extensión Universitaria - CERSEU</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    {/* IMAGE */}
                    <div className="mb-4">
                        <img className="w-100" src="/assets/img/comunidad/cerseu_banner.png" alt="" />
                    </div>

                    <div>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
                                    <div className="mb-4">
                                        <ul className="nav flex-column tabs-wrapper">
                                            <li className="tab">Presentación</li>
                                            <li className="tab">Objetivos</li>
                                            <li className="tab">Estructura orgánica</li>
                                        </ul>
                                    </div>
                                    {width >= 768 && (
                                        <>
                                        <Contact />
                                        <Interest />
                                        </>
                                    )}
                                </Col>
                                <Col md="4" lg="6">
                                    <div className="mb-3">
                                        <div className="mb-3">
                                            <p>
                                                El centro de Extensión Universitaria y Proyección Social de la Facultad de Ciencias Biológicas (CEUP-FCB-UNMSM) ,es un órgano de línea, cuyo objetivo principal es integrar a nuestra Facultad a la comunidad, organiza la Proyección Social y Prestación de Servicios con el apoyo de docentes y estudiantes, contribuyendo  al desarrollo  de  ésta  y al de nuestra institución.
                                            </p>
                                            <p>
                                                Logrando ésta importante labor a través de la participación en la elaboración de actividades que permitan transferir a la comunidad nuestro conocimiento científico, tecnológico, humanístico y de cooperación; brindando  conferencias, mesa redondas, cursos de capacitación, de actualización, asistencia técnica y asesorías, entre otros. Así mismo desarrolla y promueve  talleres artísticos culturales, deportivos.
                                            </p>
                                            <p>
                                                El CEUPS ha venido desarrollando actividades las cuales permiten a la Facultad captar recursos propios para invertirlos en su desarrollo, contribuyendo activamente en el proceso de enseñanza-aprendizaje y la investigación aplicada. Así mismo que permitan solucionar problemas de índole social mediante eficaces medios de información, comunicación y gestión relacionadas a áreas de salud, ecología, ambiental, genética, reproducción, parasitología, botánica entre otros. Brindando además visitas guiadas a las diferentes instalaciones de la facultad.
                                            </p>
                                            <p>
                                                El CEUPS  tiene como actividades:
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <p>
                                                El Centro de Extensión Universitaria y Proyección Social de la Facultad de Ciencias Biológicas (CEUP-FCB-UNMSM), es un órgano de línea, cuyo objetivo principal es integrar a nuestra Facultad a la comunidad, organizar la Proyección Social y la Prestación de servicios con el apoyo de los docentes y estudiantes, contribuyendo al desarrollo de ésta  y a la de nuestra institución.
                                            </p>
                                            <p>
                                                Contribuir al desarrollo de la sociedad impartiendo una sólida actualización y capacitación a través de nuestros programas.
                                            </p>
                                            <p>
                                                Proyectar a la comunidad nuestro conocimiento  a fin de extender nexos que permitan transferir nuestra  cultura, ciencia, y tecnología  así como  servicios.
                                            </p>
                                            <p>
                                                Proponer la suscripción de Convenios y prestación de servicios con instituciones públicas o privadas en áreas de su competencia.
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <p>
                                                El Centro de Extensión Universitaria y Proyección Social (CEUPS) ejerce autoridad sobre las secciones y personal que conforman su organización.
                                            </p>
                                            <p>
                                                Es responsable ante el Decanato y Consejo de Facultad del cumplimiento de sus funciones. Coordina internamente con las Escuelas Académicos Profesionales, Departamento Académico de la Facultad, Comisión Permanente de Relaciones Interfacultativas y Convenios Nacionales e Internacionales.
                                            </p>
                                            <p>
                                                Externamente coordina con los CEUPS de las demás Facultades y Oficina General de Relaciones Públicas de la Universidad.
                                            </p>
                                        </div>
                                    </div>
                                    {width < 768 && (
                                        <>
                                        <Contact />
                                        <Interest />
                                        </>
                                    )}
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
                                        <div className="d-flex mb-3">
                                            <h2 className="subtitle-green mr-1 mb-0">Noticias</h2>
                                            <a href="/noticias" className="d-inline-block">
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
