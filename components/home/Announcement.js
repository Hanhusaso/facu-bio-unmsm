import React from 'react';
import { FaBell } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export const Announcement = ({ setIsOpenHeader }) => {
	return (
		<div className="announcement-wrapper">
			<div className="announcement">
				<div className="announcement-content">
					<span className="icon-ad mb-2 mb-md-0 d-block">
						<FaBell />
					</span>
					<div>
						<p className="mb-3 mb-md-0">
							<span className="font-weight-bold">
								Postula a una beca
							</span>{' '}
							para estudiar nuestro{' '}
							<span className="font-weight-bold">
								Doctorado en Ciencias Biológicas
							</span>
						</p>
					</div>
					<div>
						<a
							href="https://becasdoctorado.biologia.unmsm.edu.pe/"
							target="_blank"
							className="link-button"
							rel="noopener noreferrer"
						>
							Más información
						</a>
					</div>
				</div>
				<button
					className="close-button"
					onClick={() => setIsOpenHeader(false)}
				>
					<IoClose size={16} />
				</button>
			</div>
		</div>
	);
};
