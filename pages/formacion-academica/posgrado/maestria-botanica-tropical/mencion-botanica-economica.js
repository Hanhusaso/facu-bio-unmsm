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

const mencionBotanicaEconomica = () => {
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
						<Icon.telefonoIcon className="icon mr-2" />
					</div>
					<div>
						<span>+(51) 619 7000 Anexos 1503, 1510</span>
					</div>
				</div>
				<div className="mb-0 grid-contacto">
					<div>
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
			<Layout title="Maestría en Botánica Tropical con mención en Botánica económica">
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
											Maestría en Botánica Tropical con
											mención en Botánica económica
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
										Maestría en Botánica Tropical con
										mención en Botánica económica
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
													<Icon.presentacionIcon className="mr-3" />
												</div>
												<span>Presentación</span>
											</a>
											{/* <a
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
											</a> */}
											<a
												className="tab d-flex"
												id="v-pills-admision-tab"
												data-toggle="pill"
												href="#v-pills-admision"
												role="tab"
												aria-controls="v-pills-admision"
												aria-selected="false"
											>
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
												aria-selected="false"
											>
												<div>
													<Icon.planaDocenteIcon className="mr-3" />
												</div>
												<span>Plana docente</span>
											</a>
											{/* <a
												href="/assets/archivos/posgrado/planes de estudio/plan-estudio-2020-maestria-botanica-tropical.pdf"
												target="_blank"
												className="tab d-flex">
												<div>
													<Icon.mallaCurricularIcon className="mr-3" />
												</div>
												<span>Malla curricular</span>
											</a> */}
											<a
												className="tab d-flex"
												id="v-pills-inversion-tab"
												data-toggle="pill"
												href="#v-pills-inversion"
												role="tab"
												aria-controls="v-pills-inversion"
												aria-selected="false"
											>
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
										id="v-pills-tabContent"
									>
										<div
											className="mb-3 tab-pane fade show active"
											id="v-pills-presentacion"
											role="tabpanel"
											aria-labelledby="v-pills-presentacion-tab"
										>
											<div className="info-box mb-4">
												<p className="mb-3">
													<span>
														<Icon.TipoMaestriaIcon className="mr-2 position-relative bot-2px" />
													</span>
													<strong>Tipo:</strong>{' '}
													Investigación
												</p>
												<p className="mb-3">
													<span>
														<Icon.GradoTituloIcon className="mr-2 position-relative bot-2px" />
													</span>
													<strong>Título:</strong>{' '}
													Magíster en Botánica
													Tropical con mención en
													Botánica económica
												</p>
												<p className="mb-0">
													<span>
														<Icon.DuracionIcon className="mr-08rem position-relative bot-2px left-3px" />
													</span>
													<strong>Duración:</strong>{' '}
													Dos años (dos semestres por
													año)
												</p>
											</div>
											<p className="mb-4">
												Este programa académico busca
												consolidar la formación de
												profesionales e investigadores
												de alto nivel, con capacidad de
												buscar la ampliación del
												conocimiento de las plantas
												útiles y el mejoramiento de
												cultivos de importancia
												económica en aspectos de
												alimentación, colorantes,
												perfumes, medicinas, textiles.
											</p>
											<p className="mb-3">
												<strong>Objetivos:</strong>
											</p>
											<p className="mb-4">
												Formar personas capaces de
												contribuir al conocimiento de la
												flora, con el fin de resaltar
												las especies útiles al ser
												humano, para sentar las bases de
												su determinación botánica:
												establecer su origen,
												domesticación y mejoramiento;
												así como, el establecimiento de
												variedades, cultivos,
												conservación y manejo sostenible
												de los mismos.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del ingresante:
												</strong>
											</p>
											<p className="mb-4">
												Dirigido a profesionales con
												grado de bachiller en ciencias
												biológicas o disciplinas afines,
												otorgado por universidades
												nacionales o extranjeras que
												aseguren una formación acorde al
												perfil del programa. Haber
												aprobado, durante sus estudios
												de pregrado, los siguientes
												cursos básicos o sus
												equivalentes: Botánica,
												Genética, Citología, Fisiología,
												Bioquímica, Ecología, Física,
												Química y Estadística.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del egresado:
												</strong>
											</p>
											<p className="mb-4">
												El graduado realizará
												investigación y docencia
												universitaria de calidad
												aplicando metodologías
												pedagógicas innovadoras, acordes
												con el avance de la ciencia.
												Liderará investigaciones básicas
												o aplicadas en los campos
												diversos de la botánica y
												ciencias afines, con la
												posibilidad de trabajar, por su
												capacitación, en muchos campos
												donde la disciplina se requiera,
												con valores éticos profesionales
												destacables.
											</p>
											{/* <p className="mb-3">
												<strong>
													¿Por qué estudiar con
													nosotros?
												</strong>
											</p>
											<p className="mb-4"></p>
											<p>
												<strong>Campo Laboral:</strong>
											</p>
											<ul className="pl-3">
												<li aria-level="1"></li>
											</ul> */}
										</div>
										{/* <div
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
										</div> */}
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-admision"
											role="tabpanel"
											aria-labelledby="v-pills-admision-tab"
										>
											<Tabs
												defaultActiveKey="guia"
												id="admision-tab"
											>
												<Tab
													className="pt-3"
													eventKey="guia"
													title="Guía de proceso de Admisión"
												>
													<GuiaProcesoAdmisionMaestria />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="cronograma"
													title="Cronograma"
												>
													<CronogramaMaestria />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="cuadro"
													title="Cuadro de Vacantes"
												>
													<CuadroVacantesMaestria
														vacantesNumber={14}
														programaName="Maestría en Botánica Tropical con mención en Botánica económica"
													/>
												</Tab>
												<Tab
													className="pt-3"
													eventKey="requisitos"
													title="Requisitos"
												>
													<RequisitosMaestria />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="costos"
													title="Costos de Admisión"
												>
													<CostosAdmisionMaestria />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="proceso"
													title="Proceso de evaluación"
												>
													<ProcesoEvaluacionMaestria />
												</Tab>
											</Tabs>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-docente"
											role="tabpanel"
											aria-labelledby="v-pills-docente-tab"
										>
											<div className="divisor mt-0"></div>
											{docentes.map((docente, index) => (
												<div
													key={index}
													className="block-divider mb-3 pb-2 position-relative"
												>
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
															className="d-inline-block color-inherit mr-3"
														>
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
											aria-labelledby="v-pills-inversion-tab"
										>
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

export default mencionBotanicaEconomica;
