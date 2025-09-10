const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  remotes: {
    // You'll need to update these URLs for your production environment
    // e.g., "user": "user@https://your-domain.com/user/remoteEntry.js"
    "user": "user@http://localhost:4201/remoteEntry.js",
    "admin": "admin@http://localhost:4202/remoteEntry.js"
  },
  shared: {
    // Shared dependencies should be configured here
  },
});