const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig('node_modules/firebase/app/dist/esm/index.esm2017.js');

defaultConfig.resolver.assetExts.push("cjs");

module.exports = defaultConfig;