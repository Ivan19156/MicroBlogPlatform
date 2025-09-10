const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'user', // Unique name for the remote module
  filename: 'remoteEntry.js', // Standard file name
  exposes: {
    './Module': './projects/user/src/app/app.routes.ts', // Expose the routes file
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});