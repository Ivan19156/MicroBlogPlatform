const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'admin',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './projects/admin/src/app/app.routes.ts',
  },
  shared: {
    // Shared dependencies
  },
});