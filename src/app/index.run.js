(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
