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
import PlanDeEstudio from '../../../../components/posgrado/PlanDeEstudio';

const index = () => {
	const { width, height } = useWindowSize();
	const [docentes, setDocentes] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await getDocenteByIdInformacionAcademicaApi(
				'maestria_en_investigacion_en_biodiversidad_y_gestion_de_ecosistemas'
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
			<Layout title="Maestría en Biodiversidad y Gestión de Ecosistemas">
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
											Maestría en Biodiversidad y Gestión
											de Ecosistemas
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
										Maestría en Biodiversidad y Gestión de
										Ecosistemas
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
							src="/assets/img/posgrado/maestria biodiversidad/banner-maestria-biodiversidad-gestion-ecosisemas-unmsm.png"
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
												href="/assets/archivos/posgrado/planes de estudio/plan-estudio-2020-maestria-biodiversidad-gestion-ecosistemas.pdf"
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
													Magister en Biodiversidad y
													Gestión de Ecosistemas
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
												El programa académico tiene como
												finalidad formar recursos
												humanos con la capacidad de
												generar conocimientos acerca de
												los ecosistemas existentes.
												Asimismo, busca promover y
												gestionar la conservación de la
												biodiversidad dentro de los
												enfoques del desarrollo
												sustentable y ecosistémico en
												las distintas regiones del país.
											</p>
											<p className="mb-3">
												<strong>Objetivos:</strong>
											</p>
											<p className="mb-4">
												Formar investigadores altamente
												capacitados para conducir
												actividades sobre biodiversidad
												y gestión de ecosistemas a nivel
												de la planificación y ejecución
												operativa. Además, desarrollar
												estrategias de gestión con
												enfoque sistémico y de
												participación integral.
												Asimismo, incrementar su
												capacidad innovadora y crítica,
												con el desarrollo de estrategias
												de gestión en el enfoque
												ecosistémico y de participación
												integral. Finalmente, producir
												conocimiento a través de
												investigaciones inéditas
												relacionadas a estudios de
												biodiversidad.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del ingresante:
												</strong>
											</p>
											<p className="mb-4">
												Dirigido a profesionales que se
												encuentren en el proceso de
												obtención del grado académico de
												Bachiller en Ciencias
												Biológicas, Ciencias
												Ambientales, Ingeniero Agrónomo,
												Veterinaria o disciplinas
												afines, otorgados por
												universidades nacionales o
												extranjeras, y deseen asegurar
												una formación de posgrado en
												recursos humanos especializado
												en el estudio, gestión y
												conservación de los recursos
												biológicos del país. Con
												conocimiento de conceptos
												básicos y actuales de Biología y
												responder de manera proactiva
												ante situaciones problemas.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del egresado:
												</strong>
											</p>
											<p className="mb-4">
												El graduado aplicará los
												fundamentos biológicos a la
												gestión sostenible de
												ecosistemas terrestres y
												marinos. Gestionará y liderará
												empresas, organizaciones e
												instituciones que desarrollan
												inventarios de la biodiversidad,
												desarrollo de planes
												territoriales, auditoría
												ambiental, diseño y gestión de
												áreas protegidas, entre otros.
												Finalmente, generará
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
												Contamos con una plana docente
												constituida por especialistas
												reconocidos en el estudio de la
												flora y fauna peruana, y
												dictamos en base a principios
												como la interdisciplinariedad,
												que facilita el abarcar el
												conocimiento en forma integral
												para evitar el conocimiento
												aislado, fraccionado o disperso.
											</p>
											<p>
												<strong>Campo Laboral:</strong>
											</p>
											<ul className="pl-3">
												<li aria-level="1">
													Investigador en proyectos
													tecnológicos y científicos
													en los sectores de
													agricultura, ganadería,
													pesquería e industria.
												</li>
												<li aria-level="1">
													Gestión de servicios
													medioambientales.
												</li>
												<li aria-level="1">
													Biocomercio, información,
													documentación y divulgación.
												</li>
												<li aria-level="1">
													Docencia e investigación en
													instituciones de educación
													superior.
												</li>
												<li aria-level="1">
													Asesorías y consultorías.
												</li>
												<li aria-level="1">
													Evaluación y gestión de
													impacto ambiental.
												</li>
												<li aria-level="1">
													Gestión para protección de
													áreas reservadas, turismo.
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
												Maestr&iacute;a en Biodiversidad
												y Gesti&oacute;n de Ecosistemas:
											</p>
											<p>
												- Estar&aacute; en
												posesi&oacute;n del Grado
												Acad&eacute;mico de Bachiller en
												Ciencias Biol&oacute;gicas,
												Ciencias Ambientales, Ingeniero
												Agr&oacute;nomo, Veterinaria o
												disciplinas afines, otorgados
												por universidades nacionales o
												extranjeras que aseguren una
												formaci&oacute;n acorde a los
												fines del programa.
											</p>
											<p>
												<strong>
													PERFIL DEL EGRESADO
												</strong>
											</p>
											<p>
												El egresado de la
												maestr&iacute;a de Biodiversidad
												y gesti&oacute;n de ecosistemas
												estar&aacute; plenamente
												capacitado para trabajar en
												campos diversos como la
												investigaci&oacute;n pura en
												Bot&aacute;nica, en
												Zoolog&iacute;a y en la
												Hidrobiolog&iacute;a,
												adem&aacute;s de numerosos
												campos de ciencia aplicada, como
												planificaci&oacute;n del
												aprovechamiento de recursos
												(pesquer&iacute;as, acuicultura,
												silvicultura, etc.),
												muse&iacute;stica,
												conservaci&oacute;n y
												gesti&oacute;n de especies
												vegetales o animales, plagas
												agr&iacute;colas o forestales,
												entomolog&iacute;a aplicada,
												divulgaci&oacute;n
												cient&iacute;fica, y otros.
											</p>
											<p>
												Adem&aacute;s, estar&aacute; en
												condiciones de:
											</p>
											<ul>
												<li aria-level="1">
													Identificar taxones animales
													y vegetales, conocer los
													fundamentos
													biol&oacute;gicos de la
													taxonom&iacute;a y su
													aplicabilidad a la
													gesti&oacute;n sostenible de
													ecosistemas terrestres y
													marinos, la ciencia
													forestal, la
													arqueolog&iacute;a, etc.
												</li>
												<li aria-level="1">
													Tener las habilidades que
													les permitir&aacute;n
													ejercer sus actividades en
													empresas, organizaciones e
													instituciones que
													desarrollen inventarios de
													la biodiversidad, desarrollo
													de planes territoriales,
													auditor&iacute;a ambiental,
													dise&ntilde;o y
													gesti&oacute;n de
													&aacute;reas protegidas,
													entre otros.
												</li>
												<li aria-level="1">
													Trabajar en numerosos campos
													de ciencia b&aacute;sica y
													aplicada, como
													planificaci&oacute;n del
													aprovechamiento de recursos
													(pesquer&iacute;as,
													acuicultura,
													forester&iacute;a, fauna
													silvestre, silvicultura,
													etc.), muse&iacute;stica,
													conservaci&oacute;n y
													gesti&oacute;n de especies
													vegetales o animales, plagas
													agr&iacute;colas o
													forestales,
													entomolog&iacute;a aplicada,
													divulgaci&oacute;n
													cient&iacute;fica, y otros.
												</li>
												<li aria-level="1">
													Tener la capacidad de
													realizar un an&aacute;lisis
													cr&iacute;tico, evaluaciones
													y s&iacute;ntesis de ideas
													nuevas y complejas.
												</li>
												<li aria-level="1">
													Comprender de manera
													sistem&aacute;tica el campo
													de estudio y el dominio de
													las habilidades y
													m&eacute;todos de
													investigaci&oacute;n
													relacionados con la
													biodiversidad y
													biolog&iacute;a de la
													conservaci&oacute;n.
												</li>
												<li aria-level="1">
													Contribuir a la ciencia a
													trav&eacute;s de una
													investigaci&oacute;n
													original del conocimiento
													que ampl&iacute;e las
													fronteras que se plasme en
													publicaciones
													cient&iacute;ficas.
												</li>
												<li aria-level="1">
													Capacidad de fomentar en
													contextos acad&eacute;micos
													y profesionales, el avance
													tecnol&oacute;gico, social o
													cultural dentro de una
													sociedad basada en el
													conocimiento.
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
														programaName="Biodiversidad y gestión en ecosistemas"
														vacantesNumber={17}
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
