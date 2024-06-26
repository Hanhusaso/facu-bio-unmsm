import { BASE_PATH } from '../../utils/constants';

export async function getDocenteByIdInformacionAcademicaApi(
	formacion_academica
) {
	try {
		// const url = `${BASE_PATH}/docentes/?formacion_academica=${formacion_academica}`;
		const url = `${BASE_PATH}/docentes/?formacion_pogrados.nombre_in=${formacion_academica}&_sort=nombre:ASC`;
		const response = await fetch(url);
		const result = await response.json();
		return result;
	} catch (error) {
		console.log(error);
		return [];
	}
}
