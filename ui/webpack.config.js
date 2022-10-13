const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'flight',

  exposes: {
    // './Component': './projects/flight/src/app/app.component.ts',
    './Home': './projects/flight/ui/src/app/home/home.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
