import React from 'react';
import Link from 'next/link';
import * as Icon from '../../Icons';

const GuiaProcesoAdmisionMaestria = () => {
	return (
		<div>
			<p className="mb-4">
				El proceso de admisión 2023-I a los programas de maestrías de la
				Unidad de Posgrado de la facultad de Ciencias Biológicas se
				desarrolla según cronograma aprobado por el VRIP.
			</p>
			<div className="position-relative">
				<div className="wrapper-paso">
					<div className="wrapper-icon-paso">
						<Icon.Paso1Icon className="icon-paso" />
					</div>
					<div className="wrapper-text-paso">
						<p className="font-weight-bold">Paso 1:</p>
						<p>
							<span className="font-weight-bold">
								Visualiza el cronograma académico
							</span>{' '}
							con la finalidad de tener conocimiento de la
							programación del proceso de admisión.
						</p>
					</div>
				</div>
				<div className="wrapper-paso">
					<div className="wrapper-icon-paso">
						<Icon.Paso2Icon className="icon-paso" />
					</div>
					<div className="wrapper-text-paso">
						<p className="font-weight-bold">Paso 2:</p>
						<p>
							Luego, debes{' '}
							<span className="font-weight-bold">
								verificar que el programa de interés cuente con
								vacantes
							</span>{' '}
							para el proceso de admisión respectivo.
						</p>
					</div>
				</div>
				<div className="wrapper-paso">
					<div className="wrapper-icon-paso">
						<Icon.Paso3Icon className="icon-paso" />
					</div>
					<div className="wrapper-text-paso">
						<p className="font-weight-bold">Paso 3:</p>
						<p>
							Debes{' '}
							<span className="font-weight-bold">
								cumplir con los requisitos establecidos
							</span>{' '}
							por la Dirección General de Estudios de Posgrado
							(DGEP) para postular a los programas maestrías.
						</p>
					</div>
				</div>
				<div className="wrapper-paso">
					<div className="wrapper-icon-paso">
						<Icon.Paso4Icon className="icon-paso" />
					</div>
					<div className="wrapper-text-paso">
						<p className="font-weight-bold">Paso 4:</p>
						<p>
							Si cumples con los requisitos,{' '}
							<span className="font-weight-bold">
								descarga y llena la
							</span>{' '}
							<a
								className="font-weight-bold"
								href="https://posgrado.unmsm.edu.pe/documentos/resumen-hv-postulante.pdf"
								target="_blank">
								hoja de vida
							</a>
						</p>
					</div>
				</div>
				<div className="wrapper-paso">
					<div className="wrapper-icon-paso">
						<Icon.Paso5Icon className="icon-paso" />
					</div>
					<div className="wrapper-text-paso">
						<p className="font-weight-bold">Paso 5:</p>
						<p>
							<a
								className="font-weight-bold"
								href="https://posgrado.unmsm.edu.pe/pago-inscripcion/"
								target="_blank">
								Realiza el pago de inscripción
							</a>{' '}
							en el Banco de Crédito del Perú o en el Banco de la
							Nación, indicando el n.° de documento de identidad
							del postulante (DNI, carné de extranjería o
							pasaporte).
						</p>
					</div>
				</div>
				<div className="wrapper-paso">
					<div className="wrapper-icon-paso">
						<Icon.Paso6Icon className="icon-paso" />
					</div>
					<div className="wrapper-text-paso">
						<p className="font-weight-bold">Paso 6:</p>
						<p>
							Una vez efectuado el pago por derecho de inscripción
							al número de cuenta de la Universidad Nacional Mayor
							de San Marcos, deberás{' '}
							<span className="font-weight-bold">
								habilitar tu comprobante de pago en la
							</span>{' '}
							<a
								className="font-weight-bold"
								href="https://posgrado.unmsm.edu.pe/admision/inscripcion/"
								target="_blank">
								plataforma virtual
							</a>{' '}
							<span className="font-weight-bold">
								y registrar sus datos.
							</span>{' '}
							Una vez que finalices el registro de datos, se
							generará tu código de postulante.
						</p>
					</div>
				</div>
				<div className="wrapper-paso">
					<div className="wrapper-icon-paso">
						<Icon.Paso7Icon className="icon-paso" />
					</div>
					<div className="wrapper-text-paso">
						<p className="font-weight-bold">Paso 7:</p>
						<p>
							Deberás enviar{' '}
							<span className="font-weight-bold">
								al correo electrónico de la Unidad de Posgrado
								de la Facultad de Ciencias Biológicas
							</span>{' '}
							(
							<span className="color-green-bright font-weight-bold">
								upg.biologia@unmsm.edu.pe
							</span>
							) el expediente completo con los requisitos para
							postular.
						</p>
					</div>
				</div>
				<div className="wrapper-paso">
					<div className="wrapper-icon-paso">
						<Icon.Paso8Icon className="icon-paso" />
					</div>
					<div className="wrapper-text-paso">
						<p className="font-weight-bold">Paso 8:</p>
						<p>
							Tendrás que rendir las evaluaciones para el programa
							de maestría:{' '}
							<span className="font-weight-bold">
								Examen de aptitud virtual, evaluación de
								expediente y entrevista personal.
							</span>
						</p>
					</div>
				</div>
				<div className="wrapper-paso">
					<div className="wrapper-icon-paso">
						<Icon.Paso9Icon className="icon-paso" />
					</div>
					<div className="wrapper-text-paso">
						<p className="font-weight-bold">Paso 9:</p>
						<p>
							Revisa la{' '}
							<span className="font-weight-bold">
								relación de postulantes admitidos que será
								publicada en el portal web
							</span>{' '}
							de la Unidad de Posgrado de la Facultad de Ciencias
							Biológicas y enviada al correo electrónico de cada
							ingresante.
						</p>
					</div>
				</div>
			</div>
			<div className="info-box mb-4">
				<p className="mb-0">
					Se recomienda esperar 6 horas luego de haber realizado
					cualquier pago, para que figure en el sistema.
				</p>
			</div>
			{/* <p className="font-weight-bold">Más información</p>
			<p>
				<span>
					<Icon.globoIcon className="mr-2" />
				</span>
				<span className="font-weight-bold">Sitio web:</span>{' '}
				<Link href="/formacion-academica/posgrado">
					<a>
						https://biologia.unmsm.edu.pe/formacion-academica/posgrado
					</a>
				</Link>
			</p> */}
			<p>
				<span>
					<Icon.CorreoIcon className="mr-2" />
				</span>
				<span className="font-weight-bold">Correo:</span>{' '}
				upg.biologia@unmsm.edu.pe
			</p>
			<p>
				<span>
					<Icon.lugarIcon className="mr-2" />
				</span>
				<span className="font-weight-bold">Dirección:</span> Escuela de
				Posgrado - Sede Central, Ciudad Universitaria, Lima
			</p>
			<p>
				<span>
					<Icon.telefonoIcon className="mr-2" />
				</span>
				<span className="font-weight-bold">Teléfono: </span>990 090 886
				(Sra. Dora Aguilar)
			</p>
		</div>
	);
};

export default GuiaProcesoAdmisionMaestria;
