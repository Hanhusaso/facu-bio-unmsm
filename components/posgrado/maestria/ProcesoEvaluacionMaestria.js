import React from 'react';

const ProcesoEvaluacionMaestria = () => {
	return (
		<div>
			<p>
				Para ingresar a los programas de maestrías correspondientes al
				ciclo 2023-I, el postulante deberá atravesar por un proceso de 3
				evaluaciones, las cuales son las siguientes:
			</p>
			<ol className="pl-3">
				<li className="mb-2">
					<p>
						<span className="font-weight-bold">
							Examen virtual:
						</span>{' '}
						Evalúa competencias cognitivas superiores y conocimiento
						básico del idioma inglés. Tiene un peso de 50 % en la
						evaluación final y es de carácter eliminatorio. El
						puntaje mínimo para aprobar el examen de aptitud, en su
						modalidad virtual, es de 27.5 puntos. El temario
						comprenderá los siguientes rubros:
					</p>
					<ul className="chevron-green-dark">
						<li>Cultura general (10 puntos).</li>
						<li>Conocimientos básicos en el área (40 puntos).</li>
					</ul>
				</li>
				<li className="mb-2">
					<span className="font-weight-bold">
						Evaluación de la hoja de vida:
					</span>{' '}
					El jurado calificador evalúa la hoja de vida de manera
					integral y asigna un puntaje, según cada rubro. La hoja de
					vida se presenta según el formato de los requisitos. Este
					debe ser documentado, foliado y ordenado. Tiene un peso del
					20 % en la evaluación final.
				</li>
				<li>
					<span className="font-weight-bold">
						Entrevista virtual:
					</span>{' '}
					La entrevista se llevará a cabo mediante la plataforma
					Google Meet. Tiene un peso del 30 % en la evaluación final.
				</li>
			</ol>
		</div>
	);
};

export default ProcesoEvaluacionMaestria;
