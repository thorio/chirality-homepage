import "../../lib/types/User";

const RemoteUser = "Remote-User";
const RemoteGroups = "Remote-Groups";
const RemoteEmail = "Remote-Email";
const RemoteName = "Remote-Name";

/**
 * @param {import("express").Request} req
 * @returns {User}
 */
export function getUser(req) {
	let user = req.header(RemoteUser);
	let groups = req.header(RemoteGroups) || "";

	if (!user) {
		throw new Error("Remote-User header is not set");
	}

	return {
		user: req.header(RemoteUser),
		name: req.header(RemoteName),
		email: req.header(RemoteEmail),
		groups: groups.split(","),
	};
}
