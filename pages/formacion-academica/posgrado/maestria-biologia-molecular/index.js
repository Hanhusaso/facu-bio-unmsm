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
import planEstudios from '../../../../data/posgrado/plan-estudios-biologia.json';

const index = () => {
	const asignaturas_obligatorias = planEstudios.filter(
		(plan) =>
			plan.program_name === 'maestria-en-biologia-molecular' &&
			plan.course_type === 'obligatorio'
	);
	const asignaturas_electivas = planEstudios.filter(
		(plan) =>
			plan.program_name === 'maestria-en-biologia-molecular' &&
			plan.course_type === 'electivo'
	);
	const { width, height } = useWindowSize();
	const [docentes, setDocentes] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await getDocenteByIdInformacionAcademicaApi(
				'maestria_en_biologia_molecular'
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
			<Layout title="Maestría en Biología Molecular">
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
											Maestría en Biología Molecular
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
										Maestría en Biología Molecular
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
							src="/assets/img/posgrado/maestria biologia molecular/banner-maestria-biologia-molecular-unmsm.png"
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
												href="/assets/archivos/posgrado/planes de estudio/plan-estudio-2020-maestria-biologia-molecular.pdf"
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
													<strong>Grado:</strong>{' '}
													Magíster en Biología
													Molecular
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
												Este programa académico brinda
												herramientas y conocimientos en
												conceptos y metodologías
												actualizadas en el campo de la
												biología molecular; además
												formar especialistas del más
												alto nivel, por lo cual
												incentivamos en nuestros alumnos
												el deseo de documentarse
												constantemente de los avances de
												la disciplina.
											</p>
											<p className="mb-3">
												<strong>Objetivos:</strong>
											</p>
											<p className="mb-4">
												Aplicar conceptos actuales de
												biología molecular en los
												aspectos genéticos, bioquímicos,
												fisiológicos, taxonómicos y
												evolutivos en el manejo adecuado
												de organismos y entidades
												moleculares para la
												sostenibilidad de nuestra
												biodiversidad. Además, diseñar
												proyectos de investigación para
												contribuir con el conocimiento
												científico de este campo de
												estudio y generar soluciones a
												problemas nacionales, con
												énfasis en la responsabilidad
												social y respeto de la
												diversidad cultural.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del ingresante:
												</strong>
											</p>
											<p className="mb-4">
												Dirigido a profesionales que
												posean el grado de bachiller en
												Ciencias Biológicas, Genética,
												Microbiología, Química, Medicina
												Humana, Medicina Veterinaria,
												Odontología, Agronomía,
												Biotecnología, Nutrición y
												Farmacia y Bioquímica; asimismo,
												tener conocimientos en
												Bioquímica, Genética y
												Fisiología General. Es
												importante demostrar pensamiento
												crítico, curiosidad e interés
												por el aprendizaje e
												investigación en el campo de la
												biología molecular; así como un
												compromiso ético y bioético en
												el desarrollo de las actividades
												de investigación.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del egresado:
												</strong>
											</p>
											<p className="mb-4">
												El graduado será un profundo
												conocedor de los conceptos y
												metodologías actualizadas en el
												campo de la biología molecular.
												Liderará proyectos de
												investigación básica y aplicada
												a nivel interdisciplinario y
												multidisciplinario. Ejercerá
												actividad científica y académica
												con principios éticos y
												bioéticos; además, publicará los
												resultados de su investigación
												en revistas indizadas de alto
												impacto.
											</p>
											<p className="mb-3">
												<strong>
													¿Por qué estudiar con
													nosotros?
												</strong>
											</p>
											<p className="mb-4">
												El avance vertiginoso de las
												ciencias biológicas significa un
												reto permanente para el país y
												la Universidad Nacional Mayor de
												San Marcos. En este contexto, la
												biología molecular constituye
												una de las especialidades
												imprescindibles para la
												comprensión y el manejo a nivel
												bioquímico, genético, celular y
												molecular de organismos vivos.
												Sumado que nuestro territorio
												nacional abarca una enorme
												biodiversidad genética, lo cual
												exige la participación de
												científicos altamente
												capacitados en biología
												molecular, por ello ofrecemos
												una completa malla curricular
												ajustada a la realidad.
											</p>
											<p>
												<strong>Campo Laboral:</strong>
											</p>
											<ul className="pl-3">
												<li aria-level="1">
													Centros de investigación
													públicos y privados.
												</li>
												<li aria-level="1">
													Industria farmacéutica y
													alimentaria.
												</li>
												<li aria-level="1">
													Agricultura y ganadería.
												</li>
												<li aria-level="1">
													Áreas de diagnóstico
													molecular de enfermedades y
													anomalías genéticas.
												</li>
												<li aria-level="1">
													Centros especializados de
													validación de técnicas
													moleculares.
												</li>
												<li aria-level="1">
													Laboratorios clínicos de
													diseño de vacunas
													recombinantes.
												</li>
												<li aria-level="1">
													Laboratorios de biología
													forense.
												</li>
												<li aria-level="1">
													Centros de enseñanza
													superior.
												</li>
												<li aria-level="1">
													Diseño de proyectos y
													asesoramiento académico.
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
												Maestr&iacute;a en
												Biolog&iacute;a Molecular:
											</p>
											<ul>
												<li aria-level="1">
													Poseer&aacute; el Grado
													Acad&eacute;mico de
													Bachiller en Ciencias
													Biol&oacute;gicas, Bachiller
													en Gen&eacute;tica y
													Biotecnolog&iacute;a,
													Bachiller en
													Microbiolog&iacute;a y
													Parasitolog&iacute;a y otras
													ciencias b&aacute;sicas, o
													Grado Acad&eacute;mico de
													Bachiller en Medicina
													Humana, Medicina Veterinaria
													y Farmacia y
													Bioqu&iacute;mica.
												</li>
												<li aria-level="1">
													Deber&aacute;n acreditar
													haber aprobado durante sus
													estudios de pregrado los
													siguientes cursos o sus
													equivalentes:
													Bioqu&iacute;mica,
													Gen&eacute;tica Microbiana,
													Fisiolog&iacute;a General,
													Gen&eacute;tica Humana.
												</li>
												<li aria-level="1">
													Leer y comprender el idioma
													ingl&eacute;s.
												</li>
												<li aria-level="1">
													Haber obtenido la
													calificaci&oacute;n
													requerida en el
													&ldquo;Examen de Aptitud
													para Estudios de
													Posgrado&rdquo; con una
													antig&uuml;edad no mayor de
													dos a&ntilde;os calendario.
												</li>
												<li aria-level="1">
													Haber aprobado y alcanzado
													vacante en el proceso de
													admisi&oacute;n respectivo.
												</li>
												<li aria-level="1">
													Deber&aacute; contar con una
													l&iacute;nea de
													investigaci&oacute;n.
												</li>
											</ul>
											<p>
												<strong>
													PERFIL DEL EGRESADO
												</strong>
											</p>
											<p>
												El graduado de la
												maestr&iacute;a de
												Biolog&iacute;a Molecular debe:
											</p>
											<ul>
												<li aria-level="1">
													Ser un profundo conocedor de
													los conceptos y
													metodolog&iacute;as
													actualizadas en el campo de
													la biolog&iacute;a
													molecular.
												</li>
												<li aria-level="1">
													Demostrar capacidad y
													autonom&iacute;a en la
													formulaci&oacute;n y en la
													gesti&oacute;n de proyectos
													de investigaci&oacute;n en
													biolog&iacute;a molecular.
												</li>
												<li aria-level="1">
													Ser capaz de trabajar en
													equipo y redes en forma
													interdisciplinaria.
												</li>
												<li aria-level="1">
													Presentar una actitud
													comprometida con la
													actualizaci&oacute;n
													permanente y con el
													desarrollo de la
													biolog&iacute;a molecular en
													su quehacer profesional,
													docencia e
													investigaci&oacute;n.
												</li>
												<li aria-level="1">
													Asumir liderazgo en la
													investigaci&oacute;n
													b&aacute;sica y aplicada,
													dirigiendo investigaciones
													inter y multidisciplinarias.
												</li>
												<li aria-level="1">
													Ser capaz de analizar
													problemas y establecer
													preguntas relevantes a nivel
													celular y molecular.
												</li>
												<li aria-level="1">
													Tener libertad de
													pensamiento, ejercer su
													actividad con principios
													&eacute;ticos de
													investigaci&oacute;n y saber
													trabajar en equipo, escribir
													propuestas de proyectos y
													publicar el producto de su
													investigaci&oacute;n en
													revistas indizadas.
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
														programaName="Biología molecular"
														vacantesNumber={29}
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
											<PlanDeEstudio
												asignaturas_obligatorias={
													asignaturas_obligatorias
												}
												asignaturas_electivas={
													asignaturas_electivas
												}
												plan_estudio="https://biologia-unmsm.s3.us-east-2.amazonaws.com/plan-estudio/Plan-Estudios-2023-DOCTORADO-EN-CIENCIAS-BIOLOGICAS.pdf"
											/>
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
