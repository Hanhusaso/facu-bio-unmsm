import React from 'react';

const ProcesoEvaluacionDoctorado = () => {
	return (
		<div>
			<p>
				Para ingresar a al programa de doctorado, el postulante deberá
				atravesar por las siguientes 2 etapas de evaluación:
			</p>
			<ol className="pl-3">
				<li className="mb-2">
					<span className="font-weight-bold">
						Evaluación de la hoja de vida:
					</span>{' '}
					El jurado calificador evalúa la hoja de vida de manera
					integral y asigna un puntaje según cada rubro. La hoja de
					vida se presenta según el formato de los requisitos. Este
					debe ser documentado, foliado y ordenado. Tiene un peso del
					40 % en la evaluación final.
				</li>
				<li>
					<span className="font-weight-bold">
						Presentación de un proyecto de investigación
					</span>{' '}
					en un máximo de 5 páginas, sobre un tema propio del
					postulante o de los propuestos por la Universidad, y
					sustentar oralmente ante el jurado examinador. Este proyecto
					tendrá un puntaje máximo de 60 % de la evaluación total.
				</li>
			</ol>
		</div>
	);
};

export default ProcesoEvaluacionDoctorado;
