// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

// Get the default configuration
const defaultConfig = getDefaultConfig(__dirname);

/*
module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  config.resolver.assetExts.push('webp');
  config.resolver.sourceExts = ['js', 'jsx', 'ts', 'tsx'];

  return config;
})(); */ 


module.exports = {
    ...defaultConfig,
    resolver: {
      ...defaultConfig.resolver,
      sourceExts: [...defaultConfig.resolver.sourceExts, 'jsx'],
    },
  };

module.exports = defaultConfig;
