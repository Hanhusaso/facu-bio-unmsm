import React, { useState, useEffect } from 'react';
import Layout from '../../../../components/Layout';

import { Row, Col, Container, Breadcrumb, Tabs, Tab } from 'react-bootstrap';
import Link from 'next/link';
import { getDocenteByIdInformacionAcademicaApi } from '../../../api/formacion-academica';

import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';

import { useWindowSize } from '../../../../utils/useWindowSize';

import * as Icon from '../../../../components/Icons';

import GuiaProcesoAdmisionMaestria from '../../../../components/posgrado/maestria/GuiaProcesoAdmisionMaestria';
import CronogramaMaestria from '../../../../components/posgrado/maestria/CronogramaMaestria';
import CuadroVacantesMaestria from '../../../../components/posgrado/maestria/CuadroVacantesMaestria';
import RequisitosMaestria from '../../../../components/posgrado/maestria/RequisitosMaestria';
import CostosAdmisionMaestria from '../../../../components/posgrado/maestria/CostosAdmisionMaestria';
import ProcesoEvaluacionMaestria from '../../../../components/posgrado/maestria/ProcesoEvaluacionMaestria';
import InversionEconomicaMaestria from '../../../../components/posgrado/maestria/InversionEconomicaMaestria';

const index = () => {
	const { width, height } = useWindowSize();
	const [docentes, setDocentes] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await getDocenteByIdInformacionAcademicaApi(
				'maestria_en_botanica_tropical'
			);
			setDocentes(response);
		})();
	}, []);

	const Contact = () => {
		return (
			<div className="contacto-wrapper mb-3">
				<p className="title-dark mb-2">Contacto:</p>
				<div className="grid-contacto">
					<div>
						{/* <img
							className="icon mr-2"
							src="/assets/img/iconos/telefono.svg"
							alt=""
						/> */}
						<Icon.telefonoIcon className="icon mr-2" />
					</div>
					<div>
						<span>+(51) 619 7000 Anexos 1503, 1510</span>
					</div>
				</div>
				<div className="mb-0 grid-contacto">
					<div>
						{/* <img
							className="icon mr-2"
							src="/assets/img/iconos/correo.svg"
							alt=""
						/> */}
						<Icon.CorreoIcon className="icon mr-2" />
					</div>
					<div>
						<span>upg.biologia@unmsm.edu.pe</span>
					</div>
				</div>
				{/* <p className="font-weight-bold mb-1">Horario de atención:</p>
                <p className="mb-0">8:00 a.m. - 5:00 p.m.</p> */}
			</div>
		);
	};

	return (
		<>
			<Layout title="Maestría en Botánica Tropical">
				<div>
					<div>
						<Container>
							<Row>
								<Col md="1"></Col>
								<Col>
									<Breadcrumb>
										<li className="breadcrumb-item">
											<Link href="/">
												<a role="button">Inicio</a>
											</Link>
										</li>
										<li className="breadcrumb-item">
											<Link href="/formacion-academica/posgrado">
												<a role="button">
													Formación académica:
													Posgrado
												</a>
											</Link>
										</li>
										<Breadcrumb.Item active>
											Maestría en Botánica Tropical
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
										Maestría en Botánica Tropical
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
							src="/assets/img/posgrado/maestria botanica tropical/banner-maestria-botanica-tropical-unmsm.png"
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
													{/* <svg
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
													</svg> */}
													<Icon.presentacionIcon className="mr-3" />
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
													<Icon.perfilIcon className="mr-3" />
												</div>
												<span>
													Perfil del ingresante y
													egresado
												</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-admision-tab"
												data-toggle="pill"
												href="#v-pills-admision"
												role="tab"
												aria-controls="v-pills-admision"
												aria-selected="false">
												<div>
													<Icon.admisionIcon className="mr-3" />
												</div>
												<span>Admisión</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-docente-tab"
												data-toggle="pill"
												href="#v-pills-docente"
												role="tab"
												aria-controls="v-pills-docente"
												aria-selected="false">
												<div>
													{/* <svg
														width="24"
														height="20"
														viewBox="0 0 24 20"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg">
														<path d="M7.86372 13.4365C7.77548 13.4365 7.68723 13.4494 7.60304 13.4767C7.12452 13.6322 6.62125 13.7319 6.0914 13.7319C5.56155 13.7319 5.05828 13.6322 4.57939 13.4767C4.4952 13.4494 4.40732 13.4365 4.31908 13.4365C2.02761 13.4365 0.171469 15.3004 0.183653 17.5948C0.188823 18.5644 0.985999 19.3442 1.95598 19.3442H10.2268C11.1968 19.3442 11.994 18.5644 11.9991 17.5948C12.0113 15.3004 10.1552 13.4365 7.86372 13.4365ZM6.0914 12.2549C8.04908 12.2549 9.63605 10.668 9.63605 8.7103C9.63605 6.75262 8.04908 5.16565 6.0914 5.16565C4.13372 5.16565 2.54675 6.75262 2.54675 8.7103C2.54675 10.668 4.13372 12.2549 6.0914 12.2549ZM22.0423 0.439453H7.86372C6.88636 0.439453 6.0914 1.261 6.0914 2.27049V3.9841C6.95615 3.9841 7.75665 4.23444 8.4545 4.64134V2.80255H21.4515V13.4365H19.0884V11.0734H14.3622V13.4365H11.5472C12.2524 14.0527 12.7701 14.8665 13.0127 15.7996H22.0423C23.0197 15.7996 23.8146 14.978 23.8146 13.9686V2.27049C23.8146 1.261 23.0197 0.439453 22.0423 0.439453Z" />
													</svg> */}
													<Icon.planaDocenteIcon className="mr-3" />
												</div>
												<span>Plana docente</span>
											</a>
											<a
												href="/assets/archivos/posgrado/planes de estudio/plan-estudio-2020-maestria-botanica-tropical.pdf"
												target="_blank"
												className="tab d-flex">
												<div>
													{/* <svg
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
													</svg> */}
													<Icon.mallaCurricularIcon className="mr-3" />
												</div>
												<span>Malla curricular</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-inversion-tab"
												data-toggle="pill"
												href="#v-pills-inversion"
												role="tab"
												aria-controls="v-pills-inversion"
												aria-selected="false">
												<div>
													<Icon.inversionEconomicaIcon className="mr-3" />
												</div>
												<span>Inversión económica</span>
											</a>
										</div>
									</div>
									{width >= 768 && (
										<>
											<Contact />
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
											<p>
												La Maestr&iacute;a en
												Bot&aacute;nica Tropical cuenta
												con tres importantes menciones:
												Taxonom&iacute;a y
												Sistem&aacute;tica Evolutiva,
												Bot&aacute;nica Econ&oacute;mica
												y Etnobot&aacute;nica.
											</p>
											<p>
												La menci&oacute;n en
												Taxonom&iacute;a y
												Sistem&aacute;tica Evolutiva,
												busca formar personas capaces de
												contribuir al conocimiento de la
												flora sentando las bases para su
												determinaci&oacute;n y
												verificaci&oacute;n
												bot&aacute;nica,
												distribuci&oacute;n y
												conservaci&oacute;n. Completar y
												consolidar su formaci&oacute;n
												para que se constituyan en
												investigadores de alto nivel,
												capaces de elaborar y ejecutar
												proyectos donde se realicen
												inventarios, cat&aacute;logos,
												conocimiento de la
												vegetaci&oacute;n y flora como
												especie y su distribuci&oacute;n
												ecol&oacute;gica, bases para la
												toma de decisiones de
												conservaci&oacute;n y manejo.
											</p>
											<p>
												Por otro lado, la menci&oacute;n
												en Bot&aacute;nica
												Econ&oacute;mica, pretende
												formar personas capaces de
												contribuir al conocimiento de la
												flora remarcando las especies
												&uacute;tiles al ser humano,
												sentando las bases para su
												determinaci&oacute;n
												bot&aacute;nica, establecer su
												origen, domesticaci&oacute;n y
												mejoramiento, establecimiento de
												variedades, cultivos,
												conservaci&oacute;n y manejo
												sostenible de los mismos.
												Completar y consolidar su
												formaci&oacute;n para que se
												constituyan en investigadores de
												alto nivel, capaces de elaborar
												y ejecutar proyectos,
												ampliaci&oacute;n del
												conocimiento de las plantas
												&uacute;tiles, mejoramiento de
												cultivos, variedades,
												rendimiento, fomentar el
												conocimiento de la
												vegetaci&oacute;n y flora de
												importancia econ&oacute;mica en
												aspectos de alimentaci&oacute;n,
												colorantes, perfumer&iacute;a,
												medicinas, textiler&iacute;a,
												vivienda etc., y establecer
												bases para la toma de decisiones
												de conservaci&oacute;n, manejo y
												desarrollo sostenible.
											</p>
											<p>
												Finalmente es objetivo de la
												menci&oacute;n en
												Etnobot&aacute;nica, formar
												personas capaces de contribuir
												al conocimiento de la flora
												utilizada por las antiguas
												culturas y las presentes,
												sentando las bases para su
												conocimiento,
												conservaci&oacute;n y
												protecci&oacute;n de las mismas.
												Completar y consolidar su
												formaci&oacute;n para que se
												constituyan en investigadores de
												alto nivel, capaces de elaborar
												y ejecutar proyectos donde se
												revalore el conocimiento de las
												plantas utilizadas por las
												civilizaciones y culturas
												diversas con &eacute;nfasis en
												la flora americana y peruana,
												sentando las bases para toma de
												decisiones de
												conservaci&oacute;n del
												conocimiento ancestral de usos y
												clasificaci&oacute;n, as&iacute;
												como el manejo adecuado para su
												protecci&oacute;n.
											</p>
											<p>
												<strong>DURACI&Oacute;N</strong>
											</p>
											<p>
												2 a&ntilde;os, divididos en 4
												semestres&nbsp;
											</p>
											<p>
												<strong>GRADO</strong>
											</p>
											<p>
												Magister en Bot&aacute;nica
												Tropical con menci&oacute;n en
												Taxonom&iacute;a y
												Sistem&aacute;tica Evolutiva,
												Bot&aacute;nica Econ&oacute;mica
												y Etnobot&aacute;nica.
											</p>
											<p>
												<strong>
													L&Iacute;NEAS DE
													INVESTIGACI&Oacute;N
												</strong>
											</p>
											<ul>
												<li aria-level="1">
													Taxonom&iacute;a y
													sistem&aacute;tica vegetal
												</li>
												<li aria-level="1">
													Sistem&aacute;tica molecular
													y evolutiva
												</li>
												<li aria-level="1">
													Jardines bot&aacute;nicos y
													conservaci&oacute;n de la
													diversidad vegetal
												</li>
												<li aria-level="1">
													Valor econ&oacute;mico de
													las especies y
													fijaci&oacute;n de N2 por
													leguminosas
												</li>
												<li aria-level="1">
													Plantas medicinales
												</li>
												<li aria-level="1">
													Rescate y
													revalorizaci&oacute;n del
													conocimiento de las especies
													vegetales de las etnias
												</li>
												<li aria-level="1">
													Bioprospecci&oacute;n
												</li>
												<li aria-level="1">
													Flor&iacute;stica
												</li>
												<li aria-level="1">
													Ecolog&iacute;a vegetal
												</li>
												<li aria-level="1">
													Comunidades vegetales
												</li>
												<li aria-level="1">
													Fitorremediaci&oacute;n
												</li>
											</ul>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-perfil"
											role="tabpanel"
											aria-labelledby="v-pills-perfil-tab">
											<p>
												<strong>
													PERFIL DEL INGRESANTE
												</strong>
											</p>
											<p>
												El ingresante a la
												Maestr&iacute;a en
												Bot&aacute;nica Tropical:
											</p>
											<ul>
												<li aria-level="1">
													Poseer&aacute; el grado
													acad&eacute;mico de
													bachiller en Ciencias
													biol&oacute;gicas o
													disciplinas afines,
													otorgados por universidades
													nacionales o extranjeras que
													aseguren una
													formaci&oacute;n acorde a
													los fines del Programa.
												</li>
												<li aria-level="1">
													Haber aprobado durante sus
													estudios de pregrado los
													siguientes cursos
													b&aacute;sicos o sus
													equivalentes:
													Bot&aacute;nica,
													Gen&eacute;tica,
													Citolog&iacute;a,
													Fisiolog&iacute;a,
													Bioqu&iacute;mica,
													Ecolog&iacute;a,
													F&iacute;sica,
													Qu&iacute;mica y
													Estad&iacute;stica.
												</li>
											</ul>
											<p>
												<strong>
													PERFIL DEL EGRESADO
												</strong>
											</p>
											<p>
												El mag&iacute;ster en cualquiera
												de las tres menciones que opte
												por el tema de su tesis,
												ejercer&aacute;
												investigaci&oacute;n y docencia
												universitaria de calidad
												aplicando metodolog&iacute;as
												pedag&oacute;gicas innovadoras y
												acordes con el avance de la
												ciencia. Liderar&aacute; y
												desarrollar&aacute;
												investigaciones b&aacute;sicas y
												/o aplicadas en los campos
												diversos de la bot&aacute;nica y
												ciencias afines, pudiendo
												trabajar por su
												capacitaci&oacute;n en muchos
												campos donde la disciplina se
												requiera; cumpliendo con valores
												&eacute;ticos profesionales,
												entre sus funciones y/o
												actividades podemos
												se&ntilde;alar:
											</p>
											<ul>
												<li aria-level="1">
													Realizar la
													determinaci&oacute;n de las
													especies de los diversos
													grupos de la flora peruana.
												</li>
												<li aria-level="1">
													Solucionar los problemas de
													inventarios y
													evaluaci&oacute;n de los
													ecosistemas con criterio de
													conservaci&oacute;n de la
													diversidad
													flor&iacute;stica.
												</li>
												<li aria-level="1">
													Tener conocimientos de las
													especies vegetales de valor
													econ&oacute;mico en las
													diversas regiones
													geogr&aacute;ficas: de valor
													alimenticio, forrajera, de
													uso industrial, medicinal,
													ornamental y considerar sus
													cualidades, cantidades y
													factibilidad de uso para
													contribuir a mejorar el
													nivel de vida del ser
													humano.
												</li>
												<li aria-level="1">
													Realizar investigaciones
													sobre biotecnolog&iacute;a
													de especies vegetales.
												</li>
												<li aria-level="1">
													Ser capaz de realizar la
													revalorizaci&oacute;n y
													rescate de la riqueza del
													conocimiento de la flora
													silvestre y cultivada,
													propio de las diversas
													etnias de nuestro vasto
													territorio.
												</li>
												<li aria-level="1">
													Formular estrategias de
													protecci&oacute;n a la
													cultura bot&aacute;nica
													tradicional y su uso
													sostenible.
												</li>
												<li aria-level="1">
													Asesorar trabajos de
													investigaci&oacute;n de
													estudiantes de pre y
													posgrado.
												</li>
											</ul>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-admision"
											role="tabpanel"
											aria-labelledby="v-pills-admision-tab">
											<Tabs
												defaultActiveKey="guia"
												id="admision-tab">
												<Tab
													className="pt-3"
													eventKey="guia"
													title="Guía de proceso de Admisión">
													<GuiaProcesoAdmisionMaestria />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="cronograma"
													title="Cronograma">
													<CronogramaMaestria />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="cuadro"
													title="Cuadro de Vacantes">
													<CuadroVacantesMaestria />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="requisitos"
													title="Requisitos">
													<RequisitosMaestria />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="costos"
													title="Costos de Admisión">
													<CostosAdmisionMaestria />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="proceso"
													title="Proceso de evaluación">
													<ProcesoEvaluacionMaestria />
												</Tab>
											</Tabs>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-docente"
											role="tabpanel"
											aria-labelledby="v-pills-docente-tab">
											<div className="divisor mt-0"></div>
											{docentes.map((docente, index) => (
												<div
													key={index}
													className="block-divider mb-3 pb-2 position-relative">
													<h3 className="title">
														{docente.nombre}
													</h3>
													<p className="mb-2">
														<span className="mr-2">
															Documentación:
														</span>
														{/* <a
															href={docente.link_resolucion_rectoral}
															target="_blank"
															className="d-inline-block color-inherit mr-3"
														>
															<img className="mr-2" src="/assets/img/iconos/pdf.svg" alt="" />
															<span className="">Resolución rectoral</span>
														</a> */}
														<a
															href={
																docente.link_hoja_vida
															}
															target="_blank"
															className="d-inline-block color-inherit mr-3">
															<img
																className="mr-2"
																src="/assets/img/iconos/pdf.svg"
																alt=""
															/>
															<span className="">
																Hoja de vida
															</span>
														</a>
													</p>
													{/* <p className="mb-2">
														<span className="mr-2">Investigación:</span>
														<a
															href={docente.link_rais}
															target="_blank"
															className="d-inline-block color-inherit mr-2"
														>
															<span className="mr-1">RAIS</span>
															<HiIcons.HiExternalLink className="mb-1 icon" />
														</a>
														<a
															href={docente.link_siis}
															target="_blank"
															className="d-inline-block color-inherit mr-2"
														>
															<span className="mr-1">SIIS</span>
															<HiIcons.HiExternalLink className="mb-1 icon" />
														</a>
													</p> */}
													<p className="mb-2">
														<span className="mr-2">
															Contacto:
														</span>
														<img
															className="icon mr-2"
															src="/assets/img/iconos/correo.svg"
															alt=""
														/>
														<span className="text-break">
															{docente.contacto}
														</span>
													</p>
												</div>
											))}
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-inversion"
											role="tabpanel"
											aria-labelledby="v-pills-inversion-tab">
											<InversionEconomicaMaestria />
										</div>
									</div>
									{width < 768 && (
										<>
											<Contact />
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
