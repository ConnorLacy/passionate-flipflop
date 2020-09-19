import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express from 'express'

import App from '../client/app'

const app = express()
const PORT = 3000 || process.env.PORT

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />)

  const indexFile = path.resolve('./dist/index.html')
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong: ', err)
      return res.status(500).send('Oops, something went wrong')
    }

    return res.send(data.replace('<div id="root"></div>', `<div id="root">${app}</div>`))
  })
})

app.use(express.static('./dist'))

app.listen(PORT, () => {
  console.log(`Web server running on port: ${PORT}`)
})
