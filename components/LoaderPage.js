import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoaderPage = () => {
	console.log("Renderinzando el Loader Page");
	return (
		<div className="wrapper-loader-page">
			<div>
				<div className="mb-3 text-center">
					<motion.img
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ x: 1000 }}
						src="/assets/img/fondo-carga/logo_biologia.svg"
						alt=""
					/>
				</div>
				<div className="text-white text-center mb-3">
					Bienvenidos a la
					<br />
					<b>
						Facultad de
						<br />
						Ciencias Biológicas
					</b>
					<br />
					{/* <b>Universidad Nacional Mayor de San Marcos</b> */}
					{/* <b> de la UNMSM</b> */}
					<b>UNMSM</b>
				</div>
				<div className="d-flex justify-content-center">
					<div className="ball-pulse">
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoaderPage;
