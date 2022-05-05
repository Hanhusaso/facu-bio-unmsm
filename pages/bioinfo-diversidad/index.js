import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const index = () => {
	// const router = useRouter();

	// useEffect(() => {
	// 	router.push("https://eventos.cmm.uchile.cl/bioinfo-diversidad/");
	// }, []);
	return (
		<>
			<Head>
				<title>Facultad de Ciencias Biológicas</title>
				<link rel="icon" href="/assets/img/favicon/logo.ico" />
			</Head>
			<iframe
				width="100%"
				height="100%"
				src="https://unmsm.edu.pe/"
				style={{ position: 'absolute', border: 'none' }}
			/>
		</>
	);
};

export default index;
