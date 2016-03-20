(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .run(runBlock, function($rootScope){
    	$rootScope.title = "Slack4Health";
    });

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
