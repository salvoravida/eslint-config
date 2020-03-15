module.exports = {
  extends: ['react-app', 'airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  rules: {
    'func-names': ['error', 'always', { generators: 'never' }],
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: ['config-overrides.js', '**/*.test.js', '**/*.stories.js']
      }
    ],
    'import/no-unresolved': ['error', { ignore: ['react'] }],
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': ['error', { allow: ['_REQUEST', '_SUCCESS', '_ERROR'] }],
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': [1, { forbid: ['any'] }]
  }
};
