import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import Head from "next/head";
// import Header from "../../components/Header"
import Link from "next/link";
import Layout from "../../components/Layout";
import { Row, Col, Container, Breadcrumb, Spinner } from "react-bootstrap";
import { AiFillContainer } from "react-icons/ai";
import { size } from "lodash";
import { getInformacionesAcademicasApi } from "../api/informacion-academica";
import NoticiasExtra from "../../components/NoticiasExtra";
import j from "jquery";

export default function InformacionAcademica() {
	const [pages, setPages] = useState([
		"pag1",
		"pag2",
		"pag3",
		"pag3",
		"pag3",
		"pag3",
		"pag3",
		"pag3",
	]);

	const { query } = useRouter();

	const [informacionesAcademicas, setInformacionesAcademicas] = useState([]);
	const [loading, setLoading] = useState(true);
	const [sinResultados, setSinResultados] = useState(false);
	const [recursos, setRecursos] = useState([]);
	const [recurso, setRecurso] = useState("");
	const [escuelas, setEscuelas] = useState([]);
	const [escuela, setEscuela] = useState("");

	function removeItemFromArr(arr, item) {
		var i = arr.indexOf(item);
		arr.splice(i, 1);
	}

	const onChangeRecurso = (event) => {
		var encontrado = false;
		for (var i = 0; i < recursos.length; i++) {
			if (recursos[i] == event.target.value) {
				encontrado = true;
			}
		}
		if (encontrado) {
			removeItemFromArr(recursos, event.target.value);
		} else {
			recursos.push(event.target.value);
		}

		setRecurso(Math.random());
	};

	const onChangeEscuela = (event) => {
		var encontrado = false;
		for (var i = 0; i < escuelas.length; i++) {
			if (escuelas[i] == event.target.value) {
				encontrado = true;
			}
		}
		if (encontrado) {
			removeItemFromArr(escuelas, event.target.value);
		} else {
			escuelas.push(event.target.value);
		}

		setEscuela(Math.random());
	};

	useEffect(() => {
		setTimeout(function () {
			j("input[type=checkbox]").prop("checked", false);
			console.log(query);
			if (query.recurso === "informacion-de-docentes") {
				j("#recurso-docentes").prop("checked", true);
				setRecursos(["docentes"]);
				setRecurso(Math.random());
			} else if (query.recurso === "syllabus") {
				j("#recurso-syllabus").prop("checked", true);
				setRecursos(["syllabus"]);
				setRecurso(Math.random());
			} else if (query.recurso === "horarios") {
				j("#recurso-horarios").prop("checked", true);
				setRecursos(["horarios"]);
				setRecurso(Math.random());
			} else if (query.recurso === "malla-curricular") {
				j("#recurso-malla").prop("checked", true);
				setRecursos(["malla-curricular"]);
				setRecurso(Math.random());
			}
		}, 300);
	}, [query]);

	useEffect(() => {
		(async () => {
			setLoading(true);
			setSinResultados(false);

			const response = await getInformacionesAcademicasApi(recursos, escuelas);
			setInformacionesAcademicas(response);
			setLoading(false);
			if (size(response) == 0) {
				setSinResultados(true);
			} else {
				setSinResultados(false);
			}
			window.scrollTo(0, 0);
		})();
	}, [recurso, escuela]);

	return (
		<>
			<Layout title="Información académica">
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
										<Breadcrumb.Item active>Información académica</Breadcrumb.Item>
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
									<div className="title-page text-center">Información académica</div>
								</Col>
								<Col md="1"></Col>
							</Row>
						</Container>
						<Container className="mb-3">
							<Row>
								<Col md="1" lg="1"></Col>
								<Col md="7" lg="8">
									Todo lo necesario para cursar el semestre con éxito está aquí: cronograma
									académica, planes de estudios, mallas curriculares, syllabus, etc.
								</Col>
								<Col md="4" lg="3"></Col>
							</Row>
						</Container>
						<Container>
							<Row>
								<Col md="1" lg="1"></Col>
								<Col md="3" lg="2">
									<div className="filters-wrapper">
										<div className="mb-3">
											<div className="font-weight-bold mb-2">Recurso:</div>
											<div>
												<div className="input-group mb-1">
													<input
														type="checkbox"
														id="recurso-horarios"
														name="recurso-horarios"
														value="horarios"
														onChange={onChangeRecurso}
													/>
													<label className="mb-0" for="recurso-horarios">
														<span className="checkmark"></span> Horarios
													</label>
												</div>
												<div className="input-group mb-1">
													<input
														type="checkbox"
														id="recurso-malla"
														name="recurso-malla"
														value="malla curricular"
														onChange={onChangeRecurso}
													/>
													<label className="mb-0" for="recurso-malla">
														<span className="checkmark"></span> Malla curricular y plan de estudios
													</label>
												</div>
												<div className="input-group mb-1">
													<input
														type="checkbox"
														id="recurso-syllabus"
														name="recurso-syllabus"
														value="syllabus"
														onChange={onChangeRecurso}
													/>
													<label className="mb-0" for="recurso-syllabus">
														<span className="checkmark"></span> Syllabus
													</label>
												</div>
												<div className="input-group mb-1">
													<input
														type="checkbox"
														id="recurso-docentes"
														name="recurso-docentes"
														value="docentes"
														onChange={onChangeRecurso}
													/>
													<label className="mb-0" for="recurso-docentes">
														<span className="checkmark"></span> Información de docentes
													</label>
												</div>
											</div>
										</div>
										<div>
											<div className="font-weight-bold mb-2">Escuelas:</div>
											<div>
												<div className="input-group mb-1">
													<input
														type="checkbox"
														id="escuelas-ciencias-biologicas"
														name="escuelas-ciencias-biologicas"
														value="ciencias biologicas"
														onChange={onChangeEscuela}
													/>
													<label className="mb-0" for="escuelas-ciencias-biologicas">
														<span className="checkmark"></span> Ciencias Biológicas
													</label>
												</div>
												<div className="input-group mb-1">
													<input
														type="checkbox"
														id="escuelas-microbiologia"
														name="escuelas-microbiologia"
														value="microbiologia y parasitologia"
														onChange={onChangeEscuela}
													/>
													<label className="mb-0" for="escuelas-microbiologia">
														<span className="checkmark"></span> Microbiología y parasitología
													</label>
												</div>
												<div className="input-group mb-1">
													<input
														type="checkbox"
														id="escuelas-genetica"
														name="escuelas-genetica"
														value="genetica y biotecnologia"
														onChange={onChangeEscuela}
													/>
													<label className="mb-0" for="escuelas-genetica">
														<span className="checkmark"></span> Genética y biotecnología
													</label>
												</div>
											</div>
										</div>
									</div>
								</Col>
								<Col md="4" lg="6">
									{loading ? (
										<>
											<div className="d-flex align-items-center justify-content-center my-5">
												<div className="d-inline-flex flex-column justify-content-center align-items-center">
													<Spinner animation="border" role="status" className="mb-2" />
													<span>Buscando registros...</span>
												</div>
											</div>
										</>
									) : !sinResultados ? (
										<div>
											<div className="mb-2">
												{recursos.includes("docentes")
													? informacionesAcademicas.length + 1
													: informacionesAcademicas.length}{" "}
												{informacionesAcademicas.length === 1 ? "resultado" : "resultados"}
											</div>
											<div className="divisor my-3"></div>
											{recursos.includes("docentes") && (
												<div className="block-divider mb-3">
													<Link href="/informacion-academica/docentes/?nombre=lista-completa-de-docentes-de-la-facultad">
														<a className="title">Lista completa de docentes de la facultad</a>
													</Link>
													<p className="mb-3">
														Encuentra el nombre, hoja de vida, enlaces de información de
														investigación y contacto de los docentes de la facultad
													</p>
												</div>
											)}
											{informacionesAcademicas.map((informacion_academica, index) => (
												<div key={index} className="block-divider mb-3">
													<Link
														href={
															informacion_academica.recurso === "docentes"
																? `/informacion-academica/docentes/?nombre=${informacion_academica.url_nombre}`
																: informacion_academica.link != "" &&
																  informacion_academica.link != null
																? informacion_academica.link
																: "#"
														}
													>
														<a
															target={informacion_academica.recurso === "docentes" ? "" : "_blank"}
															className="title"
														>
															{informacion_academica.nombre}
														</a>
													</Link>
													<p className="mb-3">{informacion_academica.descripcion}</p>
												</div>
											))}
										</div>
									) : (
										// <SinResultados />
										"No se encontraron registros"
									)}
									{/* <div>
                                        <div className="divisor my-3"></div>
                                        <div className="block-divider mb-3">
                                            <Link href="/informacion-academica/horarios">
                                                <a className="title">Horarios 2021-II | Ciencias Biológicas</a>
                                            </Link>
                                            <p className="mb-3">Todos los cursos electivos y obligatorios. Horario actualizado el 23/04/16.</p>
                                        </div>
                                        <div className="block-divider mb-3">
                                            <Link href="/informacion-academica/syllabus">
                                                <a className="title">Syllabus | Ciencias Biológicas</a>
                                            </Link>
                                            <p className="mb-3">Todos los cursos electivos y obligatorios. Horario actualizado el 23/04/16.</p>
                                        </div>
                                        <div className="block-divider mb-3">
                                            <Link href="/informacion-academica/plan">
                                                <a className="title">Malla curricular y plan de estudios 2018 | Ciencias Biológicas</a>
                                            </Link>
                                            <p className="mb-3">Todos los cursos electivos y obligatorios. Horario actualizado el 23/04/16.</p>
                                        </div>
                                        <div className="block-divider mb-3">
                                            <Link href="/informacion-academica/docentes">
                                                <a className="title">Información de docentes | Departamento de Biología celular y Genética</a>
                                            </Link>
                                            <p className="mb-3">Todos los cursos electivos y obligatorios. Horario actualizado el 23/04/16.</p>
                                        </div>
                                    </div> */}
								</Col>
								<Col md="3" lg="2">
									<aside>
										<NoticiasExtra idNoticiaDetalle={""} />
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
}
