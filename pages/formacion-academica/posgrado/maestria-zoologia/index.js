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
			<Layout title="Maestría en Zoología">
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
											Maestría en Zoología
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
										Maestría en Zoología
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
											<a
												href="/assets/archivos/posgrado/planes de estudio/plan-estudio-2020-maestria-zoologia.pdf"
												target="_blank"
												className="tab d-flex">
												<div>
													<Icon.mallaCurricularIcon className="mr-3" />
												</div>
												<span>Malla curricular</span>
											</a>
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
											<p>
												El programa de Zoolog&iacute;a
												cuenta con tres menciones:
												Sistem&aacute;tica y
												Evoluci&oacute;n,
												Ecolog&iacute;a y
												Conservaci&oacute;n, y
												Morfolog&iacute;a y
												Fisiolog&iacute;a; con el
												prop&oacute;sito de formar
												investigadores altamente
												calificados, profesores
												universitarios de alto nivel y
												profesionales altamente
												especializados que contribuyan a
												resolver la problem&aacute;tica
												cient&iacute;fica y
												tecnol&oacute;gica del
												pa&iacute;s mediante el estudio
												de organismos animales bajo
												m&uacute;ltiples enfoques.
											</p>
											<p>
												La menci&oacute;n en
												Sistem&aacute;tica y
												Evoluci&oacute;n busca formar
												investigadores altamente
												calificados con capacidad de
												generar conocimientos y
												contribuir a la
												resoluci&oacute;n de problemas
												taxon&oacute;micos con una
												visi&oacute;n integrativa de
												evoluci&oacute;n,
												sistem&aacute;tica,
												ecolog&iacute;a y
												biolog&iacute;a de la
												conservaci&oacute;n. Promover el
												desarrollo de colecciones
												cient&iacute;ficas debidamente
												identificadas y conservadas para
												su mantenimiento a largo plazo
												con el fin de usarlas como pilar
												de estudios b&aacute;sicos y/o
												aplicados de la biodiversidad,
												su conservaci&oacute;n y uso
												sostenible.
											</p>
											<p>
												Por otro lado la menci&oacute;n
												en Ecolog&iacute;a y
												Conservaci&oacute;n pretende
												formar profesionales altamente
												especializados con capacidad de
												generar informaci&oacute;n que
												coadyuve a la
												conservaci&oacute;n a largo
												plazo de los ecosistemas, sus
												poblaciones animales y las
												interacciones de las que forman
												parte. As&iacute; mismo
												podr&aacute;n contribuir a la
												gesti&oacute;n &oacute;ptima de
												la fauna silvestre en programas
												de desarrollo sostenible.
											</p>
											<p>
												Finalmente la menci&oacute;n en
												Morfolog&iacute;a y
												Fisiolog&iacute;a tiene como
												objetivo formar investigadores
												con capacidad de generar
												informaci&oacute;n sobre los
												rasgos morfol&oacute;gicos y
												fisiol&oacute;gicos en un grupo
												animal y c&oacute;mo estas
												adaptaciones los favorece para
												que puedan existir en los
												h&aacute;bitats que ocupan.
												Promover el desarrollo de
												biotecnolog&iacute;as que
												repliquen caracter&iacute;sticas
												adaptativas ya sea
												morfol&oacute;gicas y/o
												fisiol&oacute;gicas de uno o
												m&aacute;s grupos animales.
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
												Mag&iacute;ster en
												Zoolog&iacute;a con
												menci&oacute;n en&nbsp;
											</p>
											<p>
												<strong>T&Iacute;TULO</strong>
											</p>
											<p>
												T&iacute;tulo profesional de
												Bi&oacute;logo en
												Gen&eacute;tica y
												Biotecnolog&iacute;a con
												menci&oacute;n en
												Sistem&aacute;tica y
												Evoluci&oacute;n,
												Ecolog&iacute;a y
												Conservaci&oacute;n, o
												Morfolog&iacute;a y
												Fisiolog&iacute;a
											</p>
											<p>
												<strong>
													L&Iacute;NEAS DE
													INVESTIGACI&Oacute;N
												</strong>
											</p>
											<p>
												La disciplina eje del Programa
												de Maestr&iacute;a en
												Zoolog&iacute;a son las Ciencias
												Biol&oacute;gicas enfocadas al
												estudio de organismos animales
												en todos sus aspectos. Las
												l&iacute;neas de
												investigaci&oacute;n son:
											</p>
											<ul>
												<li aria-level="1">
													Sistem&aacute;tica evolutiva
												</li>
												<li aria-level="1">
													Biogeograf&iacute;a
												</li>
												<li aria-level="1">
													Biolog&iacute;a de la
													conservaci&oacute;n
												</li>
												<li aria-level="1">
													Fisiolog&iacute;a e
													histolog&iacute;a comparada
												</li>
												<li aria-level="1">
													Embriolog&iacute;a comparada
												</li>
												<li aria-level="1">
													Ecolog&iacute;a de
													poblaciones y de comunidades
												</li>
												<li aria-level="1">
													Estudios integrativos en
													taxonom&iacute;a,
													biodiversidad y
													conservaci&oacute;n
													biol&oacute;gica
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
