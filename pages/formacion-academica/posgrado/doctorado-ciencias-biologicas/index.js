import React, { useState, useEffect } from 'react';
import Layout from '../../../../components/Layout';

import { Row, Col, Container, Breadcrumb, Tabs, Tab } from 'react-bootstrap';
import Link from 'next/link';
import { getDocenteByIdInformacionAcademicaApi } from '../../../api/formacion-academica';

import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';

import { useWindowSize } from '../../../../utils/useWindowSize';

import * as Icon from '../../../../components/Icons';

import GuiaProcesoAdmisionDoctorado from '../../../../components/posgrado/doctorado/GuiaProcesoAdmisionDoctorado';
import CronogramaDoctorado from '../../../../components/posgrado/doctorado/CronogramaDoctorado';
import CuadroVacantesDoctorado from '../../../../components/posgrado/doctorado/CuadroVacantesDoctorado';
import RequisitosDoctorado from '../../../../components/posgrado/doctorado/RequisitosDoctorado';
import CostosAdmisionDoctorado from '../../../../components/posgrado/doctorado/CostosAdmisionDoctorado';
import ProcesoEvaluacionDoctorado from '../../../../components/posgrado/doctorado/ProcesoEvaluacionDoctorado';
import InversionEconomicaDoctorado from '../../../../components/posgrado/doctorado/InversionEconomicaDoctorado';
import PlanDeEstudio from '../../../../components/posgrado/PlanDeEstudio';

