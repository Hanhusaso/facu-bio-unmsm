import { BASE_PATH } from '../../utils/constants';

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
export async function getTransparencia2023() {
	try {
		const url = `${BASE_PATH}/transparencias?_where[0][ano_eq]=2023&_where[1][trasparencia_categoria.id]=2&_sort=fecha:DESC`;
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

export const comisiones = [
	{
		id : 1,
		titulo : "RESOLUCIÓN DECANAL-000771-2022-D-FCB",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/RESOLUCI%C3%93N+DECANAL-000771-2022-D-FCB.pdf"
	},
	{
		id : 2,
		titulo : "RESOLUCIÓN DECANAL-000762-2022-D-FCB",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/RESOLUCI%C3%93N+DECANAL-000762-2022-D-FCB.pdf"
	},
	{
		id : 3,
		titulo : "RESOLUCIÓN DECANAL-000759-2022-D-FCB",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/RESOLUCI%C3%93N+DECANAL-000759-2022-D-FCB.pdf"
	},
	{
		id : 4,
		titulo : "RESOLUCIÓN DECANAL-000592-2022-D-FCB",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/RESOLUCI%C3%93N+DECANAL-000592-2022-D-FCB.pdf"
	},
	{
		id : 5,
		titulo : "RESOLUCIÓN DECANAL-000590-2022-D-FCB",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/RESOLUCI%C3%93N+DECANAL-000590-2022-D-FCB.pdf"
	},
	{
		id : 6,
		titulo : "RESOLUCIÓN DECANAL-000578-2022-D-FCB",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/RESOLUCI%C3%93N+DECANAL-000578-2022-D-FCB.pdf"
	},
	{
		id : 7,
		titulo : "RESOLUCIÓN DECANAL-000573-2022-D-FCB",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/RESOLUCI%C3%93N+DECANAL-000573-2022-D-FCB.pdf"
	},
	{
		id : 8,
		titulo : "RESOLUCIÓN DECANAL-000428-2022-D-FCB",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/RESOLUCI%C3%93N+DECANAL-000428-2022-D-FCB.pdf"
	},
	{
		id : 9,
		titulo : "RD COORDINADOR ESTUDIOS GENERALES",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/RD+COORDINADOR+ESTUDIOS+GENERALES.pdf"
	},
	{
		id : 10,
		titulo : "2021 CONSULTIVA DE NORMAS Y DIRECTIVAS",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/2021+CONSULTIVA+DE+NORMAS+Y+DIRECTIVAS.pdf"
	},
	{
		id : 11,
		titulo : "2021 EVALUACIÓN DE ACTIVIDAD ACADÉMICA",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/2021+EVALUACI%C3%93N+DE+ACTIVIDAD+ACAD%C3%89MICA.pdf"
	},
	{
		id : 12,
		titulo : "2021 DAB CAPACITACIÓN PARA DOCENTES Y ESTUDIANTES",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/2021+DAB+CAPACITACI%C3%93N+PARA+DOCENTES+Y+ESTUDIANTES..pdf"
	},
	{
		id : 13,
		titulo : "2021 CONOCIMIENTO DE UN IDIOMA EXTRANJERO",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/2021+CONOCIMIENTO+DE+UN+IDIOMA+EXTRANJERO.pdf"
	},
	{
		id : 14,
		titulo : "2021 COMISIONES PERMANENTES AMPLIACIÓN",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/2021+COMISIONES+PERMANENTES+AMPLIACI%C3%93N.pdf"
	},
	{
		id : 15,
		titulo : "2021  PRODUCTOS QUÍMICOS FISCALIZADOS",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/2021++PRODUCTOS+QU%C3%8DMICOS+FISCALIZADOS.pdf"
	},
	{
		id : 16,
		titulo : "2021 COMISIÓN SEGUNDA ESPECIALIDAD",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/2021+COMISI%C3%93N+SEGUNDA+ESPECIALIDAD.pdf"
	},
	{
		id : 17,
		titulo : "2020 COMISIÓN EVAL DOC Y GDOS Y TITULOS",
		link: "https://biologia-unmsm.s3.us-east-2.amazonaws.com/comisiones/2020+COMISI%C3%93N+EVAL+DOC+Y+GDOS+Y+TITULOS.pdf"
	},
]