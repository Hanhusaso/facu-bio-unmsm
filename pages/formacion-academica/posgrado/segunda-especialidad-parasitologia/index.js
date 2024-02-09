import React, { useState, useEffect } from 'react';
import Layout from '../../../../components/Layout';

import { Row, Col, Container, Breadcrumb, Tabs, Tab } from 'react-bootstrap';
import Link from 'next/link';
import { getDocenteByIdInformacionAcademicaApi } from '../../../api/formacion-academica';

import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';

import { useWindowSize } from '../../../../utils/useWindowSize';

import * as Icon from '../../../../components/Icons';

import GuiaProcesoAdmisionSegEspec from '../../../../components/posgrado/segunda-especialidad/GuiaProcesoAdmisionSegEspec';
import CronogramaSegEspec from '../../../../components/posgrado/segunda-especialidad/CronogramaSegEspec';
import CuadroVacantesSegEspec from '../../../../components/posgrado/segunda-especialidad/CuadroVacantesSegEspec';
import RequisitosSegEspec from '../../../../components/posgrado/segunda-especialidad/RequisitosSegEspec';
import CostosAdmisionSegEspec from '../../../../components/posgrado/segunda-especialidad/CostosAdmisionSegEspec';
import ProcesoEvaluacionSegEspec from '../../../../components/posgrado/segunda-especialidad/ProcesoEvaluacionSegEspec';
// import InversionEconomicaDoctorado from '../../../../components/posgrado/doctorado/InversionEconomicaDoctorado';
import PlanDeEstudio from '../../../../components/posgrado/PlanDeEstudio';
import planEstudios from '../../../../data/posgrado/plan-estudios-biologia.json';
// import { Announcement } from '../../../../components/posgrado/Announcement';

