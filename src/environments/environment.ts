// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pusher: { key: 'c339b3daa9adbd8251a4', cluster: 'mt1' },
  auth0: {
    domain: 'dev-a8u7py4z.us.auth0.com',
    clientId: 'SL8NEse4gCoiSHzc6deoEv9BU9vMn8m9',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
