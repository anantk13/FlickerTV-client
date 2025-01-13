import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import'; // Add this for import path validation

export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['dist', 'node_modules'], // Ensure node_modules is ignored
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' }, // Automatically detect React version
      'import/resolver': {
        node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] }, // Resolve file extensions
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/no-unresolved': 'error', // Ensure imports are resolved
      'import/extensions': ['error', 'always', { js: 'never', jsx: 'never' }],
    },
  },
];
