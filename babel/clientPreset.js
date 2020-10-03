module.exports = function clientPreset(options = {}) {
  const {
    modules = false,
    corejs = 2,
    shippedProposals = true,
    debug = false,
    useBuiltIns = 'usage',
    typescript = false,
    production = false,
    loose = true
  } = options

  const presets = [
    [
      require.resolve('@babel/preset-env'),
      {
        loose,
        modules,
        shippedProposals,
        useBuiltIns,
        corejs,
        targets: {
          browsers: production
            ? '>1%, not dead, not ie11, not op_mini all'
            : 'last 2 Chrome versions,'
        },
        debug
      }
    ]
  ]

  if (typescript) {
    presets.push(require.resolve('@babel/preset-typescript'))
  }

  const plugins = []

  return { presets, plugins }
}
