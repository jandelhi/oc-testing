import React from 'react';
import {renderToString} from 'react-dom/server';
import Wine from './src/component/Wine.js'
//const wineInfo = require('./src/component/content/WineInformation.json') 
const wineInfo = require('./src/component/content/Wines.json') 

export const data = (context, callback) => {
  const { name } = context.params;
  const { staticPath } = context;

  const content = {};
  content.wines = wineInfo;
  const renderedApp = renderToString(<Wine info={wineInfo} path = {staticPath}/>);

  callback(null, {
    name,
    staticPath,
    data: JSON.stringify(content),
    path: JSON.stringify(context.staticPath),
    app: renderedApp
  });
};
