import { parse } from "yaml";
import fs from "fs";

/**
 * @typedef {Object} Config
 * @property {number} port
 * @property {string} logoutUrl
 * @property {ServiceConfig[]} services
 */

/**
 * @typedef {Object} ServiceConfig
 * @property {string} name
 * @property {string} group
 * @property {string} icon
 * @property {string} url
 */

/** @type {Config} */
let config;

/**
 * @returns {Config}
 */
export function getConfig() {
	return config ?? (config = loadConfig());
}

function loadConfig() {
	const workdir = process.cwd();
	let yaml;

	if (fs.existsSync(`${workdir}/config.yaml`)) {
		yaml = fs.readFileSync(`${workdir}/config.yaml`);
	} else {
		yaml = fs.readFileSync(`${workdir}/default.config.yaml`);
	}

	return parse(yaml.toString());
}
