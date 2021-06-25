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
            <Layout title="Doctorado">
                <div>
                    <div>
                        <Container>
                            <Row>
                                <Col md="1"></Col>
                                <Col className="">
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
                                                <a role="button">Posgrado</a>
                                            </Link>
                                        </li>
                                        <Breadcrumb.Item active>Doctorado en Ciencias Biológicas</Breadcrumb.Item>
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
                                <Col className="">
                                    <div className="title-page text-center">Doctorado en Ciencias Biológicas</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    {/* IMAGE */}
                    <div className="mb-4">
                        <img className="w-100" src="/assets/img/posgrado/doctorado_desarrollo.png" alt="" />
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
                                <Col md="1"></Col>
                                <Col md="2">
                                    <div className="mb-4">
                                        <ul className="nav flex-column tabs-wrapper">
                                            <li className="tab">Presentación</li>
                                            <li className="tab">Admisión</li>
                                            <li className="tab">Plana docente</li>
                                            <li className="tab">Malla curricular</li>
                                            <li className="tab">Seguimiento de egresados</li>
                                        </ul>
                                    </div>
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
                                </Col>
                                <Col md="8">
                                    <div>
                                        <div>
                                            <p>
                                                La Unidad de Posgrado de la Facultad de Ciencias Biológicas viene formando masa crítica en investigación, mediante su programa de Doctorado en Ciencias Biológicas, enfocado en la gran biodiversidad del Perú. Las líneas de investigación desarrolladas contemplan aspectos como: sistemática evolutiva y taxonomía, biogeografía, entomología, ornitología, malacología, microbiología, parasitología, virología, biología de la reproducción, biología molecular y genética, florística, ecología vegetal, ecología acuática, limnología, acuicultura, bioprospección, manejo y gestión de la biodiversidad, etnobiología, biotecnología, contaminación biológica, entre otros.
                                            </p>
                                            <p>
                                                El programa de Doctorado en Ciencias Biológicas es escolarizado desde el año 2000, que fue de cuatro semestres. El año 2011 se planteó el currículo del Doctorado en Ciencias Biológicas con una duración de seis semestres académicos, lo que posteriormente en el 2014 lo indicó la nueva Ley Universitaria, Nº30220.
                                            </p>
                                            <p>
                                                El presente currículo ha sido elaborado para adecuarse a las normas presentes en el Reglamento General de Estudios de Posgrado aprobado con Resolución Rectoral 04790-R-18.
                                            </p>
                                            <div className="mb-3">
                                                <p className="title-dark mb-1">
                                                    1. Fecha de creación del Programa
                                                </p>
                                                <ul className="nav flex-column ml-3">
                                                    <li>01 de marzo de 2000, R.R. N° 02069-R-00.</li>
                                                    <li>04 de noviembre de 1999, R.D. N° 4078-D-FCB-99</li>
                                                </ul>
                                            </div>
                                            <div className="mb-3">
                                                <p className="title-dark mb-1">
                                                    2. Fecha de modificación del programa:
                                                </p>
                                                <ul className="nav flex-column ml-3">
                                                    <li>03 de noviembre del 2017, R.R. N° 06658-R-17.</li>
                                                    <li>30 de mayo de 2017, R.D. N° 229-D-FCB-2017.</li>
                                                    <li>02 de junio del 2020, R.R. N° 01329-R-20.</li>
                                                </ul>
                                            </div>

                                            <p className="title-dark">
                                                Sumilla del Programa
                                            </p>
                                            <p>
                                                El Doctorado en Ciencias Biológicas forma especialistas de los más altos niveles capaces de evaluar e investigar la problemática nacional en las diversas áreas del conocimiento biológico, con especial énfasis en los campos de la biodiversidad y biología molecular.
                                            </p>

                                            <p className="title-dark">
                                                Grado que se otorga:
                                            </p>
                                            <p>
                                                Doctor en Ciencias Biológicas
                                            </p>

                                            <p className="title-dark">
                                                Dirigido a:
                                            </p>
                                            <p>
                                                Profesionales que hayan concluido los estudios de Maestría o estén en posesión del Grado de Magíster en áreas de las Ciencias Biológicas o en disciplinas afines, otorgados por universidades nacionales o extranjeras que aseguren una formación acorde a los fines del Programa.
                                            </p>

                                            <p className="title-dark">
                                                Duración:
                                            </p>
                                            <p>
                                                3 años (6 semestres)
                                            </p>
                                            
                                            <p className="title-dark">
                                                Perfil del graduado:
                                            </p>
                                            <ul className="chevron-green-dark">
                                                <li>
                                                    Generar nuevos conocimientos científicos y técnicos en las Ciencias Biológicas a través de la realización de trabajos originales. Estará capacitado para manejar y aplicar las metodologías que permitan resolver problemas de investigación en las diversas áreas del conocimiento biológico con especial énfasis en los campos de la biodiversidad y biología molecular.
                                                </li>
                                                <li>
                                                    Desarrollar nuevas tecnologías para resolver problemas, detectar necesidades y oportunidades inherentes a su área de investigación. En particular, conocer y utilizar aproximaciones estadísticas contemporáneas
                                                </li>
                                                <li>
                                                    Formular, gestionar y liderar proyectos de investigación, trabajando en equipo y en redes interdisciplinarias. Como consecuencia, será capaz de plantear y ejecutar hipótesis de trabajo, describir e interpretar resultados experimentales y analizar de forma crítica los descubrimientos presentados en las publicaciones científicas.
                                                </li>
                                                <li>
                                                    Manejar nuevas tecnologías de información y comunicaciones que le permitan difundir en forma eficiente sus investigaciones y resultados en revistas de la especialidad, círculos especializados y la comunidad social con el fin de participar satisfactoriamente en la educación superior y de posgrado a través de la experiencia adquirida en las actividades académicas del doctorado.
                                                </li>
                                                <li>
                                                    Asesorar los trabajos de investigación de estudiantes de pre y posgrado.
                                                </li>
                                            </ul>
                                            <a className="btn-green-bright" href="">
                                                Inscripciones
                                            </a>
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
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado1.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Dra. María Cárdenas López|  Coordinadora general de proyectos ganadores CONCYTEC
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
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado2.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Dr. Carlos Palacios Hernandez | Becario de la OEA en la Maestría en Ciencias
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
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado3.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Dra. Claudia Villa Vargas | Jefe Laboratorio de Proteómica y Biomedicina Molecular IPICYT-México 
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
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado4.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Dr. Luis Jimenez Hidalgo | Director del CENAN
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
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>


                    
                </div>
            </Layout>
        </>
    )
}

export default index