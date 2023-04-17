import React, { useEffect } from 'react';
import Layout from '../../../../components/Layout';
// import Tabs from "../../../../components/Tabs/vanillaTabs"
import { Row, Col, Container, Breadcrumb } from 'react-bootstrap';
import Link from 'next/link';

import { useWindowSize } from '../../../../utils/useWindowSize';
import InformacionAcademica from '../../../../components/interes/InformacionAcademica';

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
						<span>+(51) 619 7000 anexo 1552</span>
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
						<span>epmyp.biologia@unmsm.edu.pe</span>
					</div>
				</div>
				<p className="font-weight-bold mb-1">Horario de atención:</p>
				<p className="mb-0">9:00 a.m. - 3:45 p.m.</p>
			</div>
		);
	};

	return (
		<>
			<Layout title="Microbiología y Parasitología">
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
										{/* <li className="breadcrumb-item">Formación académica</li> */}
										<li className="breadcrumb-item">
											<Link href="/formacion-academica/pregrado">
												<a role="button">
													Formación académica:
													Carreras de pregrado
												</a>
											</Link>
										</li>
										<Breadcrumb.Item active>
											E.P Microbiología y Parasitología
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
										E.P Microbiología y Parasitología
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
							src="/assets/img/carreras/microbiologia/banner_microbiologia.png"
							alt=""
						/>
					</div>

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
												<span>Presentación</span>
											</a>

											<a
												className="tab d-flex"
												id="v-pills-perfil-tab"
												data-toggle="pill"
												href="#v-pills-perfil"
												role="tab"
												aria-controls="v-pills-perfil"
												aria-selected="false">
												<div>
													<svg
														width="24"
														height="24"
														viewBox="0 0 24 24"
														// className="icon mr-3"
														className="mr-3"
														fill="none"
														xmlns="http://www.w3.org/2000/svg">
														{/* <rect
															width="24"
															height="24"
															fill="#E5E5E5"
														/> */}
														<path
															// style={{
															// 	stroke: '#56756B',
															// }}
															d="M12 1C5.9247 1 1 5.9247 1 12C1 18.0753 5.9247 23 12 23C18.0753 23 23 18.0753 23 12C23 5.9247 18.0753 1 12 1Z"
															// stroke="#56756B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
															fill="transparent"
														/>
														<path
															// style={{
															// 	stroke: '#56756B',
															// }}
															d="M3.49805 18.981C3.49805 18.981 5.94995 15.8504 11.9999 15.8504C18.0499 15.8504 20.5029 18.981 20.5029 18.981M11.9999 12.0004C12.8752 12.0004 13.7145 11.6527 14.3334 11.0338C14.9523 10.415 15.2999 9.57561 15.2999 8.70039C15.2999 7.82518 14.9523 6.98581 14.3334 6.36694C13.7145 5.74807 12.8752 5.40039 11.9999 5.40039C11.1247 5.40039 10.2854 5.74807 9.66649 6.36694C9.04762 6.98581 8.69995 7.82518 8.69995 8.70039C8.69995 9.57561 9.04762 10.415 9.66649 11.0338C10.2854 11.6527 11.1247 12.0004 11.9999 12.0004Z"
															// stroke="#56756B"
															strokeWidth="1.5"
															strokeLinecap="round"
															strokeLinejoin="round"
															fill="transparent"
														/>
													</svg>
												</div>
												<span>
													Perfil del ingresante y
													egresado
												</span>
											</a>
											<a
												className="tab d-flex align-items-center"
												id="v-pills-campo-tab"
												data-toggle="pill"
												href="#v-pills-campo"
												role="tab"
												aria-controls="v-pills-campo"
												aria-selected="false">
												<div>
													<svg
														width="24"
														height="23"
														viewBox="0 0 24 23"
														fill="none"
														className="mr-3 icon "
														xmlns="http://www.w3.org/2000/svg">
														<path
															d="M15 5V2H9V5H15ZM2 7V21H22V7H2ZM21.6 4.84211C22.932 4.84211 24 5.91947 24 7.26316V20.5789C24 21.9226 22.932 23 21.6 23H2.4C1.068 23 0 21.9226 0 20.5789L0.012 7.26316C0.012 5.91947 1.068 4.84211 2.4 4.84211H7.2V2.42105C7.2 1.07737 8.268 0 9.6 0H14.4C15.732 0 16.8 1.07737 16.8 2.42105V4.84211H21.6Z"
															fill="#56756B"
														/>
													</svg>
												</div>
												<span>Campo laboral</span>
											</a>
											<a
												href="https://drive.google.com/drive/folders/14oNAoApmIednms1n7KitzJJnNqE9hAdi?usp=sharing"
												target="_blank"
												className="tab d-flex">
												<div>
													<svg
														width="19"
														height="21"
														viewBox="0 0 19 21"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg">
														<path d="M16.5059 20.4783H5.25586C4.85816 20.4779 4.47686 20.3197 4.19564 20.0385C3.91442 19.7573 3.75626 19.376 3.75586 18.9783V14.4783H5.25586V18.9783H16.5059V2.47827H9.75586V0.978271H16.5059C16.9036 0.978669 17.2849 1.13683 17.5661 1.41805C17.8473 1.69927 18.0055 2.08057 18.0059 2.47827V18.9783C18.0055 19.376 17.8473 19.7573 17.5661 20.0385C17.2849 20.3197 16.9036 20.4779 16.5059 20.4783Z" />
														<path d="M9.75586 9.97827H15.0059V11.4783H9.75586V9.97827Z" />
														<path d="M9.00586 9.97827H15.0059V11.4783H9.00586V9.97827Z" />
														<path d="M8.25586 9.97827H15.0059V11.4783H8.25586V9.97827Z" />
														<path d="M3.75586 16.7283C2.7616 16.7273 1.80835 16.3319 1.10531 15.6288C0.402259 14.9258 0.00685214 13.9725 0.00585938 12.9783V4.72827H1.50586V12.9783C1.50586 13.575 1.74291 14.1473 2.16487 14.5693C2.58683 14.9912 3.15912 15.2283 3.75586 15.2283C4.3526 15.2283 4.92489 14.9912 5.34685 14.5693C5.76881 14.1473 6.00586 13.575 6.00586 12.9783V6.22827C6.00586 6.02936 5.92684 5.83859 5.78619 5.69794C5.64554 5.55729 5.45477 5.47827 5.25586 5.47827C5.05695 5.47827 4.86618 5.55729 4.72553 5.69794C4.58488 5.83859 4.50586 6.02936 4.50586 6.22827V13.7283H3.00586V6.22827C3.00586 5.63153 3.24291 5.05924 3.66487 4.63728C4.08683 4.21532 4.65912 3.97827 5.25586 3.97827C5.8526 3.97827 6.42489 4.21532 6.84685 4.63728C7.26881 5.05924 7.50586 5.63153 7.50586 6.22827V12.9783C7.50487 13.9725 7.10946 14.9258 6.40641 15.6288C5.70337 16.3319 4.75012 16.7273 3.75586 16.7283Z" />
													</svg>
												</div>
												<span>Malla curricular</span>
											</a>
										</div>
									</div>
									{width >= 768 && (
										<>
											<Contact />
											<InformacionAcademica />
										</>
									)}
								</Col>
								<Col md="7" lg="8">
									<div
										className="mb-3 tab-content"
										id="v-pills-tabContent">
										<div
											className="mb-3 tab-pane fade show active"
											id="v-pills-presentacion"
											role="tabpanel"
											aria-labelledby="v-pills-presentacion-tab">
											<div className="wrapper-img-fr">
												<div className="img-fr">
													<img
														className="w-100 img-fluid"
														src="/assets/img/carreras/microbiologia/director.png"
														alt=""
													/>
													<div className="caption">
														<div className="mb-2 font-weight-bold">
															Director
														</div>
														<div className="mb-1">
															Pedro Luis
															Castellanos Sánchez
														</div>
														<div className="mb-0">
															pcastellanos@unmsm.edu.pe
														</div>
													</div>
												</div>
												<p>
													La carrera profesional de
													Microbiolog&iacute;a y
													Parasitolog&iacute;a{' '}
													<strong>
														capacita a sus egresados
														en el conocimiento
														integral de los
														microorganismos y
														par&aacute;sitos, la
														interpretaci&oacute;n de
														la interacci&oacute;n
														con sus entornos y su
														participaci&oacute;n en
														procesos evolutivos.
													</strong>{' '}
													Se enfoca en brindar
													herramientas formativas que
													permitan la
													generaci&oacute;n de
													soluciones innovadoras y con
													impacto social, promoviendo
													en las aulas un trabajo
													transdisciplinario que
													permite a sus egresados
													destacarse en las diversas{' '}
													<strong>
														&aacute;reas laborales
													</strong>{' '}
													que permite la
													finalizaci&oacute;n de la
													carrera, tales como el
													&aacute;rea de{' '}
													<strong>
														salud,
														biotecnolog&iacute;a,
														gesti&oacute;n,
														agroindustrial,
														ambiental,
														miner&iacute;a, etc.
													</strong>
												</p>
												<p>
													Los alumnos tienen la
													oportunidad de desarrollar{' '}
													<strong>
														labores de
														investigaci&oacute;n
														desde el inicio de la
														carrera
													</strong>
													,{' '}
													<strong>
														estando involucrados en
														ambientes de laboratorio
														desde un primer momento.{' '}
													</strong>
													Adem&aacute;s tienen la
													posibilidad de formar parte
													de los grupos de
													investigaci&oacute;n de
													facultad,{' '}
													<strong>
														involucr&aacute;ndose en
														proyectos con impacto
														real
													</strong>
													, de la mano de docentes
													calificados y con
													experiencia en el campo.
												</p>
												<p>
													<strong>
														DURACI&Oacute;N
													</strong>
												</p>
												<p>
													5 a&ntilde;os, divididos en
													10 semestres&nbsp;
												</p>
												<p>
													<strong>GRADO</strong>
												</p>
												<p>
													Bachiller en
													Microbiolog&iacute;a y
													Parasitolog&iacute;a
												</p>
												<p>
													<strong>
														T&Iacute;TULO
													</strong>
												</p>
												<p>
													T&iacute;tulo profesional de
													Bi&oacute;logo en
													Microbiolog&iacute;a y
													Parasitolog&iacute;a
												</p>
												<p>
													<strong>
														ESTRATEGIA EDUCATIVA
													</strong>
												</p>
												<p>
													Se emplear&aacute;n
													metodolog&iacute;as de
													ense&ntilde;anza-aprendizaje
													en el desarrollo de
													asignaturas procurando que
													el estudiante observe,
													correlacione, analice e
													integre los temas
													discutidos.&nbsp;
												</p>
												<p>
													Adem&aacute;s el estudiante
													tiene la oportunidad de
													desarrollar actividades de
													investigaci&oacute;n desde
													los cursos de
													formaci&oacute;n
													b&aacute;sica. Los cursos
													del plan de estudios, en su
													mayor&iacute;a, incluyen
													actividades de
													investigaci&oacute;n en
													laboratorio o campo. Las
													pr&aacute;cticas
													pre-profesionales incluyen
													la participaci&oacute;n en
													proyectos de
													investigaci&oacute;n en los
													grupos de
													investigaci&oacute;n (GI),
													los cuales pueden culminar
													en el desarrollo de su
													tesis.&nbsp;
												</p>
												<p>
													Adem&aacute;s tiene la
													oportunidad de desarrollar
													actividades de
													extensi&oacute;n
													universitaria, trabajando en
													proyectos que den soluciones
													a los problemas y
													necesidades del pa&iacute;s,
													sobre todo de los sectores
													m&aacute;s vulnerables, a
													trav&eacute;s de la
													participaci&oacute;n
													comunitaria y siempre a
													trav&eacute;s del campo de
													su formaci&oacute;n
													universitaria.
												</p>
											</div>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-perfil"
											role="tabpanel"
											aria-labelledby="v-pills-perfil-tab">
											<div className="wrapper-img-fr">
												<p>
													<strong>
														PERFIL DEL INGRESANTE
													</strong>
												</p>
												<ul className="chevron-green-dark">
													<li aria-level="1">
														Tiene la capacidad para
														enfrentar los
														desaf&iacute;os de la
														formaci&oacute;n
														acad&eacute;mica en
														Microbiolog&iacute;a y
														Parasitolog&iacute;a.
													</li>
													<li aria-level="1">
														Posee pensamiento
														cr&iacute;tico y
														anal&iacute;tico, con
														una actitud positiva
														para la
														investigaci&oacute;n e
														innovaci&oacute;n.&nbsp;
													</li>
													<li aria-level="1">
														Tiene disposici&oacute;n
														para el trabajo
														colaborativo y de
														laboratorio.
													</li>
													<li aria-level="1">
														Capaz de trabajar en
														equipo, manteniendo una
														relaci&oacute;n
														respetuosa con su
														entorno y liderazgo.
													</li>
													<li aria-level="1">
														Exhibe un alto sentido
														humanitario,
														vocaci&oacute;n de
														servicio, inteligencia
														emocional y
														&eacute;tica.&nbsp;
													</li>
												</ul>
												<p>
													<strong>
														PERFIL DEL EGRESADO
													</strong>
												</p>
												<ul className="chevron-green-dark">
													<li aria-level="1">
														<strong>
															Comprende los
															procesos que afectan
															la salud humana,
															animal y vegetal por
															la acci&oacute;n de
															diferentes
															microorganismos
														</strong>
														, adem&aacute;s de los
														mecanismos
														inmunol&oacute;gicos
														estimulados por estos
														agentes, con amplio
														dominio de las
														t&eacute;cnicas
														cl&aacute;sicas y
														moleculares.
													</li>
													<li aria-level="1">
														<strong>
															Genera
															informaci&oacute;n
															cient&iacute;fica{' '}
														</strong>
														mediante la
														aplicaci&oacute;n del
														m&eacute;todo
														cient&iacute;fico en
														microbiolog&iacute;a y
														parasitolog&iacute;a con
														actitud innovadora y
														liderazgo.
													</li>
													<li aria-level="1">
														<strong>
															Comunica y difunde
															los resultados de
															sus investigaciones{' '}
														</strong>
														en beneficio de la
														sociedad.
													</li>
													<li aria-level="1">
														<strong>
															Innova
															tecnolog&iacute;as
															mediante el uso de
															microorganismos,
															par&aacute;sitos o
															sus productos
														</strong>{' '}
														con capacidad para
														trabajar en equipos
														multidisciplinarios.
													</li>
													<li aria-level="1">
														<strong>
															Gestiona proyectos
														</strong>{' '}
														cient&iacute;ficos, de
														Inversi&oacute;n, de
														Desarrollo e
														Innovaci&oacute;n
														tecnol&oacute;gica.
													</li>
													<li aria-level="1">
														<strong>
															Identifica los
															microorganismos y
															par&aacute;sitos
														</strong>{' '}
														que proceden de
														diferentes
														h&aacute;bitats, con
														veracidad.&nbsp;
													</li>
													<li aria-level="1">
														<strong>
															Interpreta los
															resultados
															experimentales
														</strong>{' '}
														mediante an&aacute;lisis
														estad&iacute;sticos.
													</li>
													<li aria-level="1">
														<strong>
															Aplica
															tecnolog&iacute;a de
															punta{' '}
														</strong>
														en la
														investigaci&oacute;n
														Microbiol&oacute;gica y
														Parasitol&oacute;gica
														(Gen&oacute;mica,
														Prote&oacute;mica,
														Bioinform&aacute;tica).
													</li>
													<li aria-level="1">
														<strong>
															Interpreta la
															documentaci&oacute;n
															cient&iacute;fica{' '}
														</strong>
														con sentido
														cr&iacute;tico.
													</li>
												</ul>
											</div>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-campo"
											role="tabpanel"
											aria-labelledby="v-pills-campo-tab">
											<div className="wrapper-img-fr">
												<p>
													En base a las tendencias de
													los sectores de salud
													p&uacute;blica, salud
													humana, ambiental y
													veterinaria, se sabe que el
													profesional de
													Microbiolog&iacute;a
													cumplir&aacute; un rol
													importante como personal de
													salud en los niveles de
													prevenci&oacute;n de cada
													una de las enfermedades
													emergentes y reemergentes
													cosmopolitas y por ende el
													pa&iacute;s.&nbsp;
												</p>
												<p>
													La demanda de profesionales
													Bi&oacute;logos-Microbi&oacute;logos-Parasit&oacute;logos
													est&aacute; aumentando en el
													mundo, producto de la
													situaci&oacute;n de
													emergencia planetaria en que
													nos encontramos, con
													problemas de
													contaminaci&oacute;n y
													degradaci&oacute;n de los
													ecosistemas, agotamiento de
													recursos, crecimiento
													incontrolado de la
													poblaci&oacute;n mundial,
													desequilibrios
													insostenibles, conflictos
													destructivos, emergencia y
													reemergencia de enfermedades
													infecciosas, p&eacute;rdida
													de diversidad
													biol&oacute;gica y cultural.{' '}
												</p>
												<p>
													Existe demanda de
													Bi&oacute;logos
													Microbi&oacute;logos
													Parasit&oacute;logos en la
													mayor&iacute;a de sectores
													de la actividad nacional;
													demanda que se va a
													incrementar en los
													pr&oacute;ximos a&ntilde;os
													principalmente en los
													sectores Salud, Agricultura
													y Alimentaci&oacute;n,
													Ambiente e Industria.
												</p>
												<p>
													<strong>
														Principales labores en
														diversas &aacute;reas de
														trabajo:
													</strong>
												</p>
												<ul className="chevron-green-dark">
													<li aria-level="1">
														<strong>Salud: </strong>
														Dise&ntilde;ar, dirigir
														y ejecutar programas de
														salud p&uacute;blica,
														ocupacional y de
														vigilancia
														epidemiol&oacute;gica
														proponiendo estrategias
														de detecci&oacute;n,
														prevenci&oacute;n y
														control de organismos
														pat&oacute;genos que
														puedan afectar
														directamente al ser
														humano y/o a
														trav&eacute;s de
														productos de consumo
														humano.&nbsp;
													</li>
													<li aria-level="1">
														<strong>
															Biotecnolog&iacute;a:{' '}
														</strong>
														Aprovechar
														microorganismos de
														importancia
														econ&oacute;mica en la
														producci&oacute;n de
														alimentos y otras
														sustancias &uacute;tiles
														de inter&eacute;s
														industrial,
														contribuyendo a mejorar
														el nivel nutricional y
														renovaci&oacute;n de
														productos rehusados y
														reciclaje en beneficio
														socio-econ&oacute;mico
														del pa&iacute;s.{' '}
													</li>
													<li aria-level="1">
														<strong>
															Investigaci&oacute;n:{' '}
														</strong>
														Dise&ntilde;ar, dirigir
														y ejecutar programas o
														actividades de
														aislamiento e
														identificaci&oacute;n de
														organismos microbianos y
														parasitarios a partir de
														diferentes fuentes como:
														seres humanos, animales,
														plantas, suelos, aguas,
														aire y de productos
														elaborados por el ser
														humano. As&iacute; mismo
														puede enfocarse en
														dise&ntilde;ar y
														ejecutar trabajos de
														investigaci&oacute;n
														cient&iacute;fica y
														tecnol&oacute;gica en
														&aacute;reas
														relacionadas con
														biotecnolog&iacute;a,
														ingenier&iacute;a
														gen&eacute;tica,
														microbiolog&iacute;a,
														parasitolog&iacute;a y
														gen&eacute;tica
														molecular, tanto en
														laboratorios
														especializados de
														investigaci&oacute;n
														b&aacute;sica, como
														laboratorios
														cl&iacute;nicos o de
														medicina forense.&nbsp;
													</li>
													<li aria-level="1">
														<strong>
															Gesti&oacute;n:
														</strong>{' '}
														Participar en la
														generaci&oacute;n de
														empresas privadas de
														consultor&iacute;a,
														inspecci&oacute;n y
														supervisi&oacute;n en el
														&aacute;rea de su
														competencia; as&iacute;
														como generar proyectos
														microempresariales que
														permitan comercializar
														insumos naturales o sus
														productos
														biol&oacute;gicos
														industrializados. Se
														puede enfocar
														tambi&eacute;n en
														dise&ntilde;ar,
														desarrollar y gestionar
														sistemas de
														aseguramiento de la
														calidad con
														&eacute;nfasis en el
														sector
														agroalimentario.&nbsp;
													</li>
													<li aria-level="1">
														<strong>
															Agroindustrial:
														</strong>{' '}
														Dise&ntilde;ar y
														ejecutar programas de
														aplicaci&oacute;n del
														control biol&oacute;gico
														para el control de
														pat&oacute;genos que
														afectan la agricultura
														contribuyendo
														decisivamente en el
														manejo integrado de
														plagas, mejoramiento de
														cultivos y otros
														productos del agro para
														su exportaci&oacute;n en
														el marco del Tratado de
														Libre Comercio.
													</li>
													<li aria-level="1">
														<strong>
															Miner&iacute;a:
														</strong>{' '}
														Dise&ntilde;ar y
														ejecutar programas de
														biorremediaci&oacute;n
														medioambiental mediante
														la transformaci&oacute;n
														de desechos, residuos y
														excedentes
														org&aacute;nicos en
														sustancias inocuas y/o
														&uacute;tiles;
														as&iacute; como ser
														part&iacute;cipe en
														programas de
														educaci&oacute;n
														sanitaria que conduzcan
														al mejoramiento de la
														calidad de vida de las
														comunidades.&nbsp;
													</li>
													<li aria-level="1">
														<strong>
															Ambiental:
														</strong>{' '}
														Realizar controles de
														calidad de los alimentos
														y otros productos de uso
														y consumo humano con
														s&oacute;lidos
														conocimientos
														microbiol&oacute;gicos,
														principios de
														bioseguridad y de
														acuerdo a los
														est&aacute;ndares
														nacionales e
														internacionales que
														garanticen su inocuidad,
														comercializaci&oacute;n
														y su
														conservaci&oacute;n.
														<br />
														&nbsp;Evaluar y
														calificar el estado
														higi&eacute;nico-sanitario
														de recursos naturales
														(aguas, suelos y aire)
														contribuyendo a la
														conservaci&oacute;n de
														los ecosistemas y
														estableciendo medidas de
														prevenci&oacute;n,
														control y
														correcci&oacute;n cuando
														se juzguen estudios de
														impacto ambiental
														necesarios.&nbsp;
													</li>
													<li aria-level="1">
														<strong>Social:</strong>{' '}
														Formar equipos de
														trabajo
														multidisciplinarios para
														mejorar las condiciones
														de vida de la
														poblaci&oacute;n rural y
														urbana (salud, ambiente,
														calidad de alimentos,
														gesti&oacute;n de
														empresa, agroindustria).
													</li>
												</ul>
											</div>
										</div>
									</div>
									{width < 768 && (
										<>
											<Contact />
											<InformacionAcademica />
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
	);
};

export default index;
