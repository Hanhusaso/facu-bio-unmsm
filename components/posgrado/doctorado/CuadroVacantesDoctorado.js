import React from 'react';

const CuadroVacantesDoctorado = () => {
	return (
		<div>
			<p className="mb-4">
				El proceso de admisión al programa de doctorado de la Unidad de
				Posgrado de la facultad de Ciencias Biológicas se desarrolla
				semestralmente, según cronograma aprobado por el VRIP. A
				continuación, el cuadro de vacantes correspondiente al ciclo
				2023-I:
			</p>
			<div className="table-responsive mb-3">
				<table className="striped m-auto table-cuadro-vacante">
					<thead>
						<tr>
							<th className="text-center">Programa</th>
							<th className="text-center">Vacantes</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Ciencias Biológicas</td>
							<td className="text-center">10</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CuadroVacantesDoctorado;
