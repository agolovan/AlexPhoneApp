(function () {

	'use strict';

	angular.
		module('phoneList').
		component('pagefooter', {
		controller: ['appResourcesService',
			  function PageFooterController(appResourcesService) {
			  	this.buildNumber = appResourcesService.getBuildNumber();
			  }
		],
		template: [
		  '<div class="pagefooter-wrapper">',
		  '<span class="pagefooter-text">{{$ctrl.buildNumber}} | <a href="http://www.msn.com" target="_blank" tabindex="-1">Terms of Service</a></span>',
		  '</div>'
		].join('')
	});
})();
