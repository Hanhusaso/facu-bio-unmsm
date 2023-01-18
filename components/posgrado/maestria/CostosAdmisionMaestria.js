import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';

const CostosAdmisionMaestria = () => {
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
					Recuerde que antes de realizar el pago por derecho de
					inscripción debes verificar que el programa de interés
					cuente con vacantes disponibles y dentro del cronograma
					establecido en el presente proceso de admisión.
				</p>
			</div>
			<p className="title-dark">
				Bancos autorizados para realizar el pago por derecho de
				inscripción:
			</p>

			<ul className="pl-4">
				<li>
					Banco de Crédito del Perú{' '}
					<a href="https://www.viabcp.com/" target="_blank">
						<HiIcons.HiExternalLink className="ml-2 color-green position-relative bot-1px" />
					</a>
				</li>
			</ul>
			<p>
				A continuación detallamos el número de Cuenta Corriente de la
				UNMSM en el Banco de Crédito del Perú, para depósitos en
				ventanilla, cajero, agente o transferencia interbancaria:
			</p>
			<p className="font-weight-bold text-center mb-4">
				Cta. Cte. n.° 191-0215772014 | CCI n.° 002-191-00021577201451
			</p>
			<div className="mb-4">
				<div className="d-block d-sm-flex justify-content-center mb-3">
					<div className="card costo mb-3 mb-sm-0 mx-0 mx-sm-2">
						<p className="mb-3 title-green">S/. 350.00</p>
						{/* <p className="font-weight-bold mb-3">Código: 102-010</p> */}
						<p className="mb-0">
							<span className="font-weight-bold">Para:</span>{' '}
							Bachiller UNMSM, personal administrativo de la
							UNMSM, docente de Universidades Nacionales y
							Magisterio Nacional.
						</p>
					</div>
					<div className="card costo mb-3 mb-sm-0 mx-0 mx-sm-2">
						<p className="mb-3 title-green">S/. 450.00</p>
						{/* <p className="font-weight-bold mb-3">Código: 207-010</p> */}
						<p className="mb-0">
							<span className="font-weight-bold">Para:</span>{' '}
							Otros postulantes (graduados de otras
							universidades).
						</p>
					</div>
				</div>
				<div>
					<p className="sub-text mb-0 text-center">
						*Los costos corresponden al proceso de admisión 2023-I,
						sujetos a variaciones.
					</p>
				</div>
			</div>
			<ul className="pl-4">
				<li>
					Banco de la Nación{' '}
					<a href="https://www.bn.com.pe/" target="_blank">
						<HiIcons.HiExternalLink className="ml-2 color-green position-relative bot-1px" />
					</a>
				</li>
			</ul>
			<p className="mb-4">
				Debes indicar que realizarás un depósito al n.° de TRANSACCIÓN
				9650 + el código que corresponda; así como el n.° DNI, carné de
				extranjería o pasaporte del postulante.
			</p>
			<div className="mb-4">
				<div className="d-block d-sm-flex justify-content-center mb-3">
					<div className="card costo mb-3 mb-sm-0 mx-0 mx-sm-2">
						<p className="mb-3 title-green">S/. 350.00</p>
						<p className="font-weight-bold mb-3">
							Transacción: 9650 + código: 9700
						</p>
						<p className="mb-0">
							<span className="font-weight-bold">Para:</span>{' '}
							Bachiller UNMSM, personal administrativo de la
							UNMSM, docente de Universidades nacionales y
							Magisterio Nacional.
						</p>
					</div>
					<div className="card costo mb-3 mb-sm-0 mx-0 mx-sm-2">
						<p className="mb-3 title-green">S/. 450.00</p>
						<p className="font-weight-bold mb-3">
							Transacción: 9650 + código: 9701
						</p>
						<p className="mb-0">
							<span className="font-weight-bold">Para:</span>{' '}
							Otros postulantes (graduados de otras
							universidades).
						</p>
					</div>
				</div>
				<div>
					<p className="sub-text mb-0 text-center">
						*Los costos corresponden al proceso de admisión 2023-I,
						sujetos a variaciones.
					</p>
				</div>
			</div>
			<ul className="pl-4">
				<li>
					Págalo.pe{' '}
					<a href="https://www.pagalo.pe/" target="_blank">
						<HiIcons.HiExternalLink className="ml-2 color-green position-relative bot-1px" />
					</a>
				</li>
			</ul>
			<p className="mb-4">
				A continuación, te brindamos los códigos de pago para los
				programas de maestría:
			</p>
			<div className="mb-4">
				<div className="table-responsive mb-3">
					<table className="striped m-auto table-cuadro-vacante">
						<thead>
							<tr>
								<th className="text-center">Código</th>
								<th className="text-center">Descripción</th>
								<th className="text-center">Monto</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="text-center">09700</td>
								<td>Epg-Maestría-Inscripción</td>
								<td className="text-center">S/ 350</td>
							</tr>
							<tr>
								<td className="text-center">09701</td>
								<td>Epg-Maestría-Otros</td>
								<td className="text-center">S/ 450</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>
					<p className="sub-text mb-0 text-center">
						*Los costos corresponden al proceso de admisión 2023-I,
						sujetos a variaciones.
					</p>
				</div>
			</div>
			<p className="mb-4">
				En caso de tener dudas con el trámite puedes revisar el
				siguiente tutorial.{' '}
				<a href="https://youtu.be/1pQDLq1Rv0Y" target="_blank">
					tutorial
				</a>
				.
			</p>
			<p className="mb-4 title-dark-15">
				Aspectos a considerar en el Banco de la Nación:
			</p>
			<ol className="pl-3">
				<li className="mb-3">
					El pago por derecho de inscripción se realizará indicando el
					número del{' '}
					<span className="font-weight-bold">DNI del postulante</span>
					.
				</li>
				<li className="mb-3">
					En el caso de postulantes del extranjero, deberán indicar el
					número de su{' '}
					<span className="font-weight-bold">
						carné de extranjería o pasaporte.
					</span>
				</li>
				<li className="mb-3">
					Verificar que el número del{' '}
					<span className="font-weight-bold">
						DNI, carné de extranjería o pasaporte
					</span>{' '}
					del postulante coincida con el n.° indicado en el recibo de
					pago antes de retirarse de la ventanilla.
				</li>
				<li className="mb-4">
					Cualquier error es{' '}
					<span className="font-weight-bold">
						responsabilidad del postulante
					</span>
					.
				</li>
			</ol>
			<div className="info-box mb-4">
				<p className="mb-0">
					Las solicitudes de devolución de dinero del pago por derecho
					de inscripción se tramitan una vez finalizado el presente
					proceso de admisión, si el programa ha sido cancelado.
				</p>
			</div>
		</div>
	);
};

export default CostosAdmisionMaestria;
