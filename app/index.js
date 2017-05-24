import React from 'react'
import { render } from 'react-dom'

import App from '../app/assets/components/App'


render(<App initialCenter={ {lng: -90.1056957, lat: 29.9717272} } />,
  document.getElementById('main'))
