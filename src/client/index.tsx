import React from 'react'
import { App } from './app'
import { hydrate } from 'react-dom'

hydrate(<App />, document.getElementById('app'))