const index = () => {
	const { width, height } = useWindowSize();
	const [docentes, setDocentes] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await getDocenteByIdInformacionAcademicaApi(
				'doctorado_en_ciencias_biologicas'
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
			</div>
		);
	};

	return (
		<>
			<Layout title="Doctorado en Ciencias Biológicas">
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
											Doctorado en Ciencias Biológicas
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
										Doctorado en Ciencias Biológicas
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
							src="/assets/img/posgrado/doctorado ciencias biologicas/banner-doctorado-ciencias-biologicas-unmsm.png"
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
												href="/assets/archivos/posgrado/planes de estudio/plan-estudio-2020-doctorado-ciencias-biologicas.pdf"
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
											<a
												className="tab d-flex"
												id="v-pills-plan-tab"
												data-toggle="pill"
												href="#v-pills-plan"
												role="tab"
												aria-controls="v-pills-plan"
												aria-selected="false"
											>
												<div>
													<Icon.PlanEstudioIcon className="mr-3" />
												</div>
												<span>Plan de estudio</span>
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
														<Icon.GradoTituloIcon className="mr-2 position-relative bot-2px" />
													</span>
													<strong>Título:</strong>{' '}
													Doctor/a en Ciencias
													Biológicas
												</p>
												<p className="mb-0">
													<span>
														<Icon.DuracionIcon className="mr-08rem position-relative bot-2px left-3px" />
													</span>
													<strong>Duración:</strong>{' '}
													Tres años (dos semestres por
													año)
												</p>
											</div>
											<p className="mb-4">
												Este programa académico forma
												especialistas capaces de evaluar
												e investigar la problemática
												nacional en las diversas áreas
												del conocimiento biológico, con
												especial énfasis en los campos
												de la biodiversidad y biología
												molecular. Además, tendrá un
												amplio dominio en las
												actividades profesionales
												relacionadas con el campo
												biológico.
											</p>
											<p className="mb-3">
												<strong>Objetivos:</strong>
											</p>
											<p className="mb-4">
												Formar investigadores para el
												estudio de la diversidad
												biológica y su uso sostenible en
												sus diferentes niveles.
												Contribuir con el conocimiento
												tanto en el área básica como
												aplicada de la biología
												molecular a fin de lograr el
												aprovechamiento racional de
												nuestra megabiodiversidad.
												Además, capacitar y/o
												perfeccionar investigadores para
												su futura incorporación en
												universidades, instituciones de
												investigación y centros de
												gestión tanto privados como de
												la administración pública.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del ingresante:
												</strong>
											</p>
											<p className="mb-4">
												Dirigido a profesionales con
												grado de magíster en áreas de
												las Ciencias Biológicas o en
												disciplinas afines y proviene de
												universidades nacionales,
												privadas o extranjeras.
												Asimismo, aprobar el “Examen de
												Aptitud para Estudios de
												Posgrado” con una antigüedad no
												mayor de dos años calendario y
												comprender con facilidad la
												información científica en
												idiomas distintos al castellano.
												Proponer investigaciones
												científicas en el área de
												Ciencias Biológicas, y demostrar
												una actitud proactiva ante la
												resolución de un problema.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del egresado:
												</strong>
											</p>
											<p className="mb-4">
												El graduado generará nuevos
												conocimientos científicos y
												técnicos en Ciencias Biológicas
												a través de la realización de
												trabajos originales. Aplicará
												metodologías que le permitan
												resolver problemas de
												investigación en las diversas
												áreas del conocimiento
												biológico, con especial énfasis
												en los campos de la
												biodiversidad y biología
												molecular. Propondrá nuevas
												tecnologías de información y
												comunicaciones para la difusión
												eficiente de sus investigaciones
												y resultados en revistas de la
												especialidad y divulgación
												científica, círculos
												especializados y su entorno
												social.
											</p>
											<p className="mb-3">
												<strong>
													¿Por qué estudiar con
													nosotros?
												</strong>
											</p>
											<p className="mb-4">
												Contamos con una notable plana
												docente y completo plan
												curricular que incorpora un
												conjunto de aprendizajes, además
												de conocimientos, habilidades y
												actitudes que le permitan a
												nuestro futuros doctores en
												Ciencias Biológica expresar sus
												capacidades y competencias para
												desenvolverse en su entorno
												social y productivo,
												competitivo, enfrentar nuevos
												desafíos, atender acciones
												emergentes y buscar nuevas
												fórmulas de organización y
												operación, enfocado en el área
												de Biodiversidad y Ecología,
												Biotecnología, Salud y Sanidad y
												Producción y Manejo de Recursos
												Biológicos. Al mismo tiempo esta
												formación les permite integrarse
												en equipos de investigación
												dedicados a generar
												conocimientos de alto nivel, en
												las áreas mencionadas
												anteriormente.
											</p>
											<p>
												<strong>Campo Laboral:</strong>
											</p>
											<ul className="pl-3">
												<li aria-level="1">
													Centros de investigación (en
													equipos multi, trans e
													interdisciplinarios
													nacionales y /o
													extranjeros).
												</li>
												<li aria-level="1">
													Industria farmacéutica y
													alimentaria.
												</li>
												<li aria-level="1">
													Áreas naturales protegidas.
												</li>
												<li aria-level="1">
													Agricultura, ganadería y
													pesquería.
												</li>
												<li aria-level="1">
													Medicina: diagnóstico
													molecular de enfermedades y
													agentes patógenos, vacunas
													recombinantes y medicina
													forense.
												</li>
												<li aria-level="1">
													Centros de enseñanza
													superior (pregrado,
													posgrados) contribuyendo con
													los requerimientos
													profesionales que enmarca la
													SUNEDU.
												</li>
												<li aria-level="1">
													Diseño y gestión de
													proyectos de investigación.
												</li>
												<li aria-level="1">
													Asesorías o consultorías de
													alto nivel académico.
												</li>
											</ul>
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
												El ingresante al programa de
												Doctorado en Ciencias
												Biol&oacute;gicas es:
											</p>
											<p>
												Graduado que haya concluido los
												estudios de Maestr&iacute;a o
												est&eacute; en posesi&oacute;n
												del Grado de Mag&iacute;ster en
												&aacute;reas de las Ciencias
												Biol&oacute;gicas o en
												disciplinas afines, otorgados
												por universidades nacionales o
												extranjeras que aseguren una
												formaci&oacute;n acorde a los
												fines del Programa.
											</p>
											<p>
												<strong>
													PERFIL DEL EGRESADO
												</strong>
											</p>
											<p>
												El egresado del Programa de
												Doctorado en Ciencias
												Biol&oacute;gicas de la Facultad
												de Ciencias
											</p>
											<p>
												Biol&oacute;gicas ser&aacute;
												capaz de:
											</p>
											<ul>
												<li aria-level="1">
													Generar nuevos conocimientos
													cient&iacute;ficos y
													t&eacute;cnicos en las
													Ciencias Biol&oacute;gicas a
													trav&eacute;s de la
													realizaci&oacute;n de
													trabajos originales.
												</li>
												<li aria-level="1">
													Estar&aacute; capacitado
													para manejar y aplicar las
													metodolog&iacute;as que
													permitan resolver problemas
													de investigaci&oacute;n en
													las diversas &aacute;reas
													del conocimiento
													biol&oacute;gico con
													especial &eacute;nfasis en
													los campos de la
													biodiversidad y
													biolog&iacute;a molecular.
												</li>
												<li aria-level="1">
													Desarrollar nuevas
													tecnolog&iacute;as para
													resolver problemas, detectar
													necesidades y oportunidades
													inherentes a su &aacute;rea
													de investigaci&oacute;n.
												</li>
												<li aria-level="1">
													En particular, conocer y
													utilizar aproximaciones
													estad&iacute;sticas
													contempor&aacute;neas.
												</li>
												<li aria-level="1">
													Formular, gestionar y
													liderar proyectos de
													investigaci&oacute;n,
													trabajando en equipo y en
													redes interdisciplinarias.
													Como consecuencia,
													ser&aacute; capaz de
													plantear y ejecutar
													hip&oacute;tesis de trabajo,
													describir e interpretar
													resultados experimentales y
													analizar de forma
													cr&iacute;tica los
													descubrimientos presentados
													en las publicaciones
													cient&iacute;ficas.
												</li>
												<li aria-level="1">
													Manejar nuevas
													tecnolog&iacute;as de
													informaci&oacute;n y
													comunicaciones que le
													permitan difundir en forma
													eficiente sus
													investigaciones y resultados
													en revistas de la
													especialidad,
													c&iacute;rculos
													especializados y la
													comunidad social con el fin
													de participar
													satisfactoriamente en la
													educaci&oacute;n superior y
													de Posgrado a trav&eacute;s
													de la experiencia adquirida
													en las actividades
													acad&eacute;micas del
													doctorado.
												</li>
												<li aria-level="1">
													Asesorar los trabajos de
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
													<GuiaProcesoAdmisionDoctorado />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="cronograma"
													title="Cronograma"
												>
													<CronogramaDoctorado />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="cuadro"
													title="Cuadro de Vacantes"
												>
													<CuadroVacantesDoctorado />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="requisitos"
													title="Requisitos"
												>
													<RequisitosDoctorado />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="costos"
													title="Costos de Admisión"
												>
													<CostosAdmisionDoctorado />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="proceso"
													title="Proceso de evaluación"
												>
													<ProcesoEvaluacionDoctorado />
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
											<InversionEconomicaDoctorado />
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-plan"
											role="tabpanel"
											aria-labelledby="v-pills-plan-tab"
										>
											<PlanDeEstudio />
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
