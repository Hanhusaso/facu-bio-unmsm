import React, { useEffect } from 'react';
import Layout from '../../../components/Layout';
import ProyectosExtra from '../../../components/ProyectosExtra';

import { Row, Col, Container, Breadcrumb } from 'react-bootstrap';
import Link from 'next/link';

const antonioRaimondi = () => {
	return (
		<>
			<Layout title="Instituto Antonio Raimondi">
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
											Investigación: Instituto de
											Investigación de Ciencias Biológicas
											"Antonio Raimondi" - ICBAR
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
										Instituto de Investigación de Ciencias
										Biológicas "Antonio Raimondi" - ICBAR
									</div>
								</Col>
								<Col md="1"></Col>
							</Row>
						</Container>
						<Container>
							<Row>
								<Col md="1" lg="1"></Col>
								<Col md="7" lg="8">
									<div className="mb-4">
										<p>
											El Instituto de Investigación de
											Ciencias Biológicas Antonio Raimondi
											(ICBAR) es la unidad académica de la
											Facultad de Ciencias Biológicas
											encargada de la promoción,
											ordenamiento y desarrollo de la
											investigación científica y
											tecnológica. Su objetivo fundamental
											es la generación del conocimiento
											científico en las líneas de
											investigación sobre la biodiversidad
											y ecología, biotecnología, salud y
											sanidad, producción y manejo de
											recursos biológicos, así como su
											difusión, preservación, utilización
											y transferencia tecnológica dentro
											de las normas que rigen la vida
											académica de la universidad.
										</p>
										<p>
											Su creación data del 18 de octubre
											de 1977{' '}
											<span>
												{' '}
												<a
													href="https://drive.google.com/file/d/1xmaRdZHK9EyDfnbVOzpJ3pDcO8-kPs2A/view"
													target="_blank"
													rel="noreferrer"
												>
													&#40;Ver Resolución
													Rectoral&#41;
												</a>
											</span>{' '}
											y su nombre fue escogido en memoria
											del estudioso Antonio Raimondi,
											personaje muy ligado a la cultura
											peruana y quien, viniendo desde
											Italia, permaneció en el Perú
											estudiando su flora y su fauna. La
											sede del ICBAR se ubica en el
											pabellón de Investigación de la
											Facultad de Ciencias Biológicas, en
											la Ciudad Universitaria de la
											Universidad Nacional Mayor San
											Marcos.
										</p>
										<p>
											Actualmente cuenta con 118
											investigadores de los cuales 34
											ostentan el grado de Doctor y 32 el
											de Magister, quienes desarrollan sus
											actividades en los laboratorios de
											investigación ubicados en la Ciudad
											Universitaria, en el Museo de
											Historia Natural, en IVITA-Pucallpa
											e IVITA-Iquitos. Muchos de los
											docentes investigadores realizan
											continuamente entrenamientos,
											pasantías o posgrados en importantes
											universidades del mundo.
										</p>
										<p>
											La producción científica del ICBAR
											se refleja en las publicaciones en
											revistas indexadas y de categoría
											ISI, así como en presentaciones a
											numerosos eventos nacionales e
											internacionales. En esta tarea
											participan activamente estudiantes
											de pre y posgrado que año a año se
											van incorporando a los laboratorios
											de investigación de la Facultad. Así
											también varios grupos de
											investigación del ICBAR trabajan en
											estrecha coordinación con
											instituciones extranjeras y
											nacionales.
										</p>
										<p>
											El ICBAR realiza anualmente un
											evento denominado Reunión Científica
											ICBAR, cuyos inicios se remontan a
											1991. Así mismo la Revista Peruana
											de Biología, editada por el ICBAR,
											es considerada una de las mejores
											publicaciones científicas nacionales
											por la calidad de los artículos que
											contiene, su periodicidad y la
											jerarquía de su Comité Editor y
											Consultivo. A través de la
											información que brindamos a
											continuación, el lector no solamente
											podrá conocer más de cerca al ICBAR
											sino que se facilitará el contacto
											con nuestros investigadores y sus
											temas de trabajo.
										</p>
									</div>
									<div className="title-dark mb-2">
										Director(e) del Instituto de
										Investigación de Ciencias Biológicas
										"Antonio Raimondi"
									</div>
									<p className="mb-5">
										Dr. Juan Atilio Jiménez Chunga
									</p>
									<div className="mb-3">
										<table className="striped m-auto">
											<thead>
												<tr>
													<th
														colSpan="2"
														className="text-center"
													>
														Comité directivo del
														ICBAR
													</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th className="text-center">
														Nombre y apellido
													</th>
													<th className="text-center">
														Departamento académico
													</th>
												</tr>
												<tr>
													<td>
														Fanny Elizabeth Lazo
														Manrique
													</td>
													<td>
														Biología Celular y
														Genética
													</td>
												</tr>
												<tr>
													<td>
														Mónica Arakaki Makishi
													</td>
													<td>Botánica</td>
												</tr>
												<tr>
													<td>
														Max Henry Hidalgo Del
														Aguila
													</td>
													<td>
														Hidrobiología y
														Pesquería
													</td>
												</tr>
												<tr>
													<td>
														Egma Marcelina Mayta
														Huatuco
													</td>
													<td>
														Microbiología y
														Parasitología
													</td>
												</tr>
												<tr>
													<td>
														Franz Teodosio Cardoso
														Pacheco
													</td>
													<td>Zoología</td>
												</tr>
											</tbody>
										</table>
									</div>
								</Col>
								<Col md="3" lg="2">
									<aside>
										<div className="contacto-wrapper mb-3">
											<p className="title-dark mb-2">
												Contacto:
											</p>
											<div className="grid-contacto">
												<div>
													<img
														className="icon mr-2"
														src="/assets/img/iconos/telefono.svg"
														alt=""
													/>
												</div>
												<div>
													<span>
														+(51) 619 7000 anexo
														1506
													</span>
												</div>
											</div>
											<div className="mb-0 grid-contacto">
												<div>
													<img
														className="icon mr-2"
														src="/assets/img/iconos/correo.svg"
														alt=""
													/>
												</div>
												<div>
													<span>
														icbar.biologia@unmsm.edu.pe
													</span>
												</div>
											</div>
										</div>
										<div className="block-interest-links mb-3">
											<p className="font-weight-bold mb-2 text-center">
												¿Te gustaría participar en un
												grupo de investigación?
											</p>
											<ul className="nav flex-column">
												<li className="mb-2 text-center font-weight-bold">
													<Link href="/investigacion/grupos-investigacion">
														<a>Infórmate aquí</a>
													</Link>
												</li>
											</ul>
										</div>
										<ProyectosExtra
											idProyectoDetalle={''}
										/>
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
