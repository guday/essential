export default [
  {
    state: 'tab.home',
    url: '/home',
    views: {
      'tab-home': {
        template: `<home-directive></home-directive>`
      }
    }
    // url: '/phones',
    // template: '<h1>phone list middle</h1><phone-list></phone-list>'
  },
  {
    state: 'tab.list',
    url: '/list',
    views: {
      'tab-list': {
        template: `<list-directive></list-directive>`
      }
    }
  },
  {
    state: 'tab.detail',
    url: '/detail/:id',
    views: {
      'tab-list': {
        template: `<list-detail-directive></list-detail-directive>`
      }
    }
  }
]

//when('/phones', {
//    template: '<h1>phone list</h1><phone-list></phone-list>'
//}).

