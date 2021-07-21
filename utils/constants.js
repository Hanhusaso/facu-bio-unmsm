// export const BASE_PATH = "http://localhost:1337";
export const BASE_PATH =
	process.env.NODE_ENV === "development" ? "http://localhost:1337" : "http://18.116.174.43:1337";
