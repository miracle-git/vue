module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'camelcase': 'off',
    'valid-typeof': 'off',
    'no-sequences': 'off',
    'no-trailing-spaces': 'off',
    'operator-linebreak': 'off',
    'space-before-function-paren': 'off',
    'indent': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
