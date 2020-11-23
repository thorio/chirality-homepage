export function getUser() {
	return fetch("/api/user")
		.then((res) => res.json());
}

export function getServices() {
	return fetch("/api/services")
		.then((res) => res.json());
}
