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
	return {
		user: req.header(RemoteUser),
		name: req.header(RemoteName),
		email: req.header(RemoteEmail),
		groups: req.header(RemoteGroups).split(","),
	};
}
