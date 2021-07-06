import React , { useEffect } from 'react'
import Layout from "../../../../components/Layout"
// import Tabs from "../../../../components/Tabs/vanillaTabs"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

import { useWindowSize } from '../../../../utils/useWindowSize'

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

    const Contacto = () => {
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
                        <Link href="/informacion-academica/plan">
                            <a>
                                Plan de estudios
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/informacion-academica/docentes">
                            <a>
                                Plana docente
                            </a>
                        </Link>
                    </li>
                    <li className="mb-2">
                        <Link href="/informacion-academica/syllabus">
                            <a>
                                Syllabus
                            </a>
                        </Link>
                    </li>
                    <li className="mb-0">
                        <Link href="/informacion-academica/horarios">
                            <a>
                                Horarios
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <>
            <Layout title="Ciencias biológicas">
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
                                        <li className="breadcrumb-item">Formación académica</li>
                                        <li className="breadcrumb-item">
                                            <Link href="/formacion-academica/pregrado">
                                                <a role="button">Carreras de pregrado</a>
                                            </Link>
                                        </li>
                                        <Breadcrumb.Item active>E.P Ciencias Biológicas</Breadcrumb.Item>
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
                                    <div className="title-page text-center">E.P Ciencias Biológicas</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    {/* IMAGE */}
                    <div className="mb-4">
                        <img className="w-100" src="/assets/img/carreras/banner_ciecias biologicas.png" alt="" />
                    </div>

                    <div>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
                                    <div className="mb-4">
                                        <ul className="nav flex-column tabs-wrapper">
                                            <li className="tab">Presentación</li>
                                            <li className="tab">Misión y visión</li>
                                            <li className="tab">Malla curricular</li>
                                            <li className="tab">Seguimiento de egresados</li>
                                        </ul>
                                    </div>
                                    {width >= 768 && (
                                        <>
                                        <Contacto />
                                        <Interest />
                                        </>
                                    )}
                                </Col>
                                <Col md="7" lg="8">
                                    <div className="mb-3">
                                        <div className="wrapper-img-fr mb-3">
                                            <div className="img-fr">
                                                <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/director.png" alt="" />
                                                <div className="caption">
                                                    <div className="mb-2 font-weight-bold">Director</div>
                                                    <div className="mb-1">Dr. Mauro Mariano Astocondor</div>
                                                    <div className="mb-0">mmarianoa@unmsm.edu.pe</div>
                                                </div>
                                            </div>
                                            <p>
                                                La Escuela Profesional de Ciencias Biológicas de la Universidad Nacional Mayor de San Marcos, les da la más cordial bienvenida a su portal, con el fin de brindarles información sobre la Escuela y ofrecer un mejor servicio e información a docentes, estudiantes y público en general.
                                            </p>
                                            <p>
                                                Nuestra Escuela forma profesionales, que impactan en el desarrollo socio económico del país, al solucionar problemas nacionales dentro de la competencia del Profesional Biólogo con mención en:
                                            </p>
                                            <ul className="chevron-green-dark">
                                                <li>Botánica</li>
                                                <li>Hidrobiología y Pesquería</li>
                                                <li>Zoología</li>
                                            </ul>
                                            <p>
                                                La Facultad de Ciencias Biológicas cuenta con la infraestructura adecuada para desarrollar sus diferentes actividades académicas, para lo cual posee un pabellón de docencia con aulas de teoría, laboratorios de práctica, laboratorios de informática debidamente equipadas, posee además recursos humanos altamente calificados. La mayoría de nuestros docentes cuentan con grados de doctor y maestrÍa que aseguran un nivel de enseñanza de excelencia.
                                            </p>
                                            <div>
                                                <p className="title-dark">Grado:</p>
                                                <p>Bachiller en Ciencias Biológicas</p>
                                            </div>
                                            <div>
                                                <p className="title-dark">Título:</p>
                                                <p>Biólogo con mención en una de las tres orientaciones: Botánica, Hidrobiología y Pesquería y Zoología.</p>
                                            </div>
                                            <div>
                                                <p className="title-dark">Duración:</p>
                                                <p>5 años</p>
                                            </div>
                                            <div>
                                                <p className="title-dark">Perfil del egresado:</p>
                                                <p>
                                                    El graduado aplica métodos estandarizados y actualizados, demuestra liderazgo y capacidad de trabajo colaborativo con actitud de responsabilidad social, ética, integridad y pensamiento crítico. Conoce, identifica y valora los conceptos de las Ciencias Biológicas basados en principios científicos. Evalúa la diversidad biológica y genera información considerando enfoques organísmicos, ecológicos y evolutivos. Promueve el cuidado y gestión del ambiente, la conservación y el uso sostenible de la diversidad biológica, entre otros.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="grid-img-txt-1">
                                                <div>
                                                    <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/mision.png" alt="" />
                                                </div>
                                                <div className="mb-3 mb-md-0">
                                                    <p className="title">Misión</p>
                                                    <p className="mb-0">
                                                        La Escuela Profesional de Ciencias Biológicas es una comunidad académica de la Facultad de Ciencias Biológicas de la Universidad Nacional Mayor de San Marcos, dedicada a la formación integral de académicos y profesionales calificados, líderes en las áreas de Botánica, Hidrobiología y Pesquería y Zoología; y generadora de conocimiento que contribuye al desarrollo sostenible del país y al impulso de la ciencia y la tecnología
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisor"></div>
                                            <div className="grid-img-txt-1">
                                                <div>
                                                    <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/vision.png" alt="" />
                                                </div>
                                                <div className="mb-3 mb-md-0">
                                                    <p className="title">Visión</p>
                                                    <p className="mb-0">
                                                        La Escuela Profesional de Ciencias Biológicas mantendrá el liderazgo en la formación de Biólogos con mención en Botánica, Hidrobiología y Pesquería y Zoología, altamente competitivos a nivel nacional e internacional, actores activos en la evaluación, conservación y aprovechamiento sustentable de la biodiversidad nacional y mundial, reconocidos por su participación en investigación científica y tecnológica, innovación y el desarrollo del país.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div>
                                                <div className="mb-4">
                                                    {/* <embed src="/assets/archivos/malla_curricular_2020.pdf" width="100%" height="700px"/> */}
                                                    <object data="/assets/archivos/malla_curricular_2020.pdf" type="application/pdf" width="100%" height="700px"> 
                                                        <a href="/assets/archivos/malla_curricular_2020.pdf">
                                                            <img className="mr-2" src="/assets/img/iconos/descarga.svg" alt=""/>
                                                            <span className="sub-title-dark">Descargar</span>
                                                        </a>
                                                    </object>
                                                </div>
                                                <div className="section-compartir d-none d-sm-block mb-3">
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
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="grid-img-txt-2">
                                                <div className="mx-5 mx-md-0">
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado1.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="mb-3 mb-md-0">
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Bach. María Cárdenas López
                                                            </p>
                                                        </a>
                                                    </Link>
                                                    {/* <p className="title">Bach. María Cárdenas López </p> */}
                                                    <p className="mb-0">
                                                        "La profesión que escogí  ha sido nombrada la carrera del futuro. Según El Colombiano "La biología dominará los currículos". Es una ciencia en la que predomina la investigación y EAFIT me ha brindado todas las herramientas necesarias para mi formación como científica; desde varios grupos de investigación y semilleros, hasta una infraestructura que cuenta con los laboratorios mejores dotados, al igual que charlas informátivas de diferentes temas de pertinencia dictadas por extranjeros y nacionales que han enriquecido mi conocimiento. 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisor"></div>
                                            <div className="grid-img-txt-2">
                                                <div className="mx-5 mx-md-0">
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado2.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="mb-3 mb-md-0">
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Bach. Carlos Palacios Hernandez | Practicante  Instituto de Investigaciones de la Amazonía Peruana
                                                            </p>
                                                        </a>
                                                    </Link>
                                                    <p className="mb-0">
                                                        Las oportunidades de intercambio y hacer doble titulación vuelven más atractiva mi hoja de vida. Aparte la universidad tiene una facilidad de pago (debido a  numerosos convenios que tiene) que me permitió seguir estudiando, y debido a mi promedio, pude alcanzar mi mayor ánhelo: la Beca de Honor Pregrado por el primer semestre. Son éstas clases de estímulos que fomentan el buen estudio. Por eso y mucho más adoro Mi universidad, me siento orgullosa de decir que soy y seré sanmarquino.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisor"></div>
                                            <div className="grid-img-txt-2">
                                                <div className="mx-5 mx-md-0">
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado3.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="mb-3 mb-md-0">
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Mg. Claudia Villa Vargas - Directora del Genetics Lab
                                                            </p>
                                                        </a>
                                                    </Link>
                                                    <p className="mb-0">
                                                        Mi interés de investigación son las interacciones biológicas entre distintos componentes del plancton. Durante mi tesis de pregrado en Biología Marina estudié la potencial interacción entre hongos y huevos de copépodos y en mi tesis de Magister en Ciencias c/m en Oceanografía investigué el microbioma gastro-intestinal del zooplancton (microorganismos asociados a copépodos y eufáusidos) en la zona norte y centro sur de Chile. Durante mis estudios de doctorado profundizaré en otros aspectos de la interacción entre microorganismos y copépodos
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisor"></div>
                                            <div className="grid-img-txt-2">
                                                <div className="mx-5 mx-md-0">
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado4.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div className="mb-3 mb-md-0">
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Dr. Luis Jimenez Hidalgo - Docente principal de la Universidad Los Andes de Colombia
                                                            </p>
                                                        </a>
                                                    </Link>
                                                    <p className="mb-0">
                                                        Estudie biología, actualmente soy gerente de inocuidad y certificaciones en la empresa Antigua Processors en Guatemala, recuerdo que cuando estaba en la época de colegio visite la Universidad y me llamaron la atención los laboratorios y áreas verdes, aprendí a cómo cultivar plantas sin sustrato como la tierra, y conocí granjas de animales y también plantas prehistóricas aquí en la UNMSM, sabía que quería estudiar aquí.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {width < 768 && (
                                        <>
                                        <Contacto />
                                        <Interest />
                                        </>
                                    )}
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
