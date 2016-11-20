/** @ngInject */
export default function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  console.log('log from app routes');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app',
      run: () => {
        console.log('run from abstrach app')
      }
    });
}
