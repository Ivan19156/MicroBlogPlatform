const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'admin', // Unique name for the remote module
  filename: 'remoteEntry.js', // Standard file name
  exposes: {
    './Module': './projects/admin/src/app/app.routes.ts', // Expose the routes file
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});