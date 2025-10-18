module.exports = [
  {
    files: ['**/*.js'], //only check js files
    rules: {
      semi: 'error', //force semicolons at the end of statements
      'no-unused-vars': 'warn', //warn about unused variables
    },
  },
];
