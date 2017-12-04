import React from 'react'
import {render} from 'react-dom'
import Wine from './Wine.js'

const content = document.__DATA__;
const path = document.__PATH__;
render(<Wine info={content.wines} path={path} />, document.getElementById("root-wine"))

