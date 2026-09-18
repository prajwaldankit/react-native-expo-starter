const expoConfig = require('eslint-config-expo/flat');
const { defineConfig } = require('eslint/config');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = defineConfig([
	expoConfig,
	{
		plugins: {
			prettier: eslintPluginPrettier
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto'
				}
			]
		}
	},
	eslintConfigPrettier,
	{
		ignores: ['node_modules/**', '.expo/**']
	}
]);
