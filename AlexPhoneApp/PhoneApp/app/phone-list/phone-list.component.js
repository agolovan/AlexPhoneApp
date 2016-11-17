'use strict';
// Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', '$http', '$rootScope',
        function PhoneListController(Phone, $http, $rootScope) {
            var self = this;
            this.orderProp = 'age';
            //this.phones = Phone.myquery;
            this.message = "Phone App";
            this.initNumber = 5;
            this.path = location.href;
		    $http.get('phones/phones.json').then(function (response) {
            	$rootScope.phones = self.phones = response.data;
            	self.maxNumber = response.data.length - 1;
            });
        }
    ]
});
