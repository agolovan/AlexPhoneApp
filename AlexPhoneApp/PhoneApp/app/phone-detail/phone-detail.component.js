'use strict';
// Register `phoneDetail` component, along with its associated controller and template
angular.module('phoneDetail').component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', '$rootScope',
        function PhoneDetailController($routeParams, Phone, $rootScope) {
            var self = this;
            //TODO: Make another call for phones if $rootScope.phones is undefined
            var param = $routeParams.phoneId;
            if (!isNaN(parseInt(param, 10))) {
                param = $rootScope.phones[param].id;
            }
            self.phone = Phone.get({ phoneId: param }, function (phone) {
                self.setImage(phone.images[0]);
            });
            self.setImage = function setImage(imageUrl) {
                self.mainImageUrl = imageUrl;
            };
        }
    ]
});
