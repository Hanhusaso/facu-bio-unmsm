import React, { useEffect } from 'react';
import Layout from '../../../../components/Layout';
import NoticiasExtra from '../../../../components/NoticiasExtra';

import { Row, Col, Container, Breadcrumb } from 'react-bootstrap';
import Link from 'next/link';

import { useWindowSize } from '../../../../utils/useWindowSize';
import SliderImagenes from '../../../../components/sliders/SliderImagenes';

const index = () => {
	const { width, height } = useWindowSize();

	return (
		<>
			<Layout title="Laboratorio de Equipamiento Especializado">
				<div>
					<div>
						<Container>
							<Row>
								<Col md="1"></Col>
								<Col>
									<Breadcrumb>
										<li className="breadcrumb-item">
											<Link href="/">
												<a role="button">Inicio</a>
											</Link>
										</li>
										<li className="breadcrumb-item">
											<Link href="/comunidad/conoce-la-facultad">
												<a role="button">
													Comunidad: Conoce la
													facultad
												</a>
											</Link>
										</li>
										<Breadcrumb.Item active>
											Laboratorio de Equipamiento
											Especializado
										</Breadcrumb.Item>
									</Breadcrumb>
								</Col>
								<Col md="1"></Col>
							</Row>
						</Container>
					</div>
					<div>
						<Container className="mb-3">
							<Row>
								<Col md="1"></Col>
								<Col>
									<div className="title-page text-center">
										Laboratorio de Equipamiento
										Especializado
									</div>
								</Col>
								<Col md="1"></Col>
							</Row>
						</Container>
					</div>
					{/* IMAGE */}
					<div className="mb-4">
						<img
							className="w-100"
							src="/assets/img/comunidad/laboratorio-especializado/banner-laboratorio-equipos-especializados-ciencias-biologicas-unmsm.png"
							alt=""
						/>
					</div>

					<div>
						<Container>
							<Row>
								<Col md="1" lg="1"></Col>
								<Col md="7" lg="8">
									<p>
										<strong>Presentaci&oacute;n</strong>
									</p>
									<p>
										<span style={{ fontWeight: '400' }}>
											El primer laboratorio del
											Per&uacute; especializado en brindar
											servicios de microscop&iacute;a
											electr&oacute;nica de barrido
											MEB-SEM de muestras
											biol&oacute;gicas,
											liofilizaci&oacute;n y
											cromatograf&iacute;a l&iacute;quida
											de alto rendimiento (HPLC); a
											investigadores, empresarios y
											usuarios en general para el
											desarrollo exitoso de sus
											experimentos.
										</span>
									</p>
									<p>
										<span style={{ fontWeight: '400' }}>
											El laboratorio cuenta con equipos de
											primera l&iacute;nea y soporte
											t&eacute;cnico cient&iacute;fico
											calificado para brindar el
											asesoramiento necesario, si se
											requiere, a los usuarios que
											reci&eacute;n se inician en el campo
											de la
											investigaci&oacute;n,especialmente
											los tesistas de pregrado. Trabaja
											adem&aacute;s con procedimientos
											validados y estandarizados para
											brindar resultados reproducibles en
											cualquier laboratorio.
										</span>
									</p>
									<div>
										<a
											className="font-weight-bold"
											style={{ cursor: 'pointer' }}
											onClick={() => {
												window.open(
													'https://drive.google.com/file/d/1Trvv5JUixj9NkNLS92EJ2YX44Uq_kjqs/view?usp=sharing',
													'_blank'
												);
											}}>
											Clic aquí{' '}
										</a>
										<span style={{ fontWeight: '600' }}>
											para descargar el brochure
											informativo.
										</span>
									</div>
									<p className="mt-2">
										<strong>Equipos</strong>
									</p>
									<p>
										<strong>
											Microscopio Electr&oacute;nico de
											Barrido MEB-SEM
										</strong>
									</p>
									<p>
										<span style={{ fontWeight: '400' }}>
											Tambi&eacute;n conocida por su
											nombre en ingl&eacute;s c&oacute;mo
											&ldquo;SEM&rdquo;, permite la
											r&aacute;pida y precisa respuesta a
											la necesidad de los investigadores
											de
										</span>
										<strong>
											{' '}
											caracterizar la estructura
											superficial de una variedad de
											muestras.
										</strong>
										<span style={{ fontWeight: '400' }}>
											{' '}
											Por ejemplo, microorganismos,
											artr&oacute;podos, fibras textiles,
											principios bioactivos, piezas
											dentarias, part&iacute;culas
											f&oacute;siles, suelos, entre otros.
											El laboratorio cuenta con el
											detector de electrones
											secundarios,tambi&eacute;n conocido
											como detector ETD.
										</span>
									</p>
									<p>
										<span style={{ fontWeight: '400' }}>
											Tiene un poder de resoluci&oacute;n
											mayor a los 100 000 aumentos.
										</span>
									</p>
									<div className="position-relative">
										<SliderImagenes
											imagenes={[
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/radula_laboratorio_de_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_5f8414a7c0.png',
													descripcion:
														'Rádula | 800 X',
												},
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/diatomea_laboratorio_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_d2b1539ccb.png',
													descripcion:
														'Diatomea | 7206 X',
												},
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/actinomicetos_laboratorio_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_c56026d270.png',
													descripcion:
														'Actinomicetos | 6000 X',
												},
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/calculo_renal_laboratorio_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_893a4ddd7b.png',
													descripcion:
														'Cálculo Renal | 600 X',
												},
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/trematodo_laboratorio_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_8e727a130e.png',
													descripcion:
														'Tremátodo | 100 X',
												},
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/prismas_dentales_laboratorio_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_0c541bf6da.png',
													descripcion:
														'Prismas dentales | 5000 X',
												},
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/diatomita_laboratorio_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_3402d45c7c.png',
													descripcion:
														'Diatomita | 5000 X',
												},
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/levaduras_laboratorio_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_4faffc7ed1.png',
													descripcion:
														'Levaduras | 4000 X',
												},
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/acaro_laboratorio_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_5bf8a79368.png',
													descripcion:
														'Ácaro | 148 X',
												},
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/epitelio_tejido_conjuntivo_laboratorio_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_2451446473.png',
													descripcion:
														'Epitelio de tejido conjuntivo | 2000 X',
												},
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/estambre_laboratorio_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_d5dd1f0955.png',
													descripcion:
														'Estambre | 150 X',
												},
												{
													img: 'https://biologia-unmsm.s3.us-east-2.amazonaws.com/estigma_laboratorio_equipamiento_especializado_facultad_ciencias_biologicas_unmsm_min_8901d03411.png',
													descripcion:
														'Estigma|150 X',
												},
											]}
										/>
									</div>
									<p>
										<strong>Metalizador</strong>
									</p>
									<p>
										Recubre las muestras con oro (Au) por un
										proceso de ionizado a alto vac&iacute;o;
										se utiliza para muestras que requieran
										microscop&iacute;a electr&oacute;nica de
										barrido en alta resoluci&oacute;n. Este
										equipo es imprescindible para muestras
										no conductoras, como las muestras
										biol&oacute;gicas o aquellas que
										contengan alta humedad.
									</p>
									<p>
										<img
											style={{
												display: 'block',
												marginLeft: 'auto',
												marginRight: 'auto',
											}}
											src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/metalizador_cae9a37b6f.png"
											alt=""
											width="347"
											height="260"
										/>
									</p>
									<p>
										<strong>
											Secador a punto cr&iacute;tico
										</strong>
									</p>
									<p>
										<span style={{ fontWeight: 400 }}>
											Permite el desecado de muestras
											intercambiando el l&iacute;quido
											intermedio (etanol, metanol,&nbsp;
										</span>
										<span style={{ fontWeight: 400 }}>
											acetona) por CO2. De esa forma se
											asegura el cuidado de la
											ultraestructura de las muestras,
											para que permanezcan intactas
											durante el procesamiento al
											vac&iacute;o.&nbsp;
										</span>
										<span style={{ fontWeight: '400' }}>
											Normalmente, se aplica para muestras
											biol&oacute;gicas (hojas,
											ra&iacute;ces, levaduras, bacterias,
											artr&oacute;podos, etc).
										</span>
									</p>
									<p>
										<img
											style={{
												display: 'block',
												marginLeft: 'auto',
												marginRight: 'auto',
											}}
											src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/desecado_punto_critico_7e34066063.png"
											alt=""
											width="387"
											height="290"
										/>
									</p>
									<p>
										<strong>Ultracongelador</strong>
									</p>
									<p>
										<span style={{ fontWeight: 400 }}>
											Mantiene las muestras hasta
											-80&deg;C. Ideal para el
											almacenamiento de muestras durante
											largos periodos para permitir su
											conservaci&oacute;n.
										</span>
									</p>
									<p>
										<img
											style={{
												display: 'block',
												marginLeft: 'auto',
												marginRight: 'auto',
											}}
											src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/ultracongelador_unmsm_facultad_biologia_44d14822dd.png"
											alt=""
											width="324"
											height="432"
										/>
									</p>
									<p>
										<strong>Liofilizador</strong>
									</p>
									<p>
										<span style={{ fontWeight: 400 }}>
											Permite la deshidrataci&oacute;n de
											muestras a una presi&oacute;n y
											temperatura variable, sin que se
											alteren sus propiedades. Mantiene
											los principios activos, como: suero
											bovino, alb&uacute;mina, levaduras
											de pan, frutos, mezclas, etc.
										</span>
									</p>
									<p>
										<img
											style={{
												display: 'block',
												marginLeft: 'auto',
												marginRight: 'auto',
											}}
											src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/liofilizador_bcb7e5261c.png"
											alt=""
											width="365"
											height="384"
										/>
									</p>
									<p>
										<strong>
											Equipo de cromatograf&iacute;a
											L&iacute;quida de Alto Rendimiento
											(HPLC)*
										</strong>
									</p>
									<p>
										<span style={{ fontWeight: 400 }}>
											Permite separar distintas sustancias
											presentes en una muestra,
											permitiendo as&iacute; la
											identificaci&oacute;n y posterior
											cuantificaci&oacute;n. Por sus
											sofisticadas caracter&iacute;sticas
											es muy &uacute;til para el estudio
											de f&aacute;rmacos,
											biomol&eacute;culas, vitaminas, etc.
										</span>
									</p>
									<p>
										<em>
											<span style={{ fontWeight: 400 }}>
												*Este equipo se encuentra
												actualmente en mantenimiento
											</span>
										</em>
									</p>
									<p>
										<img
											style={{
												display: 'block',
												marginLeft: 'auto',
												marginRight: 'auto',
											}}
											src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/equipo_cromatografia_liquida_alto_rendimiento_3ce1541916.png"
											alt=""
											width="409"
											height="273"
										/>
									</p>
									<p>
										<strong>
											Microscopio de Epifluorescencia
										</strong>
									</p>
									<p>
										<span style={{ fontWeight: 400 }}>
											Equipo utilizado para la
											observaci&oacute;n de partes
											espec&iacute;ficas de c&eacute;lulas
											o tejidos vivos con la ayuda de
											fluorocromos.
										</span>
									</p>
									<p>
										<img
											style={{
												display: 'block',
												marginLeft: 'auto',
												marginRight: 'auto',
											}}
											src="https://biologia-unmsm.s3.us-east-2.amazonaws.com/microscopio_epifluorescencia_min_aa8254f0ea.png"
											alt=""
											width="404"
											height="290"
										/>
									</p>
									<p className="c4">
										<strong>
											<span className="c14">
												Contacto para consultas y
												pedidos
											</span>
										</strong>
									</p>
									<p className="c4">
										<span className="c14">
											Tito Libio S&aacute;nchez
										</span>
									</p>
									<p className="c4">
										<span className="c14">
											Celular: 950674116 | Correo
											elect&oacute;nico:&nbsp;
										</span>
										<span className="c34">
											tsanchezr@unmsm.edu.pe
										</span>
										<span className="c14">,&nbsp;</span>
										<span className="c34">
											lee.fcb.unmsm@gmail.com
										</span>
									</p>
									<p className="c4">
										<span className="c14">
											Victor Alejandro Barnechea
										</span>
									</p>
									<p className="c4">
										<span className="c14">
											Celular: 945007001 | Correo
											electr&oacute;nico:&nbsp;
										</span>
										<span className="c34">
											vbarrenecheal@unmsm.edu.pe
										</span>
										<span className="c14">,&nbsp;</span>
										<span className="c34">
											lee.fcb.unmsm@gmail.com
										</span>
										<span className="c6">&nbsp;</span>
									</p>
								</Col>
								<Col md="3" lg="2">
									<aside>
										<div className="block-interest-links mb-3">
											<p className="font-weight-bold mb-2 text-center">
												¿Te gustaría participar en un
												grupo de investigación?
											</p>
											<ul className="nav flex-column">
												<li className="mb-2 text-center font-weight-bold">
													<Link href="/investigacion/grupos-investigacion">
														<a>Infórmate aquí</a>
													</Link>
												</li>
											</ul>
										</div>
										<NoticiasExtra idNoticiaDetalle={''} />
									</aside>
								</Col>
								<Col md="1" lg="1"></Col>
							</Row>
						</Container>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default index;
