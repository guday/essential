class PhoneListController {
    constructor() {
        var $injector = window.injector;
        this.$location = $injector.get('$location');

        this.phones = [
            {
                "age": 0,
                "id": "motorola-xoom-with-wi-fi",
                "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
                "name": "Motorola XOOM\u2122 with Wi-Fi",
                "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
            },
            {
                "age": 1,
                "id": "motorola-xoom",
                "imageUrl": "img/phones/motorola-xoom.0.jpg",
                "name": "MOTOROLA XOOM\u2122",
                "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
            },
            {
                "age": 2,
                "carrier": "AT&T",
                "id": "motorola-atrix-4g",
                "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
                "name": "MOTOROLA ATRIX\u2122 4G",
                "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
            },
            {
                "age": 3,
                "id": "dell-streak-7",
                "imageUrl": "img/phones/dell-streak-7.0.jpg",
                "name": "Dell Streak 7",
                "snippet": "Introducing Dell\u2122 Streak 7. Share photos, videos and movies together. It\u2019s small enough to carry around, big enough to gather around."
            }];

        this.orderProp = 'age';

        this.onClickPhone = (phone) => {
            this.$location.path("/phones/" + phone.id)
        }
    }

    onClickPageOnly() {
        this.$location.path('pageOnly')
    }
}

var PhoneListDirective = function () {
    return {
        restrict: "E",
        template: require('./phone-list.component.html'),
        controller: PhoneListController,
        controllerAs: "$ctrl",
        bindToController: true
    }
};

export {PhoneListController, PhoneListDirective};


