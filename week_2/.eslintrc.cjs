/* eslint-env node */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/vue3-essential', 'standard', '@vue/prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.vue']
      }
    }
  },
  plugins: ['vue'],
  rules: {
    semi: ['error', 'always'],
    'no-console': 'off'
  }
};
