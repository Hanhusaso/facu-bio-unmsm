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
			<Layout title="Maestría en Ecosistemas y Recursos Acuáticos">
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
											Acuáticos
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
										Acuáticos
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
											<p>
												La maestr&iacute;a en
												Ecosistemas y Recursos
												acu&aacute;ticos forma
												mag&iacute;steres que
												contribuyen en el desarrollo del
												pa&iacute;s teniendo como foco
												de investigaci&oacute;n el mar
												peruano y los ecosistemas
												acu&aacute;ticos continentales.
											</p>
											<p>
												Esta maestr&iacute;a fue creada
												en abril de 1988 bajo el nombre
												de Maestr&iacute;a en
												Hidrobiolog&iacute;a y
												Pesquer&iacute;a. En mayo de
												2010 toma el nombre actual de
												Maestr&iacute;a en Ecosistemas y
												Recursos Acu&aacute;ticos con
												tres menciones: Acuicultura,
												Ecosistemas Acu&aacute;ticos y
												Evaluaci&oacute;n y Manejo de
												Recursos Pesqueros.
											</p>
											<p>
												Se busca que los estudiantes
												puedan abordar la
												problem&aacute;tica de nuestros
												ecosistemas marinos y de aguas
												continentales, conducentes a su
												aprovechamiento de manera
												sostenible. La formaci&oacute;n
												conlleva a consolidar y
												completar la formaci&oacute;n de
												los ingresantes, as&iacute; como
												formar investigadores de alto
												nivel, capaces de elaborar y
												ejecutar proyectos de
												investigaci&oacute;n originales.
												Perfeccionar docentes
												universitarios, elevando su
												nivel acad&eacute;mico,
												as&iacute; como capacitar
												profesionales para favorecer su
												mejor desenvolvimiento
												cient&iacute;fico-tecnol&oacute;gico.
											</p>
											<p>
												Los egresados se pueden
												desempe&ntilde;ar en diversos
												&aacute;mbitos como investigador
												en proyectos tecnol&oacute;gicos
												y cient&iacute;ficos en los
												sectores de agricultura e
												industria; realizando servicios
												medioambientales; en
												&aacute;reas como biocomercio,
												informaci&oacute;n,
												documentaci&oacute;n y
												divulgaci&oacute;n; docencia e
												investigaci&oacute;n en
												instituciones de
												educaci&oacute;n superior,
												turismo, etc.
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
												Magister en Ecosistemas y
												Recursos Acu&aacute;ticos con
												menci&oacute;n en Acuicultura,
												Ecosistemas Acu&aacute;ticos y
												Evaluaci&oacute;n o Manejo de
												Recursos Pesqueros.
											</p>
											<p>
												<strong>
													L&Iacute;NEAS DE
													INVESTIGACI&Oacute;N
												</strong>
											</p>
											<ul>
												<li aria-level="1">
													Ecolog&iacute;a
													acu&aacute;tica
												</li>
												<li aria-level="1">
													Evaluaci&oacute;n y manejo
													de recursos
												</li>
												<li aria-level="1">
													Limnolog&iacute;a
												</li>
												<li aria-level="1">
													Acuicultura
												</li>
												<li aria-level="1">
													Recursos Acu&aacute;ticos
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
													<CuadroVacantesMaestria />
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
