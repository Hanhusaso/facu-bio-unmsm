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
            <Layout title="Institución y organización">
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
                                        <Breadcrumb.Item active>Nosotros: Institución y organización</Breadcrumb.Item>
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
                                    <div className="title-page text-center">Institución y organización</div>
                                </Col>
                                <Col md="1"></Col>
                            </Row>
                        </Container>
                    </div>
                    {/* IMAGE */}
                    <div className="mb-4">
                        <img className="w-100" src="/assets/img/nosotros/institucion/institucion_organizacion.png" alt="" />
                    </div>

                    <div>
                        <Container>
                            <Row>
                                <Col md="1" lg="1"></Col>
                                <Col md="3" lg="2">
                                    <div className="mb-4">
                                        <div className="nav flex-column tabs-wrapper nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                <a className="tab d-flex active" id="v-pills-mision-tab" data-toggle="pill" href="#v-pills-mision" role="tab" aria-controls="v-pills-mision" aria-selected="true">
                                                    <div>
                                                        <svg width="24" height="25" viewBox="0 0 24 25" className="icon mr-3" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0)">
                                                        <path d="M21.75 5.34961C21.9489 5.34961 22.1397 5.42863 22.2803 5.56928C22.421 5.70993 22.5 5.9007 22.5 6.09961V19.5996C22.5 19.7985 22.421 19.9893 22.2803 20.1299C22.1397 20.2706 21.9489 20.3496 21.75 20.3496H2.25C2.05109 20.3496 1.86032 20.2706 1.71967 20.1299C1.57902 19.9893 1.5 19.7985 1.5 19.5996V6.09961C1.5 5.9007 1.57902 5.70993 1.71967 5.56928C1.86032 5.42863 2.05109 5.34961 2.25 5.34961H21.75ZM2.25 3.84961C1.65326 3.84961 1.08097 4.08666 0.65901 4.50862C0.237053 4.93058 0 5.50287 0 6.09961L0 19.5996C0 20.1963 0.237053 20.7686 0.65901 21.1906C1.08097 21.6126 1.65326 21.8496 2.25 21.8496H21.75C22.3467 21.8496 22.919 21.6126 23.341 21.1906C23.7629 20.7686 24 20.1963 24 19.5996V6.09961C24 5.50287 23.7629 4.93058 23.341 4.50862C22.919 4.08666 22.3467 3.84961 21.75 3.84961H2.25Z"/>
                                                        <path d="M7.5 12.8496C7.5 12.6507 7.57902 12.4599 7.71967 12.3193C7.86032 12.1786 8.05109 12.0996 8.25 12.0996H18.75C18.9489 12.0996 19.1397 12.1786 19.2803 12.3193C19.421 12.4599 19.5 12.6507 19.5 12.8496C19.5 13.0485 19.421 13.2393 19.2803 13.3799C19.1397 13.5206 18.9489 13.5996 18.75 13.5996H8.25C8.05109 13.5996 7.86032 13.5206 7.71967 13.3799C7.57902 13.2393 7.5 13.0485 7.5 12.8496ZM7.5 9.09961C7.5 8.9007 7.57902 8.70993 7.71967 8.56928C7.86032 8.42863 8.05109 8.34961 8.25 8.34961H18.75C18.9489 8.34961 19.1397 8.42863 19.2803 8.56928C19.421 8.70993 19.5 8.9007 19.5 9.09961C19.5 9.29852 19.421 9.48929 19.2803 9.62994C19.1397 9.77059 18.9489 9.84961 18.75 9.84961H8.25C8.05109 9.84961 7.86032 9.77059 7.71967 9.62994C7.57902 9.48929 7.5 9.29852 7.5 9.09961ZM7.5 16.5996C7.5 16.4007 7.57902 16.2099 7.71967 16.0693C7.86032 15.9286 8.05109 15.8496 8.25 15.8496H18.75C18.9489 15.8496 19.1397 15.9286 19.2803 16.0693C19.421 16.2099 19.5 16.4007 19.5 16.5996C19.5 16.7985 19.421 16.9893 19.2803 17.1299C19.1397 17.2706 18.9489 17.3496 18.75 17.3496H8.25C8.05109 17.3496 7.86032 17.2706 7.71967 17.1299C7.57902 16.9893 7.5 16.7985 7.5 16.5996ZM6 9.09961C6 9.29852 5.92098 9.48929 5.78033 9.62994C5.63968 9.77059 5.44891 9.84961 5.25 9.84961C5.05109 9.84961 4.86032 9.77059 4.71967 9.62994C4.57902 9.48929 4.5 9.29852 4.5 9.09961C4.5 8.9007 4.57902 8.70993 4.71967 8.56928C4.86032 8.42863 5.05109 8.34961 5.25 8.34961C5.44891 8.34961 5.63968 8.42863 5.78033 8.56928C5.92098 8.70993 6 8.9007 6 9.09961ZM6 12.8496C6 13.0485 5.92098 13.2393 5.78033 13.3799C5.63968 13.5206 5.44891 13.5996 5.25 13.5996C5.05109 13.5996 4.86032 13.5206 4.71967 13.3799C4.57902 13.2393 4.5 13.0485 4.5 12.8496C4.5 12.6507 4.57902 12.4599 4.71967 12.3193C4.86032 12.1786 5.05109 12.0996 5.25 12.0996C5.44891 12.0996 5.63968 12.1786 5.78033 12.3193C5.92098 12.4599 6 12.6507 6 12.8496ZM6 16.5996C6 16.7985 5.92098 16.9893 5.78033 17.1299C5.63968 17.2706 5.44891 17.3496 5.25 17.3496C5.05109 17.3496 4.86032 17.2706 4.71967 17.1299C4.57902 16.9893 4.5 16.7985 4.5 16.5996C4.5 16.4007 4.57902 16.2099 4.71967 16.0693C4.86032 15.9286 5.05109 15.8496 5.25 15.8496C5.44891 15.8496 5.63968 15.9286 5.78033 16.0693C5.92098 16.2099 6 16.4007 6 16.5996Z"/>
                                                        </g>
                                                        <defs>
                                                        <clipPath id="clip0">
                                                        <rect width="24" height="24" fill="white" transform="translate(0 0.849609)"/>
                                                        </clipPath>
                                                        </defs>
                                                        </svg>
                                                    </div>
                                                    <span>Misión y visión</span>
                                                </a>
                                                <a href="/assets/archivos/otros/ORGANIGRAMA FCB.pdf" target="_blank" className="tab d-flex">
                                                    <div>
                                                        <svg width="22" height="21" viewBox="0 0 22 21" className="icon mr-3" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5.21901 11.389H16.1523V13.4423H17.219V10.3223H11.219V8.18896H10.1523V10.3223H4.15234V13.4423H5.21901V11.389Z"/>
                                                        <path d="M8.01953 14.189H1.35286C0.999243 14.189 0.660104 14.3294 0.410055 14.5795C0.160007 14.8295 0.0195313 15.1687 0.0195312 15.5223V19.5223C0.0195313 19.8759 0.160007 20.2151 0.410055 20.4651C0.660104 20.7152 0.999243 20.8556 1.35286 20.8556H8.01953C8.37315 20.8556 8.71229 20.7152 8.96234 20.4651C9.21239 20.2151 9.35287 19.8759 9.35287 19.5223V15.5223C9.35287 15.1687 9.21239 14.8295 8.96234 14.5795C8.71229 14.3294 8.37315 14.189 8.01953 14.189ZM1.35286 19.5223V15.5223H8.01953V19.5223H1.35286Z"/>
                                                        <path d="M20.0195 14.189H13.3529C12.9992 14.189 12.6601 14.3294 12.4101 14.5795C12.16 14.8295 12.0195 15.1687 12.0195 15.5223V19.5223C12.0195 19.8759 12.16 20.2151 12.4101 20.4651C12.6601 20.7152 12.9992 20.8556 13.3529 20.8556H20.0195C20.3732 20.8556 20.7123 20.7152 20.9623 20.4651C21.2124 20.2151 21.3529 19.8759 21.3529 19.5223V15.5223C21.3529 15.1687 21.2124 14.8295 20.9623 14.5795C20.7123 14.3294 20.3732 14.189 20.0195 14.189ZM13.3529 19.5223V15.5223H20.0195V19.5223H13.3529Z"/>
                                                        <path d="M7.35286 7.52165H14.0195C14.3732 7.52165 14.7123 7.38117 14.9623 7.13112C15.2124 6.88107 15.3529 6.54194 15.3529 6.18831V2.18831C15.3529 1.83469 15.2124 1.49555 14.9623 1.2455C14.7123 0.995456 14.3732 0.85498 14.0195 0.85498H7.35286C6.99924 0.85498 6.6601 0.995456 6.41006 1.2455C6.16001 1.49555 6.01953 1.83469 6.01953 2.18831V6.18831C6.01953 6.54194 6.16001 6.88107 6.41006 7.13112C6.6601 7.38117 6.99924 7.52165 7.35286 7.52165ZM7.35286 2.18831H14.0195V6.18831H7.35286V2.18831Z"/>
                                                        </svg>
                                                    </div>
                                                    <span>Organigrama</span>
                                                </a>
                                                <Link href="/directorio">
                                                    <a className="tab d-flex">
                                                        <div>
                                                            <svg width="20" height="20" viewBox="0 0 20 20" className="icon mr-3" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M18.7367 3.08867L16.2406 0.594922C16.0645 0.418071 15.8553 0.277752 15.6248 0.182025C15.3943 0.0862976 15.1472 0.0370496 14.8977 0.0371094C14.3891 0.0371094 13.9109 0.236328 13.5523 0.594922L10.8664 3.28086C10.6896 3.45694 10.5492 3.66622 10.4535 3.89669C10.3578 4.12716 10.3085 4.37427 10.3086 4.62383C10.3086 5.13242 10.5078 5.61055 10.8664 5.96914L12.8305 7.9332C12.3707 8.94655 11.7315 9.86841 10.9438 10.6543C10.1579 11.444 9.23616 12.0855 8.22266 12.548L6.2586 10.584C6.08252 10.4071 5.87323 10.2668 5.64277 10.1711C5.4123 10.0754 5.16518 10.0261 4.91563 10.0262C4.40703 10.0262 3.92891 10.2254 3.57031 10.584L0.882033 13.2676C0.704964 13.444 0.564524 13.6537 0.468793 13.8845C0.373062 14.1154 0.323928 14.3629 0.32422 14.6129C0.32422 15.1215 0.523439 15.5996 0.882033 15.9582L3.37344 18.4496C3.94531 19.0238 4.73516 19.3496 5.54609 19.3496C5.71719 19.3496 5.88125 19.3355 6.04297 19.3074C9.20234 18.7871 12.3359 17.1066 14.8648 14.5801C17.3914 12.0559 19.0695 8.92461 19.5969 5.75586C19.7563 4.78789 19.4352 3.7918 18.7367 3.08867Z"/>
                                                            </svg>
                                                        </div>
                                                        <span>Directorio</span>
                                                    </a>
                                                </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="7" lg="8">
                                    <div className="mb-3 tab-content" id="v-pills-tabContent">
                                        <div className="mb-3 tab-pane fade show active" id="v-pills-mision" role="tabpanel" aria-labelledby="v-pills-mision-tab">
                                            <div className="grid-img-txt-2 no-reverse">
                                                <div className="mb-3 mb-md-0">
                                                    <img className="w-100 img-fluid" src="/assets/img/nosotros/institucion/mision-vision.jpg" alt="" />
                                                </div>
                                                <div>
                                                    <p className="title">
                                                        Misión
                                                    </p>
                                                    <p className="mb-2">
                                                        Formar profesionales e investigadores líderes en la generación y difusión del conocimiento científico de nuestra diversidad biológica, con valores, respetuosos de la diversidad cultural, promotores de la identidad nacional basada en una cultura  de calidad y responsabilidad social para contribuir  al desarrollo sostenible del país y la sociedad.
                                                    </p>
                                                    <p className="title">
                                                        Visión
                                                    </p>
                                                    <p className="mb-0">
                                                        Ser referente nacional e internacional en la generación de conocimiento, desarrollo e innovación en el área de las Ciencias Biológicas y la educación de calidad.
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
