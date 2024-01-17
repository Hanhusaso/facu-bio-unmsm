import React from 'react';

const ProcesoEvaluacionMaestria = () => {
	return (
		<div>
			<p>
				Para ingresar a los programas de maestrías correspondientes al
				ciclo 2024-I, el postulante deberá atravesar por un proceso de 3
				evaluaciones, las cuales son las siguientes:
			</p>
			<ol className="pl-3">
				<li className="mb-2">
					<p>
						<span className="font-weight-bold">
							Evaluación de la hoja de vida documentada
						</span>{' '}
						del postulante que comprende grados académicos, cursos
						de perfeccionamiento, participación en eventos,
						publicaciones, experiencia docente y/o profesional,
						idiomas y pertenencia a grupos de investigación y
						asociaciones científicas. (Hasta 30.00 puntos)
					</p>
				</li>
				<li className="mb-2">
					<span className="font-weight-bold">
						Examen de conocimiento
					</span>
					, evalúa competencias cognitivas superiores y el
					conocimiento mínimo de nivel A2 del idioma inglés el puntaje
					mínimo para aprobar el examen 13.00 puntos. (Hasta 20.00
					puntos)
				</li>
				<li>
					<span className="font-weight-bold">
						Entrevista personal
					</span>
					, comprende la sustentación de un tema libre de la
					especialidad del postulante y finalmente la ampliación sobre
					los datos que figuran en la hoja de vida. (Hasta 50.00
					puntos)
				</li>
			</ol>
			<p>
				Para alcanzar una vacante la nota mínima aprobatoria es 65.00
				puntos de los 100.00 asignados.
			</p>
		</div>
	);
};

export default ProcesoEvaluacionMaestria;
