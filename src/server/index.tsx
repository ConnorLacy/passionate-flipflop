import React from 'react'
import ReactDOMServer from 'react-dom/server'
import express, { Request, Response, NextFunction } from 'express'

import { App } from '../client/app.jsx'

const app = express()
const PORT = 3000 || process.env.PORT

const handleRender = (req: Request, res: Response, next: NextFunction) => {
  const theApp: string = ReactDOMServer.renderToString(<App />)
  res.status(200).send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="app">${theApp}</div>
    <script src="/assets/main.js" type="application/javascript"></script>
  </body>
  </html>
  `)
}

app.use(express.static('dist'))
app.get('**', handleRender)
app.listen(PORT, () => {
  console.log(`Web server running on port: ${PORT}`)
})
