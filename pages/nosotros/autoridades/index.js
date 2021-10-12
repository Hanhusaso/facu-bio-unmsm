import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
// import Tabs from "../../../components/Tabs/vanillaTabs"
import { Row, Col, Container, Breadcrumb } from "react-bootstrap";
import Link from "next/link";
import * as FaIcons from "react-icons/fa";

const index = () => {
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
										<Breadcrumb.Item active>
											Nosotros: Autoridades y órganos de gobierno
										</Breadcrumb.Item>
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
						<img
							className="w-100"
							src="/assets/img/nosotros/autoridades/autoridades_banner.png"
							alt=""
						/>
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
										<div
											className="nav flex-column tabs-wrapper nav-pills"
											id="v-pills-tab"
											role="tablist"
											aria-orientation="vertical"
										>
											<a
												className="tab d-flex active"
												id="v-pills-presentacion-tab"
												data-toggle="pill"
												href="#v-pills-presentacion"
												role="tab"
												aria-controls="v-pills-presentacion"
												aria-selected="true"
											>
												<div>
													<svg
														width="24"
														height="25"
														viewBox="0 0 24 25"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g clip-path="url(#clip0)">
															<path d="M21.75 5.34961C21.9489 5.34961 22.1397 5.42863 22.2803 5.56928C22.421 5.70993 22.5 5.9007 22.5 6.09961V19.5996C22.5 19.7985 22.421 19.9893 22.2803 20.1299C22.1397 20.2706 21.9489 20.3496 21.75 20.3496H2.25C2.05109 20.3496 1.86032 20.2706 1.71967 20.1299C1.57902 19.9893 1.5 19.7985 1.5 19.5996V6.09961C1.5 5.9007 1.57902 5.70993 1.71967 5.56928C1.86032 5.42863 2.05109 5.34961 2.25 5.34961H21.75ZM2.25 3.84961C1.65326 3.84961 1.08097 4.08666 0.65901 4.50862C0.237053 4.93058 0 5.50287 0 6.09961L0 19.5996C0 20.1963 0.237053 20.7686 0.65901 21.1906C1.08097 21.6126 1.65326 21.8496 2.25 21.8496H21.75C22.3467 21.8496 22.919 21.6126 23.341 21.1906C23.7629 20.7686 24 20.1963 24 19.5996V6.09961C24 5.50287 23.7629 4.93058 23.341 4.50862C22.919 4.08666 22.3467 3.84961 21.75 3.84961H2.25Z" />
															<path d="M7.5 12.8496C7.5 12.6507 7.57902 12.4599 7.71967 12.3193C7.86032 12.1786 8.05109 12.0996 8.25 12.0996H18.75C18.9489 12.0996 19.1397 12.1786 19.2803 12.3193C19.421 12.4599 19.5 12.6507 19.5 12.8496C19.5 13.0485 19.421 13.2393 19.2803 13.3799C19.1397 13.5206 18.9489 13.5996 18.75 13.5996H8.25C8.05109 13.5996 7.86032 13.5206 7.71967 13.3799C7.57902 13.2393 7.5 13.0485 7.5 12.8496ZM7.5 9.09961C7.5 8.9007 7.57902 8.70993 7.71967 8.56928C7.86032 8.42863 8.05109 8.34961 8.25 8.34961H18.75C18.9489 8.34961 19.1397 8.42863 19.2803 8.56928C19.421 8.70993 19.5 8.9007 19.5 9.09961C19.5 9.29852 19.421 9.48929 19.2803 9.62994C19.1397 9.77059 18.9489 9.84961 18.75 9.84961H8.25C8.05109 9.84961 7.86032 9.77059 7.71967 9.62994C7.57902 9.48929 7.5 9.29852 7.5 9.09961ZM7.5 16.5996C7.5 16.4007 7.57902 16.2099 7.71967 16.0693C7.86032 15.9286 8.05109 15.8496 8.25 15.8496H18.75C18.9489 15.8496 19.1397 15.9286 19.2803 16.0693C19.421 16.2099 19.5 16.4007 19.5 16.5996C19.5 16.7985 19.421 16.9893 19.2803 17.1299C19.1397 17.2706 18.9489 17.3496 18.75 17.3496H8.25C8.05109 17.3496 7.86032 17.2706 7.71967 17.1299C7.57902 16.9893 7.5 16.7985 7.5 16.5996ZM6 9.09961C6 9.29852 5.92098 9.48929 5.78033 9.62994C5.63968 9.77059 5.44891 9.84961 5.25 9.84961C5.05109 9.84961 4.86032 9.77059 4.71967 9.62994C4.57902 9.48929 4.5 9.29852 4.5 9.09961C4.5 8.9007 4.57902 8.70993 4.71967 8.56928C4.86032 8.42863 5.05109 8.34961 5.25 8.34961C5.44891 8.34961 5.63968 8.42863 5.78033 8.56928C5.92098 8.70993 6 8.9007 6 9.09961ZM6 12.8496C6 13.0485 5.92098 13.2393 5.78033 13.3799C5.63968 13.5206 5.44891 13.5996 5.25 13.5996C5.05109 13.5996 4.86032 13.5206 4.71967 13.3799C4.57902 13.2393 4.5 13.0485 4.5 12.8496C4.5 12.6507 4.57902 12.4599 4.71967 12.3193C4.86032 12.1786 5.05109 12.0996 5.25 12.0996C5.44891 12.0996 5.63968 12.1786 5.78033 12.3193C5.92098 12.4599 6 12.6507 6 12.8496ZM6 16.5996C6 16.7985 5.92098 16.9893 5.78033 17.1299C5.63968 17.2706 5.44891 17.3496 5.25 17.3496C5.05109 17.3496 4.86032 17.2706 4.71967 17.1299C4.57902 16.9893 4.5 16.7985 4.5 16.5996C4.5 16.4007 4.57902 16.2099 4.71967 16.0693C4.86032 15.9286 5.05109 15.8496 5.25 15.8496C5.44891 15.8496 5.63968 15.9286 5.78033 16.0693C5.92098 16.2099 6 16.4007 6 16.5996Z" />
														</g>
														<defs>
															<clipPath id="clip0">
																<rect
																	width="24"
																	height="24"
																	fill="white"
																	transform="translate(0 0.849609)"
																/>
															</clipPath>
														</defs>
													</svg>
												</div>
												<span>Decanato</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-mision-tab"
												data-toggle="pill"
												href="#v-pills-mision"
												role="tab"
												aria-controls="v-pills-mision"
												aria-selected="false"
											>
												<div>
													<svg
														width="22"
														height="22"
														viewBox="0 0 22 22"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M21.5977 10.4199H18.7336C18.3281 6.98867 15.607 4.26758 12.1758 3.86211V0.998047C12.1758 0.894922 12.0914 0.810547 11.9883 0.810547H10.582C10.4789 0.810547 10.3945 0.894922 10.3945 0.998047V3.86211C6.96328 4.26758 4.24219 6.98867 3.83672 10.4199H0.972656C0.869531 10.4199 0.785156 10.5043 0.785156 10.6074V12.0137C0.785156 12.1168 0.869531 12.2012 0.972656 12.2012H3.83672C4.24219 15.6324 6.96328 18.3535 10.3945 18.759V21.623C10.3945 21.7262 10.4789 21.8105 10.582 21.8105H11.9883C12.0914 21.8105 12.1758 21.7262 12.1758 21.623V18.759C15.607 18.3535 18.3281 15.6324 18.7336 12.2012H21.5977C21.7008 12.2012 21.7852 12.1168 21.7852 12.0137V10.6074C21.7852 10.5043 21.7008 10.4199 21.5977 10.4199ZM11.2852 17.0293C8.12578 17.0293 5.56641 14.4699 5.56641 11.3105C5.56641 8.15117 8.12578 5.5918 11.2852 5.5918C14.4445 5.5918 17.0039 8.15117 17.0039 11.3105C17.0039 14.4699 14.4445 17.0293 11.2852 17.0293Z" />
														<path d="M11.2852 8.49805C10.5328 8.49805 9.82969 8.78867 9.29766 9.32305C8.76563 9.85508 8.47266 10.5582 8.47266 11.3105C8.47266 12.0629 8.76563 12.766 9.29766 13.298C9.82969 13.8277 10.5352 14.123 11.2852 14.123C12.0352 14.123 12.7406 13.8301 13.2727 13.298C13.8023 12.766 14.0977 12.0605 14.0977 11.3105C14.0977 10.5605 13.8047 9.85508 13.2727 9.32305C12.7406 8.78867 12.0375 8.49805 11.2852 8.49805Z" />
													</svg>
												</div>
												<span>Vicedecanato Académico de Pregrado</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-malla-tab"
												data-toggle="pill"
												href="#v-pills-malla"
												role="tab"
												aria-controls="v-pills-malla"
												aria-selected="false"
											>
												<div>
													<svg
														width="19"
														height="21"
														viewBox="0 0 19 21"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M16.5059 20.4783H5.25586C4.85816 20.4779 4.47686 20.3197 4.19564 20.0385C3.91442 19.7573 3.75626 19.376 3.75586 18.9783V14.4783H5.25586V18.9783H16.5059V2.47827H9.75586V0.978271H16.5059C16.9036 0.978669 17.2849 1.13683 17.5661 1.41805C17.8473 1.69927 18.0055 2.08057 18.0059 2.47827V18.9783C18.0055 19.376 17.8473 19.7573 17.5661 20.0385C17.2849 20.3197 16.9036 20.4779 16.5059 20.4783Z" />
														<path d="M9.75586 9.97827H15.0059V11.4783H9.75586V9.97827Z" />
														<path d="M9.00586 9.97827H15.0059V11.4783H9.00586V9.97827Z" />
														<path d="M8.25586 9.97827H15.0059V11.4783H8.25586V9.97827Z" />
														<path d="M3.75586 16.7283C2.7616 16.7273 1.80835 16.3319 1.10531 15.6288C0.402259 14.9258 0.00685214 13.9725 0.00585938 12.9783V4.72827H1.50586V12.9783C1.50586 13.575 1.74291 14.1473 2.16487 14.5693C2.58683 14.9912 3.15912 15.2283 3.75586 15.2283C4.3526 15.2283 4.92489 14.9912 5.34685 14.5693C5.76881 14.1473 6.00586 13.575 6.00586 12.9783V6.22827C6.00586 6.02936 5.92684 5.83859 5.78619 5.69794C5.64554 5.55729 5.45477 5.47827 5.25586 5.47827C5.05695 5.47827 4.86618 5.55729 4.72553 5.69794C4.58488 5.83859 4.50586 6.02936 4.50586 6.22827V13.7283H3.00586V6.22827C3.00586 5.63153 3.24291 5.05924 3.66487 4.63728C4.08683 4.21532 4.65912 3.97827 5.25586 3.97827C5.8526 3.97827 6.42489 4.21532 6.84685 4.63728C7.26881 5.05924 7.50586 5.63153 7.50586 6.22827V12.9783C7.50487 13.9725 7.10946 14.9258 6.40641 15.6288C5.70337 16.3319 4.75012 16.7273 3.75586 16.7283Z" />
													</svg>
												</div>
												<span>Vicedecanato de Investigación y Posgrado</span>
											</a>
											{/* <a
												className="tab d-flex"
												id="v-pills-egresados-tab"
												data-toggle="pill"
												href="#v-pills-egresados"
												role="tab"
												aria-controls="v-pills-egresados"
												aria-selected="false"
											>
												<div>
													<svg
														width="18"
														height="25"
														viewBox="0 0 18 25"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fill-rule="evenodd"
															clip-rule="evenodd"
															d="M2.00803e-07 23.252V3.00195C2.00803e-07 2.2063 0.316071 1.44324 0.87868 0.880633C1.44129 0.318024 2.20435 0.00195313 3 0.00195313L15 0.00195312C15.7956 0.00195313 16.5587 0.318024 17.1213 0.880633C17.6839 1.44324 18 2.2063 18 3.00195V23.252C18.0001 23.3822 17.9663 23.5102 17.9019 23.6234C17.8375 23.7366 17.7447 23.8311 17.6327 23.8975C17.5207 23.964 17.3933 24.0001 17.263 24.0024C17.1328 24.0047 17.0043 23.973 16.89 23.9105L9 19.6055L1.11 23.9105C0.995744 23.973 0.867178 24.0047 0.736957 24.0024C0.606737 24.0001 0.47935 23.964 0.367338 23.8975C0.255325 23.8311 0.162547 23.7366 0.0981369 23.6234C0.0337268 23.5102 -9.50907e-05 23.3822 2.00803e-07 23.252ZM9.24 6.15195C9.21807 6.10697 9.18394 6.06906 9.14151 6.04254C9.09907 6.01602 9.05004 6.00195 9 6.00195C8.94996 6.00195 8.90092 6.01602 8.85849 6.04254C8.81606 6.06906 8.78193 6.10697 8.76 6.15195L7.809 8.07945C7.78996 8.11844 7.76171 8.15221 7.72669 8.17782C7.69166 8.20343 7.65093 8.22013 7.608 8.22645L5.478 8.53545C5.42897 8.54289 5.38297 8.56385 5.34518 8.59596C5.30738 8.62807 5.27928 8.67008 5.26401 8.71727C5.24875 8.76445 5.24693 8.81496 5.25877 8.86313C5.2706 8.91129 5.29561 8.95521 5.331 8.98995L6.87 10.4915C6.933 10.553 6.9615 10.6415 6.9465 10.7285L6.585 12.8495C6.57685 12.8984 6.58251 12.9487 6.60136 12.9946C6.6202 13.0406 6.65148 13.0803 6.69168 13.1095C6.73188 13.1386 6.77941 13.156 6.82893 13.1596C6.87845 13.1632 6.92799 13.1529 6.972 13.13L8.877 12.128C8.91519 12.108 8.95765 12.0975 9.00075 12.0975C9.04385 12.0975 9.08631 12.108 9.1245 12.128L11.0295 13.13C11.0735 13.1525 11.1228 13.1625 11.1721 13.1587C11.2214 13.1548 11.2686 13.1374 11.3086 13.1083C11.3485 13.0793 11.3796 13.0397 11.3984 12.994C11.4172 12.9483 11.423 12.8982 11.415 12.8495L11.052 10.727C11.0443 10.6843 11.0472 10.6405 11.0602 10.5992C11.0733 10.5579 11.0962 10.5204 11.127 10.49L12.669 8.98845C12.7044 8.95371 12.7294 8.90979 12.7412 8.86163C12.7531 8.81346 12.7512 8.76295 12.736 8.71577C12.7207 8.66858 12.6926 8.62657 12.6548 8.59446C12.617 8.56234 12.571 8.54139 12.522 8.53395L10.392 8.22495C10.3491 8.21863 10.3083 8.20193 10.2733 8.17632C10.2383 8.15071 10.21 8.11694 10.191 8.07795L9.24 6.15195Z"
														/>
													</svg>
												</div>
												<span>Directores</span>
											</a> */}
										</div>
									</div>
								</Col>
								<Col md="7" lg="8">
									<div className="mb-3 tab-content" id="v-pills-tabContent">
										<div
											className="mb-3 tab-pane fade show active"
											id="v-pills-presentacion"
											role="tabpanel"
											aria-labelledby="v-pills-presentacion-tab"
										>
											<Container>
												<Row>
													<Col md="9" className="pl-0">
														<p>
															<span className="title-dark">Dr. Pablo Sergio Ramirez Roca</span>
															<span className="divisor-text-green mx-2"></span>
															<span className="title">Decano</span>
														</p>
														<p style={{ textAlign: "justify" }}>
															Biólogo Microbiólogo - Parasitólogo en la UNMSM y Doctor en Ciencias
															mención Microbiología en la Universidad de Chile (2002) obtenido
															mediante una beca de la Cooperación Alemana (DAAD), y Profesor
															Principal de la Universidad Nacional Mayor de San Marcos en la
															Facultad de Ciencias Biológicas, Departamento de Microbiología y
															Parasitología. Mis investigaciones se orientan al estudio de
															microorganismos extremófilos que participan en procesos de
															biolixiviación de minerales de interés comercial, así como proteínas
															recombinantes, resistencia metales en bacterias y levaduras, genómica
															y proteómica estructural de microorganismos oxidadores de hierro y
															azufre. Asimismo, en biodegradación de xenobióticos tales como PETN y
															TNT, y biodegradación de colorantes textiles, entre otros. He recibido
															fondos concursables PROCyT, Coordinador general de proyecto FINCYT,
															FIDECOM, FINCyT-PITEI, Cienciactiva 2017, Fondecyt y varios fondos
															concursables de la UNMSM. Director de la Unidad de Posgrado de la
															Facultad de Ciencias Biológicas (2010-2013), Presidente del Consejo
															Superior de Investigaciones del Vicerrectorado de Investigación y
															Posgrado (VRIP) de la UNMSM (2014-2017), Director General de
															Investigación y Transferencia Tecnológica de VRIP de la UNMSM desde
															febrero del 2017 hasta octubre de 2020 y actual Decano de la Facultad
															de Ciencias Biológicas de la UNMSM.
														</p>
														<div>
															<a
																target="_blank"
																href="/assets/archivos/autoridades/decanos/RR/R.R. N.º 017245 - 2020.- DIRECTOR.pdf"
																className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0"
															>
																<img className="mr-2" src="/assets/img/iconos/pdf.svg" alt="" />
																<span className="">Resolución rectoral</span>
															</a>
															<a
																target="_blank"
																href="/assets/archivos/autoridades/decanos/CV/cv-ramirez-roca.pdf"
																className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0"
															>
																<img className="mr-2" src="/assets/img/iconos/pdf.svg" alt="" />
																<span className="">Hoja de vida</span>
															</a>
														</div>
													</Col>
													<Col md="3" className="pr-0">
														<div className="mb-3">
															<img
																className="img-fluid w-100"
																src="/assets/img/nosotros/autoridades/decano.png"
																alt="decano"
															/>
														</div>
														<div className="d-flex justify-content-center">
															{/* <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaFacebookF className="icon"/>
                                                            </a>
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaInstagram className="icon"/>
                                                            </a>
                                                            <a className="btn-square-green mx-1" href="#">
                                                                <FaIcons.FaTwitter className="icon"/>
                                                            </a> */}
															<a
																className="btn-square-green mx-1"
																href="https://www.linkedin.com/in/pablo-sergio-ramirez-roca-2864a438/?originalSubdomain=pe"
																target="_blank"
															>
																<FaIcons.FaLinkedinIn className="icon" />
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
															Al asumir el gobierno de la facultad reafirmamos nuestro compromiso de
															realizar un trabajo con responsabilidad, equidad y transparencia; de
															tal manera que podamos alcanzar objetivos académicos, administrativos,
															de investigación y de proyección social, con la finalidad de colaborar
															con el progreso del país dentro del marco del desarrollo sostenible.
														</p>
														<p className="title-dark">Funciones específicas:</p>
														<ul className="chevron-green-dark">
															<li>
																El decano es la máxima autoridad que representa a la facultad,
																preside el Consejo de Facultad y dirige la gestión académica y
																administrativa, económica y financiera de la facultad.
															</li>
															<li>
																Ejerce las atribuciones que le confieren la ley universitaria y el
																Estatuto de la Universidad.
															</li>
														</ul>
														<p className="title-dark">Funciones generales:</p>
														<ul className="chevron-green-dark">
															<li>
																Dirigir y supervisar la gestión académica y administrativa,
																económica y financiera de la facultad.
															</li>
															<li>
																Proporcionar al consejo de Facultad información procesada que ayude
																al planeamiento y toma de decisiones.
															</li>
															<li>
																Conducir la formulación presupuestal y el plan de trabajo y
																desarrollo de la facultad, acorde al plan estratégico de la facultad
																aprobada.
															</li>
															<li>
																Hacer cumplir los acuerdos y resoluciones del consejo de facultad y
																las resoluciones rectorales que emita la sede central y gobierno
																central en materia de su competencia.
															</li>
															<li>Representar a la facultad.</li>
														</ul>
													</Col>
													<Col md="3" className="pr-0">
														<div className="contacto-wrapper mb-3">
															<p className="title-dark mb-2">Contacto:</p>
															<div className="grid-contacto">
																<div>
																	<img
																		className="icon mr-2"
																		src="/assets/img/iconos/telefono.svg"
																		alt=""
																	/>
																</div>
																<div>
																	<span>+(51) 619 7000 anexo 1501</span>
																</div>
															</div>
															<div className="mb-0 grid-contacto">
																<div>
																	<img
																		className="icon mr-2"
																		src="/assets/img/iconos/correo.svg"
																		alt=""
																	/>
																</div>
																<div>
																	<span>decanobio@unmsm.edu.pe</span>
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
																		<a>Consejo de facultad</a>
																	</Link>
																</li>
																<li className="mb-2">
																	<Link href="/nosotros/historia">
																		<a>Historia</a>
																	</Link>
																</li>
																<li className="mb-0">
																	<Link href="/informacion-academica?recurso=informacion-de-docentes">
																		<a>Plana docente</a>
																	</Link>
																</li>
															</ul>
														</div>
													</Col>
												</Row>
											</Container>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-mision"
											role="tabpanel"
											aria-labelledby="v-pills-mision-tab"
										>
											<Container>
												<Row>
													<Col md="9" className="pl-0">
														<p>
															<span className="title-dark">
																Mg. Ruth Hortensia García de la Guarda
															</span>
															<span className="divisor-text-green mx-2"></span>
															<span className="title">Vicedecana académica</span>
														</p>
														{/* <p>
															introducción para vicedecana académica
														</p> */}
														<div>
															<a
																target="_blank"
																href="/assets/archivos/autoridades/decanos/RR/R.R. N° 001841-2021-R VICEDECANA ACADÉMICA.pdf"
																className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0"
															>
																<img className="mr-2" src="/assets/img/iconos/pdf.svg" alt="" />
																<span className="">Resolución rectoral</span>
															</a>
															<a
																target="_blank"
																href="/assets/archivos/autoridades/decanos/CV/CV_Ruth_Garcia_2020.pdf"
																className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0"
															>
																<img className="mr-2" src="/assets/img/iconos/pdf.svg" alt="" />
																<span className="">Hoja de vida</span>
															</a>
														</div>
													</Col>
													<Col md="3" className="pr-0">
														<div className="mb-3">
															<img
																className="img-fluid w-100"
																src="/assets/img/nosotros/autoridades/vicedecana-academica.png"
																alt="vicedecana"
															/>
														</div>
														{/* <div className="d-flex justify-content-center">
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
                                                        </div> */}
													</Col>
												</Row>
											</Container>
											<div className="divisor my-3"></div>
											<Container>
												<Row>
													<Col md="9" className="pl-0">
														{/* <p>
															La Dirección Académica es el órgano de apoyo de la Facultad de
															Ciencias Biológicas, encargado de prestar los servicios académicos que
															requieran los estudiantes y profesores de la Facultad, así como el
															apoyo que se hace extensivo al personal docente.
														</p>
														<p className="title-dark">Funciones específicas:</p>
														<ul className="chevron-green-dark">
															<li>
																Planificar, dirigir y supervisar las actividades de las unidades a
																su cargo.
															</li>
															<li>Planificar, dirigir y supervisar el proceso de matrícula.</li>
															<li>
																Dirigir, conducir y supervisar administrativamente los procesos para
																la obtención del grado Académico de Bachiller y Título Profesional.
															</li>
															<li>Realizar funciones de Fedatario de la Facultad.</li>
															<li>
																Desempeñarse como Secretario de las Sesiones de Consejo de Facultad
																y llevar el Archivo de Actas correspondientes.
															</li>
															<li>
																Proponer al Decanato, en coordinación con la Oficina de
																Planificación, Presupuesto y Racionalización, el Plan Operativo
																Anual y el presupuesto de las unidades a su cargo, así como la
																evaluación periódica del cumplimiento de dicho plan.
															</li>
															<li>
																Proponer a la unidad de Planificación, Presupuesto y Racionalización
																de la Facultad, las modificaciones del Texto Único de Procedimientos
																Administrativos (Tarifario descentralizado).
															</li>
															<li>
																Dirigir y supervisar los servicios de biblioteca y hemeroteca,
																asegurando la permanente actualización del material bibliográfico y
																el eficiente y oportuno servicios a los alumnos.
															</li>
															<li>
																Brindar apoyo al estudiante a través de la Unidad de Asesoría y
																Orientación al Estudiante.
															</li>
															<li>
																Coordinar y promover programas y servicios especiales de bienestar,
																salud, alimentación y vivienda, recreación y deporte, en
																coordinación con las oficinas de la Administración Central
																correspondientes.
															</li>
															<li>
																Coordinar la presentación trimestral del informe de gestión de la
																Dirección Académica
															</li>
															<li>Otras funciones que se le asigne.</li>
														</ul>
														<p className="title-dark">Funciones generales:</p>
														<ul className="chevron-green-dark">
															<li>
																Prestar apoyo académico al Decanato y Consejo de Facultad para el
																cumplimiento de los fines y objetivos de la Facultad en las áreas de
																su competencia.
															</li>
															<li>
																Tiene a su cargo la emisión y custodia de las Actas Promocionales de
																los cursos de Pre Grado, registros de Grado y Títulos que otorga la
																Facultad.
															</li>
															<li>
																Llevar el libro de Actas de las sesiones del Consejo de Facultad.
															</li>
															<li>
																Centralizar y conducir los procedimientos académicos de la Facultad.
															</li>
															<li>
																Programar y dirigir el proceso de matrícula, en coordinación con el
																Sistema Único de Matrícula
															</li>
															<li>
																Brindar apoyo al estudiante, mediante el servicio de detección y
																tratamiento de sus problemas académicos y vocacionales.
															</li>
															<li>
																Administrar la Biblioteca, los servicios de Hemeroteca y Centro de
																Documentación de la Facultad.
															</li>
															<li>
																Velar por el bienestar de los alumnos, docentes y no docentes en
																coordinación permanente con la Oficina de Bienestar Universitario.
															</li>
														</ul>
														<p className="title-dark">Líneas de responsabilidad y coordinación:</p>
														<ul className="chevron-green-dark">
															<li>Es el órgano Asesor Académico del Decanato.</li>
															<li>
																Es responsable ante el Decanato por su cumplimiento de las funciones
																de la Dirección Académica
															</li>
															<li>
																Es el órgano que supervisa y controla las Unidades de: Matrícula,
																Registros Académicos, Grados y Títulos; Biblioteca Hemeroteca y
																Centro de Documentación; Asesoría y Orientación del Estudiante y
																Unidad de Bienestar.
															</li>
															<li>
																La Dirección Académica, coordina los servicios académicos con el
																Decanato, las Escuelas Académicas Profesionales de Ciencias
																Biológicas, Genética y Biotecnología y Microbiología y
																Parasitología; la Dirección Admninistrativa, los Órganos de
																Asesoría, la Unidad de Posgrado, Instituto de Investigación, los
																Departamentos Académicos y el CERSEU.
															</li>
															<li>
																La Dirección Académica coordina sus funciones con el Vice Rectorado
																Académico, la Secretaría General, el Sistemas de Bibliotecas
																Central, la Oficina General de Bienestar Universitario y el Sistema
																Único de Matrícula.
															</li>
														</ul> */}
													</Col>
													<Col md="3" className="pr-0">
														<div className="contacto-wrapper mb-3">
															<p className="title-dark mb-2">Contacto:</p>
															{/* <div className="grid-contacto">
																<div>
																	<img
																		className="icon mr-2"
																		src="/assets/img/iconos/telefono.svg"
																		alt=""
																	/>
																</div>
																<div>
																	<span>+(51) 619 7000 anexo 1507</span>
																</div>
															</div>
															<div className="mb-0 grid-contacto">
																<div>
																	<img
																		className="icon mr-2"
																		src="/assets/img/iconos/correo.svg"
																		alt=""
																	/>
																</div>
																<div>
																	<span>epcb.biologia@unmsm.edu.pe</span>
																</div>
															</div>
															<p className="font-weight-bold mb-1">Horario de atención:</p>
															<p className="mb-0">8:00 a.m. - 5:00 p.m.</p> */}
														</div>
														<div className="block-interest-links">
															<p className="font-weight-bold mb-2">Información académica</p>
															<ul className="nav flex-column">
																<li className="mb-2">
																	<Link href="/nosotros/consejo-de-facultad">
																		<a>Consejo de facultad</a>
																	</Link>
																</li>
																<li className="mb-2">
																	<Link href="/nosotros/historia">
																		<a>Historia</a>
																	</Link>
																</li>
																<li className="mb-0">
																	<Link href="/informacion-academica?recurso=informacion-de-docentes">
																		<a>Plana docente</a>
																	</Link>
																</li>
															</ul>
														</div>
													</Col>
												</Row>
											</Container>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-malla"
											role="tabpanel"
											aria-labelledby="v-pills-malla-tab"
										>
											<Container>
												<Row>
													<Col md="9" className="pl-0">
														<p>
															<span className="title-dark">Dra. Martha Esther Valdivia Cuya</span>
															<span className="divisor-text-green mx-2"></span>
															<span className="title">Vicedecana de Investigación y Posgrado</span>
														</p>
														<p style={{ textAlign: "justify" }}>
															Profesora Principal a Tiempo Completo, Investigadora de la Facultad de
															Ciencias Biológicas, Miembro permanente del Instituto de
															Investigaciones Antonio Raimondi, Jefa del laboratorio de Fisiología
															de la reproducción de la Facultad de Ciencias Biológicas de la
															Universidad Nacional Mayor de San Marcos - UNMSM, Perú con grado de
															Magister en Ciencias Biológicas con mención en Biología de la
															Reproducción en la Universidad de Chile y grado de Doctor en Ciencias
															Biológicas con mención en Fisiología en la Universidad Peruana
															Cayetano Heredia. Con experiencia en organización e implementación de
															equipamiento de laboratorios de alta tecnología para la investigación
															en Reproducción. El objetivo de sus investigaciones está enfocado al
															análisis de la fertilidad el manejo de gametos y de la interacción de
															los mismos usando herramientas biotecnológicas (criopreservación,
															fecundación In vitro y pruebas moleculares que revelen la capacidad
															fértil de las especies (animales y humano)s. Ha desarrollado
															protocolos de criopreservación de espermatozoides y posee una patente
															en protocolo de criopreservación de zanganos para la industria
															apícola. Asimismo, ha desarrollado tres patentes que se encuentran en
															trámite internacional sobre medios para la crioconservación de células
															madre espermatogoniales, biopsias testicluares de alpaca y diseño de
															protocolos de criopreservación para células aisladas y biopsias. Ha
															obtenido a través de fondos concursables el financiamiento a proyectos
															de CONCYTEC (PROCYT y PROCOM), International Foundation for Science
															(IFS), International Centre of Genetic Ingeniering and Biotechnology
															(ICGEB). INNOVATE, PIMEM, FONDECYT y UNMSM. Sus publicaciones se
															encuentran en Theriogenology, Biology of Reproduction, Biological
															Research, Gamete Research, Molecular Reproduction fertility, SPERMOVA,
															Reproduction domestic animals, Andrologia, Fronterirs, Revista peruana
															de Biología, Revista de Investigación en Ciencias veterinarias, entre
															otras. Ha formado a investigadores peruanos (Arequipa, Ayacucho,
															Tacna) y extranjeros (Alemania, Bolivia, Chile) en el área de
															reproducción tanto en investigación básica como aplicada y en
															biotecnologías reproductivas como IVF, ICSI Cultivo celular,
															criopreservación. Actualmente está dedicada al estudio de las células
															madre testiculares de alpaca, maduración de ovocitos y manejo de
															gametos para la producción embrionaria con perpectiva del uso de la
															micromanipulación embrionaria para la producción de clones en alpacas.
														</p>
														<div>
															<a
																target="_blank"
																href="https://drive.google.com/file/d/1R8KkjOTsV7z51-OH2-8D8q6QTA7Z2mW7/view"
																className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0"
															>
																<img className="mr-2" src="/assets/img/iconos/pdf.svg" alt="" />
																<span className="">Resolución rectoral</span>
															</a>
															<a
																target="_blank"
																href="https://ctivitae.concytec.gob.pe/appDirectorioCTI/MantDatosOrcid.do?numero_orcid=0000-0002-8301-5536&nombre_orcid=Martha%20Valdivia&id_investigador=17&estado=ok"
																className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0"
															>
																<img className="mr-2" src="/assets/img/iconos/pdf.svg" alt="" />
																<span className="">Hoja de vida</span>
															</a>
														</div>
													</Col>
													<Col md="3" className="pr-0">
														<div className="mb-3">
															<img
																className="img-fluid w-100"
																src="/assets/img/nosotros/autoridades/vicedecana-posgrado.png"
																alt="vicedecana"
															/>
														</div>
														{/* <div className="d-flex justify-content-center">
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
                                                        </div> */}
													</Col>
												</Row>
											</Container>
											<div className="divisor my-3"></div>
											<Container>
												<Row>
													<Col md="9" className="pl-0">
														{/* <p>
															Al asumir el gobierno de la facultad reafirmamos nuestro compromiso de
															realizar un trabajo con responsabilidad, equidad y transparencia; de
															tal manera que podamos alcanzar objetivos académicos, administrativos,
															de investigación y de proyección social, con la finalidad de colaborar
															con el progreso del país dentro del marco del desarrollo sostenible.
														</p> */}
														<p className="title-dark">
															Funciones del Vicedecanato de Investigación y Posgrado:
														</p>
														<ul className="chevron-green-dark">
															<li>
																Coordinar y organizar las actividades de investigación, y las
																relacionadas con los productos de los estudios de investigación de
																los institutos y de la unidad de posgrado.
															</li>
															<li>
																Promover la incorporación y desarrollo de todos los docentes en el
																campo de la investigación.
															</li>
															<li>
																Promover la participación de los estudiantes de pregrado en las
																actividades de investigación formativa.
															</li>
															<li>
																Promover la publicación y difusión de los trabajos de investigación,
																tesis, patentes, artículos y otros relacionados.
															</li>
															<li>
																Coordinar y promover los programas de posgrado en todos los niveles.
															</li>
															<li>
																Coordinar con los directores de la unidad de posgrado y de la unidad
																de investigación las actividades en el ámbito de sus competencias en
																cada facultad.
															</li>
															<li>Otras funciones que se establecen en la normativa respectiva.</li>
														</ul>
													</Col>
													<Col md="3" className="pr-0">
														<div className="contacto-wrapper mb-3">
															<p className="title-dark mb-2">Contacto:</p>
															<div className="grid-contacto">
																<div>
																	<img
																		className="icon mr-2"
																		src="/assets/img/iconos/telefono.svg"
																		alt=""
																	/>
																</div>
																<div>
																	<span>+(51) 619 7000 anexo 1541</span>
																</div>
															</div>
															<div className="grid-contacto">
																<div>
																	<img
																		className="icon mr-2"
																		src="/assets/img/iconos/telefono.svg"
																		alt=""
																	/>
																</div>
																<div>
																	<span>Whatsapp: 998676628</span>
																</div>
															</div>
															<div className="mb-0 grid-contacto">
																<div>
																	<img
																		className="icon mr-2"
																		src="/assets/img/iconos/correo.svg"
																		alt=""
																	/>
																</div>
																<div>
																	<span>vdip.fcb@unmsm.edu.pe</span>
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
																		<a>Consejo de facultad</a>
																	</Link>
																</li>
																<li className="mb-2">
																	<Link href="/nosotros/historia">
																		<a>Historia</a>
																	</Link>
																</li>
																<li className="mb-0">
																	<Link href="/informacion-academica?recurso=informacion-de-docentes">
																		<a>Plana docente</a>
																	</Link>
																</li>
															</ul>
														</div>
													</Col>
												</Row>
											</Container>
										</div>
										{/* <div
											className="mb-3 tab-pane fade"
											id="v-pills-egresados"
											role="tabpanel"
											aria-labelledby="v-pills-egresados-tab"
										>
											<div className="divisor mt-0"></div>
											<div className="grid-img-txt-2">
												<div>
													<img
														className="w-100 img-fluid"
														src="/assets/img/nosotros/autoridades/director-ciencias-biologicas.jpg"
														alt=""
													/>
												</div>
												<div>
													<p className="title-dark">
														Dr. José Cárdenas López | Directora de la E.P de Ciencias Biológicas
													</p>
													<p className="mb-2">
														Biólogo Microbiólogo - Parasitólogo en la UNMSM y Doctor en Ciencias
														mención Microbiología en la Universidad de Chile (2002) obtenido
														mediante una beca de la Cooperación Alemana (DAAD), y Profesor Principal
														de la Universidad Nacional Mayor de San Marcos en la Facultad de
														Ciencias Biológicas, Departamento de Microbiología y Parasitología.
													</p>
													<p className="mb-2">
														<span className="d-block d-md-inline mr-2 mb-3 mb-md-0">
															Documentación:
														</span>
														<a
															href="#"
															className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0"
														>
															<img className="mr-2" src="/assets/img/iconos/pdf.svg" alt="" />
															<span className="">Resolución rectoral</span>
														</a>
														<a
															href="#"
															className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0"
														>
															<img className="mr-2" src="/assets/img/iconos/pdf.svg" alt="" />
															<span className="">Hoja de vida</span>
														</a>
													</p>
													<p className="mb-0">
														<span className="d-block d-md-inline mr-2 mb-3 mb-md-0">Contacto:</span>
														<div className="d-block d-md-inline mb-3 mb-md-0">
															<img
																className="icon mr-2"
																src="/assets/img/iconos/correo.svg"
																alt=""
															/>
															<span className="text-break">laucastivas@unmsm.edu.pe</span>
														</div>
													</p>
												</div>
											</div>
											<div className="divisor"></div>
											<div className="grid-img-txt-2">
												<div>
													<img
														className="w-100 img-fluid"
														src="/assets/img/nosotros/autoridades/director-ciencias-biologicas.jpg"
														alt=""
													/>
												</div>
												<div>
													<p className="title-dark">
														Dr. José Cárdenas López | Directora de la E.P de Ciencias Biológicas
													</p>
													<p className="mb-2">
														Biólogo Microbiólogo - Parasitólogo en la UNMSM y Doctor en Ciencias
														mención Microbiología en la Universidad de Chile (2002) obtenido
														mediante una beca de la Cooperación Alemana (DAAD), y Profesor Principal
														de la Universidad Nacional Mayor de San Marcos en la Facultad de
														Ciencias Biológicas, Departamento de Microbiología y Parasitología.
													</p>
													<p className="mb-2">
														<span className="d-block d-md-inline mr-2 mb-3 mb-md-0">
															Documentación:
														</span>
														<a
															href="#"
															className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0"
														>
															<img className="mr-2" src="/assets/img/iconos/pdf.svg" alt="" />
															<span className="">Resolución rectoral</span>
														</a>
														<a
															href="#"
															className="d-block d-md-inline color-inherit mr-3 mb-3 mb-md-0"
														>
															<img className="mr-2" src="/assets/img/iconos/pdf.svg" alt="" />
															<span className="">Hoja de vida</span>
														</a>
													</p>
													<p className="mb-0">
														<span className="d-block d-md-inline mr-2 mb-3 mb-md-0">Contacto:</span>
														<div className="d-block d-md-inline mb-3 mb-md-0">
															<img
																className="icon mr-2"
																src="/assets/img/iconos/correo.svg"
																alt=""
															/>
															<span className="text-break">laucastivas@unmsm.edu.pe</span>
														</div>
													</p>
												</div>
											</div>
										</div> */}
									</div>
								</Col>
								<Col md="1" lg="1"></Col>
							</Row>
						</Container>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default index;
