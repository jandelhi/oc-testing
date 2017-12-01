import React from 'react';
import {renderToString} from 'react-dom/server';
import Wine from './src/component/Wines.js'

export const data = (context, callback) => {
  const { name } = context.params;
  const { staticPath } = context;

  const renderedApp = renderToString(<Wine />);

  callback(null, {
    name,
    staticPath,
    app: renderedApp
  });
};
