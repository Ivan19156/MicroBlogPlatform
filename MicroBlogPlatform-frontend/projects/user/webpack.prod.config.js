const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'user',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './projects/user/src/app/app.routes.ts',
  },
  shared: {
    // Shared dependencies
  },
});