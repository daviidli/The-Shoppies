module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
	],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'import/extensions': ['error', {
			js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
		}],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		indent: ['error', 'tab'],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	overrides: [
		{
			files: [
				'**/*.spec.ts',
				'**/*.spec.tsx',
			],
			env: {
				jest: true,
			},
		},
	],
};
