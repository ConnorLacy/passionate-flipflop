module.exports = function (options = {}) {
  const {
    version = 'current',
    modules = 'commonjs',
    corejs = 3,
    debug = false,
    useBuiltIns = 'entry',
    typescript = false
  } = options

  console.log(`Babel: Server config => ${options}`)

  const presets = [
    [
      require.resolve('@babel/preset-env'),
      {
        modules,
        useBuiltIns,
        corejs,
        targets: {
          node: version
        },
        debug
      }
    ]
  ]

  const plugins = [
    require.resolve('@babel/plugin-proposal-dynamic-import'),
    require.resolve('@babel/plugin-transform-modules-commonjs'),
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
      {
        loose: true
      }
    ]
  ]

  if (typescript) {
    presets.push(require.resolve('@babel/preset-typescript'))
  }

  return { presets, plugins }
}
