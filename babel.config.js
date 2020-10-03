module.exports = api => {
  console.log(api.env())
  const env = api.env()
  const client = env === 'client'
  console.log(`Client: ${client}`)
  const settings = {
    presets: [
      client
        ? [
            require.resolve('./babel/clientPreset.js'),
            {
              typescript: true
            }
          ]
        : [
            require.resolve('./babel/serverPreset.js'),
            {
              typescript: true
            }
          ]
    ]
  }
  console.log(JSON.stringify(settings, null, 2))
  return settings
}
