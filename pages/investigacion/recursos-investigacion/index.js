import React, { useEffect } from "react";
import Layout from "../../../components/Layout";
import { Row, Col, Container, Breadcrumb, Tabs, Tab } from "react-bootstrap";
import Link from "next/link";
import ProyectosExtra from "../../../components/ProyectosExtra";

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
						{/* BUSCADOR */}
						{/* <Container className="mb-4">
                            <Row>
                                <Col md="3"></Col>
                                <Col md="6">
                                    <div>
                                        <input className="search-input" placeholder="Buscar por palabra clave" type="text" />
                                    </div>
                                </Col>
                                <Col md="3"></Col>
                            </Row>
                        </Container> */}
						<Container>
							<Row>
								<Col md="1" lg="1"></Col>
								<Col md="7" lg="8">
									<div className="divisor mt-0"></div>
									<div className="grid-img-txt-3">
										<div>
											<img
												className="w-100 img-fluid"
												src="/assets/img/investigacion/recursos/recursos.jpg"
												alt=""
											/>
										</div>
										<div className="mb-3 mb-md-0">
											<div className="title">Repositorios y portales</div>
											<Tabs defaultActiveKey="cybertesis" id="repositorios-tab">
												<Tab className="pt-2" eventKey="cybertesis" title="Cybertesis">
													<div>
														<p>
															Es el repositorio que tiene la finalidad de visibilizar, difundir y
															preservar el patrimonio digital de documentos conducentes a grados o
															títulos que produce la universidad.
														</p>
														<p>
															<img
																className="icon mr-2"
																src="/assets/img/iconos/correo.svg"
																alt=""
															/>
															<span className="text-break">cybertesis@unmsm.edu.pe</span>
														</p>
														{/* <p>
                                                            <img className="icon mr-2" src="/assets/img/iconos/telefono.svg" alt=""/>
                                                            <span className="text-break">(511) 619-7000. Anexo: 7345/7445</span>
                                                        </p> */}
														<a
															className="btn-green-bright"
															href="https://cybertesis.unmsm.edu.pe/"
															target="_blank"
														>
															Visitar página
														</a>
													</div>
												</Tab>
												<Tab className="pt-2" eventKey="revista" title="Revistas UNMSM">
													<div>
														<p>
															Está basado en un sistema de gestión de procesos editoriales tiene
															también la capacidad de visibilizar, difundir y preservar los
															contenidos publicados por las revistas de investigación de la
															Universidad.
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
															Es el órgano dependiente del Vicerrectorado de Investigación y
															Posgrado (VRIP) que desarrolla y ejecuta la política de publicaciones
															de la Universidad. Tiene como misión la producción y difusión de
															libros y revistas, de alto valor científico, académico y humanístico
															como parte del compromiso de la Universidad con el desarrollo de la
															ciencia y cultura del Perú.
														</p>
														<p>
															<img
																className="icon mr-2"
																src="/assets/img/iconos/correo.svg"
																alt=""
															/>
															<span className="text-break">fondoedit@unmsm.edu.pe</span>
														</p>
														{/* <p>
                                                            <img className="icon mr-2" src="/assets/img/iconos/telefono.svg" alt=""/>
                                                            <span className="text-break">(511) 619-7000. Anexo: 7345/7445</span>
                                                        </p> */}
														<a
															className="btn-green-bright"
															href="http://fondoeditorial.unmsm.edu.pe/index.php/fondoeditorial"
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
														<a
															className="btn-green-bright"
															href="https://sisbib.unmsm.edu.pe?page=2"
															target="_blank"
														>
															Visitar página
														</a>
													</div>
												</Tab>
												{/* <Tab className="pt-2" eventKey="bio" title="Biología">
                                                    <div>
                                                        2
                                                    </div>
                                                </Tab>
                                                <Tab className="pt-2" eventKey="capacit" title="Capacitaciones">
                                                    <div>
                                                        3
                                                    </div>
                                                </Tab> */}
											</Tabs>
										</div>
									</div>
									<div className="divisor"></div>
									<div className="grid-img-txt-3">
										<div>
											<img
												className="w-100 img-fluid"
												src="/assets/img/investigacion/recursos/catalogo.jpg"
												alt=""
											/>
										</div>
										<div className="mb-3 mb-md-0">
											<div className="title mb-2">Catálogo en línea</div>
											<div>
												<p>
													El catálogo en línea puede recuperar información de las colecciones
													físicas (libros, revistas, tesis, entre otros tipos de materiales) de todo
													el Sistema de Bibliotecas y Biblioteca Central de la UNMSM, en los
													registros se detalla más información, incluyendo su ubicación. Asimismo
													esta plataforma permite recuperar información de las bases de datos
													suscritas y los repositorios institucionales (Cybertesis y Revistas
													sanmarquinas).
												</p>
												<a
													className="btn-green-bright"
													href="https://unmsm.ent.sirsi.net/client/es_ES/all_libs/?dt=list"
													target="_blank"
												>
													Visitar página
												</a>
											</div>
										</div>
									</div>
									<div className="divisor"></div>
									<div className="grid-img-txt-3">
										<div>
											<img
												className="w-100 img-fluid"
												src="/assets/img/investigacion/recursos/politicas_investigacion.jpg"
												alt=""
											/>
										</div>
										<div className="mb-3 mb-md-0">
											<div className="title mb-2">Políticas de investigación</div>
											<div>
												<p>
													Con la aprobación del Estatuto en el 2016, la Universidad Nacional Mayor
													de San Marcos inicia la consolidación de ser una Universidad de
													Investigación. Para esto, la organización de la investigación se centra en
													un Vicerrectorado de Investigación y Posgrado, una forma propia y
													auténtica, no observada anteriormente en el país. Esta visión, de
													Investigación y Posgrado, subraya el rol de un docente-investigador de
													alto nivel, que enfoque su trabajo, creatividad y esfuerzos no solo a la
													solución de problemas nacionales, sino a funcionar como células
													primordiales formadoras de continuas generaciones de nuevos
													investigadores, que en el proceso sostenido de docencia universitaria
													asegurarán el desarrollo del Perú. Esta concepción nos lleva a impulsar
													como política de forma de trabajo a los Grupos de investigación. Estos
													consisten en núcleos de investigadores dedicados a una línea de
													investigación y que desarrollan constantemente actividades investigativas,
													y entre ellas las investigaciones que conlleven a tesis, tanto de posgrado
													como de pregrado. Es decir que la parte culminante y crítica en la que
													todo profesional, magister o doctor demuestran sus competencias
													investigativas es llevada bajo la asesoría y acompañamiento del Grupo de
													investigación. Es así como, en el Posgrado las Unidades de Investigación
													deben apoyarse en los Grupos de Investigación para lograr el éxito en la
													formación de los magister y doctores.
												</p>
											</div>
										</div>
									</div>
									<div className="divisor"></div>
									<div className="grid-img-txt-3">
										<div>
											<img
												className="w-100 img-fluid"
												src="/assets/img/investigacion/recursos/financiamiento.jpg"
												alt=""
											/>
										</div>
										<div className="mb-3 mb-md-0">
											<div className="title mb-2">Financiamiento</div>
											<div>
												<p>
													La investigación en la UNMSM se financia con recursos externos e internos.
													Los recursos externos son monetarios o no monetarios, con origen en
													entidades nacionales o extranjeras, destinados a financiar en todo o en
													parte, las necesidades de alguna actividad investigativa en particular.
													Por otro lado, los recursos internos son aquellos presupuestales de la
													Universidad, dedicados a la investigación y son por definición, accesibles
													a todo profesor, estudiante o tesista de la Universidad en función de la
													calidad de la investigación. La Universidad considera que el
													financiamiento para la investigación se realiza con recursos monetarios a
													través de procesos concursables. Mientras que, la promoción y desarrollo
													de condiciones generales para la investigación, como el acceso a la
													información y la difusión de los resultados son financiados por la
													Universidad, y son administrados centralmente como recursos no monetarios
													para la investigación. El monitoreo, supervisión y evaluación del adecuado
													uso de los recursos financieros dedicados a la investigación se rige por
													principios comunes, independientemente del origen del financiamiento,
													interno o externo; e independientemente de la evaluación técnica del
													desarrollo o evaluación de la investigación. Estos principios son:
													Probidad, Economía, Transparencia, Rendición de cuentas.
												</p>
												<p>Se cuentan con los siguientes programas de financiamiento:</p>
												<p>Con fondos concursables:</p>
												<ol>
													<li>
														Programa de proyectos de investigación para grupos de investigación
													</li>
													<li>Programa de promoción de tesis de pregrado</li>
													<li>
														Programa de promoción de tesis de posgrado para docentes de la UNMSM
													</li>
													<li>
														Programa de equipamiento científico para la investigación de la UNMSM
													</li>
													<li>
														Programa de proyectos de investigación para grupos de investigación con
														recursos no monetarios
													</li>
													<li>
														Programa de promoción de organización de eventos de ciencia, tecnología
														y humanidades
													</li>
													<li>
														Programa de Promoción de Trabajo de Tesis para optar el grado de
														Bachiller
													</li>
													<li>
														Programa de proyectos de investigación multidisciplinarios Covid-19
													</li>
												</ol>
												<p>Con fondos no concursables:</p>
												<ol>
													<li>Programa de los talleres de investigación y posgrado</li>
													<li>Programa de promoción de revistas de investigación de la UNMSM</li>
													<li>
														Programa de apoyo a publicaciones de investigadores UNMSM en revistas
														indizadas de alto impacto
													</li>
													<li>Programa de financiamiento y publicación de libros universitarios</li>
												</ol>
											</div>
										</div>
									</div>
									<div className="divisor"></div>
									<div className="grid-img-txt-3">
										<div>
											<img
												className="w-100 img-fluid"
												src="/assets/img/investigacion/recursos/archivos_digitales.jpg"
												alt=""
											/>
										</div>
										<div className="mb-3 mb-md-0">
											<div className="title">Archivos digitales</div>
											<Tabs defaultActiveKey="memoriaOral" id="archivos-tab">
												<Tab
													className="pt-2"
													eventKey="memoriaOral"
													title="Archivo de memoria oral"
												>
													<div>
														<p>
															El proyecto Archivo de Memoria Oral de la Universidad Nacional Mayor
															de San Marcos tiene como finalidad recoger y organizar la memoria
															privada e histórica de la comunidad sanmarquina en el período de 1945
															a 1960.
														</p>
														<p>
															Este trabajo de historia oral permitirá abordar de forma innovadora la
															vida cotidiana de los estudiantes de San Marcos, las fiestas, las
															relaciones de género, la discriminación, el racismo, y la forma como
															la diversidad cultural y las desigualdades de poder en el Perú de
															entonces se reflejaban en la vida de la universidad.
														</p>
														<p>
															La vida cotidiana, la experiencia personal, la subjetividad y las
															dinámicas socioculturales de la época se recuperan desde la nostalgia,
															pero renacen con brillo inusitado para interpelar nuestro presente,
															tan distinto, pero a la vez ligado con hilos profundos e invisibles a
															la vida de los testimoniantes.
														</p>
														<p>
															Honrar a los sanmarquinos del ayer, escuchando sus experiencias y
															relatos es construir con ellos, una universidad con un rico y complejo
															pasado vital que nos moviliza a todos hacia el futuro común.
														</p>
														<a
															className="btn-green-bright"
															href="https://sisbib.unmsm.edu.pe/Memoria_Oral/"
															target="_blank"
														>
															Visitar página
														</a>
													</div>
												</Tab>
												<Tab className="pt-2" eventKey="covid" title="Archivo Covid-19">
													<div>
														<p>
															Este archivo digital contiene entrevistas y testimonios audiovisuales
															de peruanos que narran diversos aspectos de su experiencia personal
															durante la pandemia de la Covid-19 y registra la actuación de la
															comunidad sanmarquina ante ella. Además, incluye elementos del
															imaginario social que circularon como caricaturas, memes y mensajes en
															redes sociales, e imágenes de otras epidemias del pasado.
														</p>
														<p>
															Se registran prácticas culturales y representaciones, como el humor,
															la religiosidad y la solución mágica. Por otra parte, documentamos la
															violencia contra el cuerpo del ciudadano y contra la salud pública de
															la colectividad.
														</p>
														<a
															className="btn-green-bright"
															href="https://sisbib.unmsm.edu.pe/archivocovid19peru/"
															target="_blank"
														>
															Visitar página
														</a>
													</div>
												</Tab>
												<Tab
													className="pt-2"
													eventKey="actasCM"
													title="Actas del consejo de ministros"
												>
													<div>
														<p>
															El presente repositorio contiene las Actas del Consejo de Ministros de
															los sucesivos gobiernos desde diciembre de 1939 hasta julio de 1990.
															Estas piezas documentales, ahora digitalizadas y de acceso libre,
															permitirán a los interesados revisar la valiosa información de los dos
															gobiernos de Prado y Belaunde Terry, y de los gobiernos de Bustamante
															y Rivero, Odría, Peréz Godoy, Lindley López, Belaunde Terry, Juan
															Velasco Alvarado, Morales Bermúdez y Alan García. Por lo tanto, la
															historia política del siglo XX peruano se verá enriquecida gracias a
															la disponibilidad de estas actas, que registran los debates y las
															decisiones del Poder Ejecutivo.
														</p>
														<a
															className="btn-green-bright"
															href="https://sisbib.unmsm.edu.pe/Repositorio_ACM/"
															target="_blank"
														>
															Visitar página
														</a>
													</div>
												</Tab>
												<Tab
													className="pt-2"
													eventKey="fondoReservado"
													title="Colecciones del Fondo Reservado"
												>
													<div>
														<div className="mb-3">
															<p className="title">Dora Mayer</p>
															<p>
																Dora Mayer (Hamburgo, 12 de mayo de 1868-Cercado de Lima, 7 de enero
																de 1959). Intelectual autodidacta, periodista y escritora. Fundadora
																de la Asociación Pro-Indígena (1909-1917). Ella y Miguelina Acosta
																dirigieron la revista La Crítica (1917-19), que promovió el
																feminismo, el sindicalismo y los derechos de los indígenas.
																Desarrolló agudos análisis sociales y políticos.
															</p>
															<a
																className="btn-green-bright"
																href="https://sisbib.unmsm.edu.pe/colec_fondor/?colec=6"
																target="_blank"
															>
																Visitar página
															</a>
														</div>
														<div className="mb-3">
															<p className="title">Prisma</p>
															<p>
																La revista Prisma (1905-1907) publicada en Lima (Perú), se
																distinguía por sus contenidos literarios, el elegante diseño, el
																fino papel y la calidad de las fotografías reproducidas. Esta
																publicación ilustrada celebraba la modernización urbanística y la
																novedad cultural. Reunió a escritores de diversas generaciones, que
																publicaron tradiciones, poesías, estudios, cuentos y crónicas
																modernistas. Entre ellos destacan Ricardo Palma, Zoila Aurora
																Cáceres, Carlos G. Amézaga, Clemente Palma, José de la Riva-Agüero y
																Rubén Darío.
															</p>
															<a
																className="btn-green-bright"
																href="https://sisbib.unmsm.edu.pe/colec_fondor/?colec=7"
																target="_blank"
															>
																Visitar página
															</a>
														</div>
														<div className="mb-3">
															<p className="title">Hueso Húmero</p>
															<p>
																La revista Hueso Húmero se inició en 1979 y celebra ya 40 años de
																publicación ininterrumpida en Lima (Perú). Se distingue por sus
																contenidos literarios, culturales y artísticos, por su espíritu
																provocador y su desenfado ideológico, por su amplitud de horizontes
																que superan los límites de las disciplinas, por el logrado
																equilibrio entre la ficción y la crítica, por sus célebres
																encuestas. Hueso Húmero ocupa ya un lugar privilegiado en la
																historia cultural contemporánea latinoamericana.
															</p>
															<a
																className="btn-green-bright"
																href="https://sisbib.unmsm.edu.pe/colec_fondor/?colec=8"
																target="_blank"
															>
																Visitar página
															</a>
														</div>
													</div>
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

export default recursosInvestigacion;
