import React, { useState, useEffect } from 'react';
import { Pagination, Loader } from 'semantic-ui-react';
import { useRouter } from 'next/router';
// import Head from "next/head";
// import Header from "../../components/Header"
import Link from 'next/link';
import Layout from '../../../components/Layout';
import { Row, Col, Container, Breadcrumb, Spinner } from 'react-bootstrap';
import { size } from 'lodash';
import {
	getDocenteByIdInformacionAcademicaApi,
	getInformacionAcademicaByUrlApi,
	countDocenteByIdInformacionAcademicaApi,
	countDocentesTotal,
	getDocentesTotal,
} from '../../api/informacion-academica';
import NoticiasExtra from '../../../components/NoticiasExtra';
import * as HiIcons from 'react-icons/hi';
import link from 'next/link';

const limitPerPage = 10;

const docentes = () => {
	const { query } = useRouter();

	const currentUrlInformacionAcademica = query.nombre;
	const [paginador, setPaginador] = useState('');
	const [page, setPage] = useState(0);
	const [numberPage, setNumberPage] = useState(1);
	const [docentes, setDocentes] = useState([]);
	const [countDocentes, setCountDocentes] = useState(0);
	const [loading, setLoading] = useState(true);
	const [sinResultados, setSinResultados] = useState(false);
	const [informacionAcademica, setInformacionAcademica] = useState(false);
	const [palabra, setPalabra] = useState('');

	const onPageChange = (event, data) => {
		setPage((data.activePage - 1) * 10);
		setNumberPage(data.activePage);
		window.scrollTo(0, 0);
	};

	const onChangePalabra = (event) => {
		setPalabra(event.target.value);
		setPage(0);
		setNumberPage(1);
	};

	useEffect(() => {
		if (query.nombre == undefined) {
			return;
		}
		if (query.nombre === 'lista-completa-de-docentes-de-la-facultad') {
			setInformacionAcademica({
				nombre: 'Lista completa de docentes de la facultad en nivel pregrado y posgrado',
			});
			return;
		}
		(async () => {
			console.log('Segunda función autoejectubale');
			const response = await getInformacionAcademicaByUrlApi(
				currentUrlInformacionAcademica
			);
			if (size(response) == 0) {
				setLoading(false);
				setSinResultados(true);
			} else {
				setInformacionAcademica(response[0]);
			}
		})();
	}, [query]);

	useEffect(() => {
		if (!query || !informacionAcademica) {
			return;
		}
		if (query.nombre === 'lista-completa-de-docentes-de-la-facultad') {
			(async () => {
				const response1 = await countDocentesTotal(palabra);
				console.log('countDocentes: ', response1);
				setCountDocentes(response1);
				setPaginador('');
				setPaginador(
					<Pagination
						defaultActivePage={numberPage}
						totalPages={Math.ceil(response1 / 10.0)}
						onPageChange={onPageChange}
					/>
				);
				setLoading(true);
				setSinResultados(false);
				if (response1 != 0) {
					const response2 = await getDocentesTotal(
						limitPerPage,
						page,
						palabra
					);
					setDocentes(response2);
					setLoading(false);
				} else {
					setLoading(false);
					setSinResultados(true);
				}
				window.scrollTo(0, 0);
			})();
			return;
		}
		(async () => {
			console.log('Tercera función autoejectubale');
			const response1 = await countDocenteByIdInformacionAcademicaApi(
				informacionAcademica.id,
				palabra
			);
			setCountDocentes(response1);
			setPaginador('');
			setPaginador(
				<Pagination
					defaultActivePage={numberPage}
					totalPages={Math.ceil(response1 / 10.0)}
					onPageChange={onPageChange}
				/>
			);
			setLoading(true);
			setSinResultados(false);
			if (response1 != 0) {
				const response2 = await getDocenteByIdInformacionAcademicaApi(
					limitPerPage,
					page,
					informacionAcademica.id,
					palabra
				);
				setDocentes(response2);
				setLoading(false);
			} else {
				setLoading(false);
				setSinResultados(true);
			}
			window.scrollTo(0, 0);
		})();
	}, [page, query, palabra, informacionAcademica]);

	return (
		<>
			<Layout title="Docentes">
				<div>
					<div>
						<Container>
							<Row>
								<Col sm="1"></Col>
								<Col className="">
									<Breadcrumb>
										{/* <Breadcrumb.Item> */}
										<li className="breadcrumb-item">
											<Link href="/">
												<a role="button">Inicio</a>
											</Link>
										</li>
										{/* </Breadcrumb.Item> */}
										<li className="breadcrumb-item">
											<Link href="/informacion-academica">
												<a role="button">
													Información académica
												</a>
											</Link>
										</li>
										<Breadcrumb.Item active>
											{informacionAcademica.nombre}
										</Breadcrumb.Item>
									</Breadcrumb>
								</Col>
								<Col sm="1"></Col>
							</Row>
						</Container>
					</div>
					<div>
						<Container className="mb-3">
							<Row>
								<Col sm="1"></Col>
								<Col className="">
									<div className="title-page text-center">
										{informacionAcademica.nombre}
									</div>
								</Col>
								<Col sm="1"></Col>
							</Row>
						</Container>
						<Container className="mb-4">
							<Row>
								<Col sm="3"></Col>
								<Col>
									<div>
										<input
											className="search-input"
											placeholder="Busca por un docente por nombre"
											type="text"
											onChange={onChangePalabra}
										/>
									</div>
								</Col>
								<Col sm="3"></Col>
							</Row>
						</Container>
						<Container>
							<Row>
								<Col sm="1"></Col>
								<Col sm="8">
									{loading ? (
										<>
											<div className="d-flex align-items-center justify-content-center my-5">
												<div className="d-inline-flex flex-column justify-content-center align-items-center">
													<Spinner
														animation="border"
														role="status"
														className="mb-2"
													/>
													<span>
														Buscando registros...
													</span>
												</div>
											</div>
										</>
									) : !sinResultados ? (
										<div>
											<div className="mb-2">
												{countDocentes}{' '}
												{countDocentes == 1
													? 'resultado'
													: 'resultados'}
											</div>
											<div className="divisor my-3"></div>
											{docentes.map((docente, index) => (
												<div
													key={index}
													className="block-divider mb-3 pb-2 position-relative"
												>
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
															className="d-inline-block color-inherit mr-3"
														>
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
													<p className="mb-2">
														<span className="mr-2">
															Investigación:
														</span>
														<a
															href={
																docente.link_rais
															}
															target="_blank"
															className="d-inline-block color-inherit mr-2"
														>
															<span className="mr-1">
																RAIS
															</span>
															<HiIcons.HiExternalLink className="mb-1 icon" />
														</a>
														<a
															href={
																docente.link_siis
															}
															target="_blank"
															className="d-inline-block color-inherit mr-2"
														>
															<span className="mr-1">
																SIIS
															</span>
															<HiIcons.HiExternalLink className="mb-1 icon" />
														</a>
													</p>
													{!!docente
														.categoria_profesor
														?.nombre ||
													!!docente.clase_profesor
														?.nombre ? (
														<>
															<p className="mb-2">
																<span className="mr-2">
																	Categoría:
																</span>
																<span className="mr-2">
																	{
																		docente
																			.categoria_profesor
																			?.nombre
																	}
																</span>
															</p>

															<p className="mb-2">
																<span className="mr-2">
																	Clase:
																</span>
																<span className="mr-2">
																	{
																		docente
																			.clase_profesor
																			?.nombre
																	}
																</span>
															</p>
														</>
													) : null}

													{docente.ensenanza_pregrado ||
													docente.ensenanza_posgrado ? (
														<p className="mb-2">
															<span className="mr-2">
																Nivel del
																enseñanza:
															</span>
															<span className="mr-2">
																{docente.ensenanza_pregrado &&
																docente.ensenanza_posgrado ? (
																	<>
																		Pregrado
																		y
																		Posgrado
																	</>
																) : docente.ensenanza_pregrado &&
																  !docente.ensenanza_posgrado ? (
																	<>
																		Pregrado
																	</>
																) : !docente.ensenanza_pregrado &&
																  docente.ensenanza_posgrado ? (
																	<>
																		Posgrado
																	</>
																) : null}
															</span>
														</p>
													) : null}

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
											{paginador}
										</div>
									) : (
										// <SinResultados />
										'No se encontraron registros'
									)}
									{/* <div>
                                        <div className="divisor my-3"></div>
                                        <div className="block-divider mb-3 pb-2 position-relative">
                                            <h3 className="title">Mg. Julio  Montero Cáceres | Docente principal   </h3>
                                            <p className="mb-2">
                                                <span className="mr-2">Documentación:</span>
                                                <a href="#" className="d-inline-block color-inherit mr-3">
                                                    <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                    <span className="">Resolución rectoral</span>
                                                </a>
                                                <a href="#" className="d-inline-block color-inherit mr-3">
                                                    <img className="mr-2" src="/assets/img/iconos/pdf.svg" alt=""/>
                                                    <span className="">Hoja de vida</span>
                                                </a>
                                            </p>
                                            <p className="mb-2">
                                                <span className="mr-2">Investigación:</span>
                                                <a href="#" className="d-inline-block color-inherit mr-2">
                                                    <span className="mr-1">RAIS</span>
                                                    <HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                </a>
                                                <a href="#" className="d-inline-block color-inherit mr-2">
                                                    <span className="mr-1">SIIS</span>
                                                    <HiIcons.HiExternalLink  className="mb-1 icon"/>
                                                </a>
                                            </p>
                                            <p className="mb-2">
                                                <span className="mr-2">Contacto:</span>
                                                <img className="icon mr-2" src="/assets/img/iconos/correo.svg" alt=""/>
                                                <span className="text-break">laucastivas@unmsm.edu.pe</span>
                                            </p>
                                        </div>
                                    </div> */}
								</Col>
								<Col sm="2">
									<aside>
										<NoticiasExtra idNoticiaDetalle={''} />
									</aside>
								</Col>
								<Col sm="1"></Col>
							</Row>
						</Container>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default docentes;
