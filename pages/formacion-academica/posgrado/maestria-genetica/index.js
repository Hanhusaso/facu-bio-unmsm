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
				'maestria_en_genetica'
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
			<Layout title="Maestría en Genética">
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
											Maestría en Genética
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
										Maestría en Genética
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
							src="/assets/img/posgrado/maestria genetica/banner-maestria-genetica-unmsm.png"
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
													<Icon.planaDocenteIcon className="mr-3" />
												</div>
												<span>Plana docente</span>
											</a>
											{/* <a
												href="/assets/archivos/posgrado/planes de estudio/plan-estudio-2020-maestria-genetica.pdf"
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
													Magíster en Genética
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
												formar investigadores y docentes
												calificados para conocer los
												genes, estructura, organización,
												mecanismos de transferencia,
												expresión, alteración espontánea
												e inducida en función del tiempo
												y las condiciones ambientales.
												Asimismo, utilizar las
												herramientas moleculares para su
												aislamiento, conservación y
												empleo en el mejoramiento
												genético a través de librerías y
												bancos genéticos.
											</p>
											<p className="mb-3">
												<strong>Objetivos:</strong>
											</p>
											<p className="mb-4">
												Formar investigadores y docentes
												calificados para conocer los
												diferentes comportamientos de
												los genes tales como:
												organización, transmisión,
												expresión, cómo cambian y cuál
												es su destino en el espacio y en
												el tiempo. Así también,
												capacitar en el manejo de
												distintas técnicas de
												mejoramiento genético de
												especies útiles de la
												biodiversidad y la formación del
												banco de genes. Asimismo,
												incentivar la utilización de
												marcadores genéticos aplicados a
												la mejora genética, mediante las
												nuevas tecnologías para el
												análisis del ADN y ARN, con el
												fin de proporcionar al
												estudiante una vasta imagen de
												conocimiento sobre el tema y los
												retos de los cambios climáticos
												que participan en las
												variaciones genéticas.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del ingresante:
												</strong>
											</p>
											<p className="mb-4">
												El postulante debe poseer el
												grado de Bachiller en Ciencias
												Biológicas, Genética y
												Biotecnología, Microbiología y
												Parasitología, Medicina Humana,
												Medicina Veterinaria, Farmacia y
												Bioquímica o disciplinas afines
												a la Ciencias Básicas. Además,
												haber aprobado durante los
												estudios de pregrado las
												siguientes asignaturas o sus
												equivalentes: Bioquímica,
												Genética, Fisiología General,
												Ecología General, Zoología,
												Botánica, Bioestadística,
												Física, Química y otros cursos
												que sirvan de base para los
												cursos obligatorios del Plan de
												Estudios. Asimismo, competencias
												comunicativas en inglés.
											</p>
											<p className="mb-3">
												<strong>
													Perfil del egresado:
												</strong>
											</p>
											<p className="mb-4">
												El graduado estará formado como
												investigador-científico para
												llevar a cabo investigaciones de
												alto nivel sobre temas de
												genética estructural y
												mejoramiento genético de
												especies animales, vegetales y
												microorganismos. Además, estará
												capacitado para evaluar el modo
												de realizar cultivos y crianzas
												de alta eficiencia en ambientes
												terrestres y acuáticos.
												Asimismo, podrá preparar
												protocolos para nuevas
												tecnologías en este campo. Así
												también, participará como
												investigador docente en
												universidades, centros de
												investigación, empresas
												biogenéticas para la producción
												de alimentos, salud e industria.
											</p>
											{/* <p className="mb-3">
												<strong>
													¿Por qué estudiar con
													nosotros?
												</strong>
											</p>
											<p className="mb-4">
												
											</p>
											<p>
												<strong>Campo Laboral:</strong>
											</p>
											<ul className="pl-3">
												<li aria-level="1">
												</li>
											</ul> */}
										</div>
										{/* <div
											className="mb-3 tab-pane fade show active"
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
												Gen&eacute;tica:
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
													ciencias b&aacute;sicas o
													Grado Acad&eacute;mico de
													Bachiller en Medicina
													Humana, Medicina Veterinaria
													y Farmacia y
													Bioqu&iacute;mica.
												</li>
												<li aria-level="1">
													Habr&aacute; aprobado
													durante los estudios de
													pregrado las siguientes
													asignaturas o sus
													equivalentes:
													Bioqu&iacute;mica,
													Gen&eacute;tica,
													Fisiolog&iacute;a General,
													Ecolog&iacute;a General,
													Zoolog&iacute;a,
													Bot&aacute;nica,
													Bioestad&iacute;stica,
													F&iacute;sica,
													Qu&iacute;mica y otros
													cursos que sirvan de base
													para los cursos obligatorios
													del Plan de Estudios.
												</li>
												<li aria-level="1">
													Leer y comprender el idioma
													ingl&eacute;s.
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
												Maestr&iacute;a en
												Gen&eacute;tica est&aacute;
												formado como investigador
												cient&iacute;fico para llevar a
												cabo investigaciones de alto
												nivel sobre temas de
												gen&eacute;tica estructural y
												mejoramiento gen&eacute;tico de
												especies animales, vegetales y
												microorganismos. As&iacute;
												mismo:
											</p>
											<ul>
												<li aria-level="1">
													Est&aacute; capacitado para
													evaluar el modo en que se
													pueden realizar cultivos y
													crianzas de alta eficiencia
													en ambientes terrestres y
													acu&aacute;ticos.
													Adem&aacute;s, podr&aacute;
													preparar protocolos para
													nuevas tecnolog&iacute;as en
													este campo.
												</li>
												<li aria-level="1">
													Podr&aacute; dise&ntilde;ar
													proyectos de
													investigaci&oacute;n,
													participar como investigador
													docente en universidades, en
													centros de
													investigaci&oacute;n, en
													empresas biogen&eacute;ticas
													para la producci&oacute;n de
													alimentos, salud e
													industria.
												</li>
												<li aria-level="1">
													Formar investigadores
													cient&iacute;ficos y
													docentes calificados para
													conocer los genes,
													c&oacute;mo se organizan,
													transmiten, c&oacute;mo y
													cu&aacute;ndo se expresan,
													como cambiar y cu&aacute;l
													es su destino en el espacio
													y en el tiempo.
												</li>
												<li aria-level="1">
													El mejoramiento
													gen&eacute;tico de especies
													&uacute;tiles de la
													biodiversidad y la
													formaci&oacute;n del banco
													de genes.
												</li>
												<li aria-level="1">
													El establecimiento de
													marcadores gen&eacute;ticos
													aplicados a la mejora
													gen&eacute;tica.
												</li>
												<li aria-level="1">
													Formar investigadores de
													alto nivel cient&iacute;fico
													que comprendan, analicen y
													apliquen los conceptos
													actuales de la
													Gen&eacute;tica en arqueas,
													eucariotas y bacterias,
													cubriendo fundamentalmente
													las &aacute;reas
													b&aacute;sicas y aplicadas,
													incluyendo los aspectos
													gen&eacute;ticos,
													bioqu&iacute;micos,
													fisiol&oacute;gicos,
													taxon&oacute;micos y
													evolutivos, para el
													aprovechamiento racional de
													nuestra enorme
													biodiversidad; las
													actividades de
													investigaci&oacute;n en las
													cuales participan los
													estudiantes se desarrollan
													dentro de las l&iacute;neas
													de los grupos de
													investigaci&oacute;n de la
													Universidad.
												</li>
											</ul>
										</div> */}
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
