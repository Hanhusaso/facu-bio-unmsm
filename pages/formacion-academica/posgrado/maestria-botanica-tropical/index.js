import React, { useState, useEffect } from 'react';
import Layout from '../../../../components/Layout';
import CronogramaPosgrado from '../../../../components/posgrado/CronogramaPosgrado';
import PagoInscripcionMaestria from '../../../../components/posgrado/PagoInscripcionMaestria';
import RequisitosMaestria from '../../../../components/posgrado/RequisitosMaestria';

import { Row, Col, Container, Breadcrumb, Tabs, Tab } from 'react-bootstrap';
import Link from 'next/link';
import { getDocenteByIdInformacionAcademicaApi } from '../../../api/formacion-academica';

import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';

import { useWindowSize } from '../../../../utils/useWindowSize';

const index = () => {
	const { width, height } = useWindowSize();
	const [docentes, setDocentes] = useState([]);

	useEffect(() => {
		(async () => {
			const response = await getDocenteByIdInformacionAcademicaApi(
				'maestria_en_botanica_tropical'
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
			<Layout title="Maestría en Botánica Tropical">
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
											Maestría en Botánica Tropical
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
										Maestría en Botánica Tropical
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
							src="/assets/img/posgrado/maestria botanica tropical/banner-maestria-botanica-tropical-unmsm.png"
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
													<svg
														width="24"
														height="25"
														viewBox="0 0 24 25"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg">
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
												<span>Presentación</span>
											</a>
											{/* <Link href="/posgrado-admision">
												<a className="tab d-flex" target="_blank">
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
													<span>Admisión</span>
												</a>
											</Link> */}
											<a
												className="tab d-flex"
												id="v-pills-docente-tab"
												data-toggle="pill"
												href="#v-pills-docente"
												role="tab"
												aria-controls="v-pills-docente"
												aria-selected="false">
												<div>
													<svg
														width="24"
														height="20"
														viewBox="0 0 24 20"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg">
														<path d="M7.86372 13.4365C7.77548 13.4365 7.68723 13.4494 7.60304 13.4767C7.12452 13.6322 6.62125 13.7319 6.0914 13.7319C5.56155 13.7319 5.05828 13.6322 4.57939 13.4767C4.4952 13.4494 4.40732 13.4365 4.31908 13.4365C2.02761 13.4365 0.171469 15.3004 0.183653 17.5948C0.188823 18.5644 0.985999 19.3442 1.95598 19.3442H10.2268C11.1968 19.3442 11.994 18.5644 11.9991 17.5948C12.0113 15.3004 10.1552 13.4365 7.86372 13.4365ZM6.0914 12.2549C8.04908 12.2549 9.63605 10.668 9.63605 8.7103C9.63605 6.75262 8.04908 5.16565 6.0914 5.16565C4.13372 5.16565 2.54675 6.75262 2.54675 8.7103C2.54675 10.668 4.13372 12.2549 6.0914 12.2549ZM22.0423 0.439453H7.86372C6.88636 0.439453 6.0914 1.261 6.0914 2.27049V3.9841C6.95615 3.9841 7.75665 4.23444 8.4545 4.64134V2.80255H21.4515V13.4365H19.0884V11.0734H14.3622V13.4365H11.5472C12.2524 14.0527 12.7701 14.8665 13.0127 15.7996H22.0423C23.0197 15.7996 23.8146 14.978 23.8146 13.9686V2.27049C23.8146 1.261 23.0197 0.439453 22.0423 0.439453Z" />
													</svg>
												</div>
												<span>Plana docente</span>
											</a>
											{/* <a className="tab d-flex" id="v-pills-malla-tab" data-toggle="pill" href="#v-pills-malla" role="tab" aria-controls="v-pills-malla" aria-selected="false"> */}
											<a
												href="/assets/archivos/posgrado/planes de estudio/plan-estudio-2020-maestria-botanica-tropical.pdf"
												target="_blank"
												className="tab d-flex">
												<div>
													<svg
														width="19"
														height="21"
														viewBox="0 0 19 21"
														className="icon mr-3"
														xmlns="http://www.w3.org/2000/svg">
														<path d="M16.5059 20.4783H5.25586C4.85816 20.4779 4.47686 20.3197 4.19564 20.0385C3.91442 19.7573 3.75626 19.376 3.75586 18.9783V14.4783H5.25586V18.9783H16.5059V2.47827H9.75586V0.978271H16.5059C16.9036 0.978669 17.2849 1.13683 17.5661 1.41805C17.8473 1.69927 18.0055 2.08057 18.0059 2.47827V18.9783C18.0055 19.376 17.8473 19.7573 17.5661 20.0385C17.2849 20.3197 16.9036 20.4779 16.5059 20.4783Z" />
														<path d="M9.75586 9.97827H15.0059V11.4783H9.75586V9.97827Z" />
														<path d="M9.00586 9.97827H15.0059V11.4783H9.00586V9.97827Z" />
														<path d="M8.25586 9.97827H15.0059V11.4783H8.25586V9.97827Z" />
														<path d="M3.75586 16.7283C2.7616 16.7273 1.80835 16.3319 1.10531 15.6288C0.402259 14.9258 0.00685214 13.9725 0.00585938 12.9783V4.72827H1.50586V12.9783C1.50586 13.575 1.74291 14.1473 2.16487 14.5693C2.58683 14.9912 3.15912 15.2283 3.75586 15.2283C4.3526 15.2283 4.92489 14.9912 5.34685 14.5693C5.76881 14.1473 6.00586 13.575 6.00586 12.9783V6.22827C6.00586 6.02936 5.92684 5.83859 5.78619 5.69794C5.64554 5.55729 5.45477 5.47827 5.25586 5.47827C5.05695 5.47827 4.86618 5.55729 4.72553 5.69794C4.58488 5.83859 4.50586 6.02936 4.50586 6.22827V13.7283H3.00586V6.22827C3.00586 5.63153 3.24291 5.05924 3.66487 4.63728C4.08683 4.21532 4.65912 3.97827 5.25586 3.97827C5.8526 3.97827 6.42489 4.21532 6.84685 4.63728C7.26881 5.05924 7.50586 5.63153 7.50586 6.22827V12.9783C7.50487 13.9725 7.10946 14.9258 6.40641 15.6288C5.70337 16.3319 4.75012 16.7273 3.75586 16.7283Z" />
													</svg>
												</div>
												<span>Plan de estudio</span>
											</a>
											{/* <a className="tab d-flex" id="v-pills-egresados-tab" data-toggle="pill" href="#v-pills-egresados" role="tab" aria-controls="v-pills-egresados" aria-selected="false">
                                                    <div>
                                                        <svg width="18" height="25" viewBox="0 0 18 25" className="icon mr-3" xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00803e-07 23.252V3.00195C2.00803e-07 2.2063 0.316071 1.44324 0.87868 0.880633C1.44129 0.318024 2.20435 0.00195313 3 0.00195313L15 0.00195312C15.7956 0.00195313 16.5587 0.318024 17.1213 0.880633C17.6839 1.44324 18 2.2063 18 3.00195V23.252C18.0001 23.3822 17.9663 23.5102 17.9019 23.6234C17.8375 23.7366 17.7447 23.8311 17.6327 23.8975C17.5207 23.964 17.3933 24.0001 17.263 24.0024C17.1328 24.0047 17.0043 23.973 16.89 23.9105L9 19.6055L1.11 23.9105C0.995744 23.973 0.867178 24.0047 0.736957 24.0024C0.606737 24.0001 0.47935 23.964 0.367338 23.8975C0.255325 23.8311 0.162547 23.7366 0.0981369 23.6234C0.0337268 23.5102 -9.50907e-05 23.3822 2.00803e-07 23.252ZM9.24 6.15195C9.21807 6.10697 9.18394 6.06906 9.14151 6.04254C9.09907 6.01602 9.05004 6.00195 9 6.00195C8.94996 6.00195 8.90092 6.01602 8.85849 6.04254C8.81606 6.06906 8.78193 6.10697 8.76 6.15195L7.809 8.07945C7.78996 8.11844 7.76171 8.15221 7.72669 8.17782C7.69166 8.20343 7.65093 8.22013 7.608 8.22645L5.478 8.53545C5.42897 8.54289 5.38297 8.56385 5.34518 8.59596C5.30738 8.62807 5.27928 8.67008 5.26401 8.71727C5.24875 8.76445 5.24693 8.81496 5.25877 8.86313C5.2706 8.91129 5.29561 8.95521 5.331 8.98995L6.87 10.4915C6.933 10.553 6.9615 10.6415 6.9465 10.7285L6.585 12.8495C6.57685 12.8984 6.58251 12.9487 6.60136 12.9946C6.6202 13.0406 6.65148 13.0803 6.69168 13.1095C6.73188 13.1386 6.77941 13.156 6.82893 13.1596C6.87845 13.1632 6.92799 13.1529 6.972 13.13L8.877 12.128C8.91519 12.108 8.95765 12.0975 9.00075 12.0975C9.04385 12.0975 9.08631 12.108 9.1245 12.128L11.0295 13.13C11.0735 13.1525 11.1228 13.1625 11.1721 13.1587C11.2214 13.1548 11.2686 13.1374 11.3086 13.1083C11.3485 13.0793 11.3796 13.0397 11.3984 12.994C11.4172 12.9483 11.423 12.8982 11.415 12.8495L11.052 10.727C11.0443 10.6843 11.0472 10.6405 11.0602 10.5992C11.0733 10.5579 11.0962 10.5204 11.127 10.49L12.669 8.98845C12.7044 8.95371 12.7294 8.90979 12.7412 8.86163C12.7531 8.81346 12.7512 8.76295 12.736 8.71577C12.7207 8.66858 12.6926 8.62657 12.6548 8.59446C12.617 8.56234 12.571 8.54139 12.522 8.53395L10.392 8.22495C10.3491 8.21863 10.3083 8.20193 10.2733 8.17632C10.2383 8.15071 10.21 8.11694 10.191 8.07795L9.24 6.15195Z"/>
                                                        </svg>
                                                    </div>
                                                    <span>Seguimiento de egresados</span>
                                                </a> */}
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
												La Maestría en Botánica Tropical
												fue creada por Resolución
												Rectoral Nº 92256-R-88 de fecha
												14 de abril de 1988, desde su
												creación tuvo tres menciones que
												son: Taxonomía y Sistemática
												Evolutiva, Botánica Económica y
												Etnobotánica. Comenzó sus
												actividades formativas en el
												semestre 1989-I, siendo
												conjuntamente con las maestrías
												en Zoología y en Ecosistemas y
												Recursos Acuáticos las maestrías
												más antiguas de la Unidad de
												Posgrado de la Facultad de
												Ciencias Biológicas, pero fue la
												primera en comenzar sus
												actividades en el año 1989 de
												las tres maestrías, las otras
												dos maestrías iniciaron sus
												actividades en el semestre
												1993-II. También fue la primera
												maestría en obtener su primer
												graduado en el año 1994, siendo
												el Bachiller Asunción Alipio
												Cano Echevarría en obtener el
												grado de Magíster en Botánica
												Tropical con mención en
												Taxonomía y Sistemática
												Evolutiva. El programa se
												actualizó en el año 2010 según
												Resolución Rectoral Nº
												04309-R-10 de fecha 12 de agosto
												de 2010, y la universidad
												posteriormente requirió la
												actualización Curricular del
												Doctorado y las Maestrías, donde
												la UPG de Ciencias Biológicas se
												encargó de preparar dicha
												actualización manteniendo sus
												tres menciones, sin otros
												cambios y refrendados por la
												Resolución Rectoral Nº
												06658-R-17 de fecha 03 de
												noviembre de 2017.
											</p>
											<p>
												Recientemente se ha llevado a
												cabo una segunda Jornada
												Curricular en fecha 25 de julio
												de 2019, y con previas reuniones
												de los comités coordinadores de
												las maestrías en conjunto se
												plantea eliminar las menciones,
												para flexibilizar y concretizar
												los estudios en un solo programa
												toda vez que cada mención es
												considerado un programa
												diferente, asimismo se asume un
												reto de adecuación al nuevo
												reglamento de estudios de
												Posgrado de la Universidad,
												realizándose algunos cambios
												sustanciales en cada programa y
												estableciendo cursos como ejes
												transversales en común. Se
												mantiene el valor de 72 créditos
												y su desarrollo en cuatro
												semestres con duración de dos
												años, considerándose una
												maestría de investigación que
												conlleva a continuar estudios de
												Doctorado.
											</p>
											<div className="mb-3">
												<p className="title-dark mb-1">
													Menciones
												</p>
												<ul className="chevron-green-dark">
													<li>Botánica Económica</li>
													<li>Etnobotánica</li>
													<li>
														Taxonomía y Sistemática
														Evolutiva
													</li>
												</ul>
											</div>
											<div className="mb-3">
												<p className="title-dark mb-1">
													1. Fecha de creación del
													Programa
												</p>
												<ul className="nav flex-column ml-3">
													<li>
														14 de abril de 1988,
														R.R. N° 92256
													</li>
													<li>
														30 de marzo de 1988,
														R.D. N° 444-FCB-88
													</li>
												</ul>
											</div>
											<div className="mb-3">
												<p className="title-dark mb-1">
													2. Fecha de actualización
													del programa:
												</p>
												<ul className="nav flex-column ml-3">
													<li>
														12 de agosto de 2010,
														R.R. N° 04309-R-10
													</li>
													<li>
														03 de noviembre de 2017,
														R.R. N° 06658-R-17
													</li>
													<li>
														30 de mayo de 2017, R.D.
														N° 229-D-FCB-17
													</li>
													<li>
														02 de junio del 2020,
														R.R. N° 01329-R-20
													</li>
												</ul>
											</div>
											<div className="mb-3">
												<p className="title-dark mb-1">
													3. Comités coordinadores del
													Doctorado y Maestrías:
												</p>
												<ul className="nav flex-column ml-3">
													<li>
														20 de febrero del 2021,
														R.D. Nº
														0103-2021-D-FCB/UNMSM
													</li>
												</ul>
											</div>
											<div className="mb-3">
												<p className="title-dark mb-1">
													4. Comité coordinador de la
													Maestría en Biología
													Tropical:
												</p>
												<ul className="nav flex-column ml-3">
													<li>
														Dra. Joaquina Adelaida
														Albán Castillo
														(Presidenta)
													</li>
													<li>
														Dra. Mónica Arakaki
														Makishi
													</li>
													<li>
														Mg. Asunción Alipio Cano
														Echevarría
													</li>
												</ul>
											</div>

											{/* <p className="title-dark">
                                                Sumilla del Programa
                                            </p>
                                            <p>
                                                El Doctorado en Ciencias Biológicas forma especialistas de los más altos niveles capaces de evaluar e investigar la problemática nacional en las diversas áreas del conocimiento biológico, con especial énfasis en los campos de la biodiversidad y biología molecular.
                                            </p>

                                            <p className="title-dark">
                                                Grado que se otorga:
                                            </p>
                                            <p>
                                                Doctor en Ciencias Biológicas
                                            </p>

                                            <p className="title-dark">
                                                Objetivos académicos:
                                            </p>
                                            <p>
                                                El Programa de Doctorado en Ciencias Biológicas tiene como finalidad la formación de investigadores sobre la evolución y uso sostenible de la diversidad biológica, así como la capacitación para su futura incorporación en universidades, instituciones de investigación y centros de gestión tanto privados como de la administración pública. Asimismo, comprenderán y aplicarán los conceptos actuales de la biología molecular en arqueas, bacterias y eucariontes, contribuyendo con el conocimiento tanto en el área básica como aplicada a fin de lograr el aprovechamiento racional de nuestra megabiodiversidad. El Programa ofrece a los estudiantes la oportunidad de trabajar con reconocidos investigadores en diferentes tópicos relacionados con las prioridades actuales del país.
                                            </p>

                                            <p className="title-dark">
                                                Dirigido a:
                                            </p>
                                            <p>
                                                Profesionales que hayan concluido los estudios de Maestría o estén en posesión del Grado de Magíster en áreas de las Ciencias Biológicas o en disciplinas afines, otorgados por universidades nacionales o extranjeras que aseguren una formación acorde a los fines del Programa.
                                            </p>

                                            <p className="title-dark">
                                                Duración:
                                            </p>
                                            <p>
                                                3 años (6 semestres)
                                            </p>
                                            
                                            <p className="title-dark">
                                                Perfil del graduado:
                                            </p>
                                            <ul className="chevron-green-dark">
                                                <li>
                                                    Generar nuevos conocimientos científicos y técnicos en las Ciencias Biológicas a través de la realización de trabajos originales. Estará capacitado para manejar y aplicar las metodologías que permitan resolver problemas de investigación en las diversas áreas del conocimiento biológico con especial énfasis en los campos de la biodiversidad y biología molecular.
                                                </li>
                                                <li>
                                                    Desarrollar nuevas tecnologías para resolver problemas, detectar necesidades y oportunidades inherentes a su área de investigación. En particular, conocer y utilizar aproximaciones estadísticas contemporáneas. 
                                                </li>
                                                <li>
                                                    Formular, gestionar y liderar proyectos de investigación, trabajando en equipo y en redes interdisciplinarias. Como consecuencia, será capaz de plantear y ejecutar hipótesis de trabajo, describir e interpretar resultados experimentales y analizar de forma crítica los descubrimientos presentados en las publicaciones científicas.
                                                </li>
                                            </ul>
                                            <a className="btn-green-bright" href="">
                                                Inscripciones
                                            </a> */}
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-admision"
											role="tabpanel"
											aria-labelledby="v-pills-admision-tab">
											<Tabs
												defaultActiveKey="cronogramas"
												id="admision-tab">
												<Tab
													className="pt-3"
													eventKey="cronogramas"
													title="Cronogramas">
													<CronogramaPosgrado />
													{/* <div>
                                                        <p className="title-dark">Cronograma de Admisión 2021 - I</p>
                                                        <div className="table-responsive mb-3">
                                                            <table className="striped m-auto">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="text-center">Actividad</th>
                                                                        <th className="text-center">Fechas 2021</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Inscripción de postulantes y envío de expediente</td>
                                                                        <td>Del 02 de enero al 14 de marzo</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Evaluación del expediente</td>
                                                                        <td>Del 15 al 17 de marzo</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Entrevista personal (solo maestría)</td>
                                                                        <td>18 y 19 de marzo</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Examen de aptitud virtual (solo maestría)</td>
                                                                        <td>20 de marzo</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Sustentación del proyecto de investigación (solo doctorado)</td>
                                                                        <td>20 y 21 de marzo</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Publicación de resultados</td>
                                                                        <td>23 de marzo</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <p>
                                                            <span className="title-dark">Vacantes: </span>
                                                            <span>Número</span>
                                                        </p>
                                                        <p className="title-dark">Cronograma de actividades académicas 2021 - I</p>
                                                        <div className="table-responsive mb-3">
                                                            <table className="striped m-auto">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="text-center">Actividad</th>
                                                                        <th className="text-center">Fechas 2021</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Matrícula ingresantes (Maestría o Doctorado)</td>
                                                                        <td>Del 29 de marzo al 02 de abril</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Matrícula regular (ingresantes 2021 y anteriores)</td>
                                                                        <td>Del 22 al 26 de marzo</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Clases</td>
                                                                        <td>
                                                                            Inicio: 05 de abril
                                                                            <br/>
                                                                            Término: 24 de julio
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <p className="title-dark">Inversión por estudios de Posgrado</p>
                                                        <div className="table-responsive mb-3">
                                                            <table className="striped m-auto">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="text-center">Programa</th>
                                                                        <th className="text-center">Descripción</th>
                                                                        <th className="text-center">Importe</th>
                                                                        <th className="text-center">Requisitos</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <th>Doctorado (6 semestres)</th>
                                                                        <td>Matrícula perfeccionamiento</td>
                                                                        <td>
                                                                            S/. 310.00
                                                                            <br/>
                                                                            S/. 3400.00
                                                                        </td>
                                                                        <td>Cubrir vacante</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div> */}
												</Tab>
												<Tab
													className="pt-3"
													eventKey="inscripcion"
													title="Pago de inscripción">
													<PagoInscripcionMaestria />
												</Tab>
												<Tab
													className="pt-3"
													eventKey="requisitos"
													title="Requisitos para la Maestría">
													<RequisitosMaestria />
												</Tab>
											</Tabs>
										</div>
										<div
											className="mb-3 tab-pane fade"
											id="v-pills-docente"
											role="tabpanel"
											aria-labelledby="v-pills-docente-tab">
											<div className="divisor my-3"></div>
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
										{/* <div className="mb-3 tab-pane fade" id="v-pills-malla" role="tabpanel" aria-labelledby="v-pills-malla-tab">
                                            <div>
                                                <div className="mb-4">
                                                        <a href="/assets/archivos/malla_curricular_2020.pdf" target="_blank">
                                                            <img className="mr-2" src="/assets/img/iconos/descarga.svg" alt=""/>
                                                            <span className="sub-title-dark">Descargar</span>
                                                        </a>
                                                </div>
                                                <div className="section-compartir">
                                                    <div className="d-inline-block font-weight-bold mr-3">
                                                        Compartir vía:
                                                    </div>
                                                    <div className="icons">
                                                        <a href="#" className="d-inline-block">
                                                            <img src="/assets/img/iconos/email.svg"/>
                                                        </a>
                                                        <a href="#" className="d-inline-block">
                                                            <img src="/assets/img/iconos/whatsapp.svg"/>
                                                        </a>
                                                        <a href="#" className="d-inline-block">
                                                            <img src="/assets/img/iconos/facebook.svg"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
										{/* <div className="mb-3 tab-pane fade" id="v-pills-egresados" role="tabpanel" aria-labelledby="v-pills-egresados-tab">
                                            <div className="grid-img-txt-2">
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado1.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Dra. María Cárdenas López|  Coordinadora general de proyectos ganadores CONCYTEC
                                                            </p>
                                                        </a>
                                                    </Link>
                                                    <p className="mb-0">
                                                        "La profesión que escogí  ha sido nombrada la carrera del futuro. Según El Colombiano "La biología dominará los currículos". Es una ciencia en la que predomina la investigación y EAFIT me ha brindado todas las herramientas necesarias para mi formación como científica; desde varios grupos de investigación y semilleros, hasta una infraestructura que cuenta con los laboratorios mejores dotados, al igual que charlas informátivas de diferentes temas de pertinencia dictadas por extranjeros y nacionales que han enriquecido mi conocimiento. 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisor"></div>
                                            <div className="grid-img-txt-2">
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado2.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Dr. Carlos Palacios Hernandez | Becario de la OEA en la Maestría en Ciencias
                                                            </p>
                                                        </a>
                                                    </Link>
                                                    <p className="mb-0">
                                                        Las oportunidades de intercambio y hacer doble titulación vuelven más atractiva mi hoja de vida. Aparte la universidad tiene una facilidad de pago (debido a  numerosos convenios que tiene) que me permitió seguir estudiando, y debido a mi promedio, pude alcanzar mi mayor ánhelo: la Beca de Honor Pregrado por el primer semestre. Son éstas clases de estímulos que fomentan el buen estudio. Por eso y mucho más adoro Mi universidad, me siento orgullosa de decir que soy y seré sanmarquino.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisor"></div>
                                            <div className="grid-img-txt-2">
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado3.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Dra. Claudia Villa Vargas | Jefe Laboratorio de Proteómica y Biomedicina Molecular IPICYT-México 
                                                            </p>
                                                        </a>
                                                    </Link>
                                                    <p className="mb-0">
                                                        Mi interés de investigación son las interacciones biológicas entre distintos componentes del plancton. Durante mi tesis de pregrado en Biología Marina estudié la potencial interacción entre hongos y huevos de copépodos y en mi tesis de Magister en Ciencias c/m en Oceanografía investigué el microbioma gastro-intestinal del zooplancton (microorganismos asociados a copépodos y eufáusidos) en la zona norte y centro sur de Chile. Durante mis estudios de doctorado profundizaré en otros aspectos de la interacción entre microorganismos y copépodos
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="divisor"></div>
                                            <div className="grid-img-txt-2">
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a>
                                                            <img className="w-100 img-fluid" src="/assets/img/carreras/ciencias biologicas/egresados/egresado4.png" alt="" />
                                                        </a>
                                                    </Link>
                                                </div>
                                                <div>
                                                    <Link href="/formacion-academica/pregrado/ciencias-biologicas/egresado">
                                                        <a className="title">
                                                            <p>
                                                                Dr. Luis Jimenez Hidalgo | Director del CENAN
                                                            </p>
                                                        </a>
                                                    </Link>
                                                    <p className="mb-0">
                                                        Estudie biología, actualmente soy gerente de inocuidad y certificaciones en la empresa Antigua Processors en Guatemala, recuerdo que cuando estaba en la época de colegio visite la Universidad y me llamaron la atención los laboratorios y áreas verdes, aprendí a cómo cultivar plantas sin sustrato como la tierra, y conocí granjas de animales y también plantas prehistóricas aquí en la UNMSM, sabía que quería estudiar aquí.
                                                    </p>
                                                </div>
                                            </div>
                                        </div> */}
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
