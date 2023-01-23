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

const mencionEvaluacionYManejoDeRecursosPesqueros = () => {
	const { width, height } = useWindowSize();
	const [docentes, setDocentes] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await getDocenteByIdInformacionAcademicaApi(
				'maestria_en_ecosistemas_y_recursos_acuaticos'
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
			<Layout title="Maestría en Ecosistemas y Recursos Acuáticos con mención en Evaluación y Manejo de Recursos Pesqueros">
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
											Maestría en Ecosistemas y Recursos
											Acuáticos con mención en Evaluación
											y Manejo de Recursos Pesqueros
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
										Maestría en Ecosistemas y Recursos
										Acuáticos con mención en Evaluación y
										Manejo de Recursos Pesqueros
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
							src="/assets/img/posgrado/maestria ecosistemas/banner-maestria-ecosistemas-recursos-acuaticos-unmsm.png"
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
												href="/assets/archivos/posgrado/planes de estudio/plan-estudio-2020-maestria-ecosistemas-recursos-acuaticos.pdf"
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
													Magíster en Ecosistemas y
													Recursos Acuáticos con
													mención en Evaluación y
													Manejo de Recursos Pesqueros
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
												Este programa académico tiene
												como finalidad formar
												investigadores de alto nivel que
												evalúen y manejen los recursos
												acuáticos de nuestro país, de
												manera sostenible.
											</p>
											<p className="mb-3">
												<strong>Objetivos:</strong>
											</p>
											<p className="mb-4">
												Proponer y ejecutar proyectos de
												investigación científica
												originales aplicados a
												evaluación y manejo de recursos
												acuáticos. Mejorar el nivel
												académico, técnico y científico
												de investigadores para su mejor
												desenvolvimiento
												científico-tecnológico.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del ingresante:
												</strong>
											</p>
											<p className="mb-4">
												Dirigido a profesionales con
												grado de bachiller en Ciencias
												Biológicas o áreas afines,
												otorgados por universidades
												nacionales o extranjeras que
												aseguren una formación acorde a
												los fines del programa. Haber
												aprobado el “Examen de Aptitud
												para Estudios de Posgrado” con
												una antigüedad no mayor de dos
												años calendario. También tener
												conocimiento de conceptos
												básicos y actuales de Zoología,
												Hidrobiología, Ecología, Física,
												Química y analizar información
												científica en idiomas distintos
												al castellano. Por último, debe
												proponer trabajos de
												investigación en temas
												relacionados a los ecosistemas
												acuáticos y responder de manera
												proactiva ante situaciones
												complejas.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del egresado:
												</strong>
											</p>
											<p className="mb-4">
												El graduado desarrollará una
												investigación orientada a la
												evaluación y manejo de recursos
												acuáticos. Dirigirá actividades
												de investigación científica
												sobre evaluación y manejo de los
												recursos acuáticos con enfoque
												ecosistémico, interactuando
												eficientemente en estudios
												multidisciplinarios e
												interdisciplinarios. Generará
												conocimiento a través de
												publicaciones científicas y/o
												herramientas de gestión.
											</p>
											<p className="mb-3">
												<strong>
													¿Por qué estudiar con
													nosotros?
												</strong>
											</p>
											<p className="mb-4">
												En el Perú se realizan numerosas
												actividades vinculadas a sus
												ecosistemas acuáticos y a sus
												recursos acuáticos vivos, por
												ello este programa especializado
												en Evaluación de Manejo de
												Recursos Pesqueros aborda temas
												transversales asociados a la
												evaluación, manejo,
												aprovechamiento de recursos
												marinos vivos, marinos y
												continentales; además incide en
												el estudio y conservación de
												ecosistemas acuáticos y su
												biodiversidad en las diferentes
												regiones del país. La malla
												curricular del programa responde
												eficientemente a las necesidades
												sociales que requieren atención
												sobre temas cruciales a nivel
												nacional.
											</p>
											<p>
												<strong>Campo Laboral:</strong>
											</p>
											<ul className="pl-3">
												<li aria-level="1">
													Entidades Nacionales y
													Privadas Acuícolas.
												</li>
												<li aria-level="1">
													Institutos Nacionales de
													Investigación Científica
													(IMARPE, INGEMMET, IIAP).
												</li>
												<li aria-level="1">
													Entidades Nacionales de
													Producción, Administración y
													Control (PRODUCE, MINAM,
													ITP, OEFA, SENACE, SANIPES,
													SERNANP).
												</li>
												<li aria-level="1">
													Entidades Privadas como ONG
													de investigación.
												</li>
												<li aria-level="1">
													Entidades Nacionales
													Municipales (Oficinas de
													Control y Administración
													Ambiental).
												</li>
												<li aria-level="1">
													Universidades Nacionales y
													Privadas (Docencia e
													Investigación).
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
												El ingresante a la
												maestr&iacute;a en Ecosistemas y
												Recursos Acu&aacute;ticos:
											</p>
											<p>
												Poseer&aacute; grado
												acad&eacute;mico de bachiller en
												Ciencias Biol&oacute;gicas o
												&aacute;reas afines. otorgados
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
												El egresado de la
												maestr&iacute;a en Ecosistemas y
												Recursos Acu&aacute;ticos,
												estar&aacute; capacitado para
												desarrollar investigaci&oacute;n
												orientada al estudio de los
												ecosistemas marinos y
												continentales, dirigir
												actividades de
												conservaci&oacute;n y manejo de
												los recursos con enfoque
												ecosist&eacute;mico. El graduado
												tendr&aacute; las bases
												te&oacute;ricas y
												pr&aacute;cticas que le permitan
												interactuar eficientemente en
												estudios multi e
												interdisciplinarios. Asimismo,
												podr&aacute; ejercer docencia
												universitaria de calidad
												aplicando metodolog&iacute;as
												pedag&oacute;gicas innovadoras.
											</p>
											<p>
												&Aacute;mbito de
												desempe&ntilde;o y mercado
												laboral.
											</p>
											<ul>
												<li aria-level="1">
													Centros e Institutos de
													investigaci&oacute;n
												</li>
												<li aria-level="1">
													Industria alimentaria
												</li>
												<li aria-level="1">
													Acuicultura, piscicultura y
													pesquer&iacute;a
												</li>
												<li aria-level="1">
													Centros de ense&ntilde;anza
													superior
												</li>
												<li aria-level="1">
													Dise&ntilde;o de proyectos
												</li>
												<li aria-level="1">
													Asesor&iacute;as y
													consultor&iacute;as
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
														programaName="Ecosistemas y recursos acuáticos con mención en Evaluación y Manejo de Recursos Pesqueros"
														vacantesNumber={12}
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

export default mencionEvaluacionYManejoDeRecursosPesqueros;
