module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0
  },

  // overrides for node environment
  overrides: [
    {
      files: [
        'webpack.config.js', 'webpack.config.dev.js', 'webpack.config.prod.js'
      ],
      env: {
        node: true
      },
      rules: {
        '@typescript-eslint/no-var-requires': 0
      }
    }
  ]
}
