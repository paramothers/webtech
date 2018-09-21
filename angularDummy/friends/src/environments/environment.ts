// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCeRjajgTSJWoto6q4JeZTodKGl1SRRG4o',
    authDomain: 'friends-4f9ea.firebaseapp.com',
    databaseURL: 'https://friends-4f9ea.firebaseio.com',
    projectId: 'friends-4f9ea',
    storageBucket: 'friends-4f9ea.appspot.com',
    messagingSenderId: '138250267136'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
