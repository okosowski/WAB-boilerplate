/** @ngInject */
function dashboardRoutConfig($stateProvider) {
  $stateProvider
    .state('app.dashboard', {
      url: 'dashboard',
      views: {
        'content': {
          component: 'dashboard'
        }
      }
    });
}

export default dashboardRoutConfig;
