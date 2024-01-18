import React from 'react';

const ProcesoEvaluacionDoctorado = () => {
	return (
		<div>
			<p>
				Para ingresar a al programa de doctorado, el postulante deberá
				atravesar por las siguientes 3 etapas de evaluación:
			</p>
			<ol className="pl-3">
				<li className="mb-2">
					<span className="font-weight-bold">
						1. Evaluación de la hoja de vida documentada
					</span>{' '}
					del postulante que comprende grados académicos, cursos de
					perfeccionamiento y/o capacitación, participación en
					eventos, publicaciones, experiencia docente y/o profesional,
					idiomas y pertenencia a grupos de investigación y
					asociaciones científicas. (Hasta 30.00 puntos).
				</li>
				<li className="mb-2">
					<span className="font-weight-bold">
						Examen de conocimiento
					</span>
					, evalúa competencias cognitivas superiores y el
					conocimiento mínimo de nivel A2 del idioma inglés el puntaje
					mínimo para aprobar el examen 13.00 puntos. (Hasta 20.00
					puntos).
				</li>
				<li>
					<span className="font-weight-bold">
						Entrevista personal
					</span>
					, el postulante deberá presentar un proyecto de
					investigación con máximo 5 páginas sobre un tema de su
					interés o referido a las líneas de investigación de la
					Universidad (Hasta 50.00 puntos). El puntaje mínimo para
					aprobar el proyecto de investigación es 32.50.
				</li>
			</ol>
			<p>
				Para alcanzar una vacante la nota mínima aprobatoria es 65.00
				puntos de los 100.00 asignados.
			</p>
		</div>
	);
};

export default ProcesoEvaluacionDoctorado;
