import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const index = () => {
	const router = useRouter();

	useEffect(() => {
		router.push("https://eventos.cmm.uchile.cl/bioinfo-diversidad/");
	}, []);
	return (
		<div>
			<Head>
				<title>Facultad de Ciencias Biológicas</title>
				<link rel="icon" href="/assets/img/favicon/logo.ico" />
			</Head>
		</div>
	);
};

export default index;
