import React , { useEffect } from 'react'
import Layout from "../../../../components/Layout"
// import Tabs from "../../../../components/Tabs/vanillaTabs"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'

const index = () => {

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

    return (
        <>
            <Layout title="Ciencias biológicas">
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
                                        <Breadcrumb.Item active>E.P Ciencias Biológicas</Breadcrumb.Item>
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
                                    <div className="title-page text-center">E.P Ciencias Biológicas</div>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    {/* IMAGE */}
                    <div className="mb-4">
                        <img className="w-100" src="/assets/img/carreras/banner_ciecias biologicas.png" alt="" />
                    </div>

                    

                    {/* <div>
                        <ul id="tabs-v" class="tabs">
                            <li data-title="First tab">
                                <h2>Some heading 1</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus lobortis sapien, ut rhoncus dui sagittis vel. Donec rhoncus convallis justo, in placerat nibh auctor ut. Aliquam erat volutpat. Morbi finibus velit et erat vehicula, facilisis viverra magna euismod. Nullam consequat a justo id luctus. Sed vitae maximus massa. Integer ligula ligula, semper ac feugiat vel, viverra sed nisi. In commodo lacus non orci faucibus mollis. Maecenas sit amet gravida leo, non ornare nisl. Etiam rhoncus dui vitae magna pulvinar, eu semper ex porttitor. Nulla facilisi. Donec ac tortor arcu. Nulla pharetra suscipit nulla. Ut maximus justo vitae libero fermentum efficitur. Aliquam mattis quam erat, eget varius tortor cursus eget.</p>
                            </li>
                            <li data-title="Second tab">
                                <h2>Some heading 2</h2>
                                <p>Pellentesque non felis sed nibh ultrices molestie in id ante. Aenean sollicitudin, lorem sed malesuada tempor, erat odio imperdiet mi, condimentum sagittis arcu leo sed erat. Nam sed ex lectus. Praesent efficitur ex vel nunc tempus aliquet. Nullam sit amet ligula enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse potenti.</p>
                            </li>
                            <li data-title="Third tab">
                                <h2>Some heading 3</h2>
                                <p>Nullam quis eleifend massa. Nullam ut ex libero. Donec ac enim in ipsum interdum laoreet quis vestibulum risus. Curabitur pharetra dictum cursus. Praesent suscipit ultrices massa, ullamcorper ullamcorper leo tristique id. Praesent lobortis, mauris at placerat tempus, diam ex auctor quam, a posuere metus purus non nibh. Nunc sagittis dui lectus, non euismod dolor consequat nec. Proin non ipsum tempus, accumsan eros vel, mollis neque. Mauris sit amet justo non turpis porttitor luctus sed sed metus. Duis viverra sapien enim, non placerat erat feugiat maximus. Ut semper id mi id convallis.</p>
                            </li>
                        </ul>
                    </div> */}

                    <div>
                        <Container>
                            <Row>
                                <Col sm="1"></Col>
                                <Col sm="2">
                                    <div className="mb-4">
                                        <ul className="nav flex-column tabs-wrapper">
                                            <li className="tab">Presentación</li>
                                            <li className="tab">Misión y visión</li>
                                            <li className="tab">Malla curricular</li>
                                            <li className="tab">Seguimiento de gresados</li>
                                        </ul>
                                    </div>
                                    <div className="contacto-wrapper mb-3">
                                        <p className="title-dark mb-2">Contacto:</p>
                                        <div>
                                            +(51) 619 7000 anexo 1507
                                        </div>
                                        <div className="mb-2">
                                            epcb.biologia@unmsm.edu.pe
                                        </div>
                                        <p className="font-weight-bold mb-1">Horario de atención:</p>
                                        <p className="mb-0">8:00 a.m. - 5:00 p.m.</p>
                                    </div>
                                    <div className="block-interest-links">
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
                                </Col>
                                <Col sm="8">
                                    <div>
                                        <div>
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
                                        <div>
                                            <div className="grid-img-txt-1">
                                                <div>
                                                    <img className="img-fluid" src="/assets/img/carreras/ciencias biologicas/mision.png" alt="" />
                                                </div>
                                                <div>
                                                    <p className="title">Misión</p>
                                                    <p className="mb-0">
                                                        La Escuela Profesional de Ciencias Biológicas es una comunidad académica de la Facultad de Ciencias Biológicas de la Universidad Nacional Mayor de San Marcos, dedicada a la formación integral de académicos y profesionales calificados, líderes en las áreas de Botánica, Hidrobiología y Pesquería y Zoología; y generadora de conocimiento que contribuye al desarrollo sostenible del país y al impulso de la ciencia y la tecnología
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisor"></div>
                                            <div className="grid-img-txt-1">
                                                <div>
                                                    <img className="img-fluid" src="/assets/img/carreras/ciencias biologicas/vision.png" alt="" />
                                                </div>
                                                <div>
                                                    <p className="title">Visión</p>
                                                    <p className="mb-0">
                                                        La Escuela Profesional de Ciencias Biológicas mantendrá el liderazgo en la formación de Biólogos con mención en Botánica, Hidrobiología y Pesquería y Zoología, altamente competitivos a nivel nacional e internacional, actores activos en la evaluación, conservación y aprovechamiento sustentable de la biodiversidad nacional y mundial, reconocidos por su participación en investigación científica y tecnológica, innovación y el desarrollo del país.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <div className="mb-4">
                                                    <embed src="/assets/archivos/malla_curricular_2020.pdf" width="100%" height="700px"/>
                                                </div>
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
                                            </div>
                                        </div>
                                        <div>
                                            <div className="grid-img-txt-2">
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado1.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
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
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado2.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
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
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado3.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
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
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado4.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
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

export default index
