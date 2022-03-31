// export const BASE_PATH = 'https://biologiaadmin.unmsm.edu.pe';
export const BASE_PATH =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:1337'
		: 'https://biologiaadmin.unmsm.edu.pe';

export const months = [
	'enero',
	'febrero',
	'marzo',
	'abril',
	'mayo',
	'junio',
	'julio',
	'agosto',
	'septiembre',
	'octubre',
	'noviembre',
	'diciembre',
];
