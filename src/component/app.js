import React from 'react'
import {render} from 'react-dom'
import Wine from './Wine.js'

const content = document.__DATA__;

render(<Wine info={content.wines} />, document.getElementById("root-wine"))

