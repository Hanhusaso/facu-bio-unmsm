import React from 'react';
import * as AiIcons from 'react-icons/ai';

const InversionEconomicaDoctorado = () => {
	return (
		<div>
			<div className="info-box mb-4">
				<div className="d-flex">
					<AiIcons.AiOutlineInfoCircle className="icon mr-1 position-relative" />
					<p>
						<b>Observación</b>
					</p>
				</div>
				<ul className="mb-0 pl-4">
					<li>
						La duración total del programa es de 3 años (6
						semestres).
					</li>
					<li>Montos referenciales, sujetos a variaciones.</li>
				</ul>
			</div>
			<div className="mb-4">
				<p className="font-weight-bold">1. Admisión:</p>
				<ul className="mb-3 pl-4">
					<li>
						El costo para magíster UNMSM, personal administrativo de
						la UNMSM, docente de Universidades nacionales o
						magisterio nacionales es de <b>S/ 400.00</b>
					</li>
					<li>
						El costo para magíster de universidades particulares es
						de <b>S/ 500.00</b>
					</li>
				</ul>
				<div className="info-box mb-4">
					<p className="mb-0">
						Más información sobre los conceptos y lugares en la
						sección de <b>admisión</b>.
					</p>
				</div>
			</div>

			<div className="mb-4">
				<p className="font-weight-bold">2. Matrícula:</p>
				<p className="mb-4">
					El costo para el pago por derecho de matrícula se realiza a
					través del{' '}
					<span className="color-green-bright">Banco Pichincha</span>.
				</p>
				<div className="mb-4">
					<div className="d-block d-sm-flex justify-content-center mb-3">
						<div className="card costo mb-3 mb-sm-0 mx-0 mx-sm-2">
							<p className="mb-3 title-green">S/. 258.00</p>
							<p className="font-weight-bold mb-3">
								Código: 102-010
							</p>
							<p className="mb-0">
								Costo por derecho de matrícula UPG para el{' '}
								<span className="font-weight-bold">
									alumno ingresante.
								</span>
							</p>
						</div>
						<div className="card costo mb-3 mb-sm-0 mx-0 mx-sm-2">
							<p className="mb-3 title-green">S/. 52.00</p>
							<p className="font-weight-bold mb-3">
								Código: 207-010
							</p>
							<p className="mb-0">
								Costo por derecho de matrícula DGEP para el{' '}
								<span className="font-weight-bold">
									alumno ingresante.
								</span>
							</p>
						</div>
					</div>
					<div className="d-block d-sm-flex justify-content-center mb-3">
						<div className="card costo mb-3 mb-sm-0 mx-0 mx-sm-2">
							<p className="mb-3 title-green">S/. 448.00</p>
							<p className="font-weight-bold mb-3">
								Código: 102-010
							</p>
							<p className="mb-0">
								Costo por derecho de matrícula UPG para el{' '}
								<span className="font-weight-bold">
									alumno regular.
								</span>
							</p>
						</div>
						<div className="card costo mb-3 mb-sm-0 mx-0 mx-sm-2">
							<p className="mb-3 title-green">S/. 52.00</p>
							<p className="font-weight-bold mb-3">
								Código: 207-010
							</p>
							<p className="mb-0">
								Costo por derecho de matrícula DGEP para el{' '}
								<span className="font-weight-bold">
									alumno regular.
								</span>
							</p>
						</div>
					</div>
					<div>
						<p className="sub-text mb-0 text-center">
							*Los costos corresponden al proceso de admisión
							2023-I, sujetos a variaciones.
						</p>
					</div>
				</div>
				<div className="info-box mb-2">
					<p className="mb-0">
						<b>Facilidades de pago:</b> El fraccionamiento lo puedes
						realizar con un{' '}
						<span className="color-green-bright">FUT</span> o una
						carta dirigida al Decano, a través del{' '}
						<span className="color-green-bright">MAT</span>, y solo
						en el importe por perfeccionamiento(*). Es importante
						presentar el escrito detallando los meses a pagar
						(dentro del semestre).
					</p>
				</div>
			</div>

			<div className="mb-4">
				<p className="font-weight-bold">3. Costo por ciclo:</p>
				<p className="mb-3">
					Cada curso tiene una cantidad determinada de creditaje por
					lo que un alumno, al matricularse en el semestre académico,
					realizará el pago correspondiente al total de números de
					créditos.
				</p>
				<ul className="mb-3 pl-4">
					<li>
						El costo por ciclo es de <b>S/ 3400.00</b>
					</li>
				</ul>
				<div className="info-box mb-3">
					<p className="mb-0">
						Se debe completar un mínimo de 108 créditos aprobatorios
						para la obtención del grado.
					</p>
				</div>
				<div>
					<p className="sub-text mb-0">
						*Los costos corresponden al proceso de admisión 2023-I,
						sujetos a variaciones.
					</p>
				</div>
			</div>
		</div>
	);
};

export default InversionEconomicaDoctorado;
