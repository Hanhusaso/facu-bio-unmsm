import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
// import styles from '../styles/Home.module.css'
import LoaderPage from "../components/LoaderPage";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import SocialMedia from "../components/SocialMedia";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import ClampLines from "react-clamp-lines";
import { getNoticiasHomeApi, getNoticiasSubcategoriasApi } from "./api/noticias";
import { getEventosHomeApi } from "./api/eventos";
import { getProyectosHomeApi } from "./api/proyectos";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Home() {
	const [loadingPage, setLoadingPage] = useState(true);

	const [noticias, setNoticias] = useState([]);
	const [noticiasSubcategorias, setNoticiasSubcategorias] = useState([]);
	const [eventos, setEventos] = useState([]);
	const [proyectos, setProyectos] = useState([]);
	const { scrollYProgress } = useViewportScroll();
	const intro_noticias = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);
	const noticia_uno = useTransform(scrollYProgress, [0, 0.2], [-200, 0]);
	const noticia_dos = useTransform(scrollYProgress, [0, 0.2], [200, 0]);
	const noticia_tres = useTransform(scrollYProgress, [0, 0.2], [400, 0]);
	const noticia_cuatro = useTransform(scrollYProgress, [0, 0.2], [600, 0]);
	const intro_carreras = useTransform(scrollYProgress, [0.2, 0.4], [0.2, 1]);
	const intro_proyectos = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);
	const proyecto_uno = useTransform(scrollYProgress, [0, 0.2], [-200, 0]);
	const proyecto_dos = useTransform(scrollYProgress, [0, 0.2], [200, 0]);
	const proyecto_tres = useTransform(scrollYProgress, [0, 0.2], [400, 0]);
	const proyecto_cuatro = useTransform(scrollYProgress, [0, 0.2], [600, 0]);
	const microscopio = useTransform(scrollYProgress, [0.7, 0.85], [0.3, 1]);

	const months = [
		"enero",
		"febrero",
		"marzo",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agosto",
		"septiembre",
		"octubre",
		"noviembre",
		"diciembre",
	];

	function formatAMPM(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? "p.m." : "a.m.";
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? "0" + minutes : minutes;
		var strTime = hours + ":" + minutes + " " + ampm;
		return strTime;
	}

	function obtenerNombreGrupoInvestigacion(grupo_investigacion){
		switch(grupo_investigacion){
			case 'aplicacion_clinica_de_recursos_naturales' : return 'Aplicación clínica de recursos naturales';
			case 'acuicultura_y_nutricion_de_organismos_acuaticos' : return 'Acuicultura y nutrición de organismos acuáticos';
			case 'biologia_ecologia_y_cultivo_hacia_el_aprovechamiento_sostenible_del_recurso_alga' : return 'Biología, ecología y cultivo, hacia el aprovechamiento sostenible del recurso alga';
			case 'biologia_molecular_y_biotecnologia' : return 'Biología molecular y biotecnología';
			case 'biologia_molecular_de_parasitos_y_de_recursos_pesqueros' : return 'Biología molecular de parásitos y de recursos pesqueros';
			case 'biodiversidad_y_ecologia_de_ambientes_acuaticos_continentales' : return 'Biodiversidad y ecología de ambientes acuáticos continentales';
			case 'grupo_de_investigacion_en_bioeconomia' : return 'Grupo de investigación en bioeconomía';
			case 'biodiversidad_de_ecosistemas_neotropicales' : return 'Biodiversidad de ecosistemas neotropicales';
			case 'biotecnologia_para_la_remediacion' : return 'Biotecnología para la remediación';
			case 'biodiversidad_y_taxonomia_de_invertebrados_marinos_para_conservacion_y_manejo_de_ambientes_marinos' : return 'Biodiversidad y taxonomía de invertebrados marinos para conservación y manejo de ambientes marinos';
			case 'reproduccion_biologia_del_desarrollo_y_ecotoxicologia' : return 'Reproducción, biología del desarrollo y ecotoxicología';
			case 'biotecnologia_reproductiva_para_la_conservacion_y_mejora_genetica_animal' : return 'Biotecnología reproductiva para la conservación y mejora genética animal';
			case 'calidad_biologica_y_fisico_quimica_de_alimentos_aguas_y_ambientes' : return 'Calidad biológica y físico-química de alimentos, aguas y ambientes';
			case 'citogenetica_y_sistemas_modelo_de_drosophila' : return 'Citogenética y sistemas modelo de drosophila';
			case 'delimitacion_de_la_biodiversidad_de_especies_y_macroevolucion' : return 'Delimitación de la biodiversidad de especies y macroevolución';
			case 'diversidad_de_mamiferos_y_sus_parasitos_y_su_implicancia_en_enfermedades_zoonoticas_emergentes' : return 'Diversidad de mamíferos y sus parásitos y su implicancia en enfermedades zoonóticas emergentes';
			case 'diversidad_sistematica_de_artropodos_neotropicales' : return 'Diversidad y sistemática de artrópodos neotropicales';
			case 'grupo_de_investigacion_en_ecosistemas_marinos_y_costeros' : return 'Grupo de investigación en ecosistemas marinos y costeros';
			case 'ecologia_y_genetica_de_virus_emergentes_y_reemergentes' : return 'Ecología y genética de virus emergentes y reemergentes';
			case 'evolucion_molecular_de_la_biota_en_el_peru' : return 'Evolución molecular de la biota en el Perú';
			case 'estudio_de_las_poblaciones_amenazadas_de_la_flora' : return 'Estudio de las poblaciones amenazadas de la flora';
			case 'genes_cromosomas_y_genomas_de_mamiferos' : return 'Genes, cromosomas y genomas de mamíferos';
			case 'genetica_de_enfermedades_metabolicas' : return 'Genética de enfermedades metabólicas';
			case 'grupo_de_investigacion_en_bioinformatica_y_biologia_estructural' : return 'Grupo de investigación en bioinformática y biología estructural';
			case 'genomica_funcional_de_microorganismos_y_biorremediacion' : return 'Genómica funcional de microorganismos y biorremediación';
			case 'inmunomoduladores_y_antitumorales_de_origen_natural_y_sintetico' : return 'Inmunomoduladores y antitumorales de origen natural y sintético';
			case 'investigacion_y_desarrollo_de_procesos_biotecnologicos_agroindustriales_y_ambientales' : return 'Investigación y desarrollo de procesos biotecnológicos agroindustriales y ambientales';
			case 'grupo_de_investigacion_en_recursos_geneticos' : return 'Grupo de investigación en recursos genéticos';
			case 'recursos_naturales_y_bioactivos' : return 'Recursos naturales y bioactivos';
			case 'restauracion_ecologica_de_ecosistemas_terrestres_y_acuaticas_del_peru' : return 'Restauración ecológica de ecosistemas terrestres y acuáticas del Perú';
			case 'grupo_de_investigacion_en_toxinas_de_origen_animal_y_sus_antivenenos' : return 'Grupo de investigación en toxinas de origen animal y sus antivenenos';
			case 'inmunologia_parasitaria_en_humanos_y_animales_de_importancia_en_salud_publica' : return 'Inmunología parasitaria en humanos y animales de importancia en salud pública';
			case 'virologia_clinica_molecular_inmunopatogenesis_y_antivirales' : return 'Virología clínica molecular inmunopatogénesis y antivirales';
			case 'biota_acuatica' : return 'Biota acuática';
			default : return '';
		}
	}

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setLoadingPage(false);
	// 	}, 800);

	// 	(async () => {
	// 		const response_noticias = await getNoticiasHomeApi();
	// 		const response_subcategorias = await getNoticiasSubcategoriasApi();
	// 		setNoticias(response_noticias);
	// 		setNoticiasSubcategorias(response_subcategorias);
	// 		const response_eventos = await getEventosHomeApi();
	// 		setEventos(response_eventos);
	// 	})();
	// }, [loadingPage]);
	useEffect(() => {
		setTimeout(() => {
			setLoadingPage(false);
		}, 300);
	}, []);

	useEffect(() => {
		(async () => {
			const response_noticias = await getNoticiasHomeApi();
			const response_subcategorias = await getNoticiasSubcategoriasApi();
			setNoticias(response_noticias);
			setNoticiasSubcategorias(response_subcategorias);
			const response_eventos = await getEventosHomeApi();
			setEventos(response_eventos);
			const response_proyectos = await getProyectosHomeApi();
			setProyectos(response_proyectos);
		})();
	}, []);

	return (
		<div>
			{noticias.length != 0 &&
			noticiasSubcategorias.length != 0 &&
			eventos.length != 0 &&
			proyectos.length != 0 &&
			!loadingPage ? (
				<div>
					<Head>
						<title>Facultad de Ciencias Biológicas</title>
						<link rel="icon" href="/assets/img/favicon/logo.ico" />
					</Head>
					<Menu />
					<SocialMedia />
					<main>
						<section className="section-principal-home section-eventos">
							<video className="bg-home-video" loop autoplay="true" muted>
								<source src="/assets/video/facu_bio.mp4" type="video/mp4" />
							</video>
							<motion.div
								className="wrapper-title-home"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2.5 }}
							>
								<Container fluid>
									<Row>
										{/* <Col></Col> */}
										<Col md={{ span: 11, offset: 1 }}>
											<div className="d-flex align-items-center">
												<img
													className="logo-unmsm mr-2"
													src="/assets/img/iconos/escudo_sanmarcos.png"
												/>
												<div className="title-letters pl-2 mb-0">
													UNMSM
													<br />
													Facultad de
													<br />
													Ciencias Biológicas
												</div>
											</div>
										</Col>
									</Row>
								</Container>
							</motion.div>
							<motion.div
								className="wrapper-eventos"
								initial={{ left: "100vw", opacity: 0 }}
								animate={{ left: 0, opacity: 1 }}
								transition={{ duration: 1.5 }}
							>
								<Container fluid>
									<Row>
										<Col md={{ span: 11, offset: 1 }} className="pr-0">
											<div className="ml-2 pad-extra-left">
												<div className="d-flex">
													<h2 className="subtitle-green mr-1 mb-0">Eventos</h2>
													<motion.a
														href="/eventos"
														whileHover={{ scale: 1.1 }}
														className="d-inline-block"
													>
														<img src="/assets/img/iconos/boton_vermas.png" />
													</motion.a>
												</div>
												<div className="wrapper-just-events">
													<Container fluid className="px-0">
														<Row>
															{eventos[0] ? (
																<Col>
																	<a href={`eventos/evento?nombre=${eventos[0]?.url_nombre}`}>
																		<p className="fecha-evento" style={{color: "#fff"}}>
																			<span>
																				{new Date(eventos[0]?.fechaInicio).getDate() < 10
																					? "0" + new Date(eventos[0]?.fechaInicio).getDate()
																					: new Date(eventos[0]?.fechaInicio).getDate()}{" "}
																				{months[new Date(eventos[0]?.fechaInicio).getMonth()]}
																			</span>
																			<span className="divisor-text mx-2"></span>
																			<span>{formatAMPM(new Date(eventos[0].fechaInicio))}</span>
																		</p>
																		<p className="titulo-evento" style={{color: "#fff"}}>{eventos[0]?.nombre}</p>
																		<p className="lugar-evento mb-0">{eventos[0]?.lugar}</p>
																	</a>
																</Col>
															) : (
																""
															)}
															{eventos[1] ? (
																<Col>
																	<a href={`eventos/evento?nombre=${eventos[1]?.url_nombre}`}>
																		<p className="fecha-evento" style={{color: "#fff"}}>
																			<span>
																				{new Date(eventos[1]?.fechaInicio).getDate() < 10
																					? "0" + new Date(eventos[1]?.fechaInicio).getDate()
																					: new Date(eventos[1]?.fechaInicio).getDate()}{" "}
																				{months[new Date(eventos[1]?.fechaInicio).getMonth()]}
																			</span>
																			<span className="divisor-text mx-2"></span>
																			<span>{formatAMPM(new Date(eventos[1].fechaInicio))}</span>
																		</p>
																		<p className="titulo-evento" style={{color: "#fff"}}>{eventos[1]?.nombre}</p>
																		<p className="lugar-evento mb-0">{eventos[1]?.lugar}</p>
																	</a>
																</Col>
															) : (
																""
															)}
															{eventos[2] ? (
																<Col>
																	<a href={`eventos/evento?nombre=${eventos[2]?.url_nombre}`}>
																		<p className="fecha-evento" style={{color: "#fff"}}>
																			<span>
																				{new Date(eventos[2]?.fechaInicio).getDate() < 10
																					? "0" + new Date(eventos[2]?.fechaInicio).getDate()
																					: new Date(eventos[2]?.fechaInicio).getDate()}{" "}
																				{months[new Date(eventos[2]?.fechaInicio).getMonth()]}
																			</span>
																			<span className="divisor-text mx-2"></span>
																			<span>{formatAMPM(new Date(eventos[2].fechaInicio))}</span>
																		</p>
																		<p className="titulo-evento" style={{color: "#fff"}}>{eventos[2]?.nombre}</p>
																		<p className="lugar-evento mb-0">{eventos[2]?.lugar}</p>
																	</a>
																</Col>
															) : (
																""
															)}
															{eventos[3] ? (
																<Col>
																	<a href={`eventos/evento?nombre=${eventos[3]?.url_nombre}`}>
																		<p className="fecha-evento" style={{color: "#fff"}}>
																			<span>
																				{new Date(eventos[3]?.fechaInicio).getDate() < 10
																					? "0" + new Date(eventos[3]?.fechaInicio).getDate()
																					: new Date(eventos[3]?.fechaInicio).getDate()}{" "}
																				{months[new Date(eventos[3]?.fechaInicio).getMonth()]}
																			</span>
																			<span className="divisor-text mx-2"></span>
																			<span>{formatAMPM(new Date(eventos[3].fechaInicio))}</span>
																		</p>
																		<p className="titulo-evento" style={{color: "#fff"}}>{eventos[3]?.nombre}</p>
																		<p className="lugar-evento mb-0">{eventos[3]?.lugar}</p>
																	</a>
																</Col>
															) : (
																""
															)}
															{/* <Col>
                              <p className="fecha-evento">
                                <span>03 marzo</span>
                                <span className="divisor-text mx-2"></span>
                                <span>3 p.m.</span>
                              </p>
                              <p className="titulo-evento">
                                Conferencia “Microrganismos de la selva central del Perú, un estudio de descubrimiento”
                              </p>
                              <p className="lugar-evento mb-0">
                                Auditorio Tomas Romero-Facultad 3 piso
                              </p>
                            </Col> */}
														</Row>
													</Container>
												</div>
											</div>
										</Col>
									</Row>
								</Container>
							</motion.div>
						</section>
						<div className="bg-green-png">
							<section className="section-noticias pt-5 mb-5">
								<div>
									<div className="mb-3">
										<Container>
											<Row>
												<Col md={{ span: 10, offset: 1 }}>
													<div className="d-flex justify-content-end">
														<h2 className="subtitle-green mr-1 mb-0">Noticias</h2>
														<a href="/noticias" className="d-inline-block">
															<img src="/assets/img/iconos/boton_vermas.png" />
														</a>
													</div>
												</Col>
											</Row>
										</Container>
									</div>
									<Container>
										<Row>
											<Col md="1"></Col>
											{/* <Col className="d-flex flex-column position-relative" md={{ span: 4, offset: 1 }}> */}
											<Col
												className="d-flex flex-column position-relative"
												md={{ span: 4, offset: 0 }}
											>
												<motion.p
													className="mb-0 txt-noticias-bg"
													style={{
														opacity: intro_noticias,
													}}
												>
													Entérate de
													<br />
													las últimas
													<br />
													novedades
												</motion.p>
												{noticias[0] ? 
													<motion.a
														style={{ x: noticia_uno }}
														whileHover={{ scale: 1.05 }}
														transition={{ duration: 0.2 }}
														href={`noticias/noticia?titulo=${noticias[0].url_titulo}`}
														className="position-relative box-shadow mt-auto"
													>
														<div className="position-relative">
															<img
																className="w-100 img-fluid"
																src={
																	noticias[0].imagen_banner ? noticias[0].imagen_banner[0].url : ""
																}
															></img>
															<div className="dark-filter"></div>
														</div>
														<div className="caption-img">{noticias[0]?.titulo}</div>
													</motion.a>
												: 
												''}
											</Col>
											<Col md="2">
											{noticias[1] ?
												<a
													className="color-inherit"
													href={`noticias/noticia?titulo=${noticias[1].url_titulo}`}
												>
													<motion.div
														style={{ y: noticia_dos }}
														className="card-bio"
														whileHover={{ scale: 1.05 }}
														transition={{ duration: 0.2 }}
													>
														<div className="part-img position-relative">
															<div className="position-relative">
																<img
																	className="w-100 img-fluid"
																	src={
																		noticias[1].imagen_previsualizacion
																			? noticias[1].imagen_previsualizacion[0].url
																			: ""
																	}
																></img>
																<div className="dark-filter"></div>
															</div>
															<div className="badge-tag">
																{
																	noticiasSubcategorias[
																		noticias[1]?.id_categoria_subcategoria.id_subcategoria - 1
																	].nombre
																}
															</div>
														</div>
														<div className="part-text filter">
															<p className="title-card">{noticias[1]?.titulo}</p>
															<p className="desc-card mb-0">{noticias[1]?.sintesis}</p>
															{/* <ClampLines
																	text={"La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna “han reescrito un artículo muy interesante sobre la estructura del ADN."}
																	lines={4}
																	buttons={false}
																	ellipsis="..."
																	className="desc-card mb-0"
																/> */}
														</div>
													</motion.div>
												</a>
											:
											''
											}	
											</Col>
											<Col md="2">
											{noticias[2] ?
												<a
													className="color-inherit"
													href={`noticias/noticia?titulo=${noticias[2].url_titulo}`}
												>
													<motion.div
														style={{ y: noticia_tres }}
														className="card-bio"
														whileHover={{ scale: 1.05 }}
														transition={{ duration: 0.2 }}
													>
														<div className="part-img position-relative">
															<div className="position-relative">
																<img
																	className="w-100 img-fluid"
																	src={
																		noticias[2].imagen_previsualizacion
																			? noticias[2].imagen_previsualizacion[0].url
																			: ""
																	}
																></img>
																<div className="dark-filter"></div>
															</div>
															<div className="badge-tag">
																{
																	noticiasSubcategorias[
																		noticias[2]?.id_categoria_subcategoria.id_subcategoria - 1
																	].nombre
																}
															</div>
														</div>
														<div className="part-text filter">
															<p className="title-card">{noticias[2]?.titulo}</p>
															<p className="desc-card mb-0">{noticias[2]?.sintesis}</p>
															{/* <ClampLines
																	text={"La Dra. Martha Valdivia explicó que con su proyecto también se busca ayudar a otras especies peruanas que viven a grandes alturas en nuestro país. El proyecto busca."}
																	lines={4}
																	buttons={false}
																	ellipsis="..."
																	className="desc-card mb-0"
																/> */}
														</div>
													</motion.div>
												</a>
											:
											''
											}
											</Col>
											<Col md="2">
											{noticias[3] ?
												<a
												className="color-inherit"
												href={`noticias/noticia?titulo=${noticias[3].url_titulo}`}
												>
													<motion.div
														style={{ y: noticia_cuatro }}
														whileHover={{ scale: 1.05 }}
														transition={{ duration: 0.2 }}
														className="card-bio"
													>
														<div className="part-img position-relative">
															<div className="position-relative">
																<img
																	className="w-100 img-fluid"
																	src={
																		noticias[3].imagen_previsualizacion
																			? noticias[3].imagen_previsualizacion[0].url
																			: ""
																	}
																></img>
																<div className="dark-filter"></div>
															</div>
															<div className="badge-tag">
																{
																	noticiasSubcategorias[
																		noticias[3]?.id_categoria_subcategoria.id_subcategoria - 1
																	].nombre
																}
															</div>
														</div>
														<div className="part-text filter">
															<p className="title-card">{noticias[3]?.titulo}</p>
															<p className="desc-card mb-0">{noticias[3]?.sintesis}</p>
															{/* <ClampLines
																text={"La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna “han reescrito un artículo muy interesante sobre la estructura del ADN en situaciones de."}
																lines={4}
																buttons={false}
																ellipsis="..."
																className="desc-card mb-0"
															/> */}
														</div>
													</motion.div>
												</a>
											:
											''
											}
											</Col>
											<Col md="1"></Col>
										</Row>
									</Container>
								</div>
							</section>
							<section className="section-carreras mb-4">
								<div className="mb-2">
									<Container>
										<Row>
											<Col md={{ span: 10, offset: 1 }}>
												<motion.div
													style={{ opacity: intro_carreras }}
													className="big-text text-right"
												>
													Encuentra tu vocación
												</motion.div>
											</Col>
										</Row>
									</Container>
								</div>
								<div className="mb-4">
									<Container>
										<Row>
											<Col md={{ span: 10, offset: 1 }}>
												<div className="d-flex">
													<h2 className="subtitle-green mr-1 mb-0">Carreras</h2>
													<a href="/formacion-academica/pregrado" className="d-inline-block">
														<img src="/assets/img/iconos/boton_vermas.png" />
													</a>
												</div>
											</Col>
										</Row>
									</Container>
								</div>
								<div>
									<Container>
										<Row>
											<Col md={{ span: 10, offset: 1 }}>
												<div className="wrapper-carreras">
													<div>
														<Link href="/formacion-academica/pregrado/microbiologia-parasitologia">
															<a className="d-block wrapper-caption">
																<img
																	className="w-100 img-fluid"
																	src="/assets/img/carreras/home/microbiologia_parasitologia_color.png"
																></img>
																<div className="caption-hover">
																	<div className="caption text-shadow">
																		EP. Microbiología y Parasitología
																	</div>
																</div>
															</a>
														</Link>
													</div>
													<div>
														<Link href="/formacion-academica/pregrado/genetica-biotecnologia">
															<a className="d-block wrapper-caption">
																<img
																	className="w-100 img-fluid"
																	src="/assets/img/carreras/home/genetica_biotecnologia_color.png"
																></img>
																<div className="caption-hover">
																	<div className="caption text-shadow">
																		EP. Genética y Biotecnología
																	</div>
																</div>
															</a>
														</Link>
													</div>
													<div>
														<Link href="/formacion-academica/pregrado/ciencias-biologicas">
															<a className="d-block wrapper-caption">
																<img
																	className="w-100 img-fluid"
																	src="/assets/img/carreras/home/ciencias_biologicas_color.png"
																></img>
																<div className="caption-hover">
																	<div className="caption text-shadow">EP. Ciencias biológicas</div>
																</div>
															</a>
														</Link>
													</div>
												</div>
											</Col>
										</Row>
									</Container>
								</div>
							</section>
							<section className="section-proyectos pt-5 mb-5">
								<div>
									<div className="mb-3">
										<Container>
											<Row>
												<Col md={{ span: 10, offset: 1 }}>
													<div className="d-flex justify-content-end">
														<h2 className="subtitle-green mr-1 mb-0">Producción científica</h2>
														<a href="/investigacion/proyectos" className="d-inline-block">
                              								<img src="/assets/img/iconos/boton_vermas.png"/>
                            							</a>
													</div>
												</Col>
											</Row>
										</Container>
									</div>
									<Container>
										<Row>
											<Col md="1"></Col>
											{/* <Col className="d-flex flex-column position-relative" md={{ span: 4, offset: 1 }}> */}
											<Col
												className="d-flex flex-column position-relative"
												md={{ span: 4, offset: 0 }}
											>
												<motion.p
													className="mb-0 txt-proyectos-bg"
													style={{
														opacity: intro_proyectos,
													}}
												>
													Descubre el trabajo
													<br />
													de alumnos, docentes
													<br />y egresados
												</motion.p>
												{proyectos[0] ? 
													<motion.a
														style={{ x: proyecto_uno }}
														whileHover={{ scale: 1.05 }}
														transition={{ duration: 0.2 }}
														href={`investigacion/proyectos/proyecto?nombre=${proyectos[0].url_nombre}`}
														className="position-relative box-shadow mt-auto"
													>
														<div className="position-relative">
															<div className="position-relative">
																<img
																	className="w-100 img-fluid"
																	src={
																		proyectos[0].imagen ? proyectos[0].imagen.url : ""
																	}
																></img>
																<div className="dark-filter"></div>
															</div>
															<div className="caption-img">
																{proyectos[0]?.nombre} <br></br>
																{proyectos[0].responsable == null || proyectos[0].responsable == '' ? obtenerNombreGrupoInvestigacion(proyectos[0].grupo_investigacion) : proyectos[0].responsable}
															</div>
														</div>
													</motion.a>
												:
												''
												}
											</Col>
											<Col md="2">
											{proyectos[1] ?
												<a
													className="color-inherit"
													href={`investigacion/proyectos/proyecto?nombre=${proyectos[1].url_nombre}`}
												>
													<motion.div 
														style={{ y: proyecto_dos }}
														className="card-bio"
														whileHover={{ scale: 1.05 }}
														transition={{ duration: 0.2 }}
													>
														<div className="part-img position-relative">
															<div className="position-relative">
																<img
																	className="w-100 img-fluid"
																	src={
																		proyectos[1].imagen
																			? proyectos[1].imagen.url
																			: ""
																	}
																></img>
																<div className="dark-filter"></div>
															</div>
														</div>
														<div className="part-text">
															<p className="title-card">
																{proyectos[1].nombre}
															</p>
															<p className="author-card mb-0">{proyectos[1].responsable == null || proyectos[1].responsable == '' ? obtenerNombreGrupoInvestigacion(proyectos[1].grupo_investigacion) : proyectos[1].responsable}</p>
															{/* <ClampLines
																text={"La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna “han reescrito un artículo muy interesante sobre la estructura del ADN."}
																lines={4}
																buttons={false}
																ellipsis="..."
																className="desc-card mb-0"
															/> */}
														</div>
													</motion.div>
												</a>
											:
											''
											}
											</Col>
											<Col md="2">
											{proyectos[2] ?
												<a
													className="color-inherit"
													href={`investigacion/proyectos/proyecto?nombre=${proyectos[2].url_nombre}`}
												>
													<motion.div 
														style={{ y: proyecto_tres }}
														className="card-bio"
														whileHover={{ scale: 1.05 }}
														transition={{ duration: 0.2 }}
													>
														<div className="part-img position-relative">
															<div className="position-relative">
																<img
																	className="w-100 img-fluid"
																	src={
																		proyectos[2].imagen
																			? proyectos[2].imagen.url
																			: ""
																	}
																></img>
																<div className="dark-filter"></div>
															</div>
														</div>
														<div className="part-text">
															<p className="title-card">
																{proyectos[2].nombre}
															</p>
															<p className="author-card mb-0">{proyectos[2].responsable == null || proyectos[2].responsable == '' ? obtenerNombreGrupoInvestigacion(proyectos[2].grupo_investigacion) : proyectos[2].responsable}</p>
															{/* <ClampLines
																text={"La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna “han reescrito un artículo muy interesante sobre la estructura del ADN."}
																lines={4}
																buttons={false}
																ellipsis="..."
																className="desc-card mb-0"
															/> */}
														</div>
													</motion.div>
												</a>
											:
											''
											}
											</Col>
											<Col md="2">
											{proyectos[3] ?
												<a
													className="color-inherit"
													href={`investigacion/proyectos/proyecto?nombre=${proyectos[3].url_nombre}`}
												>
													<motion.div 
														style={{ y: proyecto_cuatro }}
														className="card-bio"
														whileHover={{ scale: 1.05 }}
														transition={{ duration: 0.2 }}
													>
														<div className="part-img position-relative">
															<div className="position-relative">
																<img
																	className="w-100 img-fluid"
																	src={
																		proyectos[3].imagen
																			? proyectos[3].imagen.url
																			: ""
																	}
																></img>
																<div className="dark-filter"></div>
															</div>
														</div>
														<div className="part-text">
															<p className="title-card">
																{proyectos[3].nombre}
															</p>
															<p className="author-card mb-0">{proyectos[3].responsable == null || proyectos[3].responsable == '' ? obtenerNombreGrupoInvestigacion(proyectos[3].grupo_investigacion) : proyectos[3].responsable}</p>
															{/* <ClampLines
																text={"La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna “han reescrito un artículo muy interesante sobre la estructura del ADN."}
																lines={4}
																buttons={false}
																ellipsis="..."
																className="desc-card mb-0"
															/> */}
														</div>
													</motion.div>
												</a>
											:
											''
											}
											</Col>
											<Col md="1"></Col>
										</Row>
									</Container>
								</div>
							</section>
							<section className="section-mision-numeros mb-5">
								<Container>
									<Row>
										<Col md={{ span: 6, offset: 1 }}>
											<div className="d-flex align-items-end mb-5">
												<motion.img
													className="microscopio"
													style={{ scale: microscopio }}
													src="/assets/img/iconos/microscopio.png"
													alt="microscopio"
												/>
												<div className="txt-numeros-bg">
													<div className="mb-1">
														<span className="big-badge">La</span>
													</div>
													<div className="mb-1">
														<span className="big-badge mr-1">Facultad</span>
														<span className="big-badge">en</span>
													</div>
													<div className="text-right">
														<span className="big-badge recolor">números</span>
													</div>
												</div>
											</div>
											<div className="text-white text-center">
												<Container>
													<Row>
														<Col></Col>
														<Col>
															<div className="wrapper-icon">
																<img
																	src="/assets/img/iconos/icono_persona_numero.png"
																	alt="persona"
																/>
															</div>
															<div>
																<span>+</span>
																<span>900</span>
															</div>
															<div>
																<span>Alumnos</span>
															</div>
														</Col>
														<Col>
															<div className="wrapper-icon">
																<img src="/assets/img/iconos/icono_lupa_numeros.png" alt="lupa" />
															</div>
															<div>
																{/* <span>+</span> */}
																<span>132</span>
															</div>
															<div>
																<span>Docentes investigadores</span>
															</div>
														</Col>
														<Col>
															<div className="wrapper-icon">
																<img
																	src="/assets/img/iconos/icono_articulos_numeros.png"
																	alt="articulos"
																/>
															</div>
															<div>
																{/* <span>+</span> */}
																<span>56</span>
															</div>
															<div>
																<span>Artículos publicados</span>
															</div>
														</Col>
														<Col>
															<div className="wrapper-icon">
																<img src="/assets/img/iconos/icono_tesis_numeros.png" alt="tesis" />
															</div>
															<div>
																{/* <span>+</span> */}
																<span>773</span>
															</div>
															<div>
																<span>Tesis realizadas</span>
															</div>
														</Col>
														<Col></Col>
													</Row>
												</Container>
											</div>
										</Col>
										<Col md={{ span: 4 }}>
											<div className="section-mision">
												<Carousel
													fade
													indicators={false}
													controls={false}
													interval="5000"
													className="text-right carousel-text"
												>
													<Carousel.Item>
														<h3 className="semi-big-text">Nuestra misión</h3>
														<p>
															Formamos profesionales e investigadores líderes en la generación y
															difusión del conocimiento científico de nuestra diversidad biológica,
															con valores respetuosos de la diversidad cultural, promotores de la
															identidad nacional basada en una cultura de calidad y responsabilidad
															social para contribuir al desarrollo sostenible del país y la
															sociedad.
														</p>
													</Carousel.Item>
													<Carousel.Item>
														<h3 className="semi-big-text">Nuestra visión</h3>
														<p>
															Ser referente nacional e internacional en la generación de
															conocimiento, desarrollo e innovación en el área de las Ciencias
															Biológicas y la educación de calidad.
														</p>
													</Carousel.Item>
												</Carousel>
											</div>
										</Col>
									</Row>
								</Container>
							</section>
						</div>
					</main>
					<Footer></Footer>
				</div>
			) : (
				<LoaderPage />
			)}
		</div>
	);
}
