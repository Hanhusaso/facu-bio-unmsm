import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

import { Row, Col, Container, Breadcrumb, Tabs, Tab } from 'react-bootstrap';
import Link from 'next/link';
import { getDocenteByIdInformacionAcademicaApi } from '../api/formacion-academica';

import { useWindowSize } from '../../utils/useWindowSize';
import { FiAlertCircle } from 'react-icons/fi';

const index = () => {
	const { width, height } = useWindowSize();
	const [docentes, setDocentes] = useState([]);

	// useEffect(() => {
	// 	(async () => {
	// 		const response = await getDocenteByIdInformacionAcademicaApi(
	// 			'doctorado_en_ciencias_biologicas'
	// 		);
	// 		setDocentes(response);
	// 	})();
	// }, []);

	const Contact = () => {
		return (
			<div className="contacto-wrapper mb-3">
				<p className="title-dark mb-2">Contacto:</p>
				<div className="grid-contacto">
					<div>
						<img
							className="icon mr-2"
							src="/assets/img/iconos/telefono.svg"
							alt=""
						/>
					</div>
					<div>
						<span>+(51) 619 7000 Anexos 1503, 1510</span>
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
							{/* epcb.biologia@unmsm.edu.pe */}
							upg.biologia@unmsm.edu.pe
						</span>
					</div>
				</div>
				{/* <p className="font-weight-bold mb-1">Horario de atención:</p>
                <p className="mb-0">8:00 a.m. - 5:00 p.m.</p> */}
			</div>
		);
	};

	return (
		<>
			<Layout title="Doctorado en Ciencias Biológicas">
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
										{/* <li className="breadcrumb-item">Formación académica</li> */}
										<li className="breadcrumb-item">
											<Link href="/formacion-academica/posgrado">
												<a role="button">
													Formación académica:
													Posgrado
												</a>
											</Link>
										</li>
										<Breadcrumb.Item active>
											Posgrado | Admisión 2022-I
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
										Posgrado | Admisión 2022-I
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
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/posgrado_admision_2_f0fa5dc1bb.png"
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
												id="v-pills-cronograma-tab"
												data-toggle="pill"
												href="#v-pills-cronograma"
												role="tab"
												aria-controls="v-pills-cronograma"
												aria-selected="true">
												<div
													style={{ display: 'flex' }}>
													<svg
														width="24"
														height="24"
														viewBox="0 0 24 25"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="icon mr-3">
														<path d="M23.04 2.69125H18V0.77125C18 0.63925 17.892 0.53125 17.76 0.53125H16.08C15.948 0.53125 15.84 0.63925 15.84 0.77125V2.69125H8.16V0.77125C8.16 0.63925 8.052 0.53125 7.92 0.53125H6.24C6.108 0.53125 6 0.63925 6 0.77125V2.69125H0.96C0.429 2.69125 0 3.12025 0 3.65125V23.5712C0 24.1022 0.429 24.5312 0.96 24.5312H23.04C23.571 24.5312 24 24.1022 24 23.5712V3.65125C24 3.12025 23.571 2.69125 23.04 2.69125ZM21.84 22.3712H2.16V10.9712H21.84V22.3712ZM2.16 8.93125V4.85125H6V6.29125C6 6.42325 6.108 6.53125 6.24 6.53125H7.92C8.052 6.53125 8.16 6.42325 8.16 6.29125V4.85125H15.84V6.29125C15.84 6.42325 15.948 6.53125 16.08 6.53125H17.76C17.892 6.53125 18 6.42325 18 6.29125V4.85125H21.84V8.93125H2.16Z" />
													</svg>
												</div>
												<span>Cronograma</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-recomendaciones-tab"
												data-toggle="pill"
												href="#v-pills-recomendaciones"
												role="tab"
												aria-controls="v-pills-recomendaciones"
												aria-selected="false">
												<div
													style={{ display: 'flex' }}
													className="mr-3">
													<FiAlertCircle
														style={{
															fontSize: '24px',
														}}
													/>
												</div>
												<span>Recomendaciones</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-cuadro-tab"
												data-toggle="pill"
												href="#v-pills-cuadro"
												role="tab"
												aria-controls="v-pills-cuadro"
												aria-selected="false">
												<div
													style={{ display: 'flex' }}>
													<svg
														width="24"
														height="24"
														viewBox="0 0 24 24"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg">
														<g clipPath="url(#clip0_3136_9365)">
															<path d="M21.75 4.5C21.9489 4.5 22.1397 4.57902 22.2803 4.71967C22.421 4.86032 22.5 5.05109 22.5 5.25V18.75C22.5 18.9489 22.421 19.1397 22.2803 19.2803C22.1397 19.421 21.9489 19.5 21.75 19.5H2.25C2.05109 19.5 1.86032 19.421 1.71967 19.2803C1.57902 19.1397 1.5 18.9489 1.5 18.75V5.25C1.5 5.05109 1.57902 4.86032 1.71967 4.71967C1.86032 4.57902 2.05109 4.5 2.25 4.5H21.75ZM2.25 3C1.65326 3 1.08097 3.23705 0.65901 3.65901C0.237053 4.08097 0 4.65326 0 5.25L0 18.75C0 19.3467 0.237053 19.919 0.65901 20.341C1.08097 20.7629 1.65326 21 2.25 21H21.75C22.3467 21 22.919 20.7629 23.341 20.341C23.7629 19.919 24 19.3467 24 18.75V5.25C24 4.65326 23.7629 4.08097 23.341 3.65901C22.919 3.23705 22.3467 3 21.75 3H2.25Z" />
															<path d="M7.5 12C7.5 11.8011 7.57902 11.6103 7.71967 11.4697C7.86032 11.329 8.05109 11.25 8.25 11.25H18.75C18.9489 11.25 19.1397 11.329 19.2803 11.4697C19.421 11.6103 19.5 11.8011 19.5 12C19.5 12.1989 19.421 12.3897 19.2803 12.5303C19.1397 12.671 18.9489 12.75 18.75 12.75H8.25C8.05109 12.75 7.86032 12.671 7.71967 12.5303C7.57902 12.3897 7.5 12.1989 7.5 12ZM7.5 8.25C7.5 8.05109 7.57902 7.86032 7.71967 7.71967C7.86032 7.57902 8.05109 7.5 8.25 7.5H18.75C18.9489 7.5 19.1397 7.57902 19.2803 7.71967C19.421 7.86032 19.5 8.05109 19.5 8.25C19.5 8.44891 19.421 8.63968 19.2803 8.78033C19.1397 8.92098 18.9489 9 18.75 9H8.25C8.05109 9 7.86032 8.92098 7.71967 8.78033C7.57902 8.63968 7.5 8.44891 7.5 8.25ZM7.5 15.75C7.5 15.5511 7.57902 15.3603 7.71967 15.2197C7.86032 15.079 8.05109 15 8.25 15H18.75C18.9489 15 19.1397 15.079 19.2803 15.2197C19.421 15.3603 19.5 15.5511 19.5 15.75C19.5 15.9489 19.421 16.1397 19.2803 16.2803C19.1397 16.421 18.9489 16.5 18.75 16.5H8.25C8.05109 16.5 7.86032 16.421 7.71967 16.2803C7.57902 16.1397 7.5 15.9489 7.5 15.75ZM6 8.25C6 8.44891 5.92098 8.63968 5.78033 8.78033C5.63968 8.92098 5.44891 9 5.25 9C5.05109 9 4.86032 8.92098 4.71967 8.78033C4.57902 8.63968 4.5 8.44891 4.5 8.25C4.5 8.05109 4.57902 7.86032 4.71967 7.71967C4.86032 7.57902 5.05109 7.5 5.25 7.5C5.44891 7.5 5.63968 7.57902 5.78033 7.71967C5.92098 7.86032 6 8.05109 6 8.25V8.25ZM6 12C6 12.1989 5.92098 12.3897 5.78033 12.5303C5.63968 12.671 5.44891 12.75 5.25 12.75C5.05109 12.75 4.86032 12.671 4.71967 12.5303C4.57902 12.3897 4.5 12.1989 4.5 12C4.5 11.8011 4.57902 11.6103 4.71967 11.4697C4.86032 11.329 5.05109 11.25 5.25 11.25C5.44891 11.25 5.63968 11.329 5.78033 11.4697C5.92098 11.6103 6 11.8011 6 12V12ZM6 15.75C6 15.9489 5.92098 16.1397 5.78033 16.2803C5.63968 16.421 5.44891 16.5 5.25 16.5C5.05109 16.5 4.86032 16.421 4.71967 16.2803C4.57902 16.1397 4.5 15.9489 4.5 15.75C4.5 15.5511 4.57902 15.3603 4.71967 15.2197C4.86032 15.079 5.05109 15 5.25 15C5.44891 15 5.63968 15.079 5.78033 15.2197C5.92098 15.3603 6 15.5511 6 15.75V15.75Z" />
														</g>
														<defs>
															<clipPath id="clip0_3136_9365">
																<rect
																	width="24"
																	height="24"
																	fill="white"
																/>
															</clipPath>
														</defs>
													</svg>
												</div>
												<span>Cuadro de vacantes</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-requisitos-tab"
												data-toggle="pill"
												href="#v-pills-requisitos"
												role="tab"
												aria-controls="v-pills-requisitos"
												aria-selected="false">
												<div>
													<svg
														width="23"
														height="24"
														viewBox="0 0 23 26"
														xmlns="http://www.w3.org/2000/svg"
														className="icon mr-3">
														<path d="M16.7708 11.6302C16.3896 11.6302 16.024 11.5034 15.7544 11.2778C15.4848 11.0522 15.3333 10.7462 15.3333 10.4271C15.3333 10.108 15.4848 9.80197 15.7544 9.57635C16.024 9.35072 16.3896 9.22396 16.7708 9.22396C17.1521 9.22396 17.5177 9.35072 17.7873 9.57635C18.0569 9.80197 18.2083 10.108 18.2083 10.4271C18.2083 10.7462 18.0569 11.0522 17.7873 11.2778C17.5177 11.5034 17.1521 11.6302 16.7708 11.6302ZM16.7708 16.4427C16.3896 16.4427 16.024 16.3159 15.7544 16.0903C15.4848 15.8647 15.3333 15.5587 15.3333 15.2396C15.3333 14.9205 15.4848 14.6145 15.7544 14.3888C16.024 14.1632 16.3896 14.0365 16.7708 14.0365C17.1521 14.0365 17.5177 14.1632 17.7873 14.3888C18.0569 14.6145 18.2083 14.9205 18.2083 15.2396C18.2083 15.5587 18.0569 15.8647 17.7873 16.0903C17.5177 16.3159 17.1521 16.4427 16.7708 16.4427ZM15.3333 20.0521C15.3333 20.3712 15.4848 20.6772 15.7544 20.9028C16.024 21.1284 16.3896 21.2552 16.7708 21.2552C17.1521 21.2552 17.5177 21.1284 17.7873 20.9028C18.0569 20.6772 18.2083 20.3712 18.2083 20.0521C18.2083 19.733 18.0569 19.427 17.7873 19.2013C17.5177 18.9757 17.1521 18.849 16.7708 18.849C16.3896 18.849 16.024 18.9757 15.7544 19.2013C15.4848 19.427 15.3333 19.733 15.3333 20.0521ZM13.4167 10.4271C13.4167 10.2144 13.3157 10.0103 13.136 9.85992C12.9563 9.7095 12.7125 9.625 12.4583 9.625H5.75C5.49583 9.625 5.25208 9.7095 5.07236 9.85992C4.89263 10.0103 4.79167 10.2144 4.79167 10.4271C4.79167 10.6398 4.89263 10.8438 5.07236 10.9942C5.25208 11.1447 5.49583 11.2292 5.75 11.2292H12.4583C12.7125 11.2292 12.9563 11.1447 13.136 10.9942C13.3157 10.8438 13.4167 10.6398 13.4167 10.4271ZM13.4167 15.2396C13.4167 15.0269 13.3157 14.8228 13.136 14.6724C12.9563 14.522 12.7125 14.4375 12.4583 14.4375H5.75C5.49583 14.4375 5.25208 14.522 5.07236 14.6724C4.89263 14.8228 4.79167 15.0269 4.79167 15.2396C4.79167 15.4523 4.89263 15.6563 5.07236 15.8067C5.25208 15.9572 5.49583 16.0417 5.75 16.0417H12.4583C12.7125 16.0417 12.9563 15.9572 13.136 15.8067C13.3157 15.6563 13.4167 15.4523 13.4167 15.2396ZM13.4167 20.0521C13.4167 19.8394 13.3157 19.6353 13.136 19.4849C12.9563 19.3345 12.7125 19.25 12.4583 19.25H5.75C5.49583 19.25 5.25208 19.3345 5.07236 19.4849C4.89263 19.6353 4.79167 19.8394 4.79167 20.0521C4.79167 20.2648 4.89263 20.4688 5.07236 20.6192C5.25208 20.7697 5.49583 20.8542 5.75 20.8542H12.4583C12.7125 20.8542 12.9563 20.7697 13.136 20.6192C13.3157 20.4688 13.4167 20.2648 13.4167 20.0521ZM8.625 3.30838e-07C8.03021 -0.000260645 7.44996 0.153884 6.96423 0.441191C6.47849 0.728498 6.11118 1.13482 5.91292 1.60417H2.875C2.1125 1.60417 1.38123 1.85768 0.842068 2.30894C0.302901 2.7602 0 3.37224 0 4.01042V23.2604C0 23.8986 0.302901 24.5106 0.842068 24.9619C1.38123 25.4131 2.1125 25.6667 2.875 25.6667H20.125C20.8875 25.6667 21.6188 25.4131 22.1579 24.9619C22.6971 24.5106 23 23.8986 23 23.2604V4.01042C23 3.37224 22.6971 2.7602 22.1579 2.30894C21.6188 1.85768 20.8875 1.60417 20.125 1.60417H17.0871C16.8888 1.13482 16.5215 0.728498 16.0358 0.441191C15.55 0.153884 14.9698 -0.000260645 14.375 3.30838e-07H8.625ZM7.66667 2.40625C7.66667 2.19352 7.76763 1.98951 7.94736 1.83909C8.12708 1.68867 8.37083 1.60417 8.625 1.60417H14.375C14.6292 1.60417 14.8729 1.68867 15.0526 1.83909C15.2324 1.98951 15.3333 2.19352 15.3333 2.40625C15.3333 2.61898 15.2324 2.82299 15.0526 2.97341C14.8729 3.12383 14.6292 3.20833 14.375 3.20833H8.625C8.37083 3.20833 8.12708 3.12383 7.94736 2.97341C7.76763 2.82299 7.66667 2.61898 7.66667 2.40625ZM2.875 3.20833H5.91292C6.11118 3.67768 6.47849 4.084 6.96423 4.37131C7.44996 4.65862 8.03021 4.81276 8.625 4.8125H14.375C14.9698 4.81276 15.55 4.65862 16.0358 4.37131C16.5215 4.084 16.8888 3.67768 17.0871 3.20833H20.125C20.3792 3.20833 20.6229 3.29284 20.8026 3.44326C20.9824 3.59368 21.0833 3.79769 21.0833 4.01042V23.2604C21.0833 23.4731 20.9824 23.6772 20.8026 23.8276C20.6229 23.978 20.3792 24.0625 20.125 24.0625H2.875C2.62083 24.0625 2.37708 23.978 2.19736 23.8276C2.01763 23.6772 1.91667 23.4731 1.91667 23.2604V4.01042C1.91667 3.79769 2.01763 3.59368 2.19736 3.44326C2.37708 3.29284 2.62083 3.20833 2.875 3.20833V3.20833Z" />
													</svg>
												</div>
												<span>Requisitos</span>
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
													<svg
														width="26"
														height="19"
														viewBox="0 0 26 19"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="icon mr-3">
														<path
															d="M2.39286 3.42857C2.39286 3.15654 2.49968 2.89624 2.68889 2.70478C2.878 2.51342 3.13385 2.40646 3.4 2.40646H22.6C22.8661 2.40646 23.122 2.51342 23.3111 2.70478C23.5003 2.89624 23.6071 3.15654 23.6071 3.42857V15.5714C23.6071 15.8435 23.5003 16.1038 23.3111 16.2952C23.122 16.4866 22.8661 16.5935 22.6 16.5935H3.4C3.13385 16.5935 2.878 16.4866 2.68889 16.2952C2.49968 16.1038 2.39286 15.8435 2.39286 15.5714V3.42857ZM1.52512 1.53558C1.02849 2.03814 0.75 2.71912 0.75 3.42857V15.5714C0.75 16.2809 1.02849 16.9619 1.52512 17.4644C2.02186 17.9671 2.69622 18.25 3.4 18.25H22.6C23.3038 18.25 23.9781 17.9671 24.4749 17.4644C24.9715 16.9619 25.25 16.2809 25.25 15.5714V3.42857C25.25 2.71912 24.9715 2.03813 24.4749 1.53558C23.9781 1.03293 23.3038 0.75 22.6 0.75H3.4C2.69622 0.75 2.02186 1.03293 1.52512 1.53558Z"
															stroke="#56756B"
															strokeWidth="0.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M15.4802 9.5C15.4802 10.651 14.4022 11.6389 13 11.6389C11.5978 11.6389 10.5198 10.651 10.5198 9.5C10.5198 8.34904 11.5978 7.36111 13 7.36111C14.4022 7.36111 15.4802 8.34904 15.4802 9.5ZM13 13.25C15.3148 13.25 17.25 11.6014 17.25 9.5C17.25 7.39862 15.3148 5.75 13 5.75C10.6852 5.75 8.75 7.39862 8.75 9.5C8.75 11.6014 10.6852 13.25 13 13.25Z"
															stroke="#56756B"
															strokeWidth="0.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M2.39865 4.27322C2.36932 4.28575 2.34266 4.30378 2.32011 4.32634L0.823223 5.82322C0.751724 5.89472 0.730335 6.00225 0.76903 6.09567C0.807725 6.18909 0.898884 6.25 1 6.25C2.39239 6.25 3.72775 5.69688 4.71231 4.71231C5.69688 3.72775 6.25 2.39239 6.25 1C6.25 0.898884 6.18909 0.807725 6.09567 0.76903C6.00225 0.730335 5.89472 0.751724 5.82322 0.823223L4.32634 2.32011C4.30378 2.34266 4.28575 2.36932 4.27322 2.39865C4.09646 2.81233 3.84123 3.1927 3.51696 3.51696C3.1927 3.84123 2.81233 4.09646 2.39865 4.27322Z"
															stroke="#56756B"
															strokeWidth="0.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
														<path
															d="M25.1768 13.1768C25.2483 13.1053 25.2697 12.9977 25.231 12.9043C25.1923 12.8109 25.1011 12.75 25 12.75C23.6076 12.75 22.2723 13.3031 21.2877 14.2877C20.3031 15.2723 19.75 16.6076 19.75 18C19.75 18.1011 19.8109 18.1923 19.9043 18.231C19.9977 18.2697 20.1053 18.2483 20.1768 18.1768L21.6737 16.6799C21.6962 16.6573 21.7142 16.6307 21.7268 16.6013C21.9035 16.1877 22.1588 15.8073 22.483 15.483C22.8073 15.1588 23.1877 14.9035 23.6013 14.7268C23.6307 14.7142 23.6573 14.6962 23.6799 14.6737L25.1768 13.1768Z"
															stroke="#56756B"
															strokeWidth="0.5"
															strokeLinecap="round"
															strokeLinejoin="round"
														/>
													</svg>
												</div>
												<span>Inversión</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-inscripcion-tab"
												data-toggle="pill"
												href="#v-pills-inscripcion"
												role="tab"
												aria-controls="v-pills-inscripcion"
												aria-selected="false">
												<div>
													<svg
														width="22"
														height="25"
														viewBox="0 0 22 25"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="icon mr-3">
														<path
															d="M13.9713 11.0971L10.3447 14.7251L8.87414 13.2532L8.87406 13.2531C8.78402 13.1631 8.67713 13.0917 8.55948 13.0429C8.44184 12.9942 8.31574 12.9691 8.18841 12.9691C7.93124 12.9691 7.6846 13.0713 7.50276 13.2531C7.41272 13.3432 7.34129 13.4501 7.29256 13.5677C7.24383 13.6854 7.21875 13.8114 7.21875 13.9388C7.21875 14.0661 7.24383 14.1922 7.29256 14.3099C7.34129 14.4275 7.41272 14.5344 7.50276 14.6244L9.65878 16.7805C9.65885 16.7805 9.65893 16.7806 9.659 16.7807C9.74894 16.8708 9.85577 16.9423 9.97337 16.9911C10.0911 17.0399 10.2172 17.0651 10.3447 17.0651C10.4721 17.0651 10.5983 17.0399 10.7159 16.9911C10.8335 16.9423 10.9404 16.8708 11.0303 16.7807C11.0304 16.7806 11.0305 16.7805 11.0305 16.7805L15.3426 12.4684C15.3426 12.4684 15.3427 12.4683 15.3427 12.4683C15.4329 12.3783 15.5044 12.2715 15.5532 12.1538C15.6021 12.0361 15.6272 11.91 15.6272 11.7825C15.6272 11.6551 15.6021 11.5289 15.5532 11.4112C15.5044 11.2936 15.4329 11.1868 15.3428 11.0969C15.2528 11.0068 15.146 10.9353 15.0284 10.8865C14.9108 10.8376 14.7846 10.8125 14.6572 10.8125C14.5297 10.8125 14.4036 10.8376 14.2859 10.8865C14.1682 10.9353 14.0613 11.0069 13.9713 11.0971Z"
															stroke="#56756B"
															strokeWidth="0.5"
														/>
														<path
															d="M5.5625 3.15625V2.90625H5.3125H3.875C3.0462 2.90625 2.25134 3.23549 1.66529 3.82154C1.07924 4.40759 0.75 5.20245 0.75 6.03125V21.125C0.75 21.9538 1.07924 22.7487 1.66529 23.3347C2.25134 23.9208 3.0462 24.25 3.875 24.25H18.25C19.0788 24.25 19.8737 23.9208 20.4597 23.3347C21.0458 22.7487 21.375 21.9538 21.375 21.125V6.03125C21.375 5.20245 21.0458 4.40759 20.4597 3.82154C19.8737 3.23549 19.0788 2.90625 18.25 2.90625H16.8125H16.5625V3.15625V4.59375V4.84375H16.8125H18.25C18.5649 4.84375 18.867 4.96886 19.0897 5.19156C19.3124 5.41426 19.4375 5.71631 19.4375 6.03125V21.125C19.4375 21.4399 19.3124 21.742 19.0897 21.9647C18.867 22.1874 18.5649 22.3125 18.25 22.3125H3.875C3.56006 22.3125 3.25801 22.1874 3.03531 21.9647C2.81261 21.742 2.6875 21.4399 2.6875 21.125V6.03125C2.6875 5.71631 2.81261 5.41426 3.03531 5.19156C3.25801 4.96886 3.56006 4.84375 3.875 4.84375H5.3125H5.5625V4.59375V3.15625Z"
															stroke="#56756B"
															strokeWidth="0.5"
														/>
														<path
															d="M13.2188 2.6875C13.3431 2.6875 13.4623 2.73689 13.5502 2.82479C13.6381 2.9127 13.6875 3.03193 13.6875 3.15625V4.59375C13.6875 4.71807 13.6381 4.8373 13.5502 4.92521C13.4623 5.01311 13.3431 5.0625 13.2188 5.0625H8.90625C8.78193 5.0625 8.6627 5.01311 8.57479 4.92521C8.48689 4.8373 8.4375 4.71807 8.4375 4.59375V3.15625C8.4375 3.03193 8.48689 2.9127 8.57479 2.82479C8.6627 2.73689 8.78193 2.6875 8.90625 2.6875H13.2188ZM8.90625 0.75C8.26807 0.75 7.65603 1.00351 7.20477 1.45477C6.75351 1.90603 6.5 2.51807 6.5 3.15625V4.59375C6.5 5.23193 6.75351 5.84397 7.20477 6.29523C7.65603 6.74649 8.26807 7 8.90625 7H13.2188C13.8569 7 14.469 6.74649 14.9202 6.29523C15.3715 5.84397 15.625 5.23193 15.625 4.59375V3.15625C15.625 2.51807 15.3715 1.90603 14.9202 1.45477C14.469 1.00351 13.8569 0.75 13.2188 0.75H8.90625Z"
															stroke="#56756B"
															strokeWidth="0.5"
														/>
													</svg>
												</div>
												<span>Inscripción</span>
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
											id="v-pills-cronograma"
											role="tabpanel"
											aria-labelledby="v-pills-cronograma-tab">
											<Tabs
												defaultActiveKey="cronogramas"
												id="admision-tab">
												<Tab
													className="pt-3"
													eventKey="cronogramas"
													title="Proceso de admisión">
													<div className="table-responsive admision-posgrado-tablas">
														<table className="striped w-100">
															<thead>
																<tr>
																	<th className="text-center">
																		Actividad
																	</th>
																	<th className="text-center">
																		Fecha
																	</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		Cuadro
																		de
																		Vacantes-RR
																	</td>
																	<td>
																		26 de
																		enero
																	</td>
																</tr>
																<tr>
																	<td>
																		Inscripción
																		de
																		postulantes
																		y envío
																		de
																		expediente
																	</td>
																	<td>
																		Del 01
																		de
																		febrero
																		al 27 de
																		marzo
																	</td>
																</tr>
																{/* <tr>
																	<td>
																		Inscripción
																		extemporánea
																	</td>
																	<td>
																		21 de
																		marzo
																	</td>
																</tr> */}
																<tr>
																	<td>
																		Examen
																		de
																		aptitud
																		virtual
																		para
																		maestrías
																		y
																		doctorados
																	</td>
																	<td>
																		28 de
																		marzo
																	</td>
																</tr>
																<tr>
																	<td>
																		Sustentación
																		del
																		proyecto
																		de
																		investigación
																		(solo
																		doctorado)
																	</td>
																	<td>
																		29 de
																		marzo
																	</td>
																</tr>
																<tr>
																	<td>
																		Evaluación
																		del
																		expediente
																	</td>
																	<td>
																		{' '}
																		30 de
																		marzo
																	</td>
																</tr>
																<tr>
																	<td>
																		Entrevista
																		personal
																		virtual
																		(solo
																		maestría)
																		Ingreso
																		de
																		evaluación
																		al
																		SISEVA
																		para
																		generación
																		de actas
																	</td>
																	<td>
																		31 de
																		marzo{' '}
																		<br />{' '}
																		01 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Publicación
																		de
																		resultados
																	</td>
																	<td>
																		02 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Resolución
																		de
																		Decanato
																		de
																		ingresantes
																		envío a
																		la DGEP
																	</td>
																	<td>
																		06 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Consolidado
																		de
																		ingresantes,
																		envío a
																		la
																		Oficina
																		de
																		Planificación
																	</td>
																	<td>
																		08 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Oficina
																		de
																		Planificación,
																		envío a
																		MINEDU–SUNEDU
																	</td>
																	<td>
																		{' '}
																		12 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Reactualización
																		de
																		matrícula
																	</td>
																	<td>
																		Del 28
																		de marzo
																		al 01 de
																		abril
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</Tab>
												<Tab
													className="pt-3"
													eventKey="inscripcion"
													title="Proceso de matrícula">
													<div className="table-responsive admision-posgrado-tablas">
														<table className="striped w-100">
															<thead>
																<tr>
																	<th className="text-center">
																		Actividad
																	</th>
																	<th className="text-center">
																		Fecha
																	</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		Reactualización
																		de
																		matrícula
																	</td>
																	<td>
																		Del 28
																		de marzo
																		al 01 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Matrícula
																		Regular
																	</td>
																	<td>
																		Del 04
																		al 11 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Matrícula
																		de
																		ingresantes
																	</td>
																	<td>
																		Del 08
																		al 11 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Reserva
																		de
																		matrícula
																	</td>
																	<td>
																		Del 18
																		al 29 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Matrícula
																		extemporánea
																		y
																		rectificación
																		de
																		matrícula
																	</td>
																	<td>
																		Del 18
																		al 28 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Anulación
																		de
																		matrícula
																	</td>
																	<td>
																		Del 02
																		al 06 de
																		mayo
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</Tab>
												<Tab
													className="pt-3"
													eventKey="academicas"
													title="Actividades académicas">
													<div className="table-responsive admision-posgrado-tablas">
														<table className="striped w-100">
															<thead>
																<tr>
																	<th className="text-center">
																		Actividad
																	</th>
																	<th className="text-center">
																		Fecha
																	</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																		Capacitación
																		en base
																		de
																		datos,
																		aspectos
																		de
																		investigación
																		y
																		normativa
																		de
																		posgrado
																	</td>
																	<td>
																		09 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Inicio
																		de
																		clases
																	</td>
																	<td>
																		11 de
																		abril
																	</td>
																</tr>
																<tr>
																	<td>
																		Fin de
																		clases
																	</td>
																	<td>
																		02 de
																		agosto
																	</td>
																</tr>
																<tr>
																	<td>
																		Ingreso
																		de notas
																	</td>
																	<td>
																		Del 03
																		al 10 de
																		agosto
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</Tab>
											</Tabs>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-recomendaciones"
											role="tabpanel"
											aria-labelledby="v-pills-recomendaciones-tab">
											<p>
												<strong>
													RECOMENDACIONES PARA LOS
													POSTULANTES (DOCTORADO Y
													MAESTR&Iacute;AS) AL PROCESO
													DE ADMISI&Oacute;N 2022-I
												</strong>
											</p>
											<ol>
												<li aria-level="1">
													Como parte del proceso de
													postulaci&oacute;n, el
													estudiante debe informarse
													de las posibilidades de
													financiamiento de la tesis a
													desarrollar en el posgrado.
													Una de estas posibilidades
													es integrarse a algunos de
													los grupos de
													investigaci&oacute;n (GI) de
													la FCB o facultades afines,
													y participar de los
													concursos internos de
													financiamiento de proyectos
													de investigaci&oacute;n para
													los GI. La
													informaci&oacute;n de los
													grupos de
													investigaci&oacute;n de la
													FCB puede ser revisada en:
													<a
														href="https://vrip.unmsm.edu.pe/biologia/"
														target="_blank">
														https://vrip.unmsm.edu.pe/biologia/
													</a>
												</li>
												<li aria-level="1">
													El postulante debe
													evidenciar el contacto
													previo con un potencial
													asesor para su proyecto de
													tesis. Este aspecto
													ser&aacute; evaluado en el
													proceso de
													postulaci&oacute;n durante
													la presentaci&oacute;n de su
													proyecto de
													investigaci&oacute;n
													(postulantes al doctorado) o
													en su propuesta de proyecto
													de investigaci&oacute;n (una
													versi&oacute;n resumida para
													los postulantes a las
													maestr&iacute;as). Este
													potencial asesor puede ser
													un docente de la FCB o de la
													UNMSM preferentemente, o un
													investigador reconocido, con
													trayectoria en el tema
													investigaci&oacute;n de la
													tesis, y que est&eacute;
													acreditado como investigador
													RENACYT. Informaci&oacute;n
													de la plana docente del
													doctorado y de cada
													maestr&iacute;a de la FCB la
													pueden encontrar
													aqu&iacute;:
													<a
														href="https://biologia.unmsm.edu.pe/formacion-academica/posgrado"
														target="_blank">
														https://biologia.unmsm.edu.pe/formacion-academica/posgrado
													</a>
												</li>
												<li aria-level="1">
													Se valorar&aacute;
													positivamente que los
													postulantes puedan haber
													realizado con
													antelaci&oacute;n el
													contacto con investigadores
													y jefes de laboratorio de la
													FCB, de la UNMSM o de otras
													instituciones que
													podr&iacute;an proveerles el
													financiamiento para su
													investigaci&oacute;n y
													finalmente que puedan haber
													elaborado temas o preguntas
													de investigaci&oacute;n para
													su postulaci&oacute;n.
												</li>
											</ol>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-cuadro"
											role="tabpanel"
											aria-labelledby="v-pills-cuadro-tab">
											<div className="table-responsive admision-posgrado-tablas">
												<table className="striped w-100">
													<thead>
														<tr>
															<th className="text-center">
																Maestrías
															</th>
															<th className="text-center">
																Mención
															</th>
															<th className="text-center">
																Vac. Concurso
															</th>
															<th className="text-center">
																Traslado
																<br />
																interno
															</th>
															<th className="text-center">
																Traslado
																<br /> externo
															</th>
															<th className="text-center">
																Total
															</th>
														</tr>
													</thead>
													<tbody>
														<tr className="bg-verdeClaro">
															<td rowSpan={3}>
																Bótanica
																tropical
															</td>
															<td>
																Taxonomía y
																Sistemática
																Evolutiva
															</td>
															<td>12</td>
															<td>01</td>
															<td>01</td>
															<td>14</td>
														</tr>
														<tr className="bg-verdeClaro">
															<td>
																Botánica
																Económica
															</td>
															<td>12</td>
															<td>01</td>
															<td>01</td>
															<td>14</td>
														</tr>
														<tr className="bg-verdeClaro">
															<td>
																Etnobotánica
															</td>
															<td>12</td>
															<td>01</td>
															<td>01</td>
															<td>14</td>
														</tr>
														<tr className="bg-blancoTabla">
															<td rowSpan={3}>
																Ecosistemas y
																recursos
																acuáticos
															</td>
															<td>
																Ecosistemas
																Acuáticos
															</td>
															<td>10</td>
															<td>01</td>
															<td>01</td>
															<td>12</td>
														</tr>
														<tr className="bg-blancoTabla">
															<td>
																Evaluación y
																manejo de
																recursos
																pesqueros
															</td>
															<td>10</td>
															<td>01</td>
															<td>01</td>
															<td>12</td>
														</tr>
														<tr className="bg-blancoTabla">
															<td>Acuicultura</td>
															<td>10</td>
															<td>01</td>
															<td>01</td>
															<td>12</td>
														</tr>
														<tr className="bg-verdeClaro">
															<td rowSpan={2}>
																Zoología
															</td>
															<td>
																Sistemática y
																Evolución
															</td>
															<td>05</td>
															<td>01</td>
															<td>01</td>
															<td>07</td>
														</tr>
														<tr className="bg-verdeClaro">
															<td>
																Ecología y
																Conservación
															</td>
															<td>10</td>
															<td>01</td>
															<td>01</td>
															<td>12</td>
														</tr>
														<tr className="bg-blancoTabla">
															<td colSpan={2}>
																Biología
																molecular{' '}
															</td>
															<td>27</td>
															<td>01</td>
															<td>01</td>
															<td>29</td>
														</tr>
														<tr className="bg-verdeClaro">
															<td colSpan={2}>
																Genética
															</td>
															<td>10</td>
															<td>01</td>
															<td>01</td>
															<td>12</td>
														</tr>
														<tr
															className="bg-blancoTabla"
															style={{
																borderBottom:
																	'1px solid #56756b40',
															}}>
															<td colSpan={2}>
																Biodiversidad y
																gestión de
																ecosistemas
															</td>
															<td>18</td>
															<td>01</td>
															<td>01</td>
															<td>20</td>
														</tr>
													</tbody>
												</table>
												<table className="striped w-100 mt-5">
													<thead>
														<tr>
															<th className="text-center">
																Doctorado
															</th>
															<th className="text-center">
																Mención
															</th>
															<th className="text-center">
																Vac. Concurso
															</th>
															<th className="text-center">
																Traslado
																<br />
																interno
															</th>
															<th className="text-center">
																Traslado
																<br /> externo
															</th>
															<th className="text-center">
																Total
															</th>
														</tr>
													</thead>
													<tbody>
														<tr
															className="bg-blancoTabla"
															style={{
																borderBottom:
																	'1px solid #56756b40',
															}}>
															<td colSpan={2}>
																Doctorado en
																Ciencias
																Biológicas
															</td>
															<td>10</td>
															<td>01</td>
															<td>01</td>
															<td>12</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-requisitos"
											role="tabpanel"
											aria-labelledby="v-pills-requisitos-tab">
											<Tabs
												defaultActiveKey="maestria"
												id="admision-tab">
												<Tab
													className="pt-3"
													eventKey="maestria"
													title="Maestría">
													<p>
														El postulante deberá
														enviar (en un solo
														archivo pdf) mediante la
														plataforma de mesa de
														partes,&nbsp;
														<b>
															&nbsp;
															mesadepartes.biologia@unmsm.edu.pe
														</b>
														,&nbsp; el expediente
														completo a la Unidad de
														Posgrado de la Facultad,
														con los siguientes
														documentos:
													</p>
													<ol>
														<li>
															Resumen de la hoja
															de vida del
															postulante
															(documentado,
															foliado y ordenado
															de acuerdo a los
															rubros del formato).
														</li>
														<li>
															Constancia de
															inscripci&oacute;n
															en l&iacute;nea del
															grado de Bachiller
															emitido por SUNEDU o
															la copia del diploma
															de grado de
															Bachiller fedateado
															por la universidad
															de procedencia (*).
														</li>
														<li>
															Copia del documento
															de identidad (DNI,
															carn&eacute; de
															extranjer&iacute;a o
															pasaporte).
														</li>
														<li>
															Recibo de pago por
															derecho de
															inscripci&oacute;n
															efectuado en el
															Banco de
															Cr&eacute;dito del
															Per&uacute; o en el
															Banco de la
															Naci&oacute;n.
														</li>
														<li>
															Otro documento que
															la Unidad de
															Posgrado considere
															con relaci&oacute;n
															al perfil de ingreso
															al programa que
															postula. Revisar
															requisitos a
															trav&eacute;s de la
															p&aacute;gina web de
															la Facultad &ndash;
															Posgrado.
														</li>
													</ol>
													<p>
														(*) Los postulantes que
														obtuvieron el grado de
														Bachiller en la
														Universidad Nacional
														Mayor de San Marcos solo
														presentan copia simple.{' '}
														<br />
														En el caso de graduados
														en el extranjero, los
														grados y t&iacute;tulos
														deber&aacute;n estar
														revalidados o
														reconocidos seg&uacute;n
														las normas vigentes.
													</p>
												</Tab>
												<Tab
													className="pt-3"
													eventKey="doctorado"
													title="Doctorado">
													<p>
														El postulante deberá
														enviar (en un solo
														archivo pdf) mediante la
														plataforma de mesa de
														partes,&nbsp;
														<b>
															&nbsp;
															mesadepartes.biologia@unmsm.edu.pe
														</b>
														,&nbsp;el expediente
														completo a la Unidad de
														Posgrado de la Facultad,
														con los siguientes
														documentos:
													</p>
													<ol>
														<li>
															Resumen de la hoja
															de vida del
															postulante
															(documentado,
															foliado y ordenado
															de acuerdo a los
															rubros del formato)
														</li>
														<li>
															Constancia de
															inscripci&oacute;n
															en l&iacute;nea del
															grado de Maestro o
															Doctor emitido por
															SUNEDU o la copia
															del diploma de grado
															de Maestro o Doctor
															fedateado por la
															universidad de
															procedencia (*).
														</li>
														<li>
															Copia del documento
															de identidad (DNI,
															carn&eacute; de
															extranjer&iacute;a o
															pasaporte).
														</li>
														<li>
															Recibo de pago por
															derecho de
															inscripci&oacute;n
															efectuado en el
															Banco de
															Cr&eacute;dito del
															Per&uacute; o en el
															Banco de la
															Naci&oacute;n.
														</li>
														<li>
															Proyecto de
															Investigaci&oacute;n.
														</li>
														<li>
															Otro documento que
															la Unidad de
															Posgrado considere
															con relaci&oacute;n
															al perfil de ingreso
															al programa que
															postula. Revisar
															requisitos a
															trav&eacute;s de la
															p&aacute;gina web de
															la Facultad &ndash;
															Posgrado.
														</li>
													</ol>
													<p>
														(*) Los postulantes que
														obtuvieron el grado de
														Maestro o Doctor en la
														Universidad Nacional
														Mayor de San Marcos solo
														presentan copia simple.
														<br />
														En el caso de graduados
														en el extranjero, los
														grados y t&iacute;tulos
														deber&aacute;n estar
														revalidados o
														reconocidos seg&uacute;n
														las normas vigentes.
													</p>
												</Tab>
											</Tabs>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-inversion"
											role="tabpanel"
											aria-labelledby="v-pills-inversion-tab">
											<p>
												<b>Pago de inscripción:</b>{' '}
												Banco de Crédito del Perú Cta.
												Cte.n.º 191-0215772014 CCI n.º
												002-191-00021577201451 o Banco
												de la Nación:
											</p>
											<div className="table-responsive admision-posgrado-tablas">
												<table className="striped w-100">
													<tbody>
														<tr
															style={{
																borderTop:
																	'1px solid #56756b40',
															}}>
															<td></td>
															<td>
																Estudiantes de
																UNMSM
															</td>
															<td>
																Otras
																universidades
															</td>
														</tr>
														<tr>
															<td
																style={{
																	backgroundColor:
																		'#d2ede6',
																}}>
																Maestría
															</td>
															<td
																style={{
																	backgroundColor:
																		'#ffffff',
																}}>
																S/.350.00
																<br />
																Transacción:
																9650 + código:
																9700
															</td>
															<td
																style={{
																	backgroundColor:
																		'#ffffff',
																}}>
																S/.450.00
																<br />
																Transacción:
																9650 + código:
																9701
															</td>
														</tr>
														<tr
															style={{
																borderBottom:
																	'1px solid #56756b40',
															}}>
															<td rowSpan={2}>
																Doctorado
															</td>
															<td
																style={{
																	backgroundColor:
																		'#ffffff',
																}}>
																S/.400.00
																<br />
																Transacción:
																9650 + código:
																9702
															</td>
															<td
																style={{
																	backgroundColor:
																		'#ffffff',
																}}>
																S/.500.00
																<br />
																Transacción:
																9650 + código:
																9703
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<p className="mt-4">
												<b>
													Inversión por estudios de
													Posgrado:
												</b>
												&nbsp; Todo pago debe realizarse
												en agencias físicas del Banco
												Pichincha, según los conceptos
												de pagos señalados en el
												siguiente cuadro:
											</p>
											<div className="table-responsive admision-posgrado-tablas">
												<table className="striped w-100">
													<tbody>
														<tr
															style={{
																borderTop:
																	'1px solid #56756b40',
															}}>
															<td>Programa</td>
															<td>Descripción</td>
															<td>
																Concepto de pago
															</td>
															<td>Importe</td>
															<td>Requisito</td>
														</tr>
														<tr
															style={{
																borderTop:
																	'1px solid #56756b40',
															}}>
															<td>
																Maetrías (4
																semestres)
															</td>
															<td>
																Matrícula /
																Perfeccionamiento
															</td>
															<td>
																102-010/102-011
															</td>
															<td>
																S/.310.00 /
																S/.2,000.00
															</td>
															<td>
																Cubrir vacante
															</td>
														</tr>
														<tr
															style={{
																borderBottom:
																	'1px solid #56756b40',
																backgroundColor:
																	'#ffffff',
															}}>
															<td>
																Doctorado (6
																semestres)
															</td>
															<td>
																Matrícula /
																Perfeccionamiento
															</td>
															<td>
																102-010/102-011
															</td>
															<td>
																S/.310.00 /
																S/.3,400.00
															</td>
															<td>
																Cubrir vacante
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-inscripcion"
											role="tabpanel"
											aria-labelledby="v-pills-inversion-tab">
											<p>
												<b>Inscripción: &nbsp;</b>
												<a
													href="http://posgrado.unmsm.edu.pe"
													target="_blank">
													http://posgrado.unmsm.edu.pe
												</a>
											</p>
											<p>
												Pago de inscripción: Banco de
												Crédito del Perú Cta. Cte.n.º
												191-0215772014 CCI n.º
												002-191-00021577201451 o Banco
												de la Nación
											</p>
											<div className="table-responsive admision-posgrado-tablas">
												<table className="striped w-100">
													<tbody>
														<tr
															style={{
																borderTop:
																	'1px solid #56756b40',
															}}>
															<td></td>
															<td>
																Estudiantes de
																UNMSM
															</td>
															<td>
																Otras
																universidades
															</td>
														</tr>
														<tr>
															<td
																style={{
																	backgroundColor:
																		'#d2ede6',
																}}>
																Maestría
															</td>
															<td
																style={{
																	backgroundColor:
																		'#ffffff',
																}}>
																S/.350.00
																<br />
																Transacción:
																9650 +
																código:9700
															</td>
															<td
																style={{
																	backgroundColor:
																		'#ffffff',
																}}>
																S/.450.00
																<br />
																Transacción:
																9650 +
																código:9701
															</td>
														</tr>
														<tr
															style={{
																borderBottom:
																	'1px solid #56756b40',
															}}>
															<td rowSpan={2}>
																Doctorado
															</td>
															<td
																style={{
																	backgroundColor:
																		'#ffffff',
																}}>
																S/.400.00
																<br />
																Transacción:
																9650 +
																código:9702
															</td>
															<td
																style={{
																	backgroundColor:
																		'#ffffff',
																}}>
																S/.500.00
																<br />
																Transacción:
																9650 +
																código:9703
															</td>
														</tr>
													</tbody>
												</table>
											</div>
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
