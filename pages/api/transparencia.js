import { BASE_PATH } from "../../utils/constants";

export async function getTransparencia2019() {
	try {
		//   const url = `${BASE_PATH}/noticias?_limit=4&_sort=fecha:DESC`;
		const url = `${BASE_PATH}/transparencias?ano_eq=2019&_sort=fecha:DESC`;
		const response = await fetch(url);
		const result = await response.json();
		var noticias = [];
		for (var i = 0; i < result.length; i++) {
			noticias.push(result[i]);
		}
		return noticias;
	} catch (error) {
		console.log(error);
		return [];
	}
}
export async function getTransparencia2020() {
	try {
		//   const url = `${BASE_PATH}/noticias?_limit=4&_sort=fecha:DESC`;
		const url = `${BASE_PATH}/transparencias?ano_eq=2020&_sort=fecha:DESC`;
		const response = await fetch(url);
		const result = await response.json();
		var noticias = [];
		for (var i = 0; i < result.length; i++) {
			noticias.push(result[i]);
		}
		return noticias;
	} catch (error) {
		console.log(error);
		return [];
	}
}
export async function getTransparencia2021() {
	try {
		//   const url = `${BASE_PATH}/noticias?_limit=4&_sort=fecha:DESC`;
		const url = `${BASE_PATH}/transparencias?ano_eq=2021&_sort=fecha:DESC`;
		const response = await fetch(url);
		const result = await response.json();
		var noticias = [];
		for (var i = 0; i < result.length; i++) {
			noticias.push(result[i]);
		}
		return noticias;
	} catch (error) {
		console.log(error);
		return [];
	}
}
