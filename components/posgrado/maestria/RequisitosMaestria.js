import React from 'react';
import * as AiIcons from 'react-icons/ai';

const RequisitosMaestria = () => {
	return (
		<div>
			<div className="info-box mb-4">
				<div className="d-flex">
					<AiIcons.AiOutlineInfoCircle className="icon mr-1 position-relative" />
					<p>
						<b>Observación</b>
					</p>
				</div>
				<p className="mb-0">
					El envío del expediente completo se realiza luego de
					efectuar el pago por derecho de inscripción, haber
					registrado su inscripción vía internet y obtener su código
					de postulante.
				</p>
			</div>
			<p>
				El postulante a los programas de maestrías deberá enviar un
				correo electrónico{' '}
				<span className="color-green-bright font-weight-bold">
					(upg.biologia@unmsm.edu.pe)
				</span>{' '}
				a la Unidad de Posgrado de la Facultad de Ciencias Biológica el
				expediente completo con los siguientes documentos:
			</p>
			<ol className="pl-3">
				<li className="mb-2">
					<span className="color-green-bright font-weight-bold">
						Resumen de la hoja de vida
					</span>{' '}
					del postulante (documentado, foliado y ordenado de acuerdo a
					los rubros del formato).
				</li>
				<li className="mb-2">
					<span className="color-green-bright font-weight-bold">
						Constancia de inscripción en línea del grado de
						Bachiller emitido por SUNEDU
					</span>{' '}
					o la copia del diploma de grado de Bachiller fedateado por
					la universidad de procedencia (*).
				</li>
				<li className="mb-2">
					Copia simple del documento de identidad (DNI, carné de
					extranjería o pasaporte).
				</li>
				<li className="mb-2">
					Recibo de pago por derecho de inscripción efectuado en el
					Banco de Crédito del Perú o en el Banco de la Nación.
				</li>
				<li className="mb-2">
					Otro documento que la Unidad de Posgrado considere con
					relación al perfil de ingreso al programa que postula.
				</li>
			</ol>
			<p>
				(*) Los postulantes que obtuvieron el grado de Bachiller en la
				Universidad Nacional Mayor de San Marcos solo presentarán copia
				simple.
			</p>
			<p>
				En el caso de graduados en el extranjero, los grados y títulos
				deberán estar revalidados o reconocidos según las normas
				vigentes.
			</p>
		</div>
	);
};

export default RequisitosMaestria;
