import React , { useEffect } from 'react'
import Layout from "../../../components/Layout"
// import Tabs from "../../../components/Tabs/vanillaTabs"
import {Row, Col, Container, Breadcrumb, Tabs, Tab} from 'react-bootstrap'
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
            <Layout title="Oficinas">
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
                                        <Breadcrumb.Item active>Nosotros: Oficinas</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Oficinas</div>
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
                                            <li className="tab">Oficina de Calidad Académica y Acreditción</li>
                                            <li className="tab">CERSEU</li>
                                            <li className="tab">Centro de Producción</li>
                                            <li className="tab">Unidad de Tecnología Educativa</li>
                                            <li className="tab">Unidad de Biblioteca, Hemeroteca y Centro Documentario</li>
                                            <li className="tab">Asesoría y Orientación al Estudiante</li>
                                            <li className="tab">Unidad de Bienestar</li>
                                            <li className="tab">Unidad de Economía</li>
                                            <li className="tab">Unidad de Posgrado</li>
                                            <li className="tab">Unidad de Estadística e Informática</li>
                                            <li className="tab">Unidad de Impresiones y Publicaciones</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="7" lg="8">
                                    <div>
                                        <Container>
                                            <Row>
                                                <Col md="9" className="pl-0">
                                                    <p>
                                                        La Unidad de Economía es la unidad orgánica encargada de efectuar las acciones del manejo económico, equilibrio y control financiero de los Recursos Directamente Recaudados de la Facultad, en concordancia con los sistemas administrativos de Contabilidad, Tesorería, Abastecimiento, Planificación y las directivas vigentes de la Universidad.
                                                    </p>
                                                    <p className="title-dark">
                                                        Funciones principales:
                                                    </p>
                                                    <ul className="chevron-green-dark">
                                                        <li>Verificar, constatar y controlar la información de los ingresos de los Recursos Directamente Recaudados proporcionada por Tesorería General.</li>
                                                        <li>Ejecutar el presupuesto de egresos de los Recursos Directamente Recaudados de la Facultad de acuerdo a los sistemas administrativos de Contabilidad, Tesorería Planificación, Abastecimiento y directivas vigentes de la Universidad.</li>
                                                        <li>Controlar el equilibrio financiero de los Recursos Directamente Recaudados.</li>
                                                        <li>Informar a las autoridades sobre la situación financiera y económica de la Facultad para la adecuada toma de decisiones.</li>
                                                    </ul>
                                                </Col>
                                                <Col md="3" className="pr-0">
                                                    <div className="mb-2">
                                                        <img className="img-fluid w-100" src="/assets/img/nosotros/autoridades/decano.png" alt="decano" />
                                                    </div>
                                                    <div className="mb-4">
                                                        <p className="text-center title-dark mb-2">Martha La Rosa Ardian</p>
                                                        <p className="text-center title mb-2">Jefa de la Unidad de Economía</p>
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
                                                </Col>
                                            </Row>
                                        </Container>
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
