import React from 'react';

const CronogramaPosgrado = () => {
	return (
		<div>
			<p>
				El proceso de admisión a los programas de doctorado de la Unidad
				de Posgrado de la facultad de Ciencias Biológicas se desarrolla
				semestralmente según cronograma aprobado por el VRIP.
			</p>
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
							<td>
								Inscripción de postulantes y envío de expediente
							</td>
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
							<td>
								Sustentación del proyecto de investigación (solo
								doctorado)
							</td>
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
			<p className="title-dark">
				Cronograma de actividades académicas 2021 - I
			</p>
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
							<td>
								Matrícula ingresantes (Maestría o Doctorado)
							</td>
							<td>Del 29 de marzo al 02 de abril</td>
						</tr>
						<tr>
							<td>
								Matrícula regular (ingresantes 2021 y
								anteriores)
							</td>
							<td>Del 22 al 26 de marzo</td>
						</tr>
						<tr>
							<td>Clases</td>
							<td>
								Inicio: 05 de abril
								<br />
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
								<br />
								S/. 3400.00
							</td>
							<td>Cubrir vacante</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CronogramaPosgrado;
