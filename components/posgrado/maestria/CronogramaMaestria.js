import React from 'react';

const CronogramaMaestria = () => {
	return (
		<div>
			<p className="mb-4">
				El proceso de admisión a los programas de maestrías de la Unidad
				de Posgrado de la facultad de Ciencias Biológicas se desarrolla
				semestralmente, según cronograma aprobado por el VRIP.
			</p>
			<div className="table-responsive mb-3">
				<table className="striped m-auto">
					<thead>
						<tr>
							<th className="text-center" colSpan="2">
								Proceso de Admisión 2023 - I
							</th>
						</tr>
						<tr className="sub-thead">
							<th className="text-center">Actividad</th>
							<th className="text-center th-fecha">Fecha</th>
						</tr>
					</thead>
					<tbody>
						<tr className="d-none"></tr>
						<tr>
							<td>
								Inscripción de postulantes y envío de expediente
							</td>
							<td>Del 2 de enero al 28 de febrero del 2023</td>
						</tr>
						<tr>
							<td>Inscripción extemporánea</td>
							<td>Del 1 al 17 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Examen de aptitud virtual</td>
							<td>18 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Evaluación del expediente</td>
							<td>20 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Entrevista personal virtual</td>
							<td>20 y 21 de marzo del 2023</td>
						</tr>
						<tr>
							<td>
								Ingreso de evaluación al SISEVA para generación
								de actas
							</td>
							<td>20 y 23 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Publicación de resultados</td>
							<td>23 de marzo del 2023</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="table-responsive mb-3">
				<table className="striped m-auto">
					<thead>
						<tr>
							<th className="text-center" colSpan="2">
								Proceso de matrícula
							</th>
						</tr>
						<tr className="sub-thead">
							<th className="text-center">Actividad</th>
							<th className="text-center th-fecha">Fecha</th>
						</tr>
					</thead>
					<tbody>
						<tr className="d-none"></tr>
						<tr>
							<td>Reactualización de matrícula</td>
							<td>Hasta el 17 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Matrícula regular</td>
							<td>Del 6 al 31 de marzo del 2023</td>
						</tr>
						<tr>
							<td>Matrícula de ingresantes</td>
							<td>Del 27 al 31 de marzo del 2023</td>
						</tr>
						<tr>
							<td>
								Matrícula extemporánea y rectificación de
								matrícula
							</td>
							<td>Del 17 al 24 de abril del 2023</td>
						</tr>
						<tr>
							<td>Reserva de matrícula</td>
							<td>Hasta el 23 de junio del 2023</td>
						</tr>
						<tr>
							<td>Anulación de matrícula</td>
							<td>Del 19 al 23 de junio del 2023</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="table-responsive mb-3">
				<table className="striped m-auto">
					<thead>
						<tr>
							<th className="text-center" colSpan="2">
								Programa de inducción académica
							</th>
						</tr>
						<tr className="sub-thead">
							<th className="text-center">Actividad</th>
							<th className="text-center th-fecha">Fecha</th>
						</tr>
					</thead>
					<tbody>
						<tr className="d-none"></tr>
						<tr>
							<td>
								Capacitación en base de datos, aspectos de
								investigación y normativa de posgrado
							</td>
							<td>1 de abril del 2023</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="table-responsive mb-3">
				<table className="striped m-auto">
					<thead>
						<tr>
							<th className="text-center" colSpan="2">
								Actividades académicas
							</th>
						</tr>
						<tr className="sub-thead">
							<th className="text-center">Actividad</th>
							<th className="text-center th-fecha">Fecha</th>
						</tr>
					</thead>
					<tbody>
						<tr className="d-none"></tr>
						<tr>
							<td>Inicio de clases</td>
							<td>3 de abril del 2023</td>
						</tr>
						<tr>
							<td>Fin de clases</td>
							<td>22 de julio del 2023</td>
						</tr>
						<tr>
							<td>Ingreso de notas</td>
							<td>Del 24 al 27 de julio del 2023</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p>
				Fuente:{' '}
				<span className="color-green-bright">
					R.R. n° 000850-2022-R/UNMSM
				</span>
			</p>
		</div>
	);
};

export default CronogramaMaestria;