const index = () => {
	const asignaturas_obligatorias = planEstudios.filter(
		(plan) =>
			plan.program_name === 'segunda-especialidad-en-parasitologia' &&
			plan.course_type === 'obligatorio'
	);
	const asignaturas_electivas = planEstudios.filter(
		(plan) =>
			plan.program_name === 'segunda-especialidad-en-parasitologia' &&
			plan.course_type === 'electivo'
	);
	const { width, height } = useWindowSize();
	const [docentes, setDocentes] = useState([]);
	const [docentesExt, setDocentesExt] = useState([]);

	useEffect(() => {
		let hash = window.location.hash;
		if (hash) {
			// show the tab
			$('#tab a[href="' + hash + '"]').tab('show');

			//clear the hash
			hash = null;
		}
	}, []); // dejamos las dependencias vacías para que sólo se ejecute la primera vez

	useEffect(() => {
		(async () => {
			const response = await getDocenteByIdInformacionAcademicaApi(
				'segunda_especialidad_parasitologia'
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
			<Layout title="Segunda Especialidad en Parasitología">
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
											Segunda Especialidad en
											Parasitología
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
										Segunda Especialidad en Parasitología
									</div>
								</Col>
								<Col md="1"></Col>
							</Row>
						</Container>
					</div>
					{/* IMAGE */}
					<div className="mb-4 relative">
						<img
							className="w-100"
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/parasitologia-banner.jpg"
							alt="segunda especialidad parasitologia"
						/>
						{/* <Announcement /> */}
					</div>

					<div>
						<Container>
							<Row>
								<Col md="1" lg="1"></Col>
								<Col md="3" lg="2">
									<div className="mb-4">
										<div
											className="nav flex-column tabs-wrapper nav-pills"
											id="tab"
											role="tablist"
											aria-orientation="vertical"
										>
											<a
												className="tab d-flex active"
												id="presentacion-tab"
												data-toggle="pill"
												href="#presentacion"
												role="tab"
												aria-controls="presentacion"
												aria-selected="true"
											>
												<div>
													<Icon.presentacionIcon className="mr-3" />
												</div>
												<span>Presentación</span>
											</a>
											{/* <a
												className="tab d-flex"
												id="perfil-tab"
												data-toggle="pill"
												href="#perfil"
												role="tab"
												aria-controls="perfil"
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
												id="admision-tab"
												data-toggle="pill"
												href="#admision"
												role="tab"
												aria-controls="admision"
												aria-selected="false"
											>
												<div>
													<Icon.admisionIcon className="mr-3" />
												</div>
												<span>Admisión</span>
											</a>
											<a
												className="tab d-flex"
												id="plana-docente-tab"
												data-toggle="pill"
												href="#plana-docente"
												role="tab"
												aria-controls="plana-docente"
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
												id="inversion-tab"
												data-toggle="pill"
												href="#inversion"
												role="tab"
												aria-controls="inversion"
												aria-selected="false"
											>
												<div>
													<Icon.inversionEconomicaIcon className="mr-3" />
												</div>
												<span>Inversión económica</span>
											</a>
											<a
												className="tab d-flex"
												id="plan-tab"
												data-toggle="pill"
												href="#plan"
												role="tab"
												aria-controls="plan"
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
										id="tabContent"
									>
										<div
											className="mb-3 tab-pane fade show active"
											id="presentacion"
											role="tabpanel"
											aria-labelledby="presentacion-tab"
										>
											<div className="info-box mb-4">
												<p className="mb-3">
													<span>
														<Icon.GradoTituloIcon className="mr-2 position-relative bot-2px" />
													</span>
													<strong>Título:</strong>{' '}
													Segunda Especialidad en
													Parasitología
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
											{/* <p className="mb-4">
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
											</p> */}
											<p className="mb-3">
												<strong>Objetivos:</strong>
											</p>
											<p className="mb-3">
												Los objetivos del Programa de la
												Segunda Especialidad en
												Parasitología son:
											</p>
											<ul className="pl-3 mb-4">
												<li aria-level="1">
													Fortalecer las competencias
													y habilidades de los
													profesionales en el ámbito
													de la salud humana y animal
													para aplicar con idoneidad
													las herramientas
													diagnósticas y de control,
													para dar solución a
													problemas relacionados con
													las parasitosis en el Perú,
													formando equipos
													multidisciplinarios.
												</li>
												<li aria-level="1">
													Evaluar la diversidad
													parasitaria en la
													interrelación
													hospedero-parásito-ambiente
													con la finalidad de
													identificar el causante de
													las parasitosis y proponer
													estrategias de control con
													sentido crítico.
												</li>
												<li aria-level="1">
													Promover la investigación
													científica básica y aplicada
													para solucionar las zoonosis
													y parasitosis emergentes en
													nuestro país con el fin
													aportar al bienestar de la
													sociedad, con
													responsabilidad social.
												</li>
											</ul>
											<p className="mb-3">
												<strong>
													Perfil del ingresante:
												</strong>
											</p>
											<p className="mb-3">
												El ingresante a la Segunda
												Especialidad en Parasitología
												posee el Título profesional de
												Biólogo, Microbiólogo
												Parasitólogo, Microbiólogo,
												Médico Veterinario o carreras
												afines, otorgados por
												universidades nacionales
												(públicas y privadas) y
												extranjeras que aseguren una
												formación acorde a los fines del
												programa y tiene el siguiente
												perfil:
											</p>
											<ul className="pl-3 mb-4">
												<li aria-level="1">
													Aplica correctamente
													conceptos básicos y actuales
													de Microbiología, Zoología,
													Ecología, Genética,
													Fisiología, Inmunología y
													Estadística.
												</li>
												<li aria-level="1">
													Analiza información
													científica en idiomas
													distintos al castellano.
												</li>
												<li aria-level="1">
													Propone trabajos de
													investigación en temas
													relacionados a la
													Parasitología.
												</li>
												<li aria-level="1">
													Responde de manera proactiva
													y ética ante situaciones
													complejas en el campo de la
													Parasitología.
												</li>
											</ul>
											<p className="mb-3">
												<strong>
													Perfil del egresado:
												</strong>
											</p>
											<p className="mb-3">
												El egresado de la Segunda
												Especialidad en Parasitología:
											</p>
											<ul className="pl-3 mb-4">
												<li aria-level="1">
													Aplica técnicas y
													metodologías de diagnóstico
													básicas y avanzadas para
													mejorar la identificación de
													parásitos con amplia
													destreza.
												</li>
												<li aria-level="1">
													Ejecuta proyectos en las
													diferentes áreas de la
													parasitología para resolver
													problemas de salud humana y
													animal que ocasionan los
													parásitos, promoviendo el
													trabajo en equipo y
													multidisciplinario.
												</li>
												<li aria-level="1">
													Propone normas de protección
													frente a las zoonosis
													parasitarias que aquejan a
													la sociedad con
													responsabilidad social.
												</li>
												<li aria-level="1">
													Divulga el resultado de
													investigaciones en
													reuniones, revistas
													científicas y especializadas
													o dentro de grupos de
													profesionales en el ámbito
													de su competencia, con
													integridad científica.
												</li>
											</ul>
											<p className="mb-3">
												<strong>
													¿Por qué estudiar con
													nosotros?
												</strong>
											</p>
											<p className="mb-3">
												El Programa de Segunda
												Especialidad en Parasitología
												tiene como objetivo formar
												profesionales altamente
												capacitados, capaces de abordar
												situaciones de parasitosis
												humana y animal, y parasitosis
												más apremiantes en un entorno
												que abraza la biodiversidad y
												enfrenta los desafíos del siglo
												XXI en los que involucran a las
												poblaciones silvestres y
												acuáticas en el contexto del
												cambio climático global. Además,
												adoptamos un enfoque
												multidisciplinario que nos
												permite abordar estos desafíos
												de manera integral.
											</p>
											<p className="mb-3">
												La plana docente de la Segunda
												Especialidad en Parasitología
												está conformada por docentes que
												reúnen una valiosa experiencia
												profesional y de investigación
												en parasitología, siendo
												miembros activos de los
												Departamentos de Microbiología y
												Parasitología y Zoología, de la
												FCB-UNMSM y lideran grupos de
												investigación especializados en
												el campo de la Parasitología.
											</p>
											<p className="mb-4">
												El programa contempla
												asignaturas obligatorias,
												electivas y la realización de un
												trabajo de investigación,
												proporcionando al egresado una
												formación sólida que le permita
												desarrollarse en el campo básico
												y aplicativo de la
												parasitología.
											</p>
											<p className="mb-3">
												<strong>Campo Laboral:</strong>
											</p>
											<p className="mb-3">
												<p className="mb-4">
													El programa contempla
													asignaturas obligatorias,
													electivas y la realización
													de un trabajo de
													investigación,
													proporcionando al egresado
													una formación sólida que le
													permita desarrollarse en el
													campo básico y aplicativo de
													la parasitología.
												</p>
											</p>
											<ul className="pl-3">
												<li aria-level="1">
													Centros de investigación
												</li>
												<li aria-level="1">
													Industria alimentaria
												</li>
												<li aria-level="1">
													Agricultura y ganadería
												</li>
												<li aria-level="1">
													Salud Pública
												</li>
												<li aria-level="1">
													Institutos de Salud Pública
												</li>
												<li aria-level="1">
													Centros de enseñanza
													superior
												</li>
												<li aria-level="1">
													Diseño de proyectos
												</li>
												<li aria-level="1">
													Asesorías
												</li>
												<li aria-level="1">
													Docencia universitaria
												</li>
											</ul>
										</div>
										{/* <div
											className="mb-3 tab-pane fade"
											id="perfil"
											role="tabpanel"
											aria-labelledby="perfil-tab">
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
											id="admision"
											role="tabpanel"
											aria-labelledby="admision-tab"
										>
											<Tabs
												// defaultActiveKey="guia"
												// defaultActiveKey="cuadro"
												id="admision-tab"
											>
												{/* <Tab
													className="pt-3"
													eventKey="guia"
													title="Guía de proceso de Admisión"
												>
													<GuiaProcesoAdmisionSegEspec />
												</Tab> */}
												{/* <Tab
													className="pt-3"
													eventKey="cronograma"
													title="Cronograma"
												>
													<CronogramaSegEspec />
												</Tab> */}
												<Tab
													className="pt-3"
													eventKey="cuadro"
													title="Cuadro de Vacantes"
												>
													<CuadroVacantesSegEspec
														programaName=" Segunda Especialidad en Parasitología"
														vacantesNumber="15"
													/>
												</Tab>
												<Tab
													className="pt-3"
													eventKey="requisitos"
													title="Requisitos"
												>
													<RequisitosSegEspec />
												</Tab>
												{/* <Tab
													className="pt-3"
													eventKey="costos"
													title="Costos de Admisión"
												>
													<CostosAdmisionSegEspec />
												</Tab> */}
												<Tab
													className="pt-3"
													eventKey="proceso"
													title="Proceso de evaluación"
												>
													<ProcesoEvaluacionSegEspec />
												</Tab>
											</Tabs>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="plana-docente"
											role="tabpanel"
											aria-labelledby="plana-docente-tab"
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
											id="inversion"
											role="tabpanel"
											aria-labelledby="inversion-tab"
										>
											<div>
												<div className="mb-4">
													<p className="font-weight-bold">
														1. Admisión:
													</p>
													<ul className="mb-3 pl-4">
														<li>
															El costo para los
															postulantes es de{' '}
															<b>S/ 160.00</b>
														</li>
													</ul>
												</div>

												<div className="mb-4">
													<p className="font-weight-bold">
														2. Costo por ciclo:
													</p>
													<p className="mb-3">
														Cada curso tiene una
														cantidad determinada de
														creditaje por lo que un
														alumno, al matricularse
														en el semestre
														académico, realizará el
														pago correspondiente al
														total de números de
														créditos.
													</p>
													<ul className="mb-3 pl-4">
														<li>
															El costo por ciclo
															es de{' '}
															<b>S/ 2,000.00</b>
														</li>
													</ul>
												</div>

												<div>
													<p className="font-weight-bold">
														Más información
													</p>
													<p>
														<span>
															<Icon.CorreoIcon className="mr-2" />
														</span>
														<span className="font-weight-bold">
															Correo:
														</span>{' '}
														upg.biologia@unmsm.edu.pe
													</p>
													<p>
														<span>
															<Icon.telefonoIcon className="mr-2" />
														</span>
														<span className="font-weight-bold">
															Teléfono:{' '}
														</span>
														(+51) 914 033 256
													</p>
												</div>
											</div>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="plan"
											role="tabpanel"
											aria-labelledby="plan-tab"
										>
											<PlanDeEstudio
												asignaturas_obligatorias={
													asignaturas_obligatorias
												}
												asignaturas_electivas={
													asignaturas_electivas
												}
												plan_estudio="https://biologia-unmsm.s3.us-east-2.amazonaws.com/plan-estudio/SEGUNDA+ESPECIALIDAD+EN+PARASITOLOG%C3%8DA+F++PLAN+ESTUDIO.pdf"
											/>
										</div>
									</div>
									{width < 768 && <Contact />}
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
