import React , { useEffect } from 'react'
import Layout from "../../../components/Layout"
// import Tabs from "../../../components/Tabs/vanillaTabs"
import {Row, Col, Container, Breadcrumb} from 'react-bootstrap'
import Link from 'next/link'
import * as FaIcons from "react-icons/fa";

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
            <Layout title="Autoridades y órganos de gobierno">
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
                                        {/* <li className="breadcrumb-item">Formación académica</li>
                                        <li className="breadcrumb-item">
                                            <Link href="/formacion-academica/pregrado">
                                                <a role="button">Carreras de pregrado</a>
                                            </Link>
                                        </li> */}
                                        <Breadcrumb.Item active>Nosotros: Autoridades y órganos de gobierno</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Autoridades y órganos de gobierno</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    {/* IMAGE */}
                    <div className="mb-4">
                        <img className="w-100" src="/assets/img/nosotros/autoridades/autoridades_banner.png" alt="" />
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
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
                                    <div className="mb-4">
                                        <ul className="nav flex-column tabs-wrapper">
                                            <li className="tab">Decanato</li>
                                            <li className="tab">Vicedecanato Académico de Pregrado</li>
                                            <li className="tab">Vicedecanato de Investigación y Posgrado</li>
                                            <li className="tab">Directores</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="7" lg="8">
                                    <div>
                                        <div>
                                            <Container>
                                                <Row>
                                                    <Col md="9" className="pl-0">
                                                        <p>
                                                            <span className="title-dark">Dr. Pablo Sergio Ramirez Roca</span>
                                                            <span className="divisor-text-green mx-2"></span>
                                                            <span className="title">Decano</span>
                                                        </p>
                                                        <p>
                                                            Biólogo Microbiólogo - Parasitólogo en la UNMSM y Doctor en Ciencias mención Microbiología en la Universidad de Chile (2002) obtenido mediante una beca de la Cooperación Alemana (DAAD), y Profesor Principal de la Universidad Nacional Mayor de San Marcos en la Facultad de Ciencias Biológicas, Departamento de Microbiología y Parasitología. Mis investigaciones se orientan al estudio de microorganismos extremófilos que participan en procesos de biolixiviación de minerales de interés comercial, así como proteínas recombinantes, resistencia metales en bacterias y levaduras, genómica y proteómica estructural de microorganismos oxidadores de hierro y azufre. Asimismo, en biodegradación de xenobióticos tales como PETN y TNT, y biodegradación de colorantes textiles, entre otros. He recibido fondos concursables PROCyT, Coordinador general de proyecto FINCYT, FIDECOM, FINCyT-PITEI, Cienciactiva 2017, Fondecyt y varios fondos concursables de la UNMSM. Director de la Unidad de Posgrado de la Facultad de Ciencias Biológicas (2010-2013), Presidente del Consejo Superior de Investigaciones del Vicerrectorado de Investigación y Posgrado (VRIP) de la UNMSM (2014-2017), Director General de Investigación y Transferencia Tecnológica de VRIP de la UNMSM desde febrero del 2017 hasta octubre de 2020 y actual Decano de la Facultad de Ciencias Biológicas de la UNMSM.
                                                        </p>
                                                        <div>
                                                            <a href="#" className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0">
                                                                <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                                <span className="">Resolución rectoral</span>
                                                            </a>
                                                            <a href="#" className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0">
                                                                <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                                <span className="">Hoja de vida</span>
                                                            </a>
                                                        </div>
                                                    </Col>
                                                    <Col md="3" className="pr-0">
                                                        <div className="mb-3">
                                                            <img className="img-fluid w-100" src="/assets/img/nosotros/autoridades/decano.png" alt="decano" />
                                                        </div>
                                                        <div className="d-flex justify-content-center">
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaFacebookF className="icon"/>
                                                            </a>
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaInstagram className="icon"/>
                                                            </a>
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaTwitter className="icon"/>
                                                            </a>
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaLinkedinIn className="icon"/>
                                                            </a>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <div className="divisor my-3"></div>
                                            <Container>
                                                <Row>
                                                    <Col md="9" className="pl-0">
                                                        <p>
                                                            Al asumir el gobierno de la facultad reafirmamos nuestro compromiso de realizar un trabajo con responsabilidad, equidad y transparencia; de tal manera que podamos alcanzar objetivos académicos, administrativos, de investigación y de proyección social, con la finalidad de colaborar con el progreso del país dentro del marco del desarrollo sostenible.
                                                        </p>
                                                        <p className="title-dark">Funciones específicas:</p>
                                                        <ul className="chevron-green-dark">
                                                            <li>El decano es la máxima autoridad que representa a la facultad, preside el Consejo de Facultad y dirige la gestión académica y administrativa, económica y financiera de la facultad.</li>
                                                            <li>Ejerce las atribuciones que le confieren la ley universitaria y el Estatuto de la Universidad.</li>
                                                        </ul>
                                                        <p className="title-dark">Funciones generales:</p>
                                                        <ul className="chevron-green-dark">
                                                            <li>Dirigir y supervisar la gestión académica y administrativa, económica y financiera de la facultad.</li>
                                                            <li>Proporcionar  al consejo de Facultad información procesada que ayude al planeamiento y toma de decisiones.</li>
                                                            <li>Conducir la formulación presupuestal y el plan de trabajo y desarrollo de la facultad, acorde al plan estratégico de la facultad aprobada.</li>
                                                            <li>Hacer cumplir los acuerdos y resoluciones del consejo de facultad y las resoluciones rectorales que emita la sede central y gobierno central en materia de su competencia.</li>
                                                            <li>Representar a la facultad.</li>
                                                        </ul>
                                                    </Col>
                                                    <Col md="3" className="pr-0">
                                                        <div className="contacto-wrapper mb-3">
                                                            <p className="title-dark mb-2">Contacto:</p>
                                                            <div className="grid-contacto">
                                                                <div>
                                                                    <img className="icon mr-2" src="/assets/img/iconos/telefono.svg" alt=""/>
                                                                </div>
                                                                <div>
                                                                    <span>
                                                                        +(51) 619 7000 anexo 1501
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="mb-0 grid-contacto">
                                                                <div>
                                                                    <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                                </div>
                                                                <div>
                                                                    <span>
                                                                        decanobio@unmsm.edu.pe
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <p className="font-weight-bold mb-1">Horario de atención:</p>
                                                            <p className="mb-0">8:00 a.m. - 5:00 p.m.</p>
                                                        </div>
                                                        <div className="block-interest-links">
                                                            <p className="font-weight-bold mb-2">Información académica</p>
                                                            <ul className="nav flex-column">
                                                                <li className="mb-2">
                                                                    <Link href="/nosotros/consejo-de-facultad">
                                                                        <a>
                                                                            Consejo de facultad
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li className="mb-2">
                                                                    <Link href="/nosotros/historia">
                                                                        <a>
                                                                            Historia
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li className="mb-0">
                                                                    <Link href="/informacion-academica/docentes">
                                                                        <a>
                                                                            Plana docente
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                        <div>
                                            <Container>
                                                <Row>
                                                    <Col md="9" className="pl-0">
                                                        <p>
                                                            <span className="title-dark">Mg. Ruth Hortensia García de la Guarda</span>
                                                            <span className="divisor-text-green mx-2"></span>
                                                            <span className="title">Vicedecana académica</span>
                                                        </p>
                                                        <p>
                                                            Biólogo Microbiólogo - Parasitólogo en la UNMSM y Doctor en Ciencias mención Microbiología en la Universidad de Chile (2002) obtenido mediante una beca de la Cooperación Alemana (DAAD), y Profesor Principal de la Universidad Nacional Mayor de San Marcos en la Facultad de Ciencias Biológicas, Departamento de Microbiología y Parasitología. Mis investigaciones se orientan al estudio de microorganismos extremófilos que participan en procesos de biolixiviación de minerales de interés comercial, así como proteínas recombinantes, resistencia metales en bacterias y levaduras, genómica y proteómica estructural de microorganismos oxidadores de hierro y azufre. Asimismo, en biodegradación de xenobióticos tales como PETN y TNT, y biodegradación de colorantes textiles, entre otros. He recibido fondos concursables PROCyT, Coordinador general de proyecto FINCYT, FIDECOM, FINCyT-PITEI, Cienciactiva 2017, Fondecyt y varios fondos concursables de la UNMSM. Director de la Unidad de Posgrado de la Facultad de Ciencias Biológicas (2010-2013), Presidente del Consejo Superior de Investigaciones del Vicerrectorado de Investigación y Posgrado (VRIP) de la UNMSM (2014-2017), Director General de Investigación y Transferencia Tecnológica de VRIP de la UNMSM desde febrero del 2017 hasta octubre de 2020 y actual Decano de la Facultad de Ciencias Biológicas de la UNMSM.
                                                        </p>
                                                        <div>
                                                            <a href="#" className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0">
                                                                <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                                <span className="">Resolución rectoral</span>
                                                            </a>
                                                            <a href="#" className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0">
                                                                <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                                <span className="">Hoja de vida</span>
                                                            </a>
                                                        </div>
                                                    </Col>
                                                    <Col md="3" className="pr-0">
                                                        <div className="mb-3">
                                                            <img className="img-fluid w-100" src="/assets/img/nosotros/autoridades/vicedecana-academica.png" alt="vicedecana" />
                                                        </div>
                                                        <div className="d-flex justify-content-center">
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaFacebookF className="icon"/>
                                                            </a>
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaInstagram className="icon"/>
                                                            </a>
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaTwitter className="icon"/>
                                                            </a>
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaLinkedinIn className="icon"/>
                                                            </a>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <div className="divisor my-3"></div>
                                            <Container>
                                                <Row>
                                                    <Col md="9" className="pl-0">
                                                        <p>
                                                            La Dirección Académica es el órgano de apoyo de la Facultad de Ciencias Biológicas, encargado de prestar los servicios académicos que requieran los estudiantes y profesores de la Facultad, así como el apoyo que se hace extensivo al personal docente.
                                                        </p>
                                                        <p className="title-dark">Funciones específicas:</p>
                                                        <ul className="chevron-green-dark">
                                                            <li>Planificar, dirigir y supervisar las actividades de las unidades a su cargo.</li>
                                                            <li>Planificar, dirigir y supervisar el proceso de matrícula.</li>
                                                            <li>Dirigir, conducir y supervisar administrativamente los procesos para la obtención del grado Académico de Bachiller y Título Profesional.</li>
                                                            <li>Realizar funciones de Fedatario de la Facultad.</li>
                                                            <li>Desempeñarse como Secretario de las Sesiones de Consejo de Facultad y llevar el Archivo de Actas correspondientes.</li>
                                                            <li>Proponer al Decanato, en coordinación con la Oficina de Planificación, Presupuesto y Racionalización, el Plan Operativo Anual y el presupuesto de las unidades a su cargo, así como la evaluación periódica del cumplimiento de dicho plan.</li>
                                                            <li>Proponer a la unidad de Planificación, Presupuesto y Racionalización de la Facultad, las modificaciones del Texto Único de Procedimientos Administrativos (Tarifario descentralizado).</li>
                                                            <li>Dirigir y supervisar los servicios de biblioteca y hemeroteca, asegurando la permanente actualización del material bibliográfico y el eficiente y oportuno servicios a los alumnos.</li>
                                                            <li>Brindar apoyo al estudiante a través de la Unidad de Asesoría y Orientación al Estudiante.</li>
                                                            <li>Coordinar y promover programas y servicios especiales de bienestar, salud, alimentación y vivienda, recreación y deporte, en coordinación con las oficinas de la Administración Central correspondientes.</li>
                                                            <li>Coordinar la presentación trimestral del informe de gestión de la Dirección Académica</li>
                                                            <li>Otras funciones que se le asigne.</li>
                                                        </ul>
                                                        <p className="title-dark">Funciones generales:</p>
                                                        <ul className="chevron-green-dark">
                                                            <li>Prestar apoyo académico al Decanato y Consejo de Facultad para el cumplimiento de los fines y objetivos de la Facultad en las áreas de su competencia.</li>
                                                            <li>Tiene a su cargo la emisión y custodia de las Actas Promocionales de los cursos de Pre Grado, registros de Grado y Títulos que otorga la Facultad.</li>
                                                            <li>Llevar el libro de Actas de las sesiones del Consejo de Facultad.</li>
                                                            <li>Centralizar y conducir los procedimientos académicos de la Facultad.</li>
                                                            <li>Programar y dirigir el proceso de matrícula, en coordinación con el Sistema Único de Matrícula</li>
                                                            <li>Brindar apoyo al estudiante, mediante el servicio de detección y tratamiento de sus problemas académicos y vocacionales.</li>
                                                            <li>Administrar la Biblioteca, los servicios de Hemeroteca y Centro de Documentación de la Facultad.</li>
                                                            <li>Velar por el bienestar de los alumnos, docentes y no docentes en coordinación permanente con la Oficina de Bienestar Universitario.</li>
                                                        </ul>
                                                        <p className="title-dark">Líneas de responsabilidad y coordinación:</p>
                                                        <ul className="chevron-green-dark">
                                                            <li>Es el órgano Asesor Académico del Decanato.</li>
                                                            <li>Es responsable ante el Decanato por su cumplimiento de las funciones de la Dirección Académica</li>
                                                            <li>Es el órgano que supervisa y controla las Unidades de: Matrícula, Registros Académicos, Grados y Títulos; Biblioteca Hemeroteca y Centro de Documentación; Asesoría y Orientación del Estudiante y Unidad de Bienestar.</li>
                                                            <li>La Dirección Académica, coordina los servicios académicos con el Decanato, las Escuelas Académicas Profesionales de Ciencias Biológicas, Genética y Biotecnología y Microbiología y Parasitología; la Dirección Admninistrativa, los Órganos de Asesoría, la Unidad de Posgrado, Instituto de Investigación, los Departamentos Académicos y el CERSEU.</li>
                                                            <li>La Dirección Académica coordina sus funciones con el Vice Rectorado Académico, la Secretaría General, el Sistemas de Bibliotecas Central, la Oficina General de Bienestar Universitario y el Sistema Único de Matrícula.</li>
                                                        </ul>
                                                    </Col>
                                                    <Col md="3" className="pr-0">
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
                                                            <p className="font-weight-bold mb-1">Horario de atención:</p>
                                                            <p className="mb-0">8:00 a.m. - 5:00 p.m.</p>
                                                        </div>
                                                        <div className="block-interest-links">
                                                            <p className="font-weight-bold mb-2">Información académica</p>
                                                            <ul className="nav flex-column">
                                                                <li className="mb-2">
                                                                    <Link href="/nosotros/consejo-de-facultad">
                                                                        <a>
                                                                            Consejo de facultad
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li className="mb-2">
                                                                    <Link href="/nosotros/historia">
                                                                        <a>
                                                                            Historia
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li className="mb-0">
                                                                    <Link href="/informacion-academica/docentes">
                                                                        <a>
                                                                            Plana docente
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                        <div>
                                            <Container>
                                                <Row>
                                                    <Col md="9" className="pl-0">
                                                        <p>
                                                            <span className="title-dark">Dra. Martha Esther Valdivia Cuya</span>
                                                            <span className="divisor-text-green mx-2"></span>
                                                            <span className="title">Vicedecana de Investigación y Posgrado</span>
                                                        </p>
                                                        <p>
                                                            Biólogo Microbiólogo - Parasitólogo en la UNMSM y Doctor en Ciencias mención Microbiología en la Universidad de Chile (2002) obtenido mediante una beca de la Cooperación Alemana (DAAD), y Profesor Principal de la Universidad Nacional Mayor de San Marcos en la Facultad de Ciencias Biológicas, Departamento de Microbiología y Parasitología. Mis investigaciones se orientan al estudio de microorganismos extremófilos que participan en procesos de biolixiviación de minerales de interés comercial, así como proteínas recombinantes, resistencia metales en bacterias y levaduras, genómica y proteómica estructural de microorganismos oxidadores de hierro y azufre. Asimismo, en biodegradación de xenobióticos tales como PETN y TNT, y biodegradación de colorantes textiles, entre otros. He recibido fondos concursables PROCyT, Coordinador general de proyecto FINCYT, FIDECOM, FINCyT-PITEI, Cienciactiva 2017, Fondecyt y varios fondos concursables de la UNMSM. Director de la Unidad de Posgrado de la Facultad de Ciencias Biológicas (2010-2013), Presidente del Consejo Superior de Investigaciones del Vicerrectorado de Investigación y Posgrado (VRIP) de la UNMSM (2014-2017), Director General de Investigación y Transferencia Tecnológica de VRIP de la UNMSM desde febrero del 2017 hasta octubre de 2020 y actual Decano de la Facultad de Ciencias Biológicas de la UNMSM.
                                                        </p>
                                                        <div>
                                                            <a href="#" className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0">
                                                                <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                                <span className="">Resolución rectoral</span>
                                                            </a>
                                                            <a href="#" className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0">
                                                                <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                                <span className="">Hoja de vida</span>
                                                            </a>
                                                        </div>
                                                    </Col>
                                                    <Col md="3" className="pr-0">
                                                        <div className="mb-3">
                                                            <img className="img-fluid w-100" src="/assets/img/nosotros/autoridades/vicedecana-posgrado.png" alt="vicedecana" />
                                                        </div>
                                                        <div className="d-flex justify-content-center">
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaFacebookF className="icon"/>
                                                            </a>
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaInstagram className="icon"/>
                                                            </a>
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaTwitter className="icon"/>
                                                            </a>
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaLinkedinIn className="icon"/>
                                                            </a>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                            <div className="divisor my-3"></div>
                                            <Container>
                                                <Row>
                                                    <Col md="9" className="text-break pl-0">
                                                        <p>
                                                            La Unidad de Posgrado de la Facultad de Ciencias Biológicas viene formando masa crítica en investigación, mediante programas de Doctorado y Maestrías, en base a la gran biodiversidad del Perú. Las líneas de investigación fomentadas por los programas de posgrado de nuestra unidad contemplan aspectos como: taxonomía y sistemática, florística, bioprospección, ecología vegetal ecología acuática, limnología, acuicultura, sistemática evolutiva, biogeografía, entomología, ornitología, malacología, biología de la reproducción, manejo y gestión de la biodiversidad, etnobiología, microbiología, parasitología, virología, biotecnología, contaminación biológica, biología molecular y genética.
                                                        </p>
                                                        <p>
                                                            El programa de Doctorado en Ciencias Biológicas es escolarizado desde el año 2000, que fue de cuatro semestres. En el 2011 se implementó un nuevo plan de estudios con seis semestres académicos (tres años), mucho antes de que sea exigido así en nuestro país, ya que la Ley 30220 salió en el 2014.
                                                        </p>
                                                        <p>
                                                            Contamos con seis Programas de Maestría: 1) Botánica Tropical (con 3 menciones), 2) Ecosistemas y Recursos Acuáticos (con 3 menciones), 3) Zoología (con 3 menciones), 4) Biología Molecular, 5) Genética, y 6) Biodiversidad y Gestión de Ecosistemas.
                                                        </p>
                                                        <p>
                                                            La Facultad de Ciencias Biológicas de la UNMSM cuenta con 68 Profesores de planta, investigadores calificados de los cuales 43 están registrados en REGINA-CONCYTEC, con sedes en la Ciudad Universitaria y en el Museo de Historia Natural de la UNMSM. Además participan otros profesionales investigadores renombrados del país y el extranjero.
                                                        </p>
                                                        <p>
                                                            Cuenta con laboratorios de investigación equipados convenientemente en donde desarrollan investigación de alto nivel, con la participación también de estudiantes de pre y posgrado para entrenamiento y desarrollo de tesis. Están conformando 28 GIs reconocidos por el VRIP-UNMSM, presentados en el Catálogo de Grupos de Investigación de la UNMSM.
                                                            <br />
                                                            <a href="https://drive.google.com/file/d/16JxISykOfx2TH8pgUb_FqjX0Bhp6hhKB/view" target="_blank">(https://drive.google.com/file/d/16JxISykOfx2TH8pgUb_FqjX0Bhp6hhKB/view)</a>
                                                        </p>
                                                        <p>
                                                            Producto de las investigaciones son las publicaciones que se encuentran en revistas científicas indexadas del país y del extranjero, las que pueden ser revisadas en el sistema RAIS del Vicerrectorado de Investigación y Posgrado de la UNMSM.
                                                            <br />
                                                            <a href="http://vri.unmsm.edu.pe/investigadores/investigadores.html?f2=10" target="_blank">(http://vri.unmsm.edu.pe/investigadores/investigadores.html?f2=10)</a>
                                                        </p>
                                                        <p>
                                                            Desde el año 2000 hasta enero del 2019 se han graduado 42 Doctores en Ciencias Biológicas, 165 Magisters (43 en Botánica Tropical, 28 Ecosistemas y Recursos Acuáticos, 31 Zoología, 56 Biología Molecular, 5 Genética, y 2 Biodiversidad y Gestión de Ecosistemas).
                                                        </p>
                                                        <p>
                                                            Las investigaciones científicas desarrolladas en el seno de la unidad, despliegan tan alto nivel de calidad que los egresados de los programas de maestría podrán desempeñarse como consultores expertos, en la docencia especializada y en diferentes grupos de investigación. Con respecto a los egresados del programa de doctorado, estarán plenamente capacitados para formular, planificar, asesorar, ejecutar investigación básica y aplicada de la flora, fauna y microorganismos con el más alto nivel académico en centros de investigación, universidades, industrias y centros de conservación de la biodiversidad nacional e internacional.
                                                        </p>
                                                        <p className="title-dark">Programas de estudio</p>
                                                        <p>Según el siguiente orden (autorizados por la SUNEDU):</p>
                                                        <p className="title-dark">Doctorado</p>
                                                        <ul className="chevron-green-dark">
                                                            <li>Doctorado en Ciencias Biológicas</li>
                                                        </ul>
                                                        <p className="title-dark">Maestrías</p>
                                                        <ul className="chevron-green-dark">
                                                            <li>Maestría en Botánica Tropical con mención en Botánica Económica</li>
                                                            <li>Maestría en Botánica Tropical con mención en Etnobotánica</li>
                                                            <li>Maestría en Botánica Tropical con mención en Taxonomía y Sistemática Evolutiva</li>
                                                            <li>Maestría en Ecosistemas y Recursos Acuáticos con mención en Acuicultura</li>
                                                            <li>Maestría en Ecosistemas y Recursos Acuáticos con mención en Ecosistemas Acuáticos</li>
                                                            <li>Maestría en Ecosistemas y Recursos Acuáticos con mención en Evaluación y Manejo de Recursos Pesqueros</li>
                                                            <li>Maestría en Zoología con mención en Ecología y Conservación</li>
                                                            <li>Maestría en Zoología con mención en Sistemática y Evolución</li>
                                                            <li>Maestría en Zoología con mención en Morfología y Fisiología</li>
                                                            <li>Maestría en Biología Molecular</li>
                                                            <li>Maestría en Genética</li>
                                                            <li>Maestría en Biodiversidad y Gestión de Ecosistemas</li>
                                                        </ul>
                                                    </Col>
                                                    <Col md="3" className="pr-0">
                                                        <div className="contacto-wrapper mb-3">
                                                            <p className="title-dark mb-2">Contacto:</p>
                                                            <div className="grid-contacto">
                                                                <div>
                                                                    <img className="icon mr-2" src="/assets/img/iconos/telefono.svg" alt=""/>
                                                                </div>
                                                                <div>
                                                                    <span>
                                                                        +(51) 619 7000 anexo 1503, 1510
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="mb-0 grid-contacto">
                                                                <div>
                                                                    <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                                </div>
                                                                <div>
                                                                    <span>
                                                                        upg.biologia@unmsm.edu.pe
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <a href="#" className="color-inherit">
                                                                <div className="mb-0 grid-contacto">
                                                                    <div>
                                                                        <FaIcons.FaFacebook className="icon"/>
                                                                    </div>
                                                                    <div>
                                                                        <span>
                                                                            Posgradobiologia.unmsm
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="block-interest-links">
                                                            <p className="font-weight-bold mb-2">Información académica</p>
                                                            <ul className="nav flex-column">
                                                                <li className="mb-2">
                                                                    <Link href="#">
                                                                        <a>
                                                                            Comité de Bioética
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li className="mb-2">
                                                                    <Link href="#">
                                                                        <a>
                                                                            CERSEU
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                        <div>
                                            <div className="divisor mt-0"></div>
                                            <div className="grid-img-txt-2">
                                                <div>
                                                    <img className="w-100 img-fluid" src="/assets/img/nosotros/autoridades/director-ciencias-biologicas.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <p className="title-dark">
                                                        Dr. José Cárdenas López  |  Directora de la E.P  de Ciencias Biológicas
                                                    </p>
                                                    <p className="mb-2">
                                                        Biólogo Microbiólogo - Parasitólogo en la UNMSM y Doctor en Ciencias mención Microbiología en la Universidad de Chile (2002) obtenido mediante una beca de la Cooperación Alemana (DAAD), y Profesor Principal de la Universidad Nacional Mayor de San Marcos en la Facultad de Ciencias Biológicas, Departamento de Microbiología y Parasitología. 
                                                    </p>
                                                    <p className="mb-2">
                                                        <span className="d-block d-md-inline mr-2 mb-3 mb-md-0">Documentación:</span>
                                                        <a href="#" className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0">
                                                            <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                            <span className="">Resolución rectoral</span>
                                                        </a>
                                                        <a href="#" className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0">
                                                            <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                            <span className="">Hoja de vida</span>
                                                        </a>
                                                    </p>
                                                    <p className="mb-0">
                                                        <span className="d-block d-md-inline mr-2 mb-3 mb-md-0">Contacto:</span>
                                                        <div className="d-block d-md-inline mb-3 mb-md-0">
                                                            <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                            <span className="text-break">laucastivas@unmsm.edu.pe</span>
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisor"></div>
                                            <div className="grid-img-txt-2">
                                                <div>
                                                    <img className="w-100 img-fluid" src="/assets/img/nosotros/autoridades/director-ciencias-biologicas.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <p className="title-dark">
                                                        Dr. José Cárdenas López  |  Directora de la E.P  de Ciencias Biológicas
                                                    </p>
                                                    <p className="mb-2">
                                                        Biólogo Microbiólogo - Parasitólogo en la UNMSM y Doctor en Ciencias mención Microbiología en la Universidad de Chile (2002) obtenido mediante una beca de la Cooperación Alemana (DAAD), y Profesor Principal de la Universidad Nacional Mayor de San Marcos en la Facultad de Ciencias Biológicas, Departamento de Microbiología y Parasitología. 
                                                    </p>
                                                    <p className="mb-2">
                                                        <span className="d-block d-md-inline mr-2 mb-3 mb-md-0">Documentación:</span>
                                                        <a href="#" className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0">
                                                            <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                            <span className="">Resolución rectoral</span>
                                                        </a>
                                                        <a href="#" className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0">
                                                            <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                            <span className="">Hoja de vida</span>
                                                        </a>
                                                    </p>
                                                    <p className="mb-0">
                                                        <span className="d-block d-md-inline mr-2 mb-3 mb-md-0">Contacto:</span>
                                                        <div className="d-block d-md-inline mb-3 mb-md-0">
                                                            <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                            <span className="text-break">laucastivas@unmsm.edu.pe</span>
                                                        </div>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
