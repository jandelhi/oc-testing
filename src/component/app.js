import React from 'react'
import {render} from 'react-dom'
import Wine from './Wine.js'

const data = document.__CONTENT__;
render(<Wine info={data.wines} />, document.getElementById("root-wine"))

