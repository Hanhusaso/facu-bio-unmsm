import React from 'react';
import * as AiIcons from 'react-icons/ai';

const PagoInscripcionMaestria = () => {
	return (
		<div>
			<div className="d-flex">
				<AiIcons.AiOutlineInfoCircle className="icon mr-1" />
				<p>
					<b>Observación:</b> Recuerde que antes de realizar el pago
					por derecho de inscripción debe verificar que el programa de
					interés cuente con vacantes disponibles y estar dentro del
					cronograma establecido en el presente proceso de admisión
				</p>
			</div>
			<p className="title">Banco de Crédito del Perú</p>
			<p>
				A continuación detallamos en número de Cuenta Corriente de la
				UNMSM en el Banco de Crédito del Perú, para depósitos en
				ventanilla, cajero, agente o transferencia interbancaria:
			</p>
			<p className="font-weight-bold text-center">
				Cta. Cte. n.° 191-0215772014 | CCI n.° 002-191-00021577201451
			</p>
			<div className="table-responsive mb-3">
				<table className="last-green bordered m-auto">
					<tbody>
						<tr>
							<td>
								Bachiller UNMSM, personal administrativo de la
								UNMSM, docente de Universidades nacionales y
								Magisterio Nacionales
							</td>
							<td className="font-weight-bold text-center">
								S/.&nbsp;350.00
							</td>
						</tr>
						<tr>
							<td>
								Otros postulantes (Graduados de otras
								universidades)
							</td>
							<td className="font-weight-bold text-center">
								S/.&nbsp;450.00
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<p className="title">Banco de la Nación</p>
			<p>
				Debe indicar que realizará un depósito al n.° de TRANSACCIÓN
				9650 + el código que corresponda; así como el n.° DNI, carné de
				extranjería o pasaporte del postulante.
			</p>
			<div className="table-responsive mb-3">
				<table className="last-green bordered m-auto">
					<tbody>
						<tr>
							<td>
								Bachiller UNMSM, personal administrativo de la
								UNMSM, docente de Universidades nacionales y
								Magisterio Nacionales
							</td>
							<td className="font-weight-bold text-center">
								S/.&nbsp;350.00
								<br />
								<span className="title">
									Transacción: 9650 + código: 9700
								</span>
							</td>
						</tr>
						<tr>
							<td>
								Otros postulantes (Graduados de otras
								universidades)
							</td>
							<td className="font-weight-bold text-center">
								S/.&nbsp;450.00
								<br />
								<span className="title">
									Transacción: 9650 + código: 9701
								</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PagoInscripcionMaestria;
