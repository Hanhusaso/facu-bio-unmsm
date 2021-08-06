import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import { Row, Col, Container, Breadcrumb, Tabs, Tab } from "react-bootstrap";
import Link from "next/link";

const recursosInvestigacion = () => {
	return (
		<>
			<Layout title="Recursos para la investigación">
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
											Investigación: Recursos para la investigación
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
									<div className="title-page mb-2 text-center">Recursos para la investigación</div>
									{/* <div className="sub-title text-center">Egresada de la E.P. Microbiología y Parasitología </div> */}
								</Col>
								<Col md="1"></Col>
							</Row>
						</Container>
						<Container className="mb-4">
							<Row>
								<Col md="3"></Col>
								<Col md="6">
									<div>
										<input
											className="search-input"
											placeholder="Buscar por palabra clave"
											type="text"
										/>
									</div>
								</Col>
								<Col md="3"></Col>
							</Row>
						</Container>
						<Container>
							<Row>
								<Col md="1" lg="1"></Col>
								<Col md="7" lg="8">
									<div className="divisor"></div>
									<div className="grid-img-txt-3">
										<div>
											<img
												className="w-100 img-fluid"
												src="/assets/img/investigacion/recursos/recursos.jpg"
												alt=""
											/>
										</div>
										<div className="mb-3 mb-md-0">
											<div className="title">Repositorios</div>
											<Tabs defaultActiveKey="cybertesis" id="repositorios-tab">
												<Tab className="pt-2" eventKey="cybertesis" title="Cybertesis">
													<div>
														<p>
															Contiene los trabajos de investigación a texto completo que han sido
															realizados y autorizados por egresados de nuestra casa de estudios.
														</p>
														<p>
															<img
																className="icon mr-2"
																src="/assets/img/iconos/correo.svg"
																alt=""
															/>
															<span className="text-break">cybertesis@unmsm.edu.pe</span>
														</p>
														<p>
															{/* <img
																className="icon mr-2"
																src="/assets/img/iconos/telefono.svg"
																alt=""
															/>
															<span className="text-break">(511) 619-7000. Anexo: 7345/7445</span> */}
														</p>
														<a
															className="btn-green-bright"
															href="https://cybertesis.unmsm.edu.pe/"
															target="_blank"
														>
															Visitar página
														</a>
													</div>
												</Tab>
												<Tab className="pt-2" eventKey="revista" title="Revista UNMSM">
													<div>
														<p>
															Contiene las revistas de investigación de las facultades e institutos
															de la UNMSM.
														</p>
														<p>
															<img
																className="icon mr-2"
																src="/assets/img/iconos/correo.svg"
																alt=""
															/>
															<span className="text-break">revistasinvestigacion@unmsm.edu.pe</span>
														</p>
														<p>
															<img
																className="icon mr-2"
																src="/assets/img/iconos/telefono.svg"
																alt=""
															/>
															<span className="text-break">(511) 619-7000. Anexo: 7345/7445</span>
														</p>
														<a
															className="btn-green-bright"
															href="https://revistasinvestigacion.unmsm.edu.pe/"
															target="_blank"
														>
															Visitar página
														</a>
													</div>
												</Tab>
												<Tab className="pt-2" eventKey="fondoEditorial" title="Fondo editorial">
													<div>
														<p>
															Contiene la producción científica, humanística, docente, técnica,
															cultural y artística, tanto de los miembros de la UNMSM, como de los
															académicos de otras instituciones. Adicionalmente, este catálogo
															dispone de obras de valor histórico que son parte del patrimonio
															cultural de nuestra casa de estudios.
														</p>
														<p>
															<img
																className="icon mr-2"
																src="/assets/img/iconos/correo.svg"
																alt=""
															/>
															<span className="text-break">fondoedit@unmsm.edu.pe</span>
														</p>
														<p>
															{/* <img
																className="icon mr-2"
																src="/assets/img/iconos/telefono.svg"
																alt=""
															/>
															<span className="text-break">(511) 619-7000. Anexo: 7345/7445</span> */}
														</p>
														<a
															className="btn-green-bright"
															href="https://fondoeditorial.unmsm.edu.pe/index.php/fondoeditorial"
															target="_blank"
														>
															Visitar página
														</a>
													</div>
												</Tab>
												<Tab
													className="pt-2"
													eventKey="coleccionesespeciales"
													title="Colecciones Especiales"
												>
													<div>
														<p>
															Conjunto de contenidos en acceso abierto que pertenecen al acervo
															bibliográfico de la Biblioteca Central Pedro Zulen de la UNMSM.
														</p>
														<p>
															<img
																className="icon mr-2"
																src="/assets/img/iconos/correo.svg"
																alt=""
															/>
															<span className="text-break">fondoedit@unmsm.edu.pe</span>
														</p>
														<p>
															{/* <img
																className="icon mr-2"
																src="/assets/img/iconos/telefono.svg"
																alt=""
															/>
															<span className="text-break">(511) 619-7000. Anexo: 7345/7445</span> */}
														</p>
														<a
															className="btn-green-bright"
															href="https://repositorio.unmsm.edu.pe/"
															target="_blank"
														>
															Visitar página
														</a>
													</div>
												</Tab>
											</Tabs>
										</div>
									</div>
									<div className="divisor"></div>
									<div className="grid-img-txt-3">
										<div>
											<img
												className="w-100 img-fluid"
												src="/assets/img/investigacion/recursos/bd.jpg"
												alt=""
											/>
										</div>
										<div className="mb-3 mb-md-0">
											<div className="title">Bases de datos</div>
											<Tabs defaultActiveKey="multi" id="bd-tab">
												<Tab className="pt-2" eventKey="multi" title="Multidisciplinarias">
													<div>
														<p>Las bases de datos multidisciplinarias actualmente suscritas son:</p>
														<Container>
															<Row>
																<Col className="p-0">
																	<ul className="chevron-green-dark mb-3">
																		<li>Ebsco Host</li>
																		<li>Ebsco Discovery</li>
																		<li>Gale</li>
																	</ul>
																</Col>
																<Col className="p-0">
																	<ul className="chevron-green-dark mb-3">
																		<li>Proquest</li>
																		<li>Science Direct</li>
																		<li>Scopus</li>
																	</ul>
																</Col>
															</Row>
														</Container>
														<a className="btn-green-bright" href="">
															Visitar página
														</a>
													</div>
												</Tab>
												<Tab className="pt-2" eventKey="bio" title="Biología">
													<div>2</div>
												</Tab>
												<Tab className="pt-2" eventKey="capacit" title="Capacitaciones">
													<div>3</div>
												</Tab>
											</Tabs>
										</div>
									</div>
									<div className="divisor"></div>
									<div className="grid-img-txt-3">
										<div>
											<img
												className="w-100 img-fluid"
												src="/assets/img/investigacion/recursos/bd.jpg"
												alt=""
											/>
										</div>
										<div className="mb-3 mb-md-0">
											<div className="title">Archivos digitales</div>
											<Tabs defaultActiveKey="multi" id="bd-tab">
												<Tab className="pt-2" eventKey="multi" title="Multidisciplinarias">
													<div>
														<p>Las bases de datos multidisciplinarias actualmente suscritas son:</p>
														<Container>
															<Row>
																<Col className="p-0">
																	<ul className="chevron-green-dark mb-3">
																		<li>Ebsco Host</li>
																		<li>Ebsco Discovery</li>
																		<li>Gale</li>
																	</ul>
																</Col>
																<Col className="p-0">
																	<ul className="chevron-green-dark mb-3">
																		<li>Proquest</li>
																		<li>Science Direct</li>
																		<li>Scopus</li>
																	</ul>
																</Col>
															</Row>
														</Container>
														<a className="btn-green-bright" href="">
															Visitar página
														</a>
													</div>
												</Tab>
												<Tab className="pt-2" eventKey="bio" title="Biología">
													<div>2</div>
												</Tab>
												<Tab className="pt-2" eventKey="capacit" title="Capacitaciones">
													<div>3</div>
												</Tab>
											</Tabs>
										</div>
									</div>
								</Col>
								<Col md="3" lg="2">
									<aside>
										<div className="block-interest-links mb-3">
											<p className="font-weight-bold mb-2 text-center">
												¿Necesitas ayuda con el uso de estos recursos?
											</p>
											<ul className="nav flex-column">
												<li className="mb-2 text-center font-weight-bold">
													<Link href="https://sisbib.unmsm.edu.pe/">
														<a target="_blank">Pregúntale al bibliotecario</a>
													</Link>
												</li>
											</ul>
										</div>
										<div className="d-flex mb-3">
											<h2 className="subtitle-green mr-1 mb-0">Proyectos</h2>
											<a href="#" className="d-inline-block">
												<img src="/assets/img/iconos/boton_vermas.png" />
											</a>
										</div>
										<div>
											<div className="card-bio mb-3">
												<div className="part-img position-relative">
													<div className="position-relative">
														<img
															className="w-100 img-fluid"
															src="/assets/img/noticias/noticia2.png"
														></img>
														<div className="dark-filter"></div>
													</div>
												</div>
												<div className="part-text">
													<p className="title-card mb-0">
														Dos científicas ganan el Premio Nobel de Química 2020 por “tijeras
														genéticas” CRISPR-Cas9
													</p>
												</div>
											</div>
											<div className="card-bio mb-3">
												<div className="part-img position-relative">
													<div className="position-relative">
														<img
															className="w-100 img-fluid"
															src="/assets/img/noticias/noticia3.png"
														></img>
														<div className="dark-filter"></div>
													</div>
												</div>
												<div className="part-text">
													<p className="title-card mb-0">
														El objetivo de nuestro proyecto es ir en camino a producir clones de
														alpacas
													</p>
												</div>
											</div>
											<div className="card-bio mb-3">
												<div className="part-img position-relative">
													<div className="position-relative">
														<img
															className="w-100 img-fluid"
															src="/assets/img/noticias/noticia4.png"
														></img>
														<div className="dark-filter"></div>
													</div>
												</div>
												<div className="part-text">
													<p className="title-card mb-0">
														¡La FCB ya cuenta oficialmente con un nuevo y moderno pabellón!
													</p>
												</div>
											</div>
										</div>
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

export default recursosInvestigacion;
