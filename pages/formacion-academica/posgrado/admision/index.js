import React, { useState, useEffect } from "react";
import Layout from "../../../../components/Layout";
import CronogramaPosgrado from "../../../../components/posgrado/CronogramaPosgrado";
import PagoInscripcionDoctorado from "../../../../components/posgrado/PagoInscripcionDoctorado";
import RequisitosDoctorado from "../../../../components/posgrado/RequisitosDoctorado";

import { Row, Col, Container, Breadcrumb, Tabs, Tab } from "react-bootstrap";
import Link from "next/link";
import { getDocenteByIdInformacionAcademicaApi } from "../../../api/formacion-academica";

import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";

import { useWindowSize } from "../../../../utils/useWindowSize";

const index = () => {
	const { width, height } = useWindowSize();
	const [docentes, setDocentes] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await getDocenteByIdInformacionAcademicaApi(
				"doctorado_en_ciencias_biologicas"
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
						<img className="icon mr-2" src="/assets/img/iconos/telefono.svg" alt="" />
					</div>
					<div>
						<span>+(51) 619 7000 Anexos 1503, 1510</span>
					</div>
				</div>
				<div className="mb-0 grid-contacto">
					<div>
						<img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt="" />
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
												<a role="button">Formación académica: Posgrado</a>
											</Link>
										</li>
										<Breadcrumb.Item active>Posgrado | Admisión 2022-I</Breadcrumb.Item>
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
									<div className="title-page text-center">Posgrado | Admisión 2022-I</div>
								</Col>
								<Col md="1"></Col>
							</Row>
						</Container>
					</div>
					{/* IMAGE */}
					<div className="mb-4">
						<img
							className="w-100"
							src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/posgrado_admision_31916edf9a.png"
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
											aria-orientation="vertical"
										>
											<a
												className="tab d-flex active"
												id="v-pills-cronograma-tab"
												data-toggle="pill"
												href="#v-pills-cronograma"
												role="tab"
												aria-controls="v-pills-cronograma"
												aria-selected="true"
											>
												<div>
													<svg
														width="24"
														height="25"
														viewBox="0 0 24 25"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g clip-path="url(#clip0)">
															<path d="M21.75 5.34961C21.9489 5.34961 22.1397 5.42863 22.2803 5.56928C22.421 5.70993 22.5 5.9007 22.5 6.09961V19.5996C22.5 19.7985 22.421 19.9893 22.2803 20.1299C22.1397 20.2706 21.9489 20.3496 21.75 20.3496H2.25C2.05109 20.3496 1.86032 20.2706 1.71967 20.1299C1.57902 19.9893 1.5 19.7985 1.5 19.5996V6.09961C1.5 5.9007 1.57902 5.70993 1.71967 5.56928C1.86032 5.42863 2.05109 5.34961 2.25 5.34961H21.75ZM2.25 3.84961C1.65326 3.84961 1.08097 4.08666 0.65901 4.50862C0.237053 4.93058 0 5.50287 0 6.09961L0 19.5996C0 20.1963 0.237053 20.7686 0.65901 21.1906C1.08097 21.6126 1.65326 21.8496 2.25 21.8496H21.75C22.3467 21.8496 22.919 21.6126 23.341 21.1906C23.7629 20.7686 24 20.1963 24 19.5996V6.09961C24 5.50287 23.7629 4.93058 23.341 4.50862C22.919 4.08666 22.3467 3.84961 21.75 3.84961H2.25Z" />
															<path d="M7.5 12.8496C7.5 12.6507 7.57902 12.4599 7.71967 12.3193C7.86032 12.1786 8.05109 12.0996 8.25 12.0996H18.75C18.9489 12.0996 19.1397 12.1786 19.2803 12.3193C19.421 12.4599 19.5 12.6507 19.5 12.8496C19.5 13.0485 19.421 13.2393 19.2803 13.3799C19.1397 13.5206 18.9489 13.5996 18.75 13.5996H8.25C8.05109 13.5996 7.86032 13.5206 7.71967 13.3799C7.57902 13.2393 7.5 13.0485 7.5 12.8496ZM7.5 9.09961C7.5 8.9007 7.57902 8.70993 7.71967 8.56928C7.86032 8.42863 8.05109 8.34961 8.25 8.34961H18.75C18.9489 8.34961 19.1397 8.42863 19.2803 8.56928C19.421 8.70993 19.5 8.9007 19.5 9.09961C19.5 9.29852 19.421 9.48929 19.2803 9.62994C19.1397 9.77059 18.9489 9.84961 18.75 9.84961H8.25C8.05109 9.84961 7.86032 9.77059 7.71967 9.62994C7.57902 9.48929 7.5 9.29852 7.5 9.09961ZM7.5 16.5996C7.5 16.4007 7.57902 16.2099 7.71967 16.0693C7.86032 15.9286 8.05109 15.8496 8.25 15.8496H18.75C18.9489 15.8496 19.1397 15.9286 19.2803 16.0693C19.421 16.2099 19.5 16.4007 19.5 16.5996C19.5 16.7985 19.421 16.9893 19.2803 17.1299C19.1397 17.2706 18.9489 17.3496 18.75 17.3496H8.25C8.05109 17.3496 7.86032 17.2706 7.71967 17.1299C7.57902 16.9893 7.5 16.7985 7.5 16.5996ZM6 9.09961C6 9.29852 5.92098 9.48929 5.78033 9.62994C5.63968 9.77059 5.44891 9.84961 5.25 9.84961C5.05109 9.84961 4.86032 9.77059 4.71967 9.62994C4.57902 9.48929 4.5 9.29852 4.5 9.09961C4.5 8.9007 4.57902 8.70993 4.71967 8.56928C4.86032 8.42863 5.05109 8.34961 5.25 8.34961C5.44891 8.34961 5.63968 8.42863 5.78033 8.56928C5.92098 8.70993 6 8.9007 6 9.09961ZM6 12.8496C6 13.0485 5.92098 13.2393 5.78033 13.3799C5.63968 13.5206 5.44891 13.5996 5.25 13.5996C5.05109 13.5996 4.86032 13.5206 4.71967 13.3799C4.57902 13.2393 4.5 13.0485 4.5 12.8496C4.5 12.6507 4.57902 12.4599 4.71967 12.3193C4.86032 12.1786 5.05109 12.0996 5.25 12.0996C5.44891 12.0996 5.63968 12.1786 5.78033 12.3193C5.92098 12.4599 6 12.6507 6 12.8496ZM6 16.5996C6 16.7985 5.92098 16.9893 5.78033 17.1299C5.63968 17.2706 5.44891 17.3496 5.25 17.3496C5.05109 17.3496 4.86032 17.2706 4.71967 17.1299C4.57902 16.9893 4.5 16.7985 4.5 16.5996C4.5 16.4007 4.57902 16.2099 4.71967 16.0693C4.86032 15.9286 5.05109 15.8496 5.25 15.8496C5.44891 15.8496 5.63968 15.9286 5.78033 16.0693C5.92098 16.2099 6 16.4007 6 16.5996Z" />
														</g>
														<defs>
															<clipPath id="clip0">
																<rect
																	width="24"
																	height="24"
																	fill="white"
																	transform="translate(0 0.849609)"
																/>
															</clipPath>
														</defs>
													</svg>
												</div>
												<span>Cronograma</span>
											</a>
											<a
												className="tab d-flex"
												id="v-pills-cuadro-tab"
												data-toggle="pill"
												href="#v-pills-cuadro"
												role="tab"
												aria-controls="v-pills-cuadro"
												aria-selected="false"
											>
												<div>
													<svg
														width="23"
														height="18"
														viewBox="0 0 23 18"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg"
													>
														<g clip-path="url(#clip0)">
															<path d="M22.2939 4.83473V15.5122C22.2939 15.9942 22.1162 16.4113 21.7609 16.7635C21.4056 17.1157 20.9901 17.2918 20.5143 17.2918H2.12528C1.64949 17.2918 1.23395 17.1157 0.878651 16.7635C0.523352 16.4113 0.345703 15.9942 0.345703 15.5122V4.83473C0.345703 4.36512 0.524897 3.95112 0.883285 3.59273C1.24167 3.23434 1.65567 3.05515 2.12528 3.05515H8.65041L8.64115 4.51959H8.36309C8.26422 4.51959 8.1808 4.55203 8.11283 4.61691C8.04486 4.6818 8.01088 4.75749 8.01088 4.844V5.48353C8.01088 5.57004 8.04486 5.64265 8.11283 5.70135C8.1808 5.76005 8.26422 5.7894 8.36309 5.7894H14.3228C14.4217 5.7894 14.5036 5.76005 14.5684 5.70135C14.6333 5.64265 14.6658 5.57004 14.6658 5.48353V4.844C14.6658 4.75749 14.6333 4.6818 14.5684 4.61691C14.5036 4.55203 14.4217 4.51959 14.3228 4.51959H14.0355L14.017 3.05515H20.5143C20.9901 3.05515 21.4056 3.2328 21.7609 3.58809C22.1162 3.94339 22.2939 4.35894 22.2939 4.83473ZM9.95729 13.8068C9.95729 13.4113 9.92949 13.0452 9.87388 12.7084C9.81826 12.3717 9.72867 12.0473 9.60509 11.7352C9.4815 11.4232 9.29613 11.1776 9.04897 10.9984C8.8018 10.8192 8.50829 10.7296 8.16844 10.7296C7.69883 11.1992 7.13962 11.434 6.49082 11.434C5.82965 11.434 5.26427 11.1992 4.79466 10.7296C4.4548 10.7296 4.16284 10.8192 3.91877 10.9984C3.67469 11.1776 3.49087 11.4232 3.36728 11.7352C3.2437 12.0473 3.15565 12.3717 3.10313 12.7084C3.0506 13.0452 3.02434 13.4113 3.02434 13.8068C3.02434 14.1961 3.13557 14.5313 3.35801 14.8124C3.58046 15.0936 3.85234 15.2342 4.17366 15.2342H8.78018C9.10149 15.2342 9.378 15.0936 9.60972 14.8124C9.84144 14.5313 9.95729 14.1961 9.95729 13.8068ZM8.567 9.00562C8.567 8.42479 8.36463 7.92891 7.9599 7.518C7.55517 7.10709 7.06547 6.90164 6.49082 6.90164C5.91616 6.90164 5.42647 7.10709 5.02174 7.518C4.61701 7.92891 4.41464 8.42479 4.41464 9.00562C4.41464 9.5741 4.61701 10.0607 5.02174 10.4654C5.42647 10.8702 5.91616 11.0725 6.49082 11.0725C7.06547 11.0725 7.55517 10.8702 7.9599 10.4654C8.36463 10.0607 8.567 9.5741 8.567 9.00562ZM19.643 14.1961V13.5009C19.643 13.4082 19.6121 13.3279 19.5503 13.2599C19.4886 13.192 19.4113 13.158 19.3186 13.158H11.672C11.5793 13.158 11.4974 13.192 11.4264 13.2599C11.3553 13.3279 11.3198 13.4082 11.3198 13.5009V14.1961C11.3198 14.2888 11.3553 14.3691 11.4264 14.437C11.4974 14.505 11.5793 14.539 11.672 14.539H19.3186C19.4113 14.539 19.4886 14.5066 19.5503 14.4417C19.6121 14.3768 19.643 14.2949 19.643 14.1961ZM15.4999 11.434V10.7296C15.4999 10.6307 15.466 10.5489 15.398 10.484C15.33 10.4191 15.2497 10.3866 15.157 10.3866H11.672C11.5793 10.3866 11.4974 10.4206 11.4264 10.4886C11.3553 10.5566 11.3198 10.6369 11.3198 10.7296V11.434C11.3198 11.5267 11.3553 11.607 11.4264 11.675C11.4974 11.743 11.5793 11.7769 11.672 11.7769H15.157C15.2497 11.7769 15.33 11.7445 15.398 11.6796C15.466 11.6147 15.4999 11.5329 15.4999 11.434ZM19.643 11.434V10.7296C19.643 10.6307 19.6121 10.5489 19.5503 10.484C19.4886 10.4191 19.4113 10.3866 19.3186 10.3866H17.2332C17.1343 10.3866 17.0509 10.4191 16.9829 10.484C16.915 10.5489 16.881 10.6307 16.881 10.7296V11.434C16.881 11.5329 16.915 11.6147 16.9829 11.6796C17.0509 11.7445 17.1343 11.7769 17.2332 11.7769H19.3186C19.4113 11.7769 19.4886 11.7445 19.5503 11.6796C19.6121 11.6147 19.643 11.5329 19.643 11.434ZM19.643 8.65341V7.95826C19.643 7.8594 19.6121 7.77752 19.5503 7.71264C19.4886 7.64776 19.4113 7.61532 19.3186 7.61532H11.672C11.5793 7.61532 11.4974 7.64931 11.4264 7.71728C11.3553 7.78525 11.3198 7.86558 11.3198 7.95826V8.65341C11.3198 8.75228 11.3553 8.8357 11.4264 8.90367C11.4974 8.97164 11.5793 9.00562 11.672 9.00562H19.3186C19.4113 9.00562 19.4886 8.97164 19.5503 8.90367C19.6121 8.8357 19.643 8.75228 19.643 8.65341ZM10.0685 0.682373C9.92022 0.682373 9.79355 0.720992 9.6885 0.798231C9.58346 0.87547 9.53094 0.969701 9.53094 1.08092V4.76058C9.53094 4.86562 9.585 4.95831 9.69314 5.03864C9.80127 5.11897 9.9264 5.15913 10.0685 5.15913H12.6081C12.7564 5.15913 12.8816 5.11897 12.9835 5.03864C13.0855 4.95831 13.1364 4.86562 13.1364 4.76058V1.08092C13.1364 0.969701 13.0855 0.87547 12.9835 0.798231C12.8816 0.720992 12.7564 0.682373 12.6081 0.682373H10.0685Z" />
														</g>
														<defs>
															<clipPath id="clip0">
																<rect
																	width="21.9521"
																	height="16.6094"
																	fill="white"
																	transform="translate(0.34375 0.682373)"
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
												aria-selected="false"
											>
												<div>
													<svg
														width="24"
														height="20"
														viewBox="0 0 24 20"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M7.86372 13.4365C7.77548 13.4365 7.68723 13.4494 7.60304 13.4767C7.12452 13.6322 6.62125 13.7319 6.0914 13.7319C5.56155 13.7319 5.05828 13.6322 4.57939 13.4767C4.4952 13.4494 4.40732 13.4365 4.31908 13.4365C2.02761 13.4365 0.171469 15.3004 0.183653 17.5948C0.188823 18.5644 0.985999 19.3442 1.95598 19.3442H10.2268C11.1968 19.3442 11.994 18.5644 11.9991 17.5948C12.0113 15.3004 10.1552 13.4365 7.86372 13.4365ZM6.0914 12.2549C8.04908 12.2549 9.63605 10.668 9.63605 8.7103C9.63605 6.75262 8.04908 5.16565 6.0914 5.16565C4.13372 5.16565 2.54675 6.75262 2.54675 8.7103C2.54675 10.668 4.13372 12.2549 6.0914 12.2549ZM22.0423 0.439453H7.86372C6.88636 0.439453 6.0914 1.261 6.0914 2.27049V3.9841C6.95615 3.9841 7.75665 4.23444 8.4545 4.64134V2.80255H21.4515V13.4365H19.0884V11.0734H14.3622V13.4365H11.5472C12.2524 14.0527 12.7701 14.8665 13.0127 15.7996H22.0423C23.0197 15.7996 23.8146 14.978 23.8146 13.9686V2.27049C23.8146 1.261 23.0197 0.439453 22.0423 0.439453Z" />
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
												aria-selected="false"
											>
												<div>
													<svg
														width="24"
														height="20"
														viewBox="0 0 24 20"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M7.86372 13.4365C7.77548 13.4365 7.68723 13.4494 7.60304 13.4767C7.12452 13.6322 6.62125 13.7319 6.0914 13.7319C5.56155 13.7319 5.05828 13.6322 4.57939 13.4767C4.4952 13.4494 4.40732 13.4365 4.31908 13.4365C2.02761 13.4365 0.171469 15.3004 0.183653 17.5948C0.188823 18.5644 0.985999 19.3442 1.95598 19.3442H10.2268C11.1968 19.3442 11.994 18.5644 11.9991 17.5948C12.0113 15.3004 10.1552 13.4365 7.86372 13.4365ZM6.0914 12.2549C8.04908 12.2549 9.63605 10.668 9.63605 8.7103C9.63605 6.75262 8.04908 5.16565 6.0914 5.16565C4.13372 5.16565 2.54675 6.75262 2.54675 8.7103C2.54675 10.668 4.13372 12.2549 6.0914 12.2549ZM22.0423 0.439453H7.86372C6.88636 0.439453 6.0914 1.261 6.0914 2.27049V3.9841C6.95615 3.9841 7.75665 4.23444 8.4545 4.64134V2.80255H21.4515V13.4365H19.0884V11.0734H14.3622V13.4365H11.5472C12.2524 14.0527 12.7701 14.8665 13.0127 15.7996H22.0423C23.0197 15.7996 23.8146 14.978 23.8146 13.9686V2.27049C23.8146 1.261 23.0197 0.439453 22.0423 0.439453Z" />
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
												aria-selected="false"
											>
												<div>
													<svg
														width="24"
														height="20"
														viewBox="0 0 24 20"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M7.86372 13.4365C7.77548 13.4365 7.68723 13.4494 7.60304 13.4767C7.12452 13.6322 6.62125 13.7319 6.0914 13.7319C5.56155 13.7319 5.05828 13.6322 4.57939 13.4767C4.4952 13.4494 4.40732 13.4365 4.31908 13.4365C2.02761 13.4365 0.171469 15.3004 0.183653 17.5948C0.188823 18.5644 0.985999 19.3442 1.95598 19.3442H10.2268C11.1968 19.3442 11.994 18.5644 11.9991 17.5948C12.0113 15.3004 10.1552 13.4365 7.86372 13.4365ZM6.0914 12.2549C8.04908 12.2549 9.63605 10.668 9.63605 8.7103C9.63605 6.75262 8.04908 5.16565 6.0914 5.16565C4.13372 5.16565 2.54675 6.75262 2.54675 8.7103C2.54675 10.668 4.13372 12.2549 6.0914 12.2549ZM22.0423 0.439453H7.86372C6.88636 0.439453 6.0914 1.261 6.0914 2.27049V3.9841C6.95615 3.9841 7.75665 4.23444 8.4545 4.64134V2.80255H21.4515V13.4365H19.0884V11.0734H14.3622V13.4365H11.5472C12.2524 14.0527 12.7701 14.8665 13.0127 15.7996H22.0423C23.0197 15.7996 23.8146 14.978 23.8146 13.9686V2.27049C23.8146 1.261 23.0197 0.439453 22.0423 0.439453Z" />
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
									<div className="mb-3 tab-content" id="v-pills-tabContent">
										<div
											className="mb-3 tab-pane fade show active"
											id="v-pills-cronograma"
											role="tabpanel"
											aria-labelledby="v-pills-cronograma-tab"
										>
											<Tabs defaultActiveKey="cronogramas" id="admision-tab">
												<Tab className="pt-3" eventKey="cronogramas" title="Proceso de admisión">
													<div className="table-responsive admision-posgrado-tablas">
														<table className="striped w-100">
															<thead>
																<tr>
																	<th className="text-center">Actividad</th>
																	<th className="text-center">Fecha</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>Proceso de admisión 1</td>
																	<td>Proceso de admisión 2</td>
																</tr>
																<tr>
																	<td>Proceso de admisión 3</td>
																	<td>Proceso de admisión 4</td>
																</tr>
															</tbody>
														</table>
													</div>
												</Tab>
												<Tab className="pt-3" eventKey="inscripcion" title="Proceso de matrícula">
													<div className="table-responsive admision-posgrado-tablas">
														<table className="striped w-100">
															<thead>
																<tr>
																	<th className="text-center">Actividad</th>
																	<th className="text-center">Fecha</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>Proceso de matrícula 1</td>
																	<td>Proceso de matrícula 2</td>
																</tr>
																<tr>
																	<td>Proceso de matrícula 3</td>
																	<td>Proceso de matrícula 4</td>
																</tr>
															</tbody>
														</table>
													</div>
												</Tab>
												<Tab className="pt-3" eventKey="academicas" title="Actividades académicas">
													<div className="table-responsive admision-posgrado-tablas">
														<table className="striped w-100">
															<thead>
																<tr>
																	<th className="text-center">Actividad</th>
																	<th className="text-center">Fecha</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>Actividades académicas 1</td>
																	<td>Actividades académicas 2</td>
																</tr>
																<tr>
																	<td>Actividades académicas 3</td>
																	<td>Actividades académicas 4</td>
																</tr>
															</tbody>
														</table>
													</div>
												</Tab>
											</Tabs>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-cuadro"
											role="tabpanel"
											aria-labelledby="v-pills-cuadro-tab"
										>
											<div className="table-responsive admision-posgrado-tablas">
												<table className="striped w-100">
													<thead>
														<tr>
															<th className="text-center">Maestrías</th>
															<th className="text-center">Meción</th>
															<th className="text-center">Vac. Concurso</th>
															<th className="text-center">
																Traslado
																<br />
																interno
															</th>
															<th className="text-center">
																Traslado
																<br /> externo
															</th>
															<th className="text-center">Total</th>
														</tr>
													</thead>
													<tbody>
														<tr className="bg-verdeClaro">
															<td rowSpan={3}>boasdasdasdasdt</td>
															<td>taxasdasdadasdads</td>
															<td>12</td>
															<td>01</td>
															<td>01</td>
															<td>14</td>
														</tr>
														<tr className="bg-verdeClaro">
															<td>bot</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
														</tr>
														<tr className="bg-verdeClaro">
															<td>etn</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
														</tr>
														<tr className="bg-blancoTabla">
															<td rowSpan={3}>ecosist</td>
															<td>ec</td>
															<td>12</td>
															<td>01</td>
															<td>01</td>
															<td>14</td>
														</tr>
														<tr className="bg-blancoTabla">
															<td>ec</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
														</tr>
														<tr className="bg-blancoTabla">
															<td>ec</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
														</tr>
														<tr className="bg-verdeClaro">
															<td rowSpan={2}>zoo</td>
															<td>ec</td>
															<td>12</td>
															<td>01</td>
															<td>01</td>
															<td>14</td>
														</tr>
														<tr className="bg-verdeClaro">
															<td>biolog</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
														</tr>
														<tr className="bg-blancoTabla">
															<td colSpan={2}>gen</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
														</tr>
														<tr className="bg-verdeClaro">
															<td colSpan={2}>biodiv</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
														</tr>
														<tr
															className="bg-blancoTabla"
															style={{ borderBottom: "1px solid #56756b40" }}
														>
															<td colSpan={2}>ec</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
														</tr>
													</tbody>
												</table>
												<table className="striped w-100 mt-5">
													<thead>
														<tr>
															<th className="text-center">Doctorado</th>
															<th className="text-center">Meción</th>
															<th className="text-center">Vac. Concurso</th>
															<th className="text-center">
																Traslado
																<br />
																interno
															</th>
															<th className="text-center">
																Traslado
																<br /> externo
															</th>
															<th className="text-center">Total</th>
														</tr>
													</thead>
													<tbody>
														<tr
															className="bg-blancoTabla"
															style={{ borderBottom: "1px solid #56756b40" }}
														>
															<td colSpan={2}>ec</td>
															<td>12</td>
															<td>12</td>
															<td>12</td>
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
											aria-labelledby="v-pills-requisitos-tab"
										>
											<Tabs defaultActiveKey="maestria" id="admision-tab">
												<Tab className="pt-3" eventKey="maestria" title="Maestría">
													<p>
														El postulante deberá enviar (en un solo archivo pdf) mediante la
														plataforma de mesa de partes,&nbsp;
														<b>&nbsp; mesadepartes.biologia@unmsm.edu.pe</b>,&nbsp; el expediente
														completo a la Unidad de Posgrado de la Facultad, con los siguientes
														documentos:
													</p>
													<ol>
														<li>
															Resumen de la hoja de vida del postulante (documentado, foliado y
															ordenado de acuerdo a los rubros del formato).
														</li>
														<li>
															Constancia de inscripci&oacute;n en l&iacute;nea del grado de
															Bachiller emitido por SUNEDU o la copia del diploma de grado de
															Bachiller fedateado por la universidad de procedencia (*).
														</li>
														<li>
															Copia del documento de identidad (DNI, carn&eacute; de
															extranjer&iacute;a o pasaporte).
														</li>
														<li>
															Recibo de pago por derecho de inscripci&oacute;n efectuado en el Banco
															de Cr&eacute;dito del Per&uacute; o en el Banco de la Naci&oacute;n.
														</li>
														<li>
															Otro documento que la Unidad de Posgrado considere con relaci&oacute;n
															al perfil de ingreso al programa que postula. Revisar requisitos a
															trav&eacute;s de la p&aacute;gina web de la Facultad &ndash; Posgrado.
														</li>
													</ol>
													<p>
														(*) Los postulantes que obtuvieron el grado de Bachiller en la
														Universidad Nacional Mayor de San Marcos solo presentan copia simple.{" "}
														<br />
														En el caso de graduados en el extranjero, los grados y t&iacute;tulos
														deber&aacute;n estar revalidados o reconocidos seg&uacute;n las normas
														vigentes.
													</p>
												</Tab>
												<Tab className="pt-3" eventKey="doctorado" title="Doctorado">
													<p>
														El postulante deberá enviar (en un solo archivo pdf) mediante la
														plataforma de mesa de partes,&nbsp;
														<b>&nbsp; mesadepartes.biologia@unmsm.edu.pe</b>,&nbsp;el expediente
														completo a la Unidad de Posgrado de la Facultad, con los siguientes
														documentos:
													</p>
													<ol>
														<li>
															Resumen de la hoja de vida del postulante (documentado, foliado y
															ordenado de acuerdo a los rubros del formato)
														</li>
														<li>
															Constancia de inscripci&oacute;n en l&iacute;nea del grado de Maestro
															o Doctor emitido por SUNEDU o la copia del diploma de grado de Maestro
															o Doctor fedateado por la universidad de procedencia (*).
														</li>
														<li>
															Copia del documento de identidad (DNI, carn&eacute; de
															extranjer&iacute;a o pasaporte).
														</li>
														<li>
															Recibo de pago por derecho de inscripci&oacute;n efectuado en el Banco
															de Cr&eacute;dito del Per&uacute; o en el Banco de la Naci&oacute;n.
														</li>
														<li>Proyecto de Investigaci&oacute;n.</li>
														<li>
															Otro documento que la Unidad de Posgrado considere con relaci&oacute;n
															al perfil de ingreso al programa que postula. Revisar requisitos a
															trav&eacute;s de la p&aacute;gina web de la Facultad &ndash; Posgrado.
														</li>
													</ol>
													<p>
														(*) Los postulantes que obtuvieron el grado de Maestro o Doctor en la
														Universidad Nacional Mayor de San Marcos solo presentan copia simple.
														<br />
														En el caso de graduados en el extranjero, los grados y t&iacute;tulos
														deber&aacute;n estar revalidados o reconocidos seg&uacute;n las normas
														vigentes.
													</p>
												</Tab>
											</Tabs>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-inversion"
											role="tabpanel"
											aria-labelledby="v-pills-inversion-tab"
										>
											<h4>Pago deasdasd...</h4>
											<div className="table-responsive admision-posgrado-tablas">
												<table className="striped w-100">
													<tbody>
														<tr style={{ borderTop: "1px solid #56756b40" }}>
															<td></td>
															<td>Estudiantes de UNMSM</td>
															<td>oTRAS universidades</td>
														</tr>
														<tr>
															<td style={{ backgroundColor: "#d2ede6" }}>Maestría</td>
															<td style={{ backgroundColor: "#ffffff" }}>
																S/.445.00
																<br />
																ransaciondsdnnnnnnn
															</td>
															<td style={{ backgroundColor: "#ffffff" }}>
																S/.445.00
																<br />
																ransaciondsdnnnnnnn
															</td>
														</tr>
														<tr style={{ borderBottom: "1px solid #56756b40" }}>
															<td rowSpan={2}>Doctorado</td>
															<td style={{ backgroundColor: "#ffffff" }}>
																S/.445.00
																<br />
																ransaciondsdnnnnnnn
															</td>
															<td style={{ backgroundColor: "#ffffff" }}>
																S/.445.00
																<br />
																ransaciondsdnnnnnnn
															</td>
														</tr>
													</tbody>
												</table>
											</div>
											<h4 className="mt-4">Inversión por estudios de Posgrado</h4>
											<div className="table-responsive admision-posgrado-tablas">
												<table className="striped w-100">
													<tbody>
														<tr style={{ borderTop: "1px solid #56756b40" }}>
															<td>Maestría</td>
															<td>Estudiantes de UNMSM</td>
															<td>oTRAS universidades</td>
															<td>oTRAS universidades</td>
														</tr>
														<tr style={{ borderTop: "1px solid #56756b40" }}>
															<td>Maestría</td>
															<td>Estudiantes de UNMSM</td>
															<td>oTRAS universidades</td>
															<td>oTRAS universidades</td>
														</tr>
														<tr
															style={{
																borderBottom: "1px solid #56756b40",
																backgroundColor: "#ffffff",
															}}
														>
															<td>Maestría</td>
															<td>Estudiantes de UNMSM</td>
															<td>oTRAS universidades</td>
															<td>oTRAS universidades</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-inscripcion"
											role="tabpanel"
											aria-labelledby="v-pills-inversion-tab"
										>
											<p>
												Inscripción &nbsp;
												<a href="http://posgrado.unmsm.edu.pe" target="_blank">
													http://posgrado.unmsm.edu.pe
												</a>
											</p>
											<p>pago...</p>
											<div className="table-responsive admision-posgrado-tablas">
												<table className="striped w-100">
													<tbody>
														<tr style={{ borderTop: "1px solid #56756b40" }}>
															<td></td>
															<td>Estudiantes de UNMSM</td>
															<td>oTRAS universidades</td>
														</tr>
														<tr>
															<td style={{ backgroundColor: "#d2ede6" }}>Maestría</td>
															<td style={{ backgroundColor: "#ffffff" }}>
																S/.445.00
																<br />
																ransaciondsdnnnnnnn
															</td>
															<td style={{ backgroundColor: "#ffffff" }}>
																S/.445.00
																<br />
																ransaciondsdnnnnnnn
															</td>
														</tr>
														<tr style={{ borderBottom: "1px solid #56756b40" }}>
															<td rowSpan={2}>Doctorado</td>
															<td style={{ backgroundColor: "#ffffff" }}>
																S/.445.00
																<br />
																ransaciondsdnnnnnnn
															</td>
															<td style={{ backgroundColor: "#ffffff" }}>
																S/.445.00
																<br />
																ransaciondsdnnnnnnn
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
