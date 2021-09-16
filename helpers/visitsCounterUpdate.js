export default function visitsCounterUpdate(url, visitsCurrent) {
	const params = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ visitas: Number(visitsCurrent) + 1 }),
	};
	fetch(url, params);
}
