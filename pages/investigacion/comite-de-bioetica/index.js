import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import ProyectosExtra from "../../../components/ProyectosExtra";
import { HiExternalLink } from "react-icons/hi";
import { Row, Col, Container, Breadcrumb } from "react-bootstrap";
import Link from "next/link";

const antonioRaimondi = () => {
	return (
		<>
			<Layout title="Comité de Bioética de la Facultad de Ciencias Biológicas">
				<div>
					<div>
						<Container>
							<Row>
								<Col md="1"></Col>
								<Col>
									<Breadcrumb>
										{/* <Breadcrumb.Item> */}
										<li className="breadcrumb-item">
											<Link href="/">
												<a role="button">Inicio</a>
											</Link>
										</li>
										{/* </Breadcrumb.Item> */}
										{/* <Breadcrumb.Item active>Formación académica</Breadcrumb.Item> */}
										{/* <li className="breadcrumb-item">
                                            <Link href="/noticias">
                                                <a role="button">Noticias</a>
                                            </Link>
                                        </li> */}
										<Breadcrumb.Item active>
											Investigación: Comité de Bioética de la Facultad de Ciencias Biológicas
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
								<Col md="10">
									<div className="title-page mb-2 text-center">
										Comité de Bioética de la Facultad de Ciencias Biológicas
									</div>
									{/* <div className="sub-title text-center">Egresada de la E.P. Microbiología y Parasitología </div> */}
								</Col>
								<Col md="1"></Col>
							</Row>
						</Container>
						<Container>
							<Row>
								<Col md="1" lg="1"></Col>
								<Col md="7" lg="8">
									<div className="mb-4">
										<h1 className="title-dark mb-2">Misión</h1>
										<p>
											El Comité de Bioética de la Facultad de Ciencias Biológicas (FCB) de la UNMSM,
											como grupo académico interdisciplinario y pluralista, vela por la protección,
											seguridad, derechos y bienestar de los seres sujetos a investigación; y
											realiza y propicia el estudio, la discusión y la reflexión sobre las
											implicancias que la ciencia y la tecnología ejercen sobre la vida.
										</p>
										<h1 className="title-dark mb-2">Visión</h1>
										<p>
											El Comité de Bioética de la FCB mantendrá autonomía e independencia, de
											conformidad las leyes y reglamentos vigentes a nivel nacional e internacional,
											con reconocimiento y autoridad para emitir recomendaciones sobre valores y
											principios éticos en protocolos de investigación que incluyan en sus estudios
											a seres humanos, animales o partes de los mismos.
										</p>
										<h1 className="title-dark mb-2">Miembros</h1>
										<p>
											Mediante Resolución Decanal N° 000153-2021-D-FCB/UNMSM de fecha 23 de marzo de
											2021, se aprueba reactivar el Comité de Bioética de la Facultad de Ciencias
											Biológicas, el mismo que está integrado por los miembros representantes de los
											Departamentos Académicos y de las Facultades de la UNMSM como se indica a
											continuación:
										</p>
									</div>
									{/* <div className="title-dark mb-2">
										Directora del Instituto de Investigación “Antonio Raimondi”
									</div>
									<p className="mb-5">Dra. Martha Esther Valdivia Cuya</p> */}
									<div className="mb-3">
										<table className="striped m-auto">
											<thead>
												<tr>
													<th colSpan="3" className="text-center">
														Integrantes del comité
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th className="text-center">Nombre y apellido</th>
													<th className="text-center">Concytec</th>
													<th className="text-center">Departamento académico</th>
												</tr>
												<tr>
													<td>Rafael Simón Oswaldo La Rosa Loli </td>
													<td className="text-center">
														<a
															href={
																"https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=3591"
															}
															target="_blank"
															className="d-inline-block color-inherit mr-2"
														>
															<HiExternalLink className="mb-1 icon" />
															{/* <span className="mr-1">Concytec</span> */}
														</a>
													</td>
													<td>Botánica</td>
												</tr>
												<tr>
													<td>Alberto Ernesto López Sotomayor</td>
													<td className="text-center">
														<a
															href={
																"https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=355"
															}
															target="_blank"
															className="d-inline-block color-inherit mr-2"
														>
															<HiExternalLink className="mb-1 icon" />
															{/* <span className="mr-1">Concytec</span> */}
														</a>
													</td>
													<td>Genética</td>
												</tr>
												<tr>
													<td>Débora Elizabeth Alvarado Iparraguirre</td>
													<td className="text-center">
														<a
															href={
																"https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=427"
															}
															target="_blank"
															className="d-inline-block color-inherit mr-2"
														>
															<HiExternalLink className="mb-1 icon" />
															{/* <span className="mr-1">Concytec</span> */}
														</a>
													</td>
													<td>Microbiología y Parasitología</td>
												</tr>
												<tr>
													<td>Aldo Santiago Pacheco Velásquez </td>
													<td className="text-center">
														<a
															href={
																"http://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do;jsessionid=b9304f59e3ca460836d0d30a9f10?id_investigador=10079"
															}
															target="_blank"
															className="d-inline-block color-inherit mr-2"
														>
															<HiExternalLink className="mb-1 icon" />
															{/* <span className="mr-1">Concytec</span> */}
														</a>
													</td>
													<td>Hidrobiología y Pesquería</td>
												</tr>
												<tr>
													<td>Juan Carlos Ocampo Zegarra</td>
													<td className="text-center">
														<a
															href={
																"https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=99125"
															}
															target="_blank"
															className="d-inline-block color-inherit mr-2"
														>
															<HiExternalLink className="mb-1 icon" />
															{/* <span className="mr-1">Concytec</span> */}
														</a>
													</td>
													<td>Facultad de Medicina Humana</td>
												</tr>
												<tr>
													<td>Joan Lara Amat y León</td>
													<td className="text-center">
														<a
															href={
																"https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=169793"
															}
															target="_blank"
															className="d-inline-block color-inherit mr-2"
														>
															<HiExternalLink className="mb-1 icon" />
															{/* <span className="mr-1">Concytec</span> */}
														</a>
													</td>
													<td>Facultad de Letras y Ciencias Humanas</td>
												</tr>
												<tr>
													<td>Rosa Delsa Mavila León </td>
													<td className="text-center">
														<a
															href={
																"https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=83729"
															}
															target="_blank"
															className="d-inline-block color-inherit mr-2"
														>
															<HiExternalLink className="mb-1 icon" />
															{/* <span className="mr-1">Concytec</span> */}
														</a>
													</td>
													<td>Facultad de Derecho y Ciencia Política</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="mb-4">
										<p>
											Asimismo, por Resolución Decanal N° 000178/ 2021-D-FCB/UNMSM se designan a la
											Dra. Martha Esther Valdivia Cuya como Presidenta y al Dr. Joan Lara Amat y
											León como secretario del Comité de Bioética de la Facultad de Ciencias
											Biológicas.
										</p>
										<h1 className="title-dark mb-2">Evaluación de los proyectos</h1>
										<p>
											De acuerdo con la normatividad que regula las investigaciones en las que estén
											involucrados seres humanos, el resto de seres vivos y el medio ambiente, el
											Comité emitirá informe sobre los estudios presentados, evaluando especialmente
											su impacto y pertinencia, dentro de los principios de la bioética.
										</p>
										<p>
											Para la evaluación de proyectos de investigación por el Comité, comunicarse al
											siguiente correo electrónico: <b>comitebioetica.biologia@unmsm.edu.pe</b>.
										</p>
										<p>Y adjuntar lo siguiente:</p>
										<ol>
											<li>
												Solicitud dirigida a la Dra. Martha Valdivia Cuya, presidenta del Comité de
												Bioética.
											</li>
											<li>Formato 1 para evaluación del proyecto (En versión editable).</li>
											<li>
												Documentos sustentatorios (RR de aprobación, Dictamen, Link de Convocatoria,
												etc.).
											</li>
											<li>Proyecto completo</li>
										</ol>
										<p>
											<a
												href="https://docs.google.com/document/d/1teAcBGln0QUgDiS4kG-yHJZJSeePyyKB/edit?usp=sharing&ouid=118328492379645100483&rtpof=true&sd=true"
												target="_blank"
											>
												Clic Aquí para descargar el Formato 1
											</a>
										</p>
										<p>
											<a
												href="https://drive.google.com/file/d/1leT3WQGXv6UOH_mrVfUpdz8D1sDJZxa9/view?usp=sharing"
												target="_blank"
											>
												Clic Aquí para descargar el reglamento vigente del Comité de Bioética de la
												Facultad de Ciencias Biológicas.
											</a>
										</p>
										<p>
											<a
												href="https://drive.google.com/file/d/1T3oz2nypY_CHGrRbwLGISLEPKipOiSl2/view?usp=sharing"
												target="_blank"
											>
												Clic Aquí para descargar RD N° 000153-2021-D-FCB/UNMSM
											</a>
										</p>
										<p>
											<a
												href="https://drive.google.com/file/d/1bpLH1eTDBNm-Hw1bqv-asQDAPBWsg41H/view?usp=sharing"
												target="_blank"
											>
												Clic Aquí para descargar RD N° 000178/ 2021-D-FCB/UNMSM
											</a>
										</p>
									</div>
								</Col>
								<Col md="3" lg="2">
									<aside>
										<div className="contacto-wrapper mb-3">
											<p className="title-dark mb-2">Contacto:</p>
											<div className="grid-contacto">
												<div>
													<img className="icon mr-2" src="/assets/img/iconos/telefono.svg" alt="" />
												</div>
												<div>
													<span>+(51) 619 7000 anexo 1506</span>
												</div>
											</div>
											<div className="mb-0 grid-contacto">
												<div>
													<img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt="" />
												</div>
												<div>
													<span>icbar.biologia@unmsm.edu.pe</span>
												</div>
											</div>
										</div>
										<div className="block-interest-links mb-3">
											<p className="font-weight-bold mb-2 text-center">
												¿Te gustaría participar en un grupo de investigación?
											</p>
											<ul className="nav flex-column">
												<li className="mb-2 text-center font-weight-bold">
													<Link href="/investigacion/grupos-investigacion">
														<a>Infórmate aquí</a>
													</Link>
												</li>
											</ul>
										</div>
										<ProyectosExtra idProyectoDetalle={""} />
									</aside>
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

export default antonioRaimondi;
