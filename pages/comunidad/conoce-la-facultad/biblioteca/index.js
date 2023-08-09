import React, { useEffect } from 'react';
import Layout from '../../../../components/Layout';
import NoticiasExtra from '../../../../components/NoticiasExtra';

import { Row, Col, Container, Breadcrumb } from 'react-bootstrap';
import Link from 'next/link';

import { useWindowSize } from '../../../../utils/useWindowSize';

const index = () => {
	const { width, height } = useWindowSize();

	const Contact = () => {
		return (
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
						<span>619-7000 (Anexo 1531)</span>
					</div>
				</div>
				<div className="mb-2 grid-contacto">
					<div>
						<img
							className="icon mr-2"
							src="/assets/img/iconos/correo.svg"
							alt=""
						/>
					</div>
					<div>
						<span>lulloas_af@unmsm.edu.pe</span>
					</div>
				</div>
				<p className="font-weight-bold mb-1">Horario de atención:</p>
				<p className="mb-0">
					Lunes a Sábado de
					<br />
					08:15 am - 08:00 pm.
				</p>
			</div>
		);
	};

	const Interest = () => {
		return (
			<div className="block-interest-links mb-3">
				<p className="font-weight-bold mb-2">Información académica</p>
				<ul className="nav flex-column">
					<li className="mb-2">
						<Link href="https://sisbib.unmsm.edu.pe/">
							<a target="_blank">Biblioteca Central</a>
						</Link>
					</li>
					<li className="mb-2">
						<Link href="/formacion-academica/pregrado">
							<a>Pregrado</a>
						</Link>
					</li>
					<li className="mb-2">
						<Link href="/formacion-academica/posgrado">
							<a>Posgrado</a>
						</Link>
					</li>
					<li className="mb-0">
						<Link href="/informacion-academica">
							<a>Información académica</a>
						</Link>
					</li>
				</ul>
			</div>
		);
	};

	return (
		<>
			<Layout title="Biblioteca">
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
										<li className="breadcrumb-item">
											<Link href="/comunidad/conoce-la-facultad">
												<a role="button">
													Comunidad: Conoce la
													facultad
												</a>
											</Link>
										</li>
										<Breadcrumb.Item active>
											Biblioteca
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
									<div className="title-page text-center">
										Biblioteca
									</div>
								</Col>
								<Col md="1"></Col>
							</Row>
						</Container>
					</div>
					{/* IMAGE */}
					<div className="mb-4">
						<img
							className="w-100"
							src="/assets/img/comunidad/biblioteca/biblioteca_banner.jpg"
							alt=""
						/>
					</div>

					<div>
						<Container>
							<Row>
								<Col md="1" lg="1"></Col>
								<Col md="3" lg="2">
									<div className="mb-4">
										{/* <ul className="nav flex-column tabs-wrapper">
                                            <li className="tab">Presentación</li>
                                            <li className="tab">Misión y visión</li>
                                            <li className="tab">Malla curricular</li>
                                            <li className="tab">Seguimiento de egresados</li>
                                        </ul> */}
										<div
											className="nav flex-column tabs-wrapper nav-pills"
											id="v-pills-tab"
											role="tablist"
											aria-orientation="vertical">
											<a
												className="tab d-flex active"
												id="v-pills-presentacion-tab"
												data-toggle="pill"
												href="#v-pills-presentacion"
												role="tab"
												aria-controls="v-pills-presentacion"
												aria-selected="true">
												<div>
													<svg
														width="24"
														height="25"
														viewBox="0 0 24 25"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg">
														<g clipPath="url(#clip0)">
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
												<span>Presentación</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-objetivos-tab"
												data-toggle="pill"
												href="#v-pills-objetivos"
												role="tab"
												aria-controls="v-pills-objetivos"
												aria-selected="false">
												<div>
													<svg
														width="22"
														height="22"
														viewBox="0 0 22 22"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg">
														<path d="M21.5977 10.4199H18.7336C18.3281 6.98867 15.607 4.26758 12.1758 3.86211V0.998047C12.1758 0.894922 12.0914 0.810547 11.9883 0.810547H10.582C10.4789 0.810547 10.3945 0.894922 10.3945 0.998047V3.86211C6.96328 4.26758 4.24219 6.98867 3.83672 10.4199H0.972656C0.869531 10.4199 0.785156 10.5043 0.785156 10.6074V12.0137C0.785156 12.1168 0.869531 12.2012 0.972656 12.2012H3.83672C4.24219 15.6324 6.96328 18.3535 10.3945 18.759V21.623C10.3945 21.7262 10.4789 21.8105 10.582 21.8105H11.9883C12.0914 21.8105 12.1758 21.7262 12.1758 21.623V18.759C15.607 18.3535 18.3281 15.6324 18.7336 12.2012H21.5977C21.7008 12.2012 21.7852 12.1168 21.7852 12.0137V10.6074C21.7852 10.5043 21.7008 10.4199 21.5977 10.4199ZM11.2852 17.0293C8.12578 17.0293 5.56641 14.4699 5.56641 11.3105C5.56641 8.15117 8.12578 5.5918 11.2852 5.5918C14.4445 5.5918 17.0039 8.15117 17.0039 11.3105C17.0039 14.4699 14.4445 17.0293 11.2852 17.0293Z" />
														<path d="M11.2852 8.49805C10.5328 8.49805 9.82969 8.78867 9.29766 9.32305C8.76563 9.85508 8.47266 10.5582 8.47266 11.3105C8.47266 12.0629 8.76563 12.766 9.29766 13.298C9.82969 13.8277 10.5352 14.123 11.2852 14.123C12.0352 14.123 12.7406 13.8301 13.2727 13.298C13.8023 12.766 14.0977 12.0605 14.0977 11.3105C14.0977 10.5605 13.8047 9.85508 13.2727 9.32305C12.7406 8.78867 12.0375 8.49805 11.2852 8.49805Z" />
													</svg>
												</div>
												<span>Objetivos</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-servicios-tab"
												data-toggle="pill"
												href="#v-pills-servicios"
												role="tab"
												aria-controls="v-pills-servicios"
												aria-selected="false">
												<div>
													<svg
														width="25"
														height="25"
														viewBox="0 0 25 25"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg">
														<path d="M3.67233 3.15527C2.63733 3.15527 1.79883 3.99527 1.79883 5.03027V19.2728C1.79883 20.3078 2.63883 21.1478 3.67233 21.1478H4.42233C5.45733 21.1478 6.29583 20.3078 6.29583 19.2728V5.02877C6.29583 3.99377 5.45583 3.15527 4.42083 3.15527H3.67383H3.67233ZM9.66783 3.15527C8.63283 3.15527 7.79283 3.99527 7.79283 5.03027V19.2728C7.79283 20.3078 8.63283 21.1478 9.66783 21.1478H10.4178C11.4513 21.1478 12.2898 20.3078 12.2898 19.2728V5.02877C12.2898 3.99527 11.4513 3.15527 10.4163 3.15527H9.66633H9.66783ZM18.2568 7.32077C18.077 6.87362 17.7318 6.51297 17.2929 6.31379C16.854 6.11461 16.3553 6.09222 15.9003 6.25127L15.0273 6.55727C14.7884 6.64114 14.569 6.77251 14.3823 6.94348C14.1956 7.11444 14.0454 7.32145 13.9408 7.55202C13.8362 7.7826 13.7795 8.03196 13.7739 8.28507C13.7683 8.53819 13.814 8.78981 13.9083 9.02477L18.3138 19.9808C18.6873 20.9108 19.7238 21.3803 20.6703 21.0503L21.5433 20.7443C21.7824 20.6604 22.002 20.529 22.1889 20.3579C22.3757 20.1869 22.526 19.9797 22.6306 19.7489C22.7351 19.5182 22.7919 19.2686 22.7973 19.0154C22.8028 18.7621 22.7569 18.5103 22.6623 18.2753L18.2568 7.32077Z" />
													</svg>
												</div>
												<span>Servicios</span>
											</a>
										</div>
									</div>
									{width >= 768 && (
										<>
											<Contact />
											<Interest />
										</>
									)}
								</Col>
								<Col md="4" lg="6">
									<div
										className="mb-3 tab-content"
										id="v-pills-tabContent">
										<div
											className="mb-3 tab-pane fade show active"
											id="v-pills-presentacion"
											role="tabpanel"
											aria-labelledby="v-pills-presentacion-tab">
											<div>
												<p>
													La Unidad de Biblioteca,
													Hemeroteca y Centro de
													Documentación de la Facultad
													de Ciencias Biológicas
													ofrece sus servicios a
													través de una biblioteca
													especializada. Cuenta con
													acervo bibliográfico para el
													uso de los estudiantes de
													las tres Escuelas
													Profesionales de la facultad
													y de carreras afines.
												</p>
												<p>
													La Biblioteca inició sus
													funciones en el año 1989, en
													la gestión decanal del Dr.
													Raúl Verano Montesinos, y a
													partir de la fecha se viene
													implementando con
													herramientas necesarias para
													satisfacer las necesidades
													informativas de los alumnos
													de pre y posgrado, docentes,
													personal administrativo, la
													comunidad universitaria en
													general y usuarios externos.
												</p>
												<p>
													Es importante recalcar que
													la biblioteca se encuentra
													bajo la dirección,
													coordinación y normatividad
													del Sistema de Bibliotecas y
													Biblioteca Central de la
													UNMSM y comparte la misión
													de ser un centro de recursos
													de información y difusión
													del conocimiento científico,
													tecnológico y humanístico
													que contribuya en la
													formación académico
													profesional y la
													investigación, brindando
													servicios de información
													pertinentes y de calidad,
													asumiendo el compromiso
													institucional de la
													Universidad.
												</p>
												<p className="title-dark">
													Jefe de la Unidad de
													Biblioteca, Hemeroteca
												</p>
												<p>Luis Alberto Ulloa Suarez</p>
												<a
													className="btn-green-bright"
													href="https://unmsm.ent.sirsi.net/client/es_ES/all_libs/?dt=list"
													target="_blank">
													Ver catálogo en línea
												</a>
											</div>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-objetivos"
											role="tabpanel"
											aria-labelledby="v-pills-objetivos-tab">
											<div>
												<p>
													Tenemos como objetivos
													ofrecer una organización
													moderna y servicios de
													calidad en nuestra sede;
													fomentar el uso de las
													herramientas que dan acceso
													a los recursos del Sistema
													de Bibliotecas y Biblioteca
													Central de la Universidad de
													manera virtual; mejorar e
													incrementar las herramientas
													de comunicación de la
													Biblioteca con la comunidad
													universitaria y sociedad en
													general; adecuar la
													colección, los espacios y el
													equipamiento de la
													Biblioteca Universitaria al
													entorno educativo y la nueva
													realidad.
												</p>
											</div>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-servicios"
											role="tabpanel"
											aria-labelledby="v-pills-servicios-tab">
											<div>
												<p className="title-dark">
													Servicios que se brindan:
												</p>
												<ul className="chevron-green-dark">
													<li>
														<b>
															Préstamo en Sala:{' '}
														</b>
														<span>
															Libros de Lectura
															Interna y Tesis.
															Solo para realizar
															su lectura y
															anotaciones en sala.
														</span>
													</li>
													<li>
														<b>
															Préstamo a
															Domicilio:{' '}
														</b>
														<span>
															Esta prestación es
															por dos días según
															la disponibilidad
															del texto. Existe
															mora por libro no
															entregado a la
															fecha.
														</span>
													</li>
													<li>
														<b>
															Préstamo
															Interbibliotecario
															Interno y Externo.
														</b>
													</li>
													<li>
														<b>
															Información
															bibliográfica y
															general:{' '}
														</b>
														<span>
															Se brinda guía a los
															usuarios a una mayor
															información para su
															desarrollo académico
															y trámite
															documentario.
														</span>
														<br />
														<span>
															Se cuenta con
															computadoras como
															herramientas para
															obtener alguna
															información
															adicional o consulta
															informática,
															descargar algún
															archivo o viceversa
															y para temas
															diversos de orden de
															investigación
															científica. Son de
															uso exclusivo de los
															alumnos de la
															facultad.
														</span>
													</li>
													<li>
														<b>
															Horario de Atención:{' '}
														</b>
														<span>
															Para alumnos de la
															facultad con carné
															de biblioteca
															vigente (de lunes a
															sábado de 08:15 am a
															08:00 pm).
														</span>
													</li>
													<li>
														<b>Visitantes: </b>
														<span>
															Para alumnos de
															otras facultades de
															la UNMSM. Con carné
															de biblioteca y
															carné universitario
															(jueves y sábados,
															de 08:15 am a 08:00
															pm), Alumnos
															externos con DNI y
															carnet universitario
															(Todos los días, de
															08:15 am a 08:00
															pm).
														</span>
														<br />
														<span>
															Público en general
															con DNI (Todos los
															días, de 08:15 am a
															08:00 pm.)
														</span>
													</li>
												</ul>
											</div>
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
										<NoticiasExtra idNoticiaDetalle={''} />
									</aside>
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
