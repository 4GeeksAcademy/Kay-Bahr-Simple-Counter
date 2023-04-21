const macrosConfig = require('./babel-plugin-macros.config.js');

module.exports = function(api) {
  api.cache(true);
  
  const presets = [
    "@babel/preset-env",
    "@babel/preset-react"
  ];
  
  const plugins = [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ],
    [
      "macros",
      {
        ...macrosConfig
      }
    ]
  ];
  
  return {
    presets,
    plugins
  };
};
