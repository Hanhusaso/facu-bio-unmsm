import { BASE_PATH } from "../../utils/constants";

export async function getInformacionesAcademicasApi(recursos, escuelas) {
	try {
		var query = "";

		if (recursos.length != 0) {
			for (var i = 0; i < recursos.length; i++) {
				query = query + `&_where[_or][0][recurso]=${recursos[i]}`;
			}
		}

		if (escuelas.length != 0) {
			for (var i = 0; i < escuelas.length; i++) {
				query = query + `&_where[_or][0][escuela]=${escuelas[i]}`;
			}
		}

		const url = `${BASE_PATH}/informacion-academicas?_sort=id:DESC${query}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return null;
	}
}

export async function getInformacionAcademicaByUrlApi(url_informacion_academica) {
	try {
		const url = `${BASE_PATH}/informacion-academicas/?url_nombre=${url_informacion_academica}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function getHorarioByIdInformacionAcademicaApi(id_informacion_academica) {
	try {
		const url = `${BASE_PATH}/horarios/?informacion_academica=${id_informacion_academica}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function getPlanEstudiosByIdInformacionAcademicaApi(id_informacion_academica) {
	try {
		const url = `${BASE_PATH}/plan-estudios/?informacion_academica=${id_informacion_academica}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function getSyllabusByIdInformacionAcademicaApi(id_informacion_academica, palabra) {
	try {
		var query = "";

		if (palabra != "") {
			query =
				query +
				`&_where[_or][0][nombre_contains]=${palabra}&_where[_or][1][docente_contains]=${palabra}`;
			// query = query + `&nombre_tramite_contains=${palabra}`;
		}

		const url = `${BASE_PATH}/syllabi/?informacion_academica=${id_informacion_academica}${query}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function getSyllabuByUrlApi(url_syllabu) {
	try {
		const url = `${BASE_PATH}/syllabi/?url_nombre=${url_syllabu}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function getDocenteByIdInformacionAcademicaApi(
	limit,
	start,
	id_informacion_academica,
	palabra
) {
	try {
		const limitItems = `_limit=${limit}`;
		const startItems = `_start=${start}`;
		var query = "";

		if (palabra != "") {
			// query = query + `&_where[_or][0][nombre_contains]=${palabra}&_where[_or][1][fk_centro_de_estudios.centro_contains]=${palabra}`
			query = query + `&nombre_contains=${palabra}`;
		}

		const url = `${BASE_PATH}/docentes/?informacion_academica=${id_informacion_academica}&${limitItems}&${startItems}${query}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return [];
	}
}

export async function countDocenteByIdInformacionAcademicaApi(id_informacion_academica, palabra) {
	try {
		var query = "";

		if (palabra != "") {
			// query = query + `&_where[_or][0][nombre_contains]=${palabra}&_where[_or][1][fk_centro_de_estudios.centro_contains]=${palabra}`
			query = query + `&nombre_contains=${palabra}`;
		}

		const url = `${BASE_PATH}/docentes/count?informacion_academica=${id_informacion_academica}${query}`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return [];
	}
}
