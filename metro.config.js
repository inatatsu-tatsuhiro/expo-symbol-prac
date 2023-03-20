const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);

module.exports = {
  ...config,
  resolver: {
    extraNodeModules: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
};