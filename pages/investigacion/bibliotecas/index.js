import React, { useEffect } from 'react';
import Layout from '../../../components/Layout';
import ProyectosExtra from '../../../components/ProyectosExtra';

import { Row, Col, Container, Breadcrumb } from 'react-bootstrap';
import Link from 'next/link';
import * as HiIcons from 'react-icons/hi';

import { useWindowSize } from '../../../utils/useWindowSize';

const index = () => {
	const { width, height } = useWindowSize();

	const Interest = () => {
		return (
			<div className="block-interest-links mb-3">
				<p className="font-weight-bold mb-2">Enlaces de interés</p>
				<ul className="nav flex-column">
					<li className="mb-2">
						<Link href="/formacion-academica/pregrado">
							<a>Pregrado</a>
						</Link>
					</li>
					<li className="mb-2">
						<Link href="/formacion-academica/posgrado">
							<a>Posgrado</a>
						</Link>
					</li>
					<li className="mb-2">
						<Link href="/informacion-academica">
							<a>Información académica</a>
						</Link>
					</li>
				</ul>
			</div>
		);
	};

	return (
		<>
			<Layout title="Bibliotecas">
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
										<Breadcrumb.Item active>
											Investigación: Bibliotecas
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
										Bibliotecas
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
							src="/assets/img/investigacion/bibliotecas/biblioteca_banner.png"
							alt=""
						/>
					</div>

					<div>
						<Container>
							<Row>
								<Col md="1" lg="1"></Col>
								<Col md="3" lg="2">
									<div className="mb-4">
										{/* <ul className="nav flex-column tabs-wrapper">
                                            <li className="tab">Presentación</li>
                                            <li className="tab">Misión y visión</li>
                                            <li className="tab">Malla curricular</li>
                                            <li className="tab">Seguimiento de egresados</li>
                                        </ul> */}
										<div
											className="nav flex-column tabs-wrapper nav-pills"
											id="v-pills-tab"
											role="tablist"
											aria-orientation="vertical">
											{/* <a className="tab d-flex" id="v-pills-presentacion-tab" data-toggle="pill" href="#v-pills-presentacion" role="tab" aria-controls="v-pills-presentacion" aria-selected="false"> */}
											<Link href="/comunidad/conoce-la-facultad/biblioteca">
												<a className="tab d-flex">
													<div>
														<svg
															width="25"
															height="25"
															viewBox="0 0 25 25"
															className="icon mr-3"
															xmlns="http://www.w3.org/2000/svg">
															<path d="M3.67233 3.15527C2.63733 3.15527 1.79883 3.99527 1.79883 5.03027V19.2728C1.79883 20.3078 2.63883 21.1478 3.67233 21.1478H4.42233C5.45733 21.1478 6.29583 20.3078 6.29583 19.2728V5.02877C6.29583 3.99377 5.45583 3.15527 4.42083 3.15527H3.67383H3.67233ZM9.66783 3.15527C8.63283 3.15527 7.79283 3.99527 7.79283 5.03027V19.2728C7.79283 20.3078 8.63283 21.1478 9.66783 21.1478H10.4178C11.4513 21.1478 12.2898 20.3078 12.2898 19.2728V5.02877C12.2898 3.99527 11.4513 3.15527 10.4163 3.15527H9.66633H9.66783ZM18.2568 7.32077C18.077 6.87362 17.7318 6.51297 17.2929 6.31379C16.854 6.11461 16.3553 6.09222 15.9003 6.25127L15.0273 6.55727C14.7884 6.64114 14.569 6.77251 14.3823 6.94348C14.1956 7.11444 14.0454 7.32145 13.9408 7.55202C13.8362 7.7826 13.7795 8.03196 13.7739 8.28507C13.7683 8.53819 13.814 8.78981 13.9083 9.02477L18.3138 19.9808C18.6873 20.9108 19.7238 21.3803 20.6703 21.0503L21.5433 20.7443C21.7824 20.6604 22.002 20.529 22.1889 20.3579C22.3757 20.1869 22.526 19.9797 22.6306 19.7489C22.7351 19.5182 22.7919 19.2686 22.7973 19.0154C22.8028 18.7621 22.7569 18.5103 22.6623 18.2753L18.2568 7.32077Z" />
														</svg>
													</div>
													<span>
														Biblioteca de la
														facultad{' '}
														<HiIcons.HiExternalLink className="mb-1" />
													</span>
												</a>
											</Link>
											<a
												className="tab d-flex active"
												id="v-pills-central-tab"
												data-toggle="pill"
												href="#v-pills-central"
												role="tab"
												aria-controls="v-pills-central"
												aria-selected="true">
												<div>
													<svg
														width="25"
														height="25"
														viewBox="0 0 25 25"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg">
														<path
															fill-rule="evenodd"
															clipRule="evenodd"
															d="M12.8983 3.09063C12.717 2.98708 12.5119 2.93262 12.3031 2.93262C12.0944 2.93262 11.8892 2.98708 11.7079 3.09063L3.30792 7.89063C3.07833 8.02198 2.89857 8.2255 2.79658 8.46956C2.6946 8.71362 2.67611 8.98454 2.74399 9.24019C2.81187 9.49584 2.96232 9.7219 3.17194 9.88322C3.38157 10.0445 3.63861 10.1321 3.90313 10.1322V18.5322C3.58487 18.5322 3.27964 18.6587 3.0546 18.8837C2.82955 19.1087 2.70313 19.414 2.70312 19.7322C2.70313 20.0505 2.82955 20.3557 3.0546 20.5808C3.27964 20.8058 3.58487 20.9322 3.90313 20.9322H20.7031C21.0214 20.9322 21.3266 20.8058 21.5517 20.5808C21.7767 20.3557 21.9031 20.0505 21.9031 19.7322C21.9031 19.414 21.7767 19.1087 21.5517 18.8837C21.3266 18.6587 21.0214 18.5322 20.7031 18.5322V10.1322C20.9676 10.1321 21.2247 10.0445 21.4343 9.88322C21.6439 9.7219 21.7944 9.49584 21.8623 9.24019C21.9301 8.98454 21.9117 8.71362 21.8097 8.46956C21.7077 8.2255 21.5279 8.02198 21.2983 7.89063L12.8983 3.09063ZM7.50313 11.3322C7.18487 11.3322 6.87964 11.4587 6.6546 11.6837C6.42955 11.9087 6.30313 12.214 6.30313 12.5322V16.1322C6.30313 16.4505 6.42955 16.7557 6.6546 16.9808C6.87964 17.2058 7.18487 17.3322 7.50313 17.3322C7.82138 17.3322 8.12661 17.2058 8.35165 16.9808C8.5767 16.7557 8.70312 16.4505 8.70312 16.1322V12.5322C8.70312 12.214 8.5767 11.9087 8.35165 11.6837C8.12661 11.4587 7.82138 11.3322 7.50313 11.3322ZM11.1031 12.5322C11.1031 12.214 11.2296 11.9087 11.4546 11.6837C11.6796 11.4587 11.9849 11.3322 12.3031 11.3322C12.6214 11.3322 12.9266 11.4587 13.1517 11.6837C13.3767 11.9087 13.5031 12.214 13.5031 12.5322V16.1322C13.5031 16.4505 13.3767 16.7557 13.1517 16.9808C12.9266 17.2058 12.6214 17.3322 12.3031 17.3322C11.9849 17.3322 11.6796 17.2058 11.4546 16.9808C11.2296 16.7557 11.1031 16.4505 11.1031 16.1322V12.5322ZM17.1031 11.3322C16.7849 11.3322 16.4796 11.4587 16.2546 11.6837C16.0296 11.9087 15.9031 12.214 15.9031 12.5322V16.1322C15.9031 16.4505 16.0296 16.7557 16.2546 16.9808C16.4796 17.2058 16.7849 17.3322 17.1031 17.3322C17.4214 17.3322 17.7266 17.2058 17.9517 16.9808C18.1767 16.7557 18.3031 16.4505 18.3031 16.1322V12.5322C18.3031 12.214 18.1767 11.9087 17.9517 11.6837C17.7266 11.4587 17.4214 11.3322 17.1031 11.3322Z"
														/>
													</svg>
												</div>
												<span>
													Biblioteca Central Pedro
													Zulen
												</span>
											</a>
										</div>
									</div>
									{width >= 768 && (
										<>
											<Interest />
										</>
									)}
								</Col>
								<Col md="4" lg="6">
									<div
										className="mb-3 tab-content"
										id="v-pills-tabContent">
										<div
											className="mb-3 tab-pane fade show active"
											id="v-pills-central"
											role="tabpanel"
											aria-labelledby="v-pills-central-tab">
											<div>
												<p>
													La Biblioteca Central 'Pedro
													Zulen' de la Universidad
													Nacional Mayor de San
													Marcos, inaugurada en
													diciembre del año 1999,
													tiene como visión
													convertirse en un centro de
													información y modelo de
													biblioteca universitaria que
													brinde servicios de
													información innovadores a
													los usuarios internos y
													externos a través de una
													gestión basada en la
													optimización de recursos
													tecnológicos, económicos y
													humanos. Para ello, tiene
													como misión el ser un centro
													de recursos de información y
													difusión del conocimiento
													científico, tecnológico y
													humanístico que contribuya
													en la formación académico
													profesional y la
													investigación, brindando
													servicios de información
													pertinentes y de calidad,
													asumiendo el compromiso
													institucional de la
													Universidad, cuyos ejes
													están orientados al
													desarrollo humano y
													sostenible del país.
												</p>
												<div>
													<p className="title-dark">
														Contacto:
													</p>
													<div className="d-flex mb-2">
														<div>
															<img
																className="mr-3"
																src="/assets/img/iconos/lugar.svg"
																alt=""
															/>
														</div>
														<div>
															<p>
																Av. Germán
																Amézaga Nº 375.
															</p>
															<p>
																Edificio de
																Biblioteca
																Central Pedro
																Zulen
															</p>
															<p>
																Ciudad
																Universitaria,
																Lima{' '}
															</p>
														</div>
													</div>
													<div className="d-flex mb-2">
														<div>
															<img
																className="mr-3"
																src="/assets/img/iconos/telefono.svg"
																alt=""
															/>
														</div>
														<div>
															<p>
																619-7000, anexo
																7701
															</p>
														</div>
													</div>
													<div className="d-flex mb-2">
														<div>
															<img
																className="mr-3"
																src="/assets/img/iconos/correo.svg"
																alt=""
															/>
														</div>
														<div>
															<p>
																bibcent@unmsm.edu.pe
															</p>
														</div>
													</div>
												</div>
												<div>
													<p className="title-dark">
														Horario de atención:{' '}
													</p>
													<div className="d-flex mb-2">
														<div>
															<img
																className="mr-3"
																src="/assets/img/iconos/reloj.svg"
																alt=""
															/>
														</div>
														<div>
															<p>
																Lunes a Sábado
																8:15 a.m. a 8:00
																p.m.
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									{width < 768 && (
										<>
											<Interest />
										</>
									)}
								</Col>
								<Col md="3" lg="2">
									<aside>
										<div className="block-interest-links mb-4">
											<p className="font-weight-bold mb-2 text-center">
												¿Necesitas ayuda con el uso de
												estos recursos?
											</p>
											<ul className="nav flex-column">
												<li className="mb-2 text-center font-weight-bold">
													<Link href="https://sisbib.unmsm.edu.pe/">
														<a target="_blank">
															Pregúntale al
															bibliotecario
														</a>
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

export default index;
