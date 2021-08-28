import React, { useEffect, useState } from "react";
import Link from "next/link";
import Layout from "../../../components/Layout";
import { Row, Col, Container, Breadcrumb, Tabs, Tab } from "react-bootstrap";
import {
	getTransparencia2019,
	getTransparencia2020,
	getTransparencia2021,
} from "../../api/transparencia";

const transparencia = () => {
	const [transparencia2021, setTransparencia2021] = useState([]);
	const [transparencia2020, setTransparencia2020] = useState([]);
	const [transparencia2019, setTransparencia2019] = useState([]);
	useEffect(() => {
		(async () => {
			const response_transparencia2021 = await getTransparencia2021();
			const response_transparencia2020 = await getTransparencia2020();
			const response_transparencia2019 = await getTransparencia2019();
			setTransparencia2021(response_transparencia2021);
			setTransparencia2020(response_transparencia2020);
			setTransparencia2019(response_transparencia2019);
		})();
	}, []);

	console.log("esto es transparencia", transparencia2020);
	return (
		<>
			<Layout title="Transparencia">
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
										<Breadcrumb.Item active>Nosotros: Transparencia</Breadcrumb.Item>
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
									<div className="title-page text-center">Transparencia</div>
								</Col>
								<Col md="1"></Col>
							</Row>
						</Container>

						<Container>
							<Row>
								<Col md="1"></Col>
								<Col md="2">
									<div className="mb-4">
										{/* <ul className="nav flex-column tabs-wrapper">
                                            <li className="tab">Resoluciones</li>
                                            <li className="tab">Actas del Consejo</li>
                                            <li className="tab">Convenios</li>
                                            <li className="tab">Trámites</li>
                                            <li className="tab">Plan estratégico 2019-2023</li>
                                            <li className="tab">Libro de Reclamaciones</li>
                                        </ul> */}
										<div
											className="nav flex-column tabs-wrapper nav-pills"
											id="v-pills-tab"
											role="tablist"
											aria-orientation="vertical"
										>
											<a
												className="tab d-flex active"
												id="v-pills-presentacion-tab"
												data-toggle="pill"
												href="#v-pills-presentacion"
												role="tab"
												aria-controls="v-pills-presentacion"
												aria-selected="true"
											>
												<div>
													<img
														className="mr-2"
														src="/assets/img/iconos/icono-actas-de-consejo-transparencia-unmsm.png"
														alt=""
													/>
												</div>
												<span>Actas del consejo</span>
											</a>
											{/* <a className="tab d-flex" id="v-pills-mision-tab" data-toggle="pill" href="#v-pills-mision" role="tab" aria-controls="v-pills-mision" aria-selected="false">
                                                    <div>
                                                        <svg width="22" height="22" viewBox="0 0 22 22" className="icon mr-3" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21.5977 10.4199H18.7336C18.3281 6.98867 15.607 4.26758 12.1758 3.86211V0.998047C12.1758 0.894922 12.0914 0.810547 11.9883 0.810547H10.582C10.4789 0.810547 10.3945 0.894922 10.3945 0.998047V3.86211C6.96328 4.26758 4.24219 6.98867 3.83672 10.4199H0.972656C0.869531 10.4199 0.785156 10.5043 0.785156 10.6074V12.0137C0.785156 12.1168 0.869531 12.2012 0.972656 12.2012H3.83672C4.24219 15.6324 6.96328 18.3535 10.3945 18.759V21.623C10.3945 21.7262 10.4789 21.8105 10.582 21.8105H11.9883C12.0914 21.8105 12.1758 21.7262 12.1758 21.623V18.759C15.607 18.3535 18.3281 15.6324 18.7336 12.2012H21.5977C21.7008 12.2012 21.7852 12.1168 21.7852 12.0137V10.6074C21.7852 10.5043 21.7008 10.4199 21.5977 10.4199ZM11.2852 17.0293C8.12578 17.0293 5.56641 14.4699 5.56641 11.3105C5.56641 8.15117 8.12578 5.5918 11.2852 5.5918C14.4445 5.5918 17.0039 8.15117 17.0039 11.3105C17.0039 14.4699 14.4445 17.0293 11.2852 17.0293Z"/>
                                                        <path d="M11.2852 8.49805C10.5328 8.49805 9.82969 8.78867 9.29766 9.32305C8.76563 9.85508 8.47266 10.5582 8.47266 11.3105C8.47266 12.0629 8.76563 12.766 9.29766 13.298C9.82969 13.8277 10.5352 14.123 11.2852 14.123C12.0352 14.123 12.7406 13.8301 13.2727 13.298C13.8023 12.766 14.0977 12.0605 14.0977 11.3105C14.0977 10.5605 13.8047 9.85508 13.2727 9.32305C12.7406 8.78867 12.0375 8.49805 11.2852 8.49805Z"/>
                                                        </svg>
                                                    </div>
                                                    <span>Misión y visión</span>
                                                </a>
                                                <a href="https://drive.google.com/file/d/1pd0rJopXzpCpreI-AyA6xuW89Gb8GyOO/view?usp=sharing" target="_blank" className="tab d-flex">
                                                    <div>
                                                        <svg width="19" height="21" viewBox="0 0 19 21" className="icon mr-3" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M16.5059 20.4783H5.25586C4.85816 20.4779 4.47686 20.3197 4.19564 20.0385C3.91442 19.7573 3.75626 19.376 3.75586 18.9783V14.4783H5.25586V18.9783H16.5059V2.47827H9.75586V0.978271H16.5059C16.9036 0.978669 17.2849 1.13683 17.5661 1.41805C17.8473 1.69927 18.0055 2.08057 18.0059 2.47827V18.9783C18.0055 19.376 17.8473 19.7573 17.5661 20.0385C17.2849 20.3197 16.9036 20.4779 16.5059 20.4783Z"/>
                                                        <path d="M9.75586 9.97827H15.0059V11.4783H9.75586V9.97827Z"/>
                                                        <path d="M9.00586 9.97827H15.0059V11.4783H9.00586V9.97827Z"/>
                                                        <path d="M8.25586 9.97827H15.0059V11.4783H8.25586V9.97827Z"/>
                                                        <path d="M3.75586 16.7283C2.7616 16.7273 1.80835 16.3319 1.10531 15.6288C0.402259 14.9258 0.00685214 13.9725 0.00585938 12.9783V4.72827H1.50586V12.9783C1.50586 13.575 1.74291 14.1473 2.16487 14.5693C2.58683 14.9912 3.15912 15.2283 3.75586 15.2283C4.3526 15.2283 4.92489 14.9912 5.34685 14.5693C5.76881 14.1473 6.00586 13.575 6.00586 12.9783V6.22827C6.00586 6.02936 5.92684 5.83859 5.78619 5.69794C5.64554 5.55729 5.45477 5.47827 5.25586 5.47827C5.05695 5.47827 4.86618 5.55729 4.72553 5.69794C4.58488 5.83859 4.50586 6.02936 4.50586 6.22827V13.7283H3.00586V6.22827C3.00586 5.63153 3.24291 5.05924 3.66487 4.63728C4.08683 4.21532 4.65912 3.97827 5.25586 3.97827C5.8526 3.97827 6.42489 4.21532 6.84685 4.63728C7.26881 5.05924 7.50586 5.63153 7.50586 6.22827V12.9783C7.50487 13.9725 7.10946 14.9258 6.40641 15.6288C5.70337 16.3319 4.75012 16.7273 3.75586 16.7283Z"/>
                                                        </svg>
                                                    </div>
                                                    <span>Malla curricular</span>
                                                </a> */}
										</div>
									</div>
								</Col>
								<Col md="8">
									<Tabs defaultActiveKey="2021" id="resoluciones-tab">
										<Tab className="pt-3" eventKey="2021" title="2021">
											<div>
												<div className="table-responsive">
													<table className="bordered">
														<tbody>
															{transparencia2021.map(function (doc) {
																return (
																	<tr>
																		<td>{doc.fecha}</td>
																		<td>{doc.titulo}</td>
																		<td>
																			<a href={`${doc.link}`} target="_blank">
																				Ver documento
																			</a>
																		</td>
																	</tr>
																);
															})}
														</tbody>
													</table>
												</div>
											</div>
										</Tab>
										<Tab className="pt-3" eventKey="2020" title="2020">
											<div>
												<div className="table-responsive">
													<table className="bordered">
														<tbody>
															{transparencia2020.map(function (doc) {
																return (
																	<tr>
																		<td>{doc.fecha}</td>
																		<td>{doc.titulo}</td>
																		<td>
																			<a href={`${doc.link}`} target="_blank">
																				Ver documento
																			</a>
																		</td>
																	</tr>
																);
															})}
														</tbody>
													</table>
												</div>
											</div>
										</Tab>
										<Tab className="pt-3" eventKey="2019" title="2019">
											<div>
												<div className="table-responsive">
													<table className="bordered">
														<tbody>
															{transparencia2019.map(function (doc) {
																return (
																	<tr>
																		<td>{doc.fecha}</td>
																		<td>{doc.titulo}</td>
																		<td>
																			<a href={`${doc.link}`} target="_blank">
																				Ver documento
																			</a>
																		</td>
																	</tr>
																);
															})}
														</tbody>
													</table>
												</div>
											</div>
										</Tab>
									</Tabs>
								</Col>
								<Col md="1"></Col>
							</Row>
						</Container>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default transparencia;
