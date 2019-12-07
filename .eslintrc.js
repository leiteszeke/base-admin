module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier/react'
  ],
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  plugins: ['babel'],
  rules: {
    quotes: ['error', 'single'],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'babel/no-unused-expressions': 'error',
    'no-unused-expressions': 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': 'warn',
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'none'
      }
    ]
  },
  globals: {
    window: 'readonly',
    navigator: 'readonly',
    process: 'readonly',
    console: 'readonly'
  }
};
