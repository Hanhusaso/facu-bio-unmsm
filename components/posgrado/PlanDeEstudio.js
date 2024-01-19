import React from 'react';
import * as AiIcons from 'react-icons/ai';
import { Row, Col, Container, Breadcrumb, Tabs, Tab } from 'react-bootstrap';

const PlanDeEstudio = ({
	asignaturas_obligatorias = [],
	asignaturas_electivas = [],
}) => {
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
							{asignaturas_obligatorias.map((asignatura) => (
								<li
									className="mb-5 marker-bold"
									key={asignatura.id}
								>
									<p className="d-inline-block font-weight-bold">
										{asignatura.course_name}
									</p>
									<div className="badge-sm-wrapper mb-3">
										<p className="badge-sm-green-dark">
											{asignatura.label1}
										</p>
										<p className="badge-sm-green">
											{asignatura.label2}
										</p>
										<p className="badge-sm-green">
											{asignatura.label3}
										</p>
									</div>
									<p>
										Tiene por propósito evaluar la
										diversidad de organismos y su evolución,
										usando diferentes tipos de datos
										sistemáticos, resaltando los aspectos
										funcionales de la biodiversidad y su
										importancia en el escenario ecológico,
										proporcionando principios básicos del
										manejo y conservación de la
										biodiversidad.
									</p>
									<p>Las unidades son:</p>
									<ol className="pl-0 list-inside">
										{asignatura.unity1 && (
											<li>{asignatura.unity1}</li>
										)}
										{asignatura.unity2 && (
											<li>{asignatura.unity2}</li>
										)}
										{asignatura.unity3 && (
											<li>{asignatura.unity3}</li>
										)}
										{asignatura.unity4 && (
											<li>{asignatura.unity4}</li>
										)}
									</ol>
								</li>
							))}
						</ol>
					</div>
				</Tab>
				<Tab className="pt-2" eventKey="electivas" title="Electivas">
					<div>
						<ol className="pl-0 list-inside">
							{asignaturas_electivas.map((asignatura) => (
								<li
									className="mb-5 marker-bold"
									key={asignatura.id}
								>
									<p className="d-inline-block font-weight-bold">
										{asignatura.course_name}
									</p>
									<div className="badge-sm-wrapper mb-3">
										<p className="badge-sm-green-dark">
											{asignatura.label1}
										</p>
										<p className="badge-sm-green">
											{asignatura.label2}
										</p>
										<p className="badge-sm-green">
											{asignatura.label3}
										</p>
									</div>
									<p>
										Tiene por propósito evaluar la
										diversidad de organismos y su evolución,
										usando diferentes tipos de datos
										sistemáticos, resaltando los aspectos
										funcionales de la biodiversidad y su
										importancia en el escenario ecológico,
										proporcionando principios básicos del
										manejo y conservación de la
										biodiversidad.
									</p>
									<p>Las unidades son:</p>
									<ol className="pl-0 list-inside">
										{asignatura.unity1 && (
											<li>{asignatura.unity1}</li>
										)}
										{asignatura.unity2 && (
											<li>{asignatura.unity2}</li>
										)}
										{asignatura.unity3 && (
											<li>{asignatura.unity3}</li>
										)}
										{asignatura.unity4 && (
											<li>{asignatura.unity4}</li>
										)}
									</ol>
								</li>
							))}
						</ol>
					</div>
				</Tab>
			</Tabs>
		</div>
	);
};

export default PlanDeEstudio;
