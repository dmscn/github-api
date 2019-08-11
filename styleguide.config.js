module.exports = {
  components: 'src/components/**/[A-Z]*.tsx',
  skipComponentsWithoutExample: true,
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
}
