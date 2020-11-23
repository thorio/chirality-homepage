import { getConfig } from "./configurationService";

export function getServices(user) {
	return getConfig().services
		.filter(s => !s.group || user.groups.includes(s.group))
		.map(s => ({
			url: s.url,
			name: s.name,
			icon: s.icon,
		}));
}
