export class StaticData {
  constructor() {
    this.data = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];
  }

  all() {
    return this.data;
  }

  remove(item) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  get(id) {
    for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].id === parseInt(id)) {
        return this.data[i];
      }
    }
    return null;
  }
}
