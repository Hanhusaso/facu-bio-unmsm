export default function isPresentCookie(CookieName) {
	let arrayCookie = document.cookie.split(";");
	for (let i = 0; i < arrayCookie.length; i++) {
		if (arrayCookie[i].indexOf(CookieName) > -1) {
			return true;
		}
	}
	return false;
}
