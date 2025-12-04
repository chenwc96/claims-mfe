const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'claimMfe',

  // ensure the remoteEntry filename is predictable
  filename: 'remoteEntry.js',

  // force webpack to expose a global var that Capacitor's WebView can access
  library: { type: 'var', name: 'claimMfe' },

  exposes: {
    './ClaimModule': './src/app/claim/claim.module.ts',
  },

  // optional: avoid running shared initializers that sometimes break in mobile webviews
  // (only if you experience init-related errors after this change)
  // skipInitializers: true,
  skipInitializers: true,

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});

