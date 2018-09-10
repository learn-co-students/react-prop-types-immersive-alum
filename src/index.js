import React from 'react'
import ReactDom from 'react-dom'

import Order from './Order'

ReactDom.render(
  <Order
    scoops={['vanilla', 'strawberry']}
  />,
  document.getElementById('root')
)