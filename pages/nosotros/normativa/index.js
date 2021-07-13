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
            <Layout title="Normativa y Documentos de interés">
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
                                        <Breadcrumb.Item active>Nosotros: Normativa y Documentos de interés</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Normativa y Documentos de interés</div>
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
                                            <li className="tab">Normativa</li>
                                            <li className="tab">Documentos de interés</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col md="4" lg="6">
                                    <div>
                                        <div></div>
                                        <div>
                                            <div>
                                                <ul className="chevron-green-dark">
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Modelo Educativo San Marcos
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Plan Estratégico de la UNMSM 2017-2019
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Plan Estratégico de la FLCH 2019-2023
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Resoluciones Rectorales
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Transparencia Estándar
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Concursos públicos
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Adjudicaciones de SUNAT
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Ley Universitaria
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Plan Estratégico de la Facultad de Letras y Ciencias Humanas 
                                                        </a>
                                                    </li>
                                                </ul>
                                                <p className="title-dark">
                                                    Sesión extraordinaria
                                                </p>
                                                <ul className="chevron-green-dark">
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            UNMSM 2017 -2019
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Estatuto UNMSM 1984
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Clasificador de Cargos Institucional
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            CAP
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            TUPA 2008
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Plan Operativo Institucional ( POI ) – 2016
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Plan Operativo Institucional ( POI ) – 2016 modificado al IV trimestre
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Sesion Ordinaria de Consejo del 09 de setiembre 2020
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="color-inherit">
                                                            Reglamento de prevención y sanción del hostigamiento sexual de la UNMSM
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="3" lg="2">
                                    <aside>
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
