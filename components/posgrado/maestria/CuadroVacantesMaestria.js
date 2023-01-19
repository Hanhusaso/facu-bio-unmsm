import React from 'react';

const CuadroVacantesMaestria = () => {
	return (
		<div>
			<p className="mb-4">
				El proceso de admisión a los programas de maestrías de la Unidad
				de Posgrado de la facultad de Ciencias Biológicas se desarrolla
				semestralmente, según cronograma aprobado por el VRIP. A
				continuación, el cuadro de vacantes correspondiente al ciclo
				2023-I:
			</p>
			<div className="table-responsive mb-3">
				<table className="striped m-auto table-cuadro-vacante">
					<thead>
						<tr>
							<th className="text-center">Programas</th>
							<th className="text-center">Vacantes</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								Botánica Tropical con mención en Taxonomía y
								Sistemática Evolutiva
							</td>
							<td className="text-center">14</td>
						</tr>
						<tr>
							<td>
								Botánica Tropical con mención en Botánica
								Económica
							</td>
							<td className="text-center">14</td>
						</tr>
						<tr>
							<td>
								Botánica Tropical con mención en Etnobotánica
							</td>
							<td className="text-center">14</td>
						</tr>
						<tr>
							<td>
								Ecosistemas y recursos acuáticos con mención en
								ecosistemas acuático
							</td>
							<td className="text-center">12</td>
						</tr>
						<tr>
							<td>
								Ecosistemas y recursos acuáticos con mención en
								Evaluación y Manejo de Recursos Pesqueros
							</td>
							<td className="text-center">12</td>
						</tr>
						<tr>
							<td>
								Ecosistemas y recursos acuáticos con mención en
								Acuicultura
							</td>
							<td className="text-center">12</td>
						</tr>
						<tr>
							<td>
								Zoología con mención en Sistemática y Evolución
							</td>
							<td className="text-center">12</td>
						</tr>
						<tr>
							<td>
								Zoología con mención en Ecología y Conservación
							</td>
							<td className="text-center">12</td>
						</tr>
						<tr>
							<td>Biología molecular</td>
							<td className="text-center">29</td>
						</tr>
						<tr>
							<td>Biodiversidad y gestión en ecosistemas</td>
							<td className="text-center">17</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CuadroVacantesMaestria;
