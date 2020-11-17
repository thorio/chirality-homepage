/* eslint-env node */
module.exports = {
	"root": true,
	"env": {
		"browser": true,
		"es2020": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/vue3-essential",
	],
	"parserOptions": {
		"sourceType": "module",
		"parser": "babel-eslint",
	},
	"rules": {
		"require-atomic-updates": "warn",
		"no-unused-vars": "warn",
		"no-useless-escape": "warn",
		"no-await-in-loop": "warn",
		"dot-location": ["warn", "property"],
		"semi": "warn",
		"no-restricted-globals": ["error", "status"],
		"comma-dangle": ["warn", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
		}],
		"no-constant-condition": ["warn", {
			"checkLoops": false,
		}],
		"no-var": "error",
		"quotes": "warn",
		"no-invalid-this": "error",
		"prefer-arrow-callback": "warn",
	},
};
