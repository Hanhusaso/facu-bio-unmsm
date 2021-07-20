import Head from "next/head";
import Link from "next/link";
// import styles from '../styles/Home.module.css'
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import SocialMedia from "../components/SocialMedia";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import ClampLines from "react-clamp-lines";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function Home() {
	const { scrollYProgress } = useViewportScroll();
	const yScroll = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
	const yScroll2 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
	const scroll = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
	const scroll2 = useTransform(scrollYProgress, [0, 0.2], [300, 0]);
	const scroll3 = useTransform(scrollYProgress, [0, 0.2], [500, 0]);
	return (
		<div>
			<Head>
				<title>Facultad de Ciencias Biológicas</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Menu />
			<SocialMedia />

			<main>
				<section className="section-principal-home section-eventos">
					<video className="bg-home-video" loop autoplay="true" muted>
						<source src="/assets/video/Prueba1_1.mp4" type="video/mp4" />
					</video>
					<div className="wrapper-title-home">
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
					</div>
					<div className="wrapper-eventos">
						<Container fluid>
							<Row>
								<Col md={{ span: 11, offset: 1 }} className="pr-0">
									<motion.div style={{ opacity: yScroll }} className="ml-2 pad-extra-left">
										<div className="d-flex">
											<h2 className="subtitle-green mr-1 mb-0">Eventos</h2>
											<a href="#" className="d-inline-block">
												<img src="/assets/img/iconos/boton_vermas.png" />
											</a>
										</div>
										<div className="wrapper-just-events">
											<Container fluid className="px-0">
												<Row>
													<Col>
														<p className="fecha-evento">
															<span>03 marzo</span>
															<span className="divisor-text mx-2"></span>
															<span>3 p.m.</span>
														</p>
														<p className="titulo-evento">
															Conferencia “Microrganismos de la selva central del Perú, un estudio
															de descubrimiento”
														</p>
														<p className="lugar-evento mb-0">
															Auditorio Tomas Romero-Facultad 3 piso
														</p>
													</Col>
													<Col>
														<p className="fecha-evento">
															<span>03 marzo</span>
															<span className="divisor-text mx-2"></span>
															<span>3 p.m.</span>
														</p>
														<p className="titulo-evento">
															Conferencia “Microrganismos de la selva central del Perú, un estudio
															de descubrimiento”
														</p>
														<p className="lugar-evento mb-0">
															Auditorio Tomas Romero-Facultad 3 piso
														</p>
													</Col>
													<Col>
														<p className="fecha-evento">
															<span>03 marzo</span>
															<span className="divisor-text mx-2"></span>
															<span>3 p.m.</span>
														</p>
														<p className="titulo-evento">
															Conferencia “Microrganismos de la selva central del Perú, un estudio
															de descubrimiento”
														</p>
														<p className="lugar-evento mb-0">
															Auditorio Tomas Romero-Facultad 3 piso
														</p>
													</Col>
												</Row>
											</Container>
										</div>
									</motion.div>
								</Col>
							</Row>
						</Container>
					</div>
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
												<a href="#" className="d-inline-block">
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
									<Col className="d-flex flex-column position-relative" md={{ span: 4, offset: 0 }}>
										<p className="mb-0 txt-noticias-bg">
											Entérate de
											<br />
											las últimas
											<br />
											novedades
										</p>
										<div className="position-relative box-shadow mt-auto">
											<div className="position-relative">
												<img
													className="w-100 img-fluid"
													src="/assets/img/noticias/ejemplo_noticia_1.png"
												></img>
												<div className="dark-filter"></div>
											</div>
											<div className="caption-img">
												Max Hidalgo sobre su paso por la FCB: "Aprendí a crear en función de la
												naturaleza"
											</div>
										</div>
									</Col>
									<Col md="2">
										<motion.div style={{ y: scroll, opacity: yScroll2 }} className="card-bio">
											<div className="part-img position-relative">
												<div className="position-relative">
													<img
														className="w-100 img-fluid"
														src="/assets/img/noticias/noticia2.png"
													></img>
													<div className="dark-filter"></div>
												</div>
												<div className="badge-tag">Tecnologia</div>
											</div>
											<div className="part-text filter">
												<p className="title-card">
													Dos científicas ganan el Premio Nobel de Química 2020 por “tijeras
													genéticas” CRISPR-Cas9
												</p>
												<p className="desc-card mb-0">
													La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna
													“han reescrito un artículo muy interesante sobre la estructura del ADN.
												</p>
												{/* <ClampLines
                          text={"La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna “han reescrito un artículo muy interesante sobre la estructura del ADN."}
                          lines={4}
                          buttons={false}
                          ellipsis="..."
                          className="desc-card mb-0"
                        /> */}
											</div>
										</motion.div>
									</Col>
									<Col md="2">
										<motion.div style={{ y: scroll2, opacity: yScroll2 }} className="card-bio">
											<div className="part-img position-relative">
												<div className="position-relative">
													<img
														className="w-100 img-fluid"
														src="/assets/img/noticias/noticia3.png"
													></img>
													<div className="dark-filter"></div>
												</div>
												<div className="badge-tag">Ciencia</div>
											</div>
											<div className="part-text filter">
												<p className="title-card">
													El objetivo de nuestro proyecto es ir en camino a producir clones de
													alpacas
												</p>
												<p className="desc-card mb-0">
													La Dra. Martha Valdivia explicó que con su proyecto también se busca
													ayudar a otras especies peruanas que viven a grandes alturas en nuestro
													país. El proyecto busca mejorar el sistema.
												</p>
												{/* <ClampLines
                          text={"La Dra. Martha Valdivia explicó que con su proyecto también se busca ayudar a otras especies peruanas que viven a grandes alturas en nuestro país. El proyecto busca."}
                          lines={4}
                          buttons={false}
                          ellipsis="..."
                          className="desc-card mb-0"
                        /> */}
											</div>
										</motion.div>
									</Col>
									<Col md="2">
										<motion.div style={{ y: scroll3, opacity: yScroll2 }} className="card-bio">
											<div className="part-img position-relative">
												<div className="position-relative">
													<img
														className="w-100 img-fluid"
														src="/assets/img/noticias/noticia4.png"
													></img>
													<div className="dark-filter"></div>
												</div>
												<div className="badge-tag">Facultad</div>
											</div>
											<div className="part-text filter">
												<p className="title-card">
													¡La FCB ya cuenta oficialmente con un nuevo y moderno pabellón!
												</p>
												<p className="desc-card mb-0">
													La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna
													“han reescrito un artículo muy interesante sobre la estructura del ADN en
													situaciones de riesgo por parte de él.
												</p>
												{/* <ClampLines
                          text={"La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna “han reescrito un artículo muy interesante sobre la estructura del ADN en situaciones de."}
                          lines={4}
                          buttons={false}
                          ellipsis="..."
                          className="desc-card mb-0"
                        /> */}
											</div>
										</motion.div>
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
										<div className="big-text text-right">Encuentra tu vocación</div>
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
											<a href="#" className="d-inline-block">
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
												<h2 className="subtitle-green mr-1 mb-0">Proyectos</h2>
												<a href="#" className="d-inline-block">
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
									<Col className="d-flex flex-column position-relative" md={{ span: 4, offset: 0 }}>
										<p className="mb-0 txt-proyectos-bg">
											Descubre el trabajo
											<br />
											de alumnos, docentes
											<br />y egresados
										</p>
										<div className="position-relative box-shadow mt-auto">
											<div className="position-relative">
												<img
													className="w-100 img-fluid"
													src="/assets/img/proyectos/proyecto_ejemplo_1.png"
												></img>
												<div className="dark-filter"></div>
											</div>
											<div className="caption-img">
												Max Hidalgo sobre su paso por la FCB: "Aprendí a crear en función de la
												naturaleza"
											</div>
										</div>
									</Col>
									<Col md="2">
										<div className="card-bio">
											<div className="part-img position-relative">
												<div className="position-relative">
													<img
														className="w-100 img-fluid"
														src="/assets/img/proyectos/proyecto2.png"
													></img>
													<div className="dark-filter"></div>
												</div>
											</div>
											<div className="part-text">
												<p className="title-card">
													Biodiversidad de las comunidades microbianas del suelo asociadas a cuerpos
													en descomposición de importancia forense”
												</p>
												<p className="author-card mb-0">Mag. María Bermejo</p>
												{/* <ClampLines
                          text={"La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna “han reescrito un artículo muy interesante sobre la estructura del ADN."}
                          lines={4}
                          buttons={false}
                          ellipsis="..."
                          className="desc-card mb-0"
                        /> */}
											</div>
										</div>
									</Col>
									<Col md="2">
										<div className="card-bio">
											<div className="part-img position-relative">
												<div className="position-relative">
													<img
														className="w-100 img-fluid"
														src="/assets/img/proyectos/proyecto3.png"
													></img>
													<div className="dark-filter"></div>
												</div>
											</div>
											<div className="part-text">
												<p className="title-card">
													Nanobiofertilizantes: uso de arcillas en la preparación de emulsiones de
													Pickering para formulados agrícolas a base de biomasa microalgal de
													Arthrospira máxima
												</p>
												<p className="author-card mb-0">Mag. María Bermejo</p>
												{/* <ClampLines
                          text={"La Dra. Martha Valdivia explicó que con su proyecto también se busca ayudar a otras especies peruanas que viven a grandes alturas en nuestro país. El proyecto busca."}
                          lines={4}
                          buttons={false}
                          ellipsis="..."
                          className="desc-card mb-0"
                        /> */}
											</div>
										</div>
									</Col>
									<Col md="2">
										<div className="card-bio">
											<div className="part-img position-relative">
												<div className="position-relative">
													<img
														className="w-100 img-fluid"
														src="/assets/img/proyectos/proyecto4.png"
													></img>
													<div className="dark-filter"></div>
												</div>
											</div>
											<div className="part-text">
												<p className="title-card">
													Caracterización de actividad lipasa endógena de especies de microalgas y
													desarrollo de transesterificación in situ para la producción de ésteres
													etílicos
												</p>
												<p className="author-card mb-0">Mag. María Bermejo</p>
												{/* <ClampLines
                          text={"La francesa Emmanuelle Charpentier y la estadounidense Jennifer Doudna “han reescrito un artículo muy interesante sobre la estructura del ADN en situaciones de."}
                          lines={4}
                          buttons={false}
                          ellipsis="..."
                          className="desc-card mb-0"
                        /> */}
											</div>
										</div>
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
										<img
											className="microscopio"
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
														<img src="/assets/img/iconos/icono_persona_numero.png" alt="persona" />
													</div>
													<div>
														<span>+</span>
														<span>850</span>
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
														<span>+</span>
														<span>150</span>
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
														<span>+</span>
														<span>350</span>
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
														<span>+</span>
														<span>850</span>
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
													difusión del conocimiento científico de nuestra diversidad biológica, con
													valores respetuosos de la diversidad cultural, promotores de la identidad
													nacional basada en una cultura de calidad y responsabilidad social para
													contribuir al desarrollo sostenible del país y la sociedad.
												</p>
											</Carousel.Item>
											<Carousel.Item>
												<h3 className="semi-big-text">Nuestra visión</h3>
												<p>
													Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
													doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
													inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
													Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
													fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
													sequi nesciunt.
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
	);
}
