import React from 'react'
import { App } from '../components/app'
import { hydrate } from 'react-dom'

hydrate(<App />, document.getElementById('app'))
