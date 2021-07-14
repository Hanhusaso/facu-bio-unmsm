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
            <Layout title="Consejo de facultad">
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
                                        <Breadcrumb.Item active>Nosotros: Consejo de facultad</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Consejo de facultad</div>
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
                                            <li className="tab">Miembros del consejo</li>
                                            <li className="tab">Comisiones permanentes y transitorias</li>
                                            <li className="tab">Actas del Consejo</li>
                                            <li className="tab">Sesiones del Consejo</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="4" lg="6">
                                    <div>
                                        <div>
                                            <p>
                                                De conformidad con la Ley 30220, artículo 57°.- El Consejo de Facultad es el órgano máximo de gobierno de la facultad.
                                            </p>
                                            <p>
                                                Está integrado por:
                                            </p>
                                            <p className="title-dark">
                                                Decano
                                            </p>
                                            <ul className="chevron-green-dark">
                                                <li>Dr. Pablo Sergio Ramirez Roca</li>
                                            </ul>
                                            <p className="title-dark">
                                                Profesores principales
                                            </p>
                                            <ul className="chevron-green-dark">
                                                <li>Dr. Carlos García Bedoya</li>
                                                <li>Dr. Rosalía Quiróz García</li>
                                                <li>Manuel Eulogio Conde Marcos</li>
                                            </ul>
                                            <p className="title-dark">
                                                Profesores asociados
                                            </p>
                                            <ul className="chevron-green-dark">
                                                <li>Martín Fabbri García</li>
                                                <li>Norma Meneses Tutaya</li>
                                                <li>Manuel Eulogio Conde Marcos</li>
                                            </ul>
                                            <p className="title-dark">
                                                Profesor auxiliar
                                            </p>
                                            <ul className="chevron-green-dark">
                                                <li>Agustín Prado Alvarado</li>
                                            </ul>
                                            <p className="title-dark">
                                                Representantes de los estudiantes
                                            </p>
                                            <ul className="chevron-green-dark">
                                                <li>Tercio estudiantil mayoría - Pregrado</li>
                                                <li>Tercio estudiantil minoría - Posgrado</li>
                                            </ul>
                                        </div>
                                        <div></div>
                                        <div>
                                            <Tabs defaultActiveKey="2021" id="actas-tab">
                                                <Tab className="pt-3" eventKey="2021" title="2021">
                                                    <div>
                                                        <p className="title-dark">
                                                            Sesión ordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <p className="title-dark">
                                                            Sesión extraordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab>
                                                <Tab className="pt-3" eventKey="2020" title="2020">
                                                    <div>
                                                        <p className="title-dark">
                                                            Sesión ordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <p className="title-dark">
                                                            Sesión extraordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab>
                                                <Tab className="pt-3" eventKey="2019" title="2019">
                                                    <div>
                                                        <p className="title-dark">
                                                            Sesión ordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <p className="title-dark">
                                                            Sesión extraordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Acta de Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                        <div>
                                            <Tabs defaultActiveKey="2021" id="sesiones-tab">
                                                <Tab className="pt-3" eventKey="2021" title="2021">
                                                    <div>
                                                        <p className="title-dark">
                                                            Sesión ordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <p className="title-dark">
                                                            Sesión extraordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab>
                                                <Tab className="pt-3" eventKey="2020" title="2020">
                                                    <div>
                                                        <p className="title-dark">
                                                            Sesión ordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <p className="title-dark">
                                                            Sesión extraordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab>
                                                <Tab className="pt-3" eventKey="2019" title="2019">
                                                    <div>
                                                        <p className="title-dark">
                                                            Sesión ordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <p className="title-dark">
                                                            Sesión extraordinaria
                                                        </p>
                                                        <ul className="chevron-green-dark">
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 27 de enero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 24 de febrero 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 30 de abril 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 08 de mayo 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 05 de junio 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesión Ordinaria de Consejo del 07 de agosto 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" className="color-inherit">
                                                                    Sesion Ordinaria de Consejo del 23 de octubre 2020
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" lg="2">
                                    <aside>
                                        <div className="d-flex mb-3">
                                            <h2 className="subtitle-green mr-1 mb-0">Eventos</h2>
                                            <a href="/eventos" className="d-inline-block">
                                                <img src="/assets/img/iconos/boton_vermas.png"/>
                                            </a>
                                        </div>
                                        <div>
                                            <div className="card-bio no-grid mb-3">
                                                <div className="part-img position-relative d-none d-md-block">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia2.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card title mb-0">
                                                        Dos científicas ganan el Premio Nobel de Química 2020 por “tijeras genéticas” CRISPR-Cas9
                                                    </p>
                                                </div>
                                                <div className="part-info">
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>7 de abril de 2021</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                        </span>
                                                        <span>5:00 pm</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                        </span>
                                                        <span>Zoom meetings</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-bio no-grid mb-3">
                                                <div className="part-img position-relative d-none d-md-block">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia3.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card title mb-0">
                                                        El objetivo de nuestro proyecto es ir en camino a producir clones de alpacas
                                                    </p>
                                                </div>
                                                <div className="part-info">
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>7 de abril de 2021</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                        </span>
                                                        <span>5:00 pm</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                        </span>
                                                        <span>Zoom meetings</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-bio no-grid mb-3">
                                                <div className="part-img position-relative d-none d-md-block">
                                                    <div className="position-relative">
                                                        <img className="w-100 img-fluid" src="/assets/img/noticias/noticia4.png"></img>
                                                        <div className="dark-filter"></div>
                                                    </div>
                                                </div>
                                                <div className="part-text">
                                                    <p className="title-card title mb-0">
                                                        ¡La FCB ya cuenta oficialmente con un nuevo y moderno pabellón!
                                                    </p>
                                                </div>
                                                <div className="part-info">
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/calendario.svg" alt="" />
                                                        </span>
                                                        <span>7 de abril de 2021</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="17px" className="mr-2" src="/assets/img/iconos/reloj.svg" alt="" />
                                                        </span>
                                                        <span>5:00 pm</span>
                                                    </div>
                                                    <div className="date mb-1">
                                                        <span>
                                                            <img width="13px" className="mr-2" src="/assets/img/iconos/lugar.svg" alt="" />
                                                        </span>
                                                        <span>Zoom meetings</span>
                                                    </div>
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
