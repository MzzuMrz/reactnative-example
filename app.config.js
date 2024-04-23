import 'dotenv/config';

const appVariantsConfig = {
  exampleTINE: {
    color: '#22D69D',
    backgroundColor: '#FFFFFF',
    appName: 'exampletine',
  },
  exampleRELIEF: {
    color: '#33BFEB',
    backgroundColor: '#FFFFFF',
    appName: 'exampleRelief',
  },
};

export default ({ config }) => {
  const variantConfig = appVariantsConfig[process.env.APP] || {};

  const appConfig = {
    ...config,
    extra: {
      ...config.extra,
      appVariant: process.env.APP,
      ...variantConfig,
    },
    updates: {
      url: "https://u.expo.dev/56fe9dd0-3718-4b11-98bb-8390534bedac"
    },
    // Remove the root level runtimeVersion as instructed
    android: {
      runtimeVersion: "1.0.0"
    },
    ios: {
      jsEngine: "jsc",
      runtimeVersion: {
        policy: "appVersion"
      }
    }
  };

  // Explicit removal of the root level runtimeVersion, if it exists
  delete appConfig.runtimeVersion;

  return appConfig;
};
