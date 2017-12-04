import React from 'react'
import {render} from 'react-dom'
import Wine from './Wine.js'

const data = document.__DATA__;
render(<Wine info={data.wines} />, document.getElementById("root-wine"))

