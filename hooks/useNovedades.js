import React, { useEffect, useState } from "react";
import { BASE_PATH } from "../utils/constants";

const useNovedades = () => {
	const url = `${BASE_PATH}/novedades?_sort=fecha:DESC&_limit=4`;
	const [novedades, setNovedades] = useState({ data: null, loading: true, error: null });

	useEffect(() => {
		setNovedades({ data: null, loading: true, error: null });
		fetch(url)
			.then((resp) => resp.json())
			.then((data) => setNovedades({ loading: false, error: null, data }));
	}, [url]);

	return novedades;
};

export default useNovedades;
