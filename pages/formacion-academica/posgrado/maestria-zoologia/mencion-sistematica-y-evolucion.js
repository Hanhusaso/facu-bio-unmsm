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

const mencionSistematicaYEvolucion = () => {
	const { width, height } = useWindowSize();
	const [docentes, setDocentes] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await getDocenteByIdInformacionAcademicaApi(
				'maestria_en_zoologia'
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
			<Layout title="Maestría en Zoología con mención en Sistemática y Evolución">
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
											Maestría en Zoología con mención en
											Sistemática y Evolución
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
										Maestría en Zoología con mención en
										Sistemática y Evolución
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
							src="/assets/img/posgrado/maestria zoologia/banner-maestria-zoologia-unmsm.png"
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
												href="/assets/archivos/posgrado/planes de estudio/plan-estudio-2020-maestria-zoologia.pdf"
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
													<strong>Grado:</strong>{' '}
													Magíster en Zoología con
													mención en Sistemática y
													Evolución
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
												formar investigadores altamente
												calificados con capacidad de
												generar conocimientos y
												contribuir a la resolución de
												problemas taxonómicos con una
												visión integrativa de evolución,
												sistemática, ecología y biología
												de la conservación. Además,
												promueve el desarrollo de
												colecciones científicas
												debidamente identificadas y
												conservadas para su
												mantenimiento a largo plazo, con
												el fin de usarlas como pilar de
												estudios básicos o aplicados de
												la biodiversidad, su
												conservación y uso sostenible.
											</p>
											<p className="mb-3">
												<strong>Objetivos:</strong>
											</p>
											<p className="mb-4">
												Formar investigadores de alto
												nivel en el área de Sistemática
												y Evolución de la fauna
												silvestre. Proponer y ejecutar
												proyectos de investigación
												originales en investigación
												básica y/o aplicada en las áreas
												de sistemática y biología
												evolutiva que requieran la
												correcta identificación de
												especies de fauna silvestre.
												Además, gestionar óptimamente la
												fauna silvestre en programas de
												desarrollo sostenible, así como
												perfeccionar profesionales para
												favorecer el mejor
												desenvolvimiento
												científico-tecnológico, así como
												elevar el nivel académico de
												docentes universitarios.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del ingresante:
												</strong>
											</p>
											<p className="mb-4">
												Dirigido a profesionales con
												grado de Bachiller en Ciencias
												Biológicas o áreas afines,
												otorgados por universidades
												nacionales o extranjeras que
												aseguren una formación acorde a
												los fines del programa. También
												deberá aprobar el “Examen de
												Aptitud para Estudios de
												Posgrado” con una antigüedad no
												mayor de dos años calendario, y
												contar con conocimientos básicos
												y actuales de Zoología,
												Ecología, Genética, Fisiología,
												Química orgánica e inorgánica,
												Física, Matemática y
												Estadística. Por último,
												proponer trabajos de
												investigación en temas
												relacionados a la Zoología, así
												como contar con experiencia
												verificable en alguna línea de
												investigación en el ámbito de la
												Zoología o afín con las líneas
												de investigación de la Facultad
												de Ciencias Biológicas.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del egresado:
												</strong>
											</p>
											<p className="mb-4">
												El graduado aplicará
												herramientas metodológicas
												actuales para la investigación
												en sistemática y biología
												evolutiva. Diseñará y
												desarrollará proyectos de
												investigación en fauna, en
												aspectos de sistemática y
												biología evolutiva. Conformará
												equipos multidisciplinarios en
												áreas de investigación de su
												especialidad desarrollando
												proyectos con responsabilidad y
												ética en la investigación básica
												y aplicada, y en la docencia
												universitaria en temas
												relacionados con sistemática y
												biología evolutiva.
											</p>
											<p className="mb-3">
												<strong>
													¿Por qué estudiar con
													nosotros?
												</strong>
											</p>
											<p className="mb-4">
												Nuestro propósito es formar
												investigadores altamente
												calificados, profesores
												universitarios de alto nivel y
												profesionales especializados que
												contribuyan a resolver la
												problemática científica y
												tecnológica del país mediante el
												estudio de organismos animales
												bajo múltiples enfoques.
											</p>
											<p>
												<strong>Campo Laboral:</strong>
											</p>
											<ul className="pl-3">
												<li aria-level="1">
													Centros de investigación en
													equipos multi, trans e
													interdisciplinarios
													nacionales y /o extranjeros
													como el NAMRU (vectores de
													importancia en salud
													pública), fiscalía (biología
													forense), etc.
												</li>
												<li aria-level="1">
													Centros agrícolas,
													ganaderos, industriales,
													etc.
												</li>
												<li aria-level="1">
													Áreas naturales protegidas
													y/o de naturaleza privada.
												</li>
												<li aria-level="1">
													Docencia e investigación en
													instituciones de enseñanza
													superior.
												</li>
												<li aria-level="1">
													Diseño de proyectos para
													restauración ecológica,
													establecimiento de áreas
													naturales protegidas, plan
													de contención de plagas,
													etc.
												</li>
												<li aria-level="1">
													Asesorías y consultorías de
													alto nivel académico con
													fines diversos.
												</li>
												<li aria-level="1">
													Evaluación y gestión del
													impacto ambiental en
													proyectos de desarrollo
													económico.
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
												Poseer el grado acad&eacute;mico
												de bachiller en Ciencias
												biol&oacute;gicas o &aacute;reas
												afines.
											</p>
											<p>
												Haber aprobado durante los
												estudios de pregrado las
												siguientes asignaturas:
												Zoolog&iacute;a,
												Ecolog&iacute;a,
												Gen&eacute;tica,
												Fisiolog&iacute;a,
												Qu&iacute;mica org&aacute;nica e
												inorg&aacute;nica,
												F&iacute;sica, Matem&aacute;tica
												y Estad&iacute;stica.
											</p>
											<p>
												<strong>
													PERFIL DEL EGRESADO
												</strong>
											</p>
											<p>
												En las tres menciones, el
												graduado de la Maestr&iacute;a
												en Zoolog&iacute;a tendr&aacute;
												la capacidad de
												desempe&ntilde;arse en la
												investigaci&oacute;n, docencia
												universitaria y en la
												ejecuci&oacute;n de proyectos en
												sistem&aacute;tica,
												biolog&iacute;a evolutiva,
												ecolog&iacute;a y
												conservaci&oacute;n en
												investigaci&oacute;n
												b&aacute;sica y/o aplicada que
												requieran la correcta
												identificaci&oacute;n de
												especies de fauna silvestre.
												Tambi&eacute;n podr&aacute;:
											</p>
											<ul>
												<li aria-level="1">
													Identificar mediante el uso
													de t&eacute;cnicas modernas
													grupos naturales en el reino
													animal que garantice la
													conservaci&oacute;n de 1)
													linajes amenazados por
													extinci&oacute;n o
													vulnerables, 2)
													end&eacute;micos, 3) de
													inter&eacute;s
													econ&oacute;mico, etc. y
													evaluar su estado de
													conservaci&oacute;n para
													prever/mitigar los impactos,
													naturales o
													antr&oacute;picos, sobre sus
													poblaciones.
												</li>
												<li aria-level="1">
													Promover el desarrollo y
													buen mantenimiento de
													colecciones
													cient&iacute;ficas que
													sirvan de referencia para
													estudios de &iacute;ndole
													diversa tanto b&aacute;sicos
													como aplicados.
												</li>
												<li aria-level="1">
													Conocer mediante el uso de
													t&eacute;cnicas modernas el
													comportamiento,
													ecolog&iacute;a y
													distribuci&oacute;n de
													especies de inter&eacute;s
													cient&iacute;fico,
													comercial, salud
													p&uacute;blica, etc.
												</li>
												<li aria-level="1">
													Promover el desarrollo y
													buen mantenimiento de bases
													de datos ecol&oacute;gicos
													de especies animales que
													sirva como referencia para
													estudios de &iacute;ndole
													diversa tanto b&aacute;sicos
													como aplicados.
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
														programaName="Zoología con mención en Sistemática y Evolución"
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

export default mencionSistematicaYEvolucion;
