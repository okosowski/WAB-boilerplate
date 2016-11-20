/** @ngInject */
function testRoutConfig($stateProvider) {
  $stateProvider
    .state('app.test', {
      url: 'test',
      views: {
        content: {component: 'mrTest'}
      },
      redirectTo: 'app.test.viewOne'
    })
    .state('app.test.viewOne', {
      url: '/viewone',
      views: {
        test: {component: 'mrViewOne'}
      }
    })
    .state('app.test.viewTwo', {
      url: '/viewtwo',
      views: {
        test: {component: 'mrViewTwo'}
      }
    })
  ;
}

export default testRoutConfig;
