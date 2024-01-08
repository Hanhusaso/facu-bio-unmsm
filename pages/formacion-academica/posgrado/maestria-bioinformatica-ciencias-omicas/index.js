import React, { useState, useEffect } from 'react';
import Layout from '../../../../components/Layout';

import { Row, Col, Container, Breadcrumb, Tabs, Tab } from 'react-bootstrap';
import Link from 'next/link';
import { getDocenteByIdInformacionAcademicaApi } from '../../../api/formacion-academica';

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
	const { width } = useWindowSize();
	const [docentes, setDocentes] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await getDocenteByIdInformacionAcademicaApi(
				'maestria_bioinformatica_ciencias_omicas'
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
			<Layout title="Maestría en Bioinformática y Ciencias Ómicas">
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
											Maestría en Bioinformática y
											Ciencias Ómicas
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
										Maestría en Bioinformática y Ciencias
										Ómicas
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
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/maestria_bioinformatica_ciencias_omicas_2_70dbe431da.jpg"
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
													Magíster en Bioinformática y
													Ciencias Ómicas
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
											<p className="mb-3">
												<strong>
													Objetivos de la maestría
												</strong>
											</p>
											<p className="mb-4">
												Este programa busca formar
												investigadores de alto nivel con
												capacidades para realizar
												estudios de avanzada en ciencias
												ómicas y computacionales. Los
												graduados tendrán las
												habilidades y conocimientos que
												les permitan generar nuevos
												conocimientos o procesos
												tecnológicos aplicados a la
												resolución de problemas con
												datos a gran escala.
											</p>
											<p className="mb-2">
												<strong>
													Objetivos específicos
												</strong>
											</p>
											<ul className="mb-4 mt-2 pl-4">
												<li className="mb-1">
													Aplicar herramientas
													bioinformáticas para
													solucionar problemas
													referentes al análisis de
													datos ómicos a larga escala.
												</li>
												<li className="mb-1">
													Formar investigadores de
													alto nivel científico que
													propongan soluciones basadas
													en conocimiento, a preguntas
													de investigación que
													requieran de un lenguaje
													común entre las ciencias
													ómicas y computacionales.
												</li>
												<li className="mb-1">
													Formar investigadores de
													alto nivel científico que
													tengan un desempeño ético y
													eficiente en su aporte de
													soluciones al desarrollo del
													Perú.
												</li>
											</ul>
											<p className="mb-2">
												<strong>
													Perfil del ingresante
												</strong>
											</p>
											<p className="mb-2">
												El ingresante a la Maestría en
												Bioinformática y Ciencias
												Ómicas, posee el Grado Académico
												de Bachiller en Ciencias
												Biológicas, Bachiller en
												Genética y Biotecnología,
												Bachiller en Microbiología y
												Parasitología y otras ciencias
												básicas, o Grado Académico de
												Medicina Veterinaria, Farmacia y
												Bioquímica o Grado Académico de
												Física o Química, o Ciencias de
												la Computación y tiene el
												siguiente perfil:
											</p>
											<p className="mb-4">
												<ul className="mb-0 mt-2 pl-4">
													<li className="mb-1">
														Conoce conceptos básicos
														y actuales de
														Bioquímica, Genética,
														Introducción a
														informática y Ciencias
														de la Computación.
													</li>
													<li className="mb-1">
														Analiza información
														científica en idiomas
														distintos al castellano.
													</li>
													<li>
														Muestra interés en una
														de las líneas de
														investigación afines al
														programa.
													</li>
												</ul>
											</p>
											<p className="mb-2">
												<strong>
													Perfil del egresado
												</strong>
											</p>
											<p className="mb-4">
												El graduado de la Maestría en
												Bioinformática y Ciencias
												Ómicas:
											</p>
											<p className="mb-4">
												<ul className="mb-0 mt-2 pl-4">
													<li className="mb-1">
														Aplica metodologías
														actualizadas en el campo
														de la Bioinformática y
														Ciencias Ómicas para la
														resolución de
														problemáticas de interés
														nacional e
														internacional, con
														criterio científico y
														responsabilidad social.
													</li>
													<li className="mb-1">
														Gestiona y lidera
														proyectos de
														investigación básica y
														aplicada, a nivel inter
														y multidisciplinarias
														para resolver problemas
														en Bioinformática y
														ciencias ómicas, con
														principios éticos,
														trabajo en equipo y
														demostrando autonomía.
													</li>
													<li>
														Publica los productos de
														su investigación en
														revistas indizadas con
														la finalidad de difundir
														los conocimientos
														generados en beneficio
														de la sociedad, con
														transparencia.
													</li>
												</ul>
											</p>
											<p className="mb-2">
												<strong>
													¿Por qué estudiar con
													nosotros?
												</strong>
											</p>
											<p className="mb-4">
												Somos el único programa de
												maestría de Bioinformática y
												Ciencias Ómicas en el país y
												contamos con una plana docente
												interna y externa constituida
												por especialistas reconocidos.
												Estas disciplinas constituyen el
												Avant Garde de la investigación
												en Ciencias Biológicas y afines.
												Estas Ciencias son por
												naturaleza
												interdisciplinariarias
												aplicándose además a una enorme
												cantidad de campos
												profesionales. La necesidad de
												Bioinformáticos en el Perú
												garantiza interesantes campos
												laborales en Agricultura,
												estudios de la biodiversidad,
												medicina, veterinaria,
												ganadería, pesquería e
												industria.
											</p>
											<p className="mb-2">
												<strong>Campo Laboral:</strong>
											</p>
											<p className="mb-4">
												<ul className="mb-0 mt-2 pl-4">
													<li className="mb-1">
														Investigador en
														proyectos tecnológicos y
														científicos en los
														sectores de agricultura,
														ganadería, pesquería e
														industria.
													</li>
													<li className="mb-1">
														Docencia e investigación
														en instituciones de
														educación superior.
													</li>
													<li className="mb-1">
														Asesorías y
														consultorías.
													</li>
													<li className="mb-1">
														Evaluación y gestión de
														impacto ambiental.
													</li>
												</ul>
											</p>
										</div>
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
														vacantesNumber={15}
														programaName="Maestría en Bioinformática y Ciencias Ómicas"
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
