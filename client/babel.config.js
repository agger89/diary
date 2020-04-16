const fs = require('fs')
const path = require('path')
const modules = fs.readdirSync(path.join(__dirname, 'src')).map(value => {
  return path.basename(value, path.extname(value))
})

module.exports = {
  presets: ['next/babel'],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    [
      'babel-plugin-module-resolver',
      {
        alias: modules.reduce(
          (prev, cur) => ({
            ...prev,
            [cur]: `./src/${cur}`,
          }),
          {},
        ),
      },
    ],
    [
      "styled-components",
      {
        "ssr": true,
        "displayName": true,
        "preprocess": false
      }
    ],
    'babel-plugin-graphql-tag',
  ],
}
