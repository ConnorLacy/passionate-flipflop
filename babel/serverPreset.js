module.exports = function serverPreset(_api, options = {}) {
  const {
    version = 'current',
    modules = false,
    corejs = 2,
    debug = false,
    useBuiltIns = 'entry',
    typescript = false
  } = options

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
    ],
    require.resolve('@babel/preset-react')
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

  const presetsAndShit = { presets, plugins }
  console.log(JSON.stringify(presets, null, 2))
  console.log(options)
  return presetsAndShit
}
