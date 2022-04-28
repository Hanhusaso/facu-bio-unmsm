import React, { useState } from 'react';
import Image from 'next/image';
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineClose } from 'react-icons/ai';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';
import { Modal } from 'react-bootstrap';
const SliderImagenes = ({ imagenes }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [contenido, setContenido] = useState('');
	return (
		<>
			<Swiper
				spaceBetween={20}
				slidesPerView={3}
				navigation
				modules={[Navigation]}
				style={{ marginBottom: '20px', width: '90%' }}>
				{imagenes.map((item) => (
					<SwiperSlide key={item.descripcion}>
						<div
							style={{ cursor: 'pointer' }}
							onClick={() => {
								setContenido({ ...item });
								handleShow();
							}}>
							<div style={{ width: '100%' }}>
								<Image
									width={1080}
									height={1080}
									layout="responsive"
									src={item.img}
								/>
							</div>
							<p className="text-center">{item.descripcion}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<Modal show={show} onHide={handleClose} centered>
				<div
					className="d-flex justify-content-end p-2"
					style={{ cursor: 'pointer' }}
					onClick={handleClose}>
					<AiOutlineClose />
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<div
						style={{
							width: '90%',
							paddingTop: '10px',
						}}>
						<Image
							width={1080}
							height={1080}
							layout="responsive"
							src={contenido.img}
						/>
					</div>
					<p
						style={{
							paddingTop: '10px',
						}}>
						{contenido.descripcion}
					</p>
				</div>
			</Modal>
		</>
	);
};

export default SliderImagenes;
