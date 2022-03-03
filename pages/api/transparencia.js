import { BASE_PATH } from "../../utils/constants";

export async function getTransparencia2019() {
	try {
		const url = `${BASE_PATH}/transparencias?_where[0][ano_eq]=2019&_where[1][trasparencia_categoria.id]=2&_sort=fecha:DESC`;
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
		const url = `${BASE_PATH}/transparencias?_where[0][ano_eq]=2020&_where[1][trasparencia_categoria.id]=2&_sort=fecha:DESC`;
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
		const url = `${BASE_PATH}/transparencias?_where[0][ano_eq]=2021&_where[1][trasparencia_categoria.id]=2&_sort=fecha:DESC`;
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
export async function getTransparencia2022() {
	try {
		const url = `${BASE_PATH}/transparencias?_where[0][ano_eq]=2022&_where[1][trasparencia_categoria.id]=2&_sort=fecha:DESC`;
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
export async function getDocumentosOficiales() {
	try {
		const url = `${BASE_PATH}/transparencias?trasparencia_categoria.nombre_eq=documentosOficiales&_sort=fecha:DESC`;
		const response = await fetch(url);
		const result = await response.json();
		var documentos = [];
		for (var i = 0; i < result.length; i++) {
			documentos.push(result[i]);
		}
		return documentos;
	} catch (error) {
		console.log(error);
		return [];
	}
}
