import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Row, Col, Container, Breadcrumb, Tabs, Tab } from 'react-bootstrap';

const PlanDeEstudio = () => {
	return (
		<div>
			<p className="mb-2">
				Puedes revisar el plan de estudios completo en el siguiente
				enlace:
			</p>
			<a className="btn-green-bright mb-4" href="#" target="_blank">
				Revisar plan de estudios
			</a>
			<p className="mb-3">
				A continuación puedes encontrar más información sobre cada una
				de las asignaturas.
			</p>
			<p className="title-dark mb-3">Asignaturas</p>
			<div className="info-box mb-4">
				<div className="d-flex">
					<AiIcons.AiOutlineInfoCircle className="icon mr-1 position-relative" />
					<p>
						<b>Conceptos previos importantes</b>
					</p>
				</div>
				<p>Los programas de posgrado comprenden dos periodos:</p>
				<ul className="mb-0 pl-4">
					<li>
						<span className="font-weight-bold">
							Periodo de profundización:
						</span>{' '}
						Tiene por objetivo{' '}
						<span className="font-weight-bold">
							actualizar los conocimientos y brindar las
							herramientas conceptuales y teórico-prácticas
						</span>{' '}
						para desarrollar la investigación conducente al grado.
					</li>
					<li>
						<span className="font-weight-bold">
							Periodo de investigación:
						</span>{' '}
						Tiene como objetivo el{' '}
						<span className="font-weight-bold">
							desarrollo, junto con los investigadores y los
							docentes de la Universidad, de las investigaciones
							que darán sustento científico a la tesis
						</span>{' '}
						de grado.
					</li>
				</ul>
			</div>
			<Tabs
				className="mb-3"
				defaultActiveKey="obligatorias"
				id="asignaturas-tab"
			>
				<Tab
					className="pt-2"
					eventKey="obligatorias"
					title="Obligatorias"
				>
					<div>
						<ol className="pl-0 list-inside">
							<li className="mb-5 marker-bold">
								<p className="d-inline-block font-weight-bold">
									Biodiversidad y Conservación
								</p>
								<div className="badge-sm-wrapper mb-3">
									<p className="badge-sm-green-dark">
										P. Profundización
									</p>
									<p className="badge-sm-green">Teórica</p>
									<p className="badge-sm-green">Presencial</p>
								</div>
								<p>
									Tiene por propósito evaluar la diversidad de
									organismos y su evolución, usando diferentes
									tipos de datos sistemáticos, resaltando los
									aspectos funcionales de la biodiversidad y
									su importancia en el escenario ecológico,
									proporcionando principios básicos del manejo
									y conservación de la biodiversidad.
								</p>
								<p>Las unidades son:</p>
								<ol className="pl-0 list-inside">
									<li>
										Introducción a la biodiversidad y
										evolución
									</li>
									<li>Diversidad vegetal y animal</li>
									<li>
										Biodiversidad y conservación de
										ambientes acuáticos
									</li>
									<li>
										Principios del manejo y conservación de
										la biodiversidad
									</li>
								</ol>
							</li>
							<li className="mb-5 marker-bold">
								<p className="d-inline-block font-weight-bold">
									Herramientas Estadísticas
								</p>
								<div className="badge-sm-wrapper mb-3">
									<p className="badge-sm-green-dark">
										P. Profundización
									</p>
									<p className="badge-sm-green">
										Teórico-práctica
									</p>
									<p className="badge-sm-green">Presencial</p>
								</div>
								<p>
									Tiene por propósito evaluar el uso de
									técnicas probabilísticas y estadísticas para
									la toma de muestra, análisis de datos y toma
									de decisiones en problemas biológicos y
									ambientales.
								</p>
								<p>Las unidades son:</p>
								<ol className="pl-0 list-inside">
									<li>
										Introducción a la biodiversidad y
										evolución
									</li>
									<li>Diversidad vegetal y animal</li>
									<li>
										Biodiversidad y conservación de
										ambientes acuáticos
									</li>
									<li>
										Principios del manejo y conservación de
										la biodiversidad
									</li>
								</ol>
							</li>
						</ol>
					</div>
				</Tab>
				<Tab className="pt-2" eventKey="electivas" title="Electivas">
					<div>
						<ol className="pl-0 list-inside">
							<li className="mb-5 marker-bold">
								<p className="d-inline-block font-weight-bold">
									Biodiversidad y Conservación
								</p>
								<div className="badge-sm-wrapper mb-3">
									<p className="badge-sm-green-dark">
										P. Profundización
									</p>
									<p className="badge-sm-green">Teórica</p>
									<p className="badge-sm-green">Presencial</p>
								</div>
								<p>
									Tiene por propósito evaluar la diversidad de
									organismos y su evolución, usando diferentes
									tipos de datos sistemáticos, resaltando los
									aspectos funcionales de la biodiversidad y
									su importancia en el escenario ecológico,
									proporcionando principios básicos del manejo
									y conservación de la biodiversidad.
								</p>
								<p>Las unidades son:</p>
								<ol className="pl-0 list-inside">
									<li>
										Introducción a la biodiversidad y
										evolución
									</li>
									<li>Diversidad vegetal y animal</li>
									<li>
										Biodiversidad y conservación de
										ambientes acuáticos
									</li>
									<li>
										Principios del manejo y conservación de
										la biodiversidad
									</li>
								</ol>
							</li>
							<li className="mb-5 marker-bold">
								<p className="d-inline-block font-weight-bold">
									Herramientas Estadísticas
								</p>
								<div className="badge-sm-wrapper mb-3">
									<p className="badge-sm-green-dark">
										P. Profundización
									</p>
									<p className="badge-sm-green">
										Teórico-práctica
									</p>
									<p className="badge-sm-green">Presencial</p>
								</div>
								<p>
									Tiene por propósito evaluar el uso de
									técnicas probabilísticas y estadísticas para
									la toma de muestra, análisis de datos y toma
									de decisiones en problemas biológicos y
									ambientales.
								</p>
								<p>Las unidades son:</p>
								<ol className="pl-0 list-inside">
									<li>
										Introducción a la biodiversidad y
										evolución
									</li>
									<li>Diversidad vegetal y animal</li>
									<li>
										Biodiversidad y conservación de
										ambientes acuáticos
									</li>
									<li>
										Principios del manejo y conservación de
										la biodiversidad
									</li>
								</ol>
							</li>
						</ol>
					</div>
				</Tab>
			</Tabs>
		</div>
	);
};

export default PlanDeEstudio;
