import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import isPresentCookie from "../helpers/isPresentCookie";
import visitsCounterUpdate from "../helpers/visitsCounterUpdate";
import { BASE_PATH } from "../utils/constants";

const useNovedadesPage = () => {
	const { query } = useRouter();
	const [novedad, setNovedad] = useState({ data: null, loading: true });

	function NovedadesResponseAndCounter(data) {
		setNovedad({ data: data[0], loading: false });
		if (!isPresentCookie(`noticia${data[0].id}`)) {
			document.cookie = `noticia${data[0].id}=visited`;
			visitsCounterUpdate(`${BASE_PATH}/novedades/${data[0].id}`, data[0].visitas);
		}
	}

	useEffect(() => {
		if (!query.titulo) {
			return;
		}
		fetch(`${BASE_PATH}/novedades?slug=${query.titulo}`)
			.then((resp) => resp.json())
			.then((data) => NovedadesResponseAndCounter(data));
		console.log("Se ejecuta la consulta");
	}, [query]);

	return novedad;
};

export default useNovedadesPage;
