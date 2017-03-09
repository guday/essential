import router from './app.router.js';

export default function routing($stateProvider) {
  for (let i in router) {
    let item = router[i];
    // $routeProvider.when(item.url, {
    //   template: item.template
    // })
    //$stateProvider.state(router[i].state, router[i])

    $stateProvider.state(item.state, {
      url: item.url,
      views: item.views
    })
  }

}

routing.$inject = ['$stateProvider'];
