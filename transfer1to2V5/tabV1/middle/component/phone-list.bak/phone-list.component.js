
class PhoneListController {
    constructor() {
        var $injector = window.injector;
        var Phone = $injector.get('Phone');
        this.$location = $injector.get('$location');

        this.phones = Phone.query();
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


